-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `email` VARCHAR(80) NOT NULL,
    `password` VARCHAR(80) NOT NULL,
    `gender` ENUM('MAN', 'WOMAN', 'OTHERS') NOT NULL,
    `age` INTEGER NOT NULL,
    `location` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pets` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `picture` VARCHAR(255) NULL,
    `kinds` VARCHAR(45) NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `birthday` DATETIME NOT NULL,
    `colour` VARCHAR(45) NOT NULL,
    `welcome_family` DATETIME NOT NULL,
    `memo` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_pets` (
    `id` VARCHAR(25) NOT NULL,
    `user_id` VARCHAR(25) NOT NULL,
    `ret_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conditions` (
    `id` VARCHAR(25) NOT NULL,
    `weight` INTEGER NOT NULL,
    `length` INTEGER NOT NULL,
    `temperature` INTEGER NOT NULL,
    `vitality` VARCHAR(10) NOT NULL,
    `diarrhea` VARCHAR(10) NOT NULL,
    `condition` VARCHAR(255) NOT NULL,
    `vomiting` VARCHAR(10) NOT NULL,
    `ret_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `branggings` (
    `id` VARCHAR(25) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `picture` VARCHAR(255) NULL,
    `user_id` VARCHAR(25) NOT NULL,
    `ret_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `evaliation` VARCHAR(255) NOT NULL,
    `picture` VARCHAR(255) NULL,
    `user_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like` (
    `id` VARCHAR(25) NOT NULL,
    `user_id` VARCHAR(25) NOT NULL,
    `ret_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `id` VARCHAR(25) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `question_genre` VARCHAR(50) NOT NULL,
    `question_time` DATETIME NOT NULL,
    `answered` BOOLEAN NOT NULL,
    `user_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Respondent` (
    `id` VARCHAR(25) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `user_id` VARCHAR(25) NOT NULL,
    `question_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Care` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `time` DATETIME NOT NULL,
    `ret_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spending` (
    `id` VARCHAR(25) NOT NULL,
    `merchandise` VARCHAR(255) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `amount` INTEGER NOT NULL,
    `purchase_date` DATETIME NOT NULL,
    `ret_id` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users_pets` ADD CONSTRAINT `users_pets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_pets` ADD CONSTRAINT `users_pets_ret_id_fkey` FOREIGN KEY (`ret_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conditions` ADD CONSTRAINT `conditions_ret_id_fkey` FOREIGN KEY (`ret_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `branggings` ADD CONSTRAINT `branggings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `branggings` ADD CONSTRAINT `branggings_ret_id_fkey` FOREIGN KEY (`ret_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_ret_id_fkey` FOREIGN KEY (`ret_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Respondent` ADD CONSTRAINT `Respondent_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Respondent` ADD CONSTRAINT `Respondent_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Care` ADD CONSTRAINT `Care_ret_id_fkey` FOREIGN KEY (`ret_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Spending` ADD CONSTRAINT `Spending_ret_id_fkey` FOREIGN KEY (`ret_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
