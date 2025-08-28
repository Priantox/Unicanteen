// import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CanteenDetails } from "@/types/canteen";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
    try {
        // const authInfo = await auth();
        // const { userId } = authInfo;

        const user = await currentUser();
        const userId = user?.id;

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const canteen = await prisma.canteen.findFirst({
            where: {
                ownerId: userId
            },
            include: {
                CanteenFood: false,
                reviews: false
            }
        });

        if (!canteen) {
            return NextResponse.json(
                { error: "Canteen not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(canteen);

    } catch (error) {
        console.error("Error fetching canteen details:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}