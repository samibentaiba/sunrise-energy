// lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});
const handleCloudinaryError = (error: unknown, action: string): never => {
  if (error instanceof Error) {
    throw new Error(`Failed to ${action}: ${error.message}`);
  } else {
    throw new Error(`An unknown error occurred while trying to ${action}.`);
  }
};
export { cloudinary, handleCloudinaryError };
