export { destroyBlob } from "~/lib/cloudinary";
const cloudName = process.env.CLOUDINARY_CLOUD_NAME as string;
const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET as string;

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
