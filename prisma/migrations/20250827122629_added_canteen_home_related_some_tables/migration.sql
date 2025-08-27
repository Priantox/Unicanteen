-- CreateEnum
CREATE TYPE "public"."CanteenName" AS ENUM ('Khans_Kitchen', 'Olympia_Cafe', 'Neptune_Cafe');

-- CreateTable
CREATE TABLE "public"."Canteen" (
    "id" TEXT NOT NULL,
    "name" "public"."CanteenName" NOT NULL,
    "canteen_image" TEXT,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Canteen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CanteenFood" (
    "canteenId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "rating" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CanteenFood_pkey" PRIMARY KEY ("canteenId")
);

-- CreateTable
CREATE TABLE "public"."CanteenReviews" (
    "canteenId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CanteenReviews_pkey" PRIMARY KEY ("canteenId")
);

-- CreateTable
CREATE TABLE "public"."Customer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "uiuId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_userId_key" ON "public"."Customer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_uiuId_key" ON "public"."Customer"("uiuId");

-- AddForeignKey
ALTER TABLE "public"."Canteen" ADD CONSTRAINT "Canteen_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CanteenFood" ADD CONSTRAINT "CanteenFood_canteenId_fkey" FOREIGN KEY ("canteenId") REFERENCES "public"."Canteen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CanteenReviews" ADD CONSTRAINT "CanteenReviews_canteenId_fkey" FOREIGN KEY ("canteenId") REFERENCES "public"."Canteen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Customer" ADD CONSTRAINT "Customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
