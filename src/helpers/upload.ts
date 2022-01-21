export const UPLOAD_FILE = async (file: any) => {
  if (!file) return;
  try {
    const upload = new FormData();
    upload.append("file", file, file?.name || "logo");

    const requestOptions = {
      method: "POST",
      body: upload,
    };

    const response = await fetch(
      "https://apis.resumaps.com/upload",
      requestOptions
    );
    
    const [path] = await response.json();
    return path;
  } catch (error) {
    console.error(error);
  }
  return;
};
