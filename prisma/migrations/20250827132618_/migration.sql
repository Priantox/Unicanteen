-- AlterTable
ALTER TABLE "public"."CanteenFood" ADD COLUMN     "availability" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "stocks" INTEGER NOT NULL DEFAULT 10;
