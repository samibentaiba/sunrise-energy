
import { Readable } from "stream";
import { cloudinary, handleCloudinaryError } from "@/config/cloudinary";

/**
 * Uploads an image (from URL or buffer) to Cloudinary and returns the secure URL and public ID.
 *
 * @param imageData - The image URL or buffer to upload
 * @param folder - The folder in Cloudinary to store the image (default is 'product_images')
 * @returns A promise that resolves with the uploaded image details (secure URL and public ID)
 */
export const urlToCloudinary = async (
  imageData: string | Buffer,
  folder: string = "images"
): Promise<{ secure_url: string; publicId: string } | undefined> => {
  try {
    if (typeof imageData === "string" && imageData.startsWith("http")) {
      // If it's a URL, upload directly
      const result = await cloudinary.uploader.upload(imageData, { folder });
      if (!result) {
        throw new Error("No result returned from Cloudinary.");
      }
      return {
        secure_url: result.secure_url, // URL to access the image
        publicId: result.public_id, // Public ID to identify the image
      };
    } else if (Buffer.isBuffer(imageData)) {
      // If it's a buffer, upload using upload_stream
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) {
            handleCloudinaryError(error, "upload image");
            return; // Prevent further execution if there's an error
          }
          if (!result) {
            throw new Error("No result returned from Cloudinary.");
          }
          return {
            secure_url: result.secure_url,
            publicId: result.public_id,
          };
        }
      );

      const readable = Readable.from(imageData);
      readable.pipe(stream); // Pipe the buffer to the upload stream
    } else {
      throw new Error(
        "Invalid image data type. Expected a URL string or Buffer."
      );
    }
  } catch (error: unknown) {
    handleCloudinaryError(error, "upload image");
    return undefined; // TypeScript expects return to be consistent, even if not reached
  }
};

export const bufferToCloudinary = async (
  imageData: Buffer,
  folder: string = "images",
  name?: string
): Promise<{ secure_url: string; publicId: string } | undefined> => {
  try {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder,
          public_id: name, // optional name for the file
        },
        (error, result) => {
          if (error) {
            handleCloudinaryError(error, "upload image");
            return reject(error);
          }
          if (!result) {
            return reject(new Error("No result returned from Cloudinary."));
          }
          resolve({
            secure_url: result.secure_url,
            publicId: result.public_id,
          });
        }
      );

      const readable = Readable.from(imageData);
      readable.pipe(stream);
    });
  } catch (error: unknown) {
    handleCloudinaryError(error, "upload image");
    return undefined;
  }
};
/**
 * Retrieves the details of an image from Cloudinary by its public ID.
 *
 * @param publicId - The Cloudinary public ID of the image
 * @returns A promise that resolves with the image details (secure URL, width, height, etc.)
 */
export const getImageFromCloudinary = async (
  publicId: string
): Promise<any | undefined> => {
  try {
    const result = await cloudinary.api.resource(publicId);
    return result;
  } catch (error: unknown) {
    handleCloudinaryError(error, "retrieve image details");
    return undefined; // Ensuring return is consistent
  }
};

/**
 * Deletes an image from Cloudinary by its public ID.
 *
 * @param publicId - The Cloudinary public ID of the image to delete
 * @returns A promise that resolves with a confirmation message of the deletion result
 */
export const deleteImageFromCloudinary = async (
  publicId: string
): Promise<string | undefined> => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result.result; // Return the deletion result, e.g., 'ok'
  } catch (error: unknown) {
    handleCloudinaryError(error, "delete image");
    return undefined; // Ensuring return is consistent
  }
};

/**
 * Lists all images in a specific folder on Cloudinary.
 *
 * @param folder - The folder name in Cloudinary to list images from
 * @returns A promise that resolves with an array of image details in the specified folder
 */
export const listImagesInFolder = async (
  folder: string
): Promise<any[] | undefined> => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: folder,
    });
    return result.resources; // Return the list of image details
  } catch (error: unknown) {
    handleCloudinaryError(error, "list images in folder");
    return undefined; // Ensuring return is consistent
  }
};
