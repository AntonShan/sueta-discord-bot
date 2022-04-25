-- CreateTable
CREATE TABLE "SpecialConditionTranslation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "specialConditionId" INTEGER NOT NULL,
    CONSTRAINT "SpecialConditionTranslation_specialConditionId_fkey" FOREIGN KEY ("specialConditionId") REFERENCES "SpecialCondition" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
