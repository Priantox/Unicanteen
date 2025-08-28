"use server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    const khansKitchenId : string = process.env.KHANS_KITCHEN_ID || "";
    console.log("Loaded KHANS_KITCHEN_ID:", khansKitchenId);

    try {
        const allFoods = await prisma.canteenFood.findMany({
            where: { canteenId: khansKitchenId },
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
