-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` TEXT NOT NULL,
    `lastName` TEXT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `tel` INTEGER NOT NULL,
    `subscriptionType` INTEGER NOT NULL,
    `subscriptionTerm` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

