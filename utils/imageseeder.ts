// utils/seedWithImages.ts
import { PrismaClient, Status } from "@prisma/client";
import path from "path";
import { urlToCloudinary } from "@/utils/cloudinary";
import { seedFromCsv } from "@/utils/sfcsv";

interface SeedConfig {
  entityName: string;
  csvPath: string;
  cloudinaryFolder: string;
  extractData: (row: any) => Omit<any, "images">;
  getImageUrls: (row: any) => string[];
  createEntity: (prisma: PrismaClient, data: any) => Promise<any>;
  linkImage: (prisma: PrismaClient, imageData: {
    publicId: string;
    fullUrl: string;
    name: string;
    entityId: string;
  }) => Promise<any>;
}

export async function seedWithImages(prisma: PrismaClient, config: SeedConfig) {
  console.log(`🌱 Seeding ${config.entityName}...`);

  const csvFilePath = path.resolve(config.csvPath);

  const processRow = async (row: any) => {
    let imageUrls: string[];

    try {
      imageUrls = config.getImageUrls(row);
    } catch {
      try {
        const fixed = row.blogImages?.replace(/^"(.*)"$/, "$1").replace(/\\"/g, '"');
        imageUrls = JSON.parse(fixed);
      } catch {
        throw new Error(`❌ Failed to parse images field: ${JSON.stringify(row)}`);
      }
    }

    const entityData = config.extractData(row);
    const entity = await config.createEntity(prisma, entityData);

    for (const imageUrl of imageUrls) {
      try {
        const uploadedImage = await urlToCloudinary(imageUrl, config.cloudinaryFolder);
        if (uploadedImage) {
          await config.linkImage(prisma, {
            publicId: uploadedImage.publicId,
            fullUrl: uploadedImage.secure_url,
            name: uploadedImage.publicId.split("/").pop() || "default_image_name",
            entityId: entity.id,
          });
        } else {
          console.error("❌ Uploaded image is undefined:", imageUrl);
        }
      } catch (err) {
        console.error("❌ Error uploading image:", imageUrl, err);
      }
    }
  };

  await seedFromCsv(prisma, null, csvFilePath, "", processRow);

  console.log(`✅ Seeded ${config.entityName}.`);
}
