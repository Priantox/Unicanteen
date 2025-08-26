/*
  Warnings:

  - The values [CANTEEN_ADMIN,DELIVERY] on the enum `RoleType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."RoleType_new" AS ENUM ('CANTEEN_OWNER', 'CUSTOMER', 'DELIVERY_PERSON', 'ADMIN', 'DEFAULT');
ALTER TABLE "public"."User" ALTER COLUMN "userRole" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "userRole" TYPE "public"."RoleType_new" USING ("userRole"::text::"public"."RoleType_new");
ALTER TYPE "public"."RoleType" RENAME TO "RoleType_old";
ALTER TYPE "public"."RoleType_new" RENAME TO "RoleType";
DROP TYPE "public"."RoleType_old";
ALTER TABLE "public"."User" ALTER COLUMN "userRole" SET DEFAULT 'CUSTOMER';
COMMIT;
