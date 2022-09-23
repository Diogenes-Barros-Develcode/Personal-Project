/*
  Warnings:

  - You are about to drop the `ImageToColor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageToColor` to the `ThemeEspecification` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ImageToColor";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ThemeEspecification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "favoriteThemeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "speciesType" TEXT NOT NULL,
    "themeImage" TEXT NOT NULL,
    "whereLived" TEXT NOT NULL,
    "whereLivedImage" TEXT NOT NULL,
    "imageToColor" TEXT NOT NULL,
    CONSTRAINT "ThemeEspecification_favoriteThemeId_fkey" FOREIGN KEY ("favoriteThemeId") REFERENCES "FavoriteTheme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ThemeEspecification" ("characteristics", "favoriteThemeId", "id", "name", "speciesType", "themeImage", "whereLived", "whereLivedImage") SELECT "characteristics", "favoriteThemeId", "id", "name", "speciesType", "themeImage", "whereLived", "whereLivedImage" FROM "ThemeEspecification";
DROP TABLE "ThemeEspecification";
ALTER TABLE "new_ThemeEspecification" RENAME TO "ThemeEspecification";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
