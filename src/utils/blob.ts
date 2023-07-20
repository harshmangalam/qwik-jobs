export const fileUpload = async (file: File) => {
  console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
  console.log(import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
  formdata.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  const endpoint =
    "https://api.cloudinary.com/v1_1/" +
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME +
    "/auto/upload";

  const res = await fetch(endpoint, {
    body: formdata,
    method: "post",
  });

  const data = await res.json();

  return data;
};
