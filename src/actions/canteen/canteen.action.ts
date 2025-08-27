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
