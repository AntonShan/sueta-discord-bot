-- CreateTable
CREATE TABLE `SpecialCondition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `locale` VARCHAR(191) NOT NULL DEFAULT 'en',
    `difficultyGrade` INTEGER NOT NULL DEFAULT 0,
    `mainConditionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecialConditionModification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `specialConditionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecialConditionsOnTrials` (
    `specialConditionId` INTEGER NOT NULL,
    `trialId` INTEGER NOT NULL,

    PRIMARY KEY (`specialConditionId`, `trialId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `difficultyGrade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ConflictingConditions` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ConflictingConditions_AB_unique`(`A`, `B`),
    INDEX `_ConflictingConditions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SpecialCondition` ADD CONSTRAINT `SpecialCondition_mainConditionId_fkey` FOREIGN KEY (`mainConditionId`) REFERENCES `SpecialCondition`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecialConditionModification` ADD CONSTRAINT `SpecialConditionModification_specialConditionId_fkey` FOREIGN KEY (`specialConditionId`) REFERENCES `SpecialCondition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecialConditionsOnTrials` ADD CONSTRAINT `SpecialConditionsOnTrials_specialConditionId_fkey` FOREIGN KEY (`specialConditionId`) REFERENCES `SpecialCondition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecialConditionsOnTrials` ADD CONSTRAINT `SpecialConditionsOnTrials_trialId_fkey` FOREIGN KEY (`trialId`) REFERENCES `Trial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConflictingConditions` ADD FOREIGN KEY (`A`) REFERENCES `SpecialCondition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConflictingConditions` ADD FOREIGN KEY (`B`) REFERENCES `SpecialCondition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
