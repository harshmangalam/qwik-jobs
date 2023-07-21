import crypto from "crypto";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

export const fileUpload = async (file: File) => {
  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("cloud_name", cloudName);
  formdata.append("upload_preset", uploadPreset);

  const endpoint =
    "https://api.cloudinary.com/v1_1/" + cloudName + "/auto/upload";

  const res = await fetch(endpoint, {
    body: formdata,
    method: "post",
  });

  const data = await res.json();

  return data;
};

export const destroyBlob = async (publicId: string) => {
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
  const signature = generateSHA1(generateSignature(publicId, apiSecret));
  const timestamp = new Date().getTime();
  const res = await fetch(endpoint, {
    body: JSON.stringify({
      public_id: publicId,
      signature: signature,
      api_key: apiKey,
      timestamp: timestamp,
    }),
    method: "post",
  });
  return res.json();
};
