"use server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    const olympiaCafeId : string = process.env.OLYMPIA_CAFE_ID || "";
    console.log("Loaded OLYMPIA_CAFE_ID:", olympiaCafeId);

    try {
        const allFoods = await prisma.canteenFood.findMany({
            where: { canteenId: olympiaCafeId },
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
