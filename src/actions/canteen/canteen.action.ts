/*
model Canteen {
  id            String   @id
  name          CanteenName
  canteen_image String?
  ownerId       String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  owner       User             @relation(fields: [ownerId], references: [id])
  reviews     CanteenReviews[]
  CanteenFood CanteenFood[]
}
*/

"use server";
import prisma from "@/lib/prisma";
export async function changeFoodAvailability(
    foodId: string,
    canteenId: string,
    currentAvailability: boolean
) {
    await prisma.canteenFood.update({
        where: { id: foodId, canteenId },
        data: { availability: !currentAvailability }, // toggle
    });

    return { success: true };
}
