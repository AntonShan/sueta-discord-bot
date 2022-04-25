-- CreateTable
CREATE TABLE "SpecialCondition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficultyGrade" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SpecialConditionModification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "specialConditionId" INTEGER NOT NULL,
    CONSTRAINT "SpecialConditionModification_specialConditionId_fkey" FOREIGN KEY ("specialConditionId") REFERENCES "SpecialCondition" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SpecialConditionsOnTrials" (
    "specialConditionId" INTEGER NOT NULL,
    "trialId" INTEGER NOT NULL,

    PRIMARY KEY ("specialConditionId", "trialId"),
    CONSTRAINT "SpecialConditionsOnTrials_specialConditionId_fkey" FOREIGN KEY ("specialConditionId") REFERENCES "SpecialCondition" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SpecialConditionsOnTrials_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Trial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "difficultyGrade" INTEGER NOT NULL
);
