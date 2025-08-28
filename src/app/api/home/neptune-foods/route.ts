"use server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    const neptuneCafeId : string = process.env.NEPTUNE_CAFE_ID || "";
    console.log("Loaded NEPTUNE_CAFE_ID:", neptuneCafeId);

    try {
        const allFoods = await prisma.canteenFood.findMany({
            where: { canteenId: neptuneCafeId },
        });

        if (allFoods.length === 0) {
            return NextResponse.json(
                { error: "No foods found" },
                { status: 404 }
            );
        }

        return NextResponse.json(allFoods);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch foods" },
            { status: 500 }
        );
    }
}
