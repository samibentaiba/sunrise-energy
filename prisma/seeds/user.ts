import { hashPassword } from '@/utils/password';
import { seedFromCsv } from '@/utils/sfcsv';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto'; // Node built-in UUID generator
import path from 'path';

const prisma = new PrismaClient();

async function userSeeder(prisma: PrismaClient) {
  console.log('🧑‍💻 Seeding users...');

  const csvFilePath = path.resolve('data/users.csv');

  const processRow = async (row: any) => {
    const { email, username, password, theme } = row;

    return {
      id: randomUUID(), // Generate UUID
      email,
      username,
      password: await hashPassword(password),
      theme, // Expected to be one of: 'light', 'dark', 'system'
    };
  };

  await seedFromCsv(prisma, prisma.user, csvFilePath, '', processRow);
}

export default userSeeder;
