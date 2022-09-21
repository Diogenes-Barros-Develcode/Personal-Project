/*
  Warnings:

  - Added the required column `themeImage` to the `FavoriteTheme` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FavoriteTheme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "speciesType" TEXT NOT NULL,
    "themeImage" TEXT NOT NULL,
    CONSTRAINT "FavoriteTheme_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FavoriteTheme" ("characteristics", "id", "name", "speciesType", "type", "userId") SELECT "characteristics", "id", "name", "speciesType", "type", "userId" FROM "FavoriteTheme";
DROP TABLE "FavoriteTheme";
ALTER TABLE "new_FavoriteTheme" RENAME TO "FavoriteTheme";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
