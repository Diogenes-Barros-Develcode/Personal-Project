/*
  Warnings:

  - Added the required column `name` to the `ImageToColor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ImageToColor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "themeEspecificationId" TEXT NOT NULL,
    CONSTRAINT "ImageToColor_themeEspecificationId_fkey" FOREIGN KEY ("themeEspecificationId") REFERENCES "ThemeEspecification" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ImageToColor" ("id", "image", "themeEspecificationId") SELECT "id", "image", "themeEspecificationId" FROM "ImageToColor";
DROP TABLE "ImageToColor";
ALTER TABLE "new_ImageToColor" RENAME TO "ImageToColor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
