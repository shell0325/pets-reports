/*
  Warnings:

  - You are about to alter the column `time` on the `cares` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `cares` MODIFY `time` TIMESTAMP NOT NULL;
