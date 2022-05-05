-- DropForeignKey
ALTER TABLE `SpecialConditionModification` DROP FOREIGN KEY `SpecialConditionModification_specialConditionId_fkey`;

-- AlterTable
ALTER TABLE `SpecialConditionModification` MODIFY `specialConditionId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Trial` MODIFY `difficultyGrade` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `SpecialConditionModification` ADD CONSTRAINT `SpecialConditionModification_specialConditionId_fkey` FOREIGN KEY (`specialConditionId`) REFERENCES `SpecialCondition`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
