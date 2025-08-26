import { RoleType } from "@/types/roles";
import prisma from "@/lib/prisma";

export interface UserData {
    userId: string;
    email: string;
    name: string | null;
    phone: string | null;
    role: RoleType;
    studentId?: string | null;
}

export async function setUserDataToDB(userData: UserData) {
    try {
        const { userId, email, name, phone, role, studentId } = userData;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (existingUser) {
            console.log(`User with ID ${userId} already exists.`);
            return existingUser;
        }

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                id: userId,
                email,
                name,
                phone,
                userRole: role,
                studentId: studentId || null,
            },
        });

        console.log(`User with ID ${userId} created successfully.`);
        return newUser;
    } catch (error) {
        console.error("Error setting user data to DB:", error);
        throw error;
    }
}

// import { RoleType } from "@/types/roles";
// import { PrismaClient } from "@prisma/client";

// export interface UserData {
//     userId: string;
//     email: string;
//     name: string | null;
//     phone: string | null;
//     role: RoleType ;
//     studentId?: string | null;
// }

// const prisma = new PrismaClient();

// export async function setUserDataToDB(userData: UserData) {
//     try {
//         const { userId, email, name, phone, role, studentId } = userData;

//         // Check if user already exists
//         const existingUser = await prisma.user.findUnique({
//             where: { id: userId },
//         });

//         if (existingUser) {
//             console.log(`User with ID ${userId} already exists.`);
//             return existingUser;
//         }

//         // Create new user
//         const newUser = await prisma.user.create({
//             data: {
//                 id: userId,
//                 email,
//                 name,
//                 phone,
//                 userRole: role, // Changed from roles to userRole
//                 studentId: studentId || null,
//             },
//         });

//         console.log(`User with ID ${userId} created successfully.`);
//         return newUser;
//     } catch (error) {
//         console.error("Error setting user data to DB:", error);
//         throw error;
//     } finally {
//         await prisma.$disconnect();
//     }
// }