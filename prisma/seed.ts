// import { PrismaClient } from "@/generated/prisma";

// const prisma = new PrismaClient();

// async function main() {
//     // Clear existing data (optional)
//     await prisma.item.deleteMany();
//     await prisma.category.deleteMany();
//     await prisma.shop.deleteMany();

//     // Create 3 shops
//     const shops = await prisma.shop.createMany({
//         data: [
//             {
//                 name: "Olympia",
//                 code: "olympia",
//                 phone: "01710000001",
//                 location: "North Campus",
//             },
//             {
//                 name: "Neptune",
//                 code: "neptune",
//                 phone: "01710000002",
//                 location: "East Campus",
//             },
//             {
//                 name: "Khans",
//                 code: "khans",
//                 phone: "01710000003",
//                 location: "South Campus",
//             },
//         ],
//     });
//     console.log(shops.count);

//     console.log("3 shops created ✅");

//     // Fetch shop IDs
//     const olympia = await prisma.shop.findUnique({
//         where: { code: "olympia" },
//     });
//     const neptune = await prisma.shop.findUnique({
//         where: { code: "neptune" },
//     });
//     const khans = await prisma.shop.findUnique({ where: { code: "khans" } });

//     // Sample categories
//     const categories = ["Fast Food", "Beverages", "Snacks"];

//     // Create categories for each shop
//     for (const shop of [olympia, neptune, khans]) {
//         for (const name of categories) {
//             await prisma.category.create({
//                 data: { name, shopId: shop!.id },
//             });
//         }
//     }

//     console.log("Categories added ✅");

//     // Sample items
//     const sampleItems = [
//         { name: "Burger", basePrice: 120 },
//         { name: "Pizza", basePrice: 250 },
//         { name: "Sandwich", basePrice: 100 },
//         { name: "Coke", basePrice: 30 },
//         { name: "Coffee", basePrice: 60 },
//     ];

//     // Add items to each shop in first category
//     for (const shop of [olympia, neptune, khans]) {
//         const firstCategory = await prisma.category.findFirst({
//             where: { shopId: shop!.id },
//         });

//         for (const item of sampleItems) {
//             await prisma.item.create({
//                 data: {
//                     name: item.name,
//                     basePrice: item.basePrice,
//                     shopId: shop!.id,
//                     categoryId: firstCategory!.id,
//                     isAvailable: true,
//                 },
//             });
//         }
//     }

//     console.log("Sample items added ✅");
// }

// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
