/*
  Warnings:

  - You are about to drop the column `characteristics` on the `FavoriteTheme` table. All the data in the column will be lost.
  - You are about to drop the column `speciesType` on the `FavoriteTheme` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `FavoriteTheme` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ThemeEspecification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "speciesType" TEXT NOT NULL,
    "favoriteThemeId" TEXT NOT NULL,
    CONSTRAINT "ThemeEspecification_favoriteThemeId_fkey" FOREIGN KEY ("favoriteThemeId") REFERENCES "FavoriteTheme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FavoriteTheme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "themeImage" TEXT NOT NULL,
    CONSTRAINT "FavoriteTheme_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FavoriteTheme" ("id", "name", "themeImage", "userId") SELECT "id", "name", "themeImage", "userId" FROM "FavoriteTheme";
DROP TABLE "FavoriteTheme";
ALTER TABLE "new_FavoriteTheme" RENAME TO "FavoriteTheme";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
