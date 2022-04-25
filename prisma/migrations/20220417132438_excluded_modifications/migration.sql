-- CreateTable
CREATE TABLE "_ConflictingConditions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "SpecialCondition" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "SpecialCondition" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConflictingConditions_AB_unique" ON "_ConflictingConditions"("A", "B");

-- CreateIndex
CREATE INDEX "_ConflictingConditions_B_index" ON "_ConflictingConditions"("B");
