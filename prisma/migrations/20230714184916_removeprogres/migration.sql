/*
  Warnings:

  - You are about to drop the `Progres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Progres" DROP CONSTRAINT "Progres_userid_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "complete" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Progres";
