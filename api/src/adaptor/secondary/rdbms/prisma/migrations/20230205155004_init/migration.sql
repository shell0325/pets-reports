/*
  Warnings:

  - You are about to alter the column `name` on the `cares` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(5))`.
  - You are about to alter the column `time` on the `cares` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Made the column `vomiting` on table `conditions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `cares` MODIFY `name` ENUM('Meal', 'Toilet', 'Hospital', 'Medicine', 'Salon', 'Stroll', 'Shopping', 'Bath', 'Others') NOT NULL,
    MODIFY `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `conditions` MODIFY `vomiting` BOOLEAN NOT NULL DEFAULT false;
