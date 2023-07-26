/*
  Warnings:

  - The primary key for the `PeerReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `taskid` on the `PeerReview` table. All the data in the column will be lost.
  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `taskId` to the `PeerReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskUserid` to the `PeerReview` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PeerReview" DROP CONSTRAINT "PeerReview_taskid_fkey";

-- AlterTable
ALTER TABLE "PeerReview" DROP CONSTRAINT "PeerReview_pkey",
DROP COLUMN "taskid",
ADD COLUMN     "taskId" TEXT NOT NULL,
ADD COLUMN     "taskUserid" TEXT NOT NULL,
ADD CONSTRAINT "PeerReview_pkey" PRIMARY KEY ("reviewerid", "taskId", "taskUserid");

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id", "userid");

-- AddForeignKey
ALTER TABLE "PeerReview" ADD CONSTRAINT "PeerReview_taskId_taskUserid_fkey" FOREIGN KEY ("taskId", "taskUserid") REFERENCES "Task"("id", "userid") ON DELETE RESTRICT ON UPDATE CASCADE;
