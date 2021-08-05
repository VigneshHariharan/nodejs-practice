-- CreateTable
CREATE TABLE `flashcards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(40) NOT NULL,
    `question` TEXT,
    `answer` TEXT,
    `parent_id` INTEGER,
    `created_by` INTEGER,
    `created_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `created_by`(`created_by`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `mobile_number` VARCHAR(40),
    `description` VARCHAR(200),
    `password` VARCHAR(100) NOT NULL,
    `profile_photo` VARCHAR(100),
    `created_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user.name_unique`(`name`),
    UNIQUE INDEX `user.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `description` TEXT,
    `tags_order` JSON,
    `created_by` INTEGER,
    `accessible_by` INTEGER,
    `created_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `accessible_by`(`accessible_by`),
    INDEX `created_by`(`created_by`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flashcards` ADD FOREIGN KEY (`created_by`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tags` ADD FOREIGN KEY (`accessible_by`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tags` ADD FOREIGN KEY (`created_by`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
