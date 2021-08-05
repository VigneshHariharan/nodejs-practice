-- CreateTable
CREATE TABLE `filter_mapper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `notes_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `notes_id`(`notes_id`),
    INDEX `tag_id`(`tag_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `study_resources` TEXT,
    `content` TEXT,
    `created_by` INTEGER NOT NULL,
    `revised_at` TIMESTAMP(0),
    `is_private` BOOLEAN DEFAULT false,
    `created_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `notes.created_by_unique`(`created_by`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `filter_mapper` ADD FOREIGN KEY (`notes_id`) REFERENCES `notes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filter_mapper` ADD FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD FOREIGN KEY (`created_by`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
