/*
  Warnings:

  - Added the required column `fullUrl` to the `CloudImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CloudImage" ADD COLUMN     "fullUrl" TEXT NOT NULL;
