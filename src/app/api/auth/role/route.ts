import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const session = await auth();
    const { userId } = session;
    //   const { userId } = auth;

    if (!userId) {
        return NextResponse.json({ role: "DEFAULT" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { userRole: true },
        });

        return NextResponse.json({ role: user?.userRole || "DEFAULT" });
    } catch (error) {
        console.error("Error fetching role:", error);
        return NextResponse.json({ role: "DEFAULT" });
    }
}
