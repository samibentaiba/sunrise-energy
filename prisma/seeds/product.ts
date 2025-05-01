// seeders/productSeeder.ts
import { PrismaClient, Status } from "@prisma/client";
import { seedWithImages } from "@/utils/imageseeder";

const prisma = new PrismaClient();

export default async function productSeeder(prisma: PrismaClient) {
  await seedWithImages(prisma, {
    entityName: "products",
    csvPath: "data/products.csv",
    cloudinaryFolder: "products_images",
    getImageUrls: (row: { productImages: string }) =>
      JSON.parse(row.productImages),
    extractData: (row: {
      name: string;
      price: string;
      stock: string;
      status: string;
      content: string;
      availableAt: string;
    }) => ({
      name: row.name,
      price: parseFloat(row.price),
      stock: parseInt(row.stock),
      content: row.content,
      status: row.status as Status, // Ensuring 'status' is casted to the Status enum
      availableAt: new Date(row.availableAt),
    }),
    createEntity: (
      prisma: PrismaClient,
      data: {
        name: string;
        price: number;
        content: string;
        stock: number;
        status: Status;
        availableAt: Date;
      }
    ) => prisma.product.create({ data }),
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
          productId: imageData.entityId, // Ensure productId is linked correctly
        },
      }),
  });
}
