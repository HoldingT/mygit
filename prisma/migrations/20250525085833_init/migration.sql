-- CreateTable
CREATE TABLE `history` (
    `history_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(50) NOT NULL,
    `classId` VARCHAR(15) NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `end_time` DATETIME(0) NOT NULL,
    `participant_count` INTEGER NULL,
    `hashtags` VARCHAR(191) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_history_room`(`classId`),
    INDEX `idx_history_user`(`user_id`),
    PRIMARY KEY (`history_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecture` (
    `course_id` VARCHAR(16) NOT NULL,
    `course_name` VARCHAR(100) NOT NULL,
    `professor` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecture_room` (
    `classId` VARCHAR(15) NOT NULL,
    `building` VARCHAR(50) NOT NULL,
    `room` VARCHAR(50) NOT NULL,
    `floor` INTEGER NOT NULL,
    `capacity` INTEGER NOT NULL,
    `current_occupancy` INTEGER NOT NULL DEFAULT 0,
    `cnt_alone_study` INTEGER NOT NULL DEFAULT 0,
    `cnt_group_meeting` INTEGER NOT NULL DEFAULT 0,
    `cnt_quiet` INTEGER NOT NULL DEFAULT 0,
    `cnt_free_talk` INTEGER NOT NULL DEFAULT 0,
    `cnt_short_stay` INTEGER NOT NULL DEFAULT 0,
    `cnt_comfortable` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`classId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lecture_schedule` (
    `course_id` VARCHAR(15) NOT NULL,
    `classId` VARCHAR(10) NOT NULL,
    `weekday` ENUM('월', '화', '수', '목', '금', '토', '일') NOT NULL,
    `start_time` TIME(0) NOT NULL,
    `end_time` TIME(0) NOT NULL,

    INDEX `cs_fk_classId`(`classId`),
    PRIMARY KEY (`course_id`, `classId`, `weekday`, `start_time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` VARCHAR(50) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `user_type` ENUM('undergraduate', 'postgraduate', 'staff') NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_favorite` (
    `user_id` VARCHAR(50) NOT NULL,
    `classId` VARCHAR(15) NOT NULL,
    `weekday` ENUM('월', '화', '수', '목', '금', '토', '일') NOT NULL,
    `start_time` TIME(0) NOT NULL,
    `end_time` TIME(0) NOT NULL,
    `favorited_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_user_fav_room`(`classId`),
    PRIMARY KEY (`user_id`, `classId`, `weekday`, `start_time`, `end_time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_usage` (
    `usage_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(50) NOT NULL,
    `classId` VARCHAR(15) NOT NULL,
    `usage_date` DATE NOT NULL,
    `start_time` TIME(0) NOT NULL,
    `end_time` TIME(0) NOT NULL,
    `participant_count` INTEGER NOT NULL,
    `hashtags` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_uu_user`(`user_id`),
    INDEX `uu_fk_classId`(`classId`),
    PRIMARY KEY (`usage_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `fk_history_room` FOREIGN KEY (`classId`) REFERENCES `lecture_room`(`classId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `fk_history_user` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lecture_schedule` ADD CONSTRAINT `cs_fk_classId` FOREIGN KEY (`classId`) REFERENCES `lecture_room`(`classId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lecture_schedule` ADD CONSTRAINT `cs_fk_lecture` FOREIGN KEY (`course_id`) REFERENCES `lecture`(`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_favorite` ADD CONSTRAINT `fk_user_fav_room` FOREIGN KEY (`classId`) REFERENCES `lecture_room`(`classId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_usage` ADD CONSTRAINT `user_usage_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_usage` ADD CONSTRAINT `uu_fk_classId` FOREIGN KEY (`classId`) REFERENCES `lecture_room`(`classId`) ON DELETE CASCADE ON UPDATE CASCADE;
