// seeders/blogSeeder.ts
import { PrismaClient, Status } from "@prisma/client";
import { seedWithImages } from "@/utils/imageseeder";

const prisma = new PrismaClient();

export default async function blogSeeder(prisma: PrismaClient) {
  await seedWithImages(prisma, {
    entityName: "blogs",
    csvPath: "data/blogs.csv",
    cloudinaryFolder: "blogs_images",
    getImageUrls: (row: { blogImages: string }) => JSON.parse(row.blogImages),
    extractData: (row: { title: string; content: string; status: string }) => ({
      title: row.title,
      content: row.content,
      status: row.status as Status, // Ensuring 'status' is casted to the Status enum
    }),
    createEntity: (
      prisma: PrismaClient,
      data: { title: string; content: string; status: Status }
    ) => prisma.blog.create({ data }),
    linkImage: (
      prisma: PrismaClient,
      imageData: {
        publicId: string;
        fullUrl: string;
        name: string;
        entityId: string;
      }
    ) =>
      prisma.cloudImage.create({
        data: {
          publicId: imageData.publicId,
          fullUrl: imageData.fullUrl,
          name: imageData.name,
          blogId: imageData.entityId, // Ensure blogId is linked correctly
        },
      }),
  });
}
