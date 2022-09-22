-- CreateTable
CREATE TABLE "ImageToColor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "themeEspecificationId" TEXT NOT NULL,
    CONSTRAINT "ImageToColor_themeEspecificationId_fkey" FOREIGN KEY ("themeEspecificationId") REFERENCES "ThemeEspecification" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
