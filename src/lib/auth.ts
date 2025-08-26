import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import prisma from "./prisma";
import { RoleType } from "@prisma/client";
// import { NextResponse } from "next/server";

export async function getAuthenticatedUser() {
    const { userId } = await auth();
    if (!userId) {
        return {
            id: null,
            email: null,
            name: null,
            userRole: null,
            studentId: null,
        }
    }

    const [user, clerkUser] = await Promise.all([
        prisma.user.findUnique({
            where: { id: userId },
        }),
        currentUser(),
    ]);

    if (!user) {
        // Create user if doesn't exist
        const newUser = await prisma.user.create({
            data: {
                id: userId,
                email: clerkUser?.emailAddresses[0]?.emailAddress || "",
                name: clerkUser?.firstName || null,
                phone: clerkUser?.phoneNumbers[0]?.phoneNumber || null,
                userRole: RoleType.CUSTOMER,
            },
        });
        return newUser;
    }

    return user;
}
