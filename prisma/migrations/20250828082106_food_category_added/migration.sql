-- CreateEnum
CREATE TYPE "public"."FoodCategory" AS ENUM ('POPULAR', 'BREAKFAST', 'LUNCH', 'DINNER', 'FAST_FOOD', 'DESSERT', 'BEVERAGE', 'SNACK', 'RICE_ITEMS', 'DRINKS', 'PACKET_ITEMS', 'OTHERS', 'MEAT_ITEMS');

-- AlterTable
ALTER TABLE "public"."CanteenFood" ADD COLUMN     "category" "public"."FoodCategory"[];
