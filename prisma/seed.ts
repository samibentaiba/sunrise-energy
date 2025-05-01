import { PrismaClient } from "@prisma/client";
import productSeeder from "./seeds/product";
import userSeeder from "./seeds/user";
import blogSeeder from "./seeds/blog";
import { clearDatabase, resetSequences } from "@/utils/removedb"; // Import reset helper
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding started...");

  // Run individual seeders sequentially
  await userSeeder(prisma); // Seed users
  await productSeeder(prisma); // Seed products
  await blogSeeder(prisma); // Seed blogs

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
