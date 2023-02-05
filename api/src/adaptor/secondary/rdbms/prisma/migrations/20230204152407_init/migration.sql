/*
  Warnings:

  - You are about to drop the column `ret_id` on the `branggings` table. All the data in the column will be lost.
  - You are about to drop the column `ret_id` on the `cares` table. All the data in the column will be lost.
  - You are about to alter the column `time` on the `cares` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `ret_id` on the `conditions` table. All the data in the column will be lost.
  - You are about to drop the column `ret_id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `ret_id` on the `spendings` table. All the data in the column will be lost.
  - You are about to drop the column `ret_id` on the `users_pets` table. All the data in the column will be lost.
  - Added the required column `pet_id` to the `branggings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet_id` to the `cares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet_id` to the `conditions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet_id` to the `likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet_id` to the `spendings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet_id` to the `users_pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `branggings` DROP FOREIGN KEY `branggings_ret_id_fkey`;

-- DropForeignKey
ALTER TABLE `cares` DROP FOREIGN KEY `cares_ret_id_fkey`;

-- DropForeignKey
ALTER TABLE `conditions` DROP FOREIGN KEY `conditions_ret_id_fkey`;

-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `likes_ret_id_fkey`;

-- DropForeignKey
ALTER TABLE `spendings` DROP FOREIGN KEY `spendings_ret_id_fkey`;

-- DropForeignKey
ALTER TABLE `users_pets` DROP FOREIGN KEY `users_pets_ret_id_fkey`;

-- AlterTable
ALTER TABLE `branggings` DROP COLUMN `ret_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `pet_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `cares` DROP COLUMN `ret_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `pet_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `conditions` DROP COLUMN `ret_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `pet_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `likes` DROP COLUMN `ret_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `pet_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `pets` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `questions` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `respondents` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `reviews` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `spendings` DROP COLUMN `ret_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `pet_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users_pets` DROP COLUMN `ret_id`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `pet_id` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `users_pets` ADD CONSTRAINT `users_pets_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conditions` ADD CONSTRAINT `conditions_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `branggings` ADD CONSTRAINT `branggings_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `likes` ADD CONSTRAINT `likes_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cares` ADD CONSTRAINT `cares_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `spendings` ADD CONSTRAINT `spendings_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
