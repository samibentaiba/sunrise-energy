import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to reset the sequences
export async function resetSequences() {
  await prisma.$executeRaw`
    DO $$
    BEGIN
      -- Reset cloudinaryimages_id_seq
      IF EXISTS (SELECT 1 FROM pg_class WHERE relname = 'cloudinaryimages_id_seq') THEN
        PERFORM setval('cloudinaryimages_id_seq', 1, true);
      END IF;

      -- Reset products_id_seq
      IF EXISTS (SELECT 1 FROM pg_class WHERE relname = 'products_id_seq') THEN
        PERFORM setval('products_id_seq', 1, false);
      END IF;

      -- Reset blogs_id_seq
      IF EXISTS (SELECT 1 FROM pg_class WHERE relname = 'blogs_id_seq') THEN
        PERFORM setval('blogs_id_seq', 1, false);
      END IF;

      -- Reset users_id_seq
      IF EXISTS (SELECT 1 FROM pg_class WHERE relname = 'users_id_seq') THEN
        PERFORM setval('users_id_seq', 1, false);
      END IF;

      -- Reset passwordresettokens_id_seq
      IF EXISTS (SELECT 1 FROM pg_class WHERE relname = 'passwordresettokens_id_seq') THEN
        PERFORM setval('passwordresettokens_id_seq', 1, false);
      END IF;

      -- Reset forgotpasswordrequests_id_seq
      IF EXISTS (SELECT 1 FROM pg_class WHERE relname = 'forgotpasswordrequests_id_seq') THEN
        PERFORM setval('forgotpasswordrequests_id_seq', 1, false);
      END IF;
    END $$;
  `;
  console.log("Sequences reset.");
}

// Function to clear the data from the tables
export async function clearDatabase() {
  try {
    // Clear all data in your tables (order matters to avoid foreign key constraint violations)
    await prisma.cloudImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.blog.deleteMany();
    await prisma.user.deleteMany();
    await prisma.passwordResetToken.deleteMany();
    await prisma.forgotPasswordRequest.deleteMany();

    console.log("Database cleared.");
  } catch (error) {
    console.error("Error clearing database:", error);
  }
}
