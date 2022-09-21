-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userPhotoURl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FavoriteTheme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "speciesType" TEXT NOT NULL,
    CONSTRAINT "FavoriteTheme_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
