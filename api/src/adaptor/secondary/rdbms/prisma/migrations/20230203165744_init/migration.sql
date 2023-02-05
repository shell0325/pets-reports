/*
  Warnings:

  - You are about to alter the column `time` on the `cares` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `shit` on the `conditions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Enum(EnumId(3))`.
  - You are about to alter the column `condition` on the `conditions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(4))`.
  - You are about to alter the column `birthday` on the `pets` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `welcome_family` on the `pets` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `question_time` on the `questions` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `spending_date` on the `spendings` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `cares` MODIFY `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `conditions` MODIFY `shit` ENUM('TYPE1', 'TYPE2', 'TYPE3', 'TYPE4', 'TYPE5', 'TYPE6', 'TYPE7') NULL,
    MODIFY `condition` ENUM('GREAT_CONDITION', 'GENERALLY_GOOD', 'NORMAL', 'NOT_FEELING_WELL', 'SICK') NULL;

-- AlterTable
ALTER TABLE `pets` MODIFY `birthday` DATETIME NOT NULL,
    MODIFY `welcome_family` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `questions` MODIFY `question_time` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `spendings` MODIFY `spending_date` DATETIME NOT NULL;
