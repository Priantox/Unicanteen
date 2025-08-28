import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const user = await currentUser();
        const userId = user?.id;
        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // const data = await req.json();

        // Find canteen first
        const canteen = await prisma.canteen.findFirst({
            where: { ownerId: userId },
        });

        if (!canteen) {
            return NextResponse.json(
                { error: "Canteen not found" },
                { status: 404 }
            );
        }

        const allFoods = await prisma.canteenFood.findMany({
            where: { canteenId: canteen.id },
        });

        return NextResponse.json(allFoods);

    } catch (error) {
        console.error("Error fetching role:", error);
        return NextResponse.json({ role: "DEFAULT" });
    }
}
