-- CreateTable
CREATE TABLE "public"."FeaturedItems" (
    "id" TEXT NOT NULL,
    "bannerImage" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturedItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."FeaturedItems" ADD CONSTRAINT "FeaturedItems_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."CanteenFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
