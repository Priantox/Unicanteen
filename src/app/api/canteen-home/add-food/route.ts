import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        const userId = user?.id;
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await req.json();
        
        // Find canteen first
        const canteen = await prisma.canteen.findFirst({
            where: { ownerId: userId }
        });

        if (!canteen) {
            return NextResponse.json({ error: "Canteen not found" }, { status: 404 });
        }

        // Create food item
        const foodItem = await prisma.canteenFood.create({
            data: {
                canteenId: canteen.id,
                name: data.name,
                price: data.price,
                description: data.description,
                image: data.image,
                rating: 0,
                stocks: data.stocks,
                availability: data.availability
            }
        });

        return NextResponse.json(foodItem);
    } catch (error) {
        console.error("Error adding food item:", error);
        return NextResponse.json(
            { error: "Failed to add food item" }, 
            { status: 500 }
        );
    }
}

// import prisma from "@/lib/prisma";
// import { CanteenFood } from "@prisma/client";
// import { NextResponse } from "next/server";


// export async function POST(request: Request) {
//     const food : CanteenFood = await request.json();

//     const canteenFood = await prisma.canteenFood.create({
//         data: food
//     });

//     return NextResponse.json(canteenFood);
// }
// // /api/canteen-home/add-food