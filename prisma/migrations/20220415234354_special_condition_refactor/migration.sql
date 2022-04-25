/*
  Warnings:

  - You are about to drop the column `description` on the `SpecialCondition` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `SpecialCondition` table. All the data in the column will be lost.
  - Added the required column `code` to the `SpecialCondition` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SpecialCondition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "difficultyGrade" INTEGER NOT NULL
);
INSERT INTO "new_SpecialCondition" ("difficultyGrade", "id") SELECT "difficultyGrade", "id" FROM "SpecialCondition";
DROP TABLE "SpecialCondition";
ALTER TABLE "new_SpecialCondition" RENAME TO "SpecialCondition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
