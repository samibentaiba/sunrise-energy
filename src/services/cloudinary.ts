import axios from "axios";

export async function uploadImageToCloudinary(
  file: File,
  folder: string,   // Make 'folder' required and move it before the optional 'name'
  name?: string     // Keep 'name' optional
): Promise<string> {
  const formData = new FormData();
  if (!file) throw new Error("No file to upload");
  if (!folder) throw new Error("No folder to upload");
  formData.append("file", file);
  formData.append("folder", folder);
  if (name) formData.append("name", name);

  try {
    const response = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const secureUrl = response.data.secure_url;
    if (!secureUrl) {
      throw new Error("No URL returned from upload");
    }
    return secureUrl;
  } catch (error: unknown) {
    // Using 'unknown' here instead of 'any' is a safer option, and you can refine the type further.
    if (error instanceof Error) {
      throw new Error(`Upload failed: ${error.message}`);
    }
    throw new Error("Upload failed. Please try again.");
  }
}
