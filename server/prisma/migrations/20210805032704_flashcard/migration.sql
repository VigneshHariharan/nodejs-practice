/*
  Warnings:

  - You are about to drop the column `parent_id` on the `flashcards` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `flashcards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `flashcards` DROP COLUMN `parent_id`,
    DROP COLUMN `title`,
    ADD COLUMN `code` TEXT;
