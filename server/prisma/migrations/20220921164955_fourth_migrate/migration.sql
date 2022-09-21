/*
  Warnings:

  - You are about to drop the column `type` on the `ThemeEspecification` table. All the data in the column will be lost.
  - Added the required column `themeImage` to the `ThemeEspecification` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ThemeEspecification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "speciesType" TEXT NOT NULL,
    "themeImage" TEXT NOT NULL,
    "favoriteThemeId" TEXT NOT NULL,
    CONSTRAINT "ThemeEspecification_favoriteThemeId_fkey" FOREIGN KEY ("favoriteThemeId") REFERENCES "FavoriteTheme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ThemeEspecification" ("characteristics", "favoriteThemeId", "id", "name", "speciesType") SELECT "characteristics", "favoriteThemeId", "id", "name", "speciesType" FROM "ThemeEspecification";
DROP TABLE "ThemeEspecification";
ALTER TABLE "new_ThemeEspecification" RENAME TO "ThemeEspecification";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
