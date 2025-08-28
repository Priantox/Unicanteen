/*
  Warnings:

  - Added the required column `foodId` to the `FeaturedItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."FeaturedItems" DROP CONSTRAINT "FeaturedItems_id_fkey";

-- AlterTable
ALTER TABLE "public"."FeaturedItems" ADD COLUMN     "foodId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."FeaturedItems" ADD CONSTRAINT "FeaturedItems_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "public"."CanteenFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
