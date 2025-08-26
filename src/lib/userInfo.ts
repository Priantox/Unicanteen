import { PrismaClient, RoleType } from "@prisma/client";

const prisma = new PrismaClient();

export type UserInfo = {
  id: string;
  email: string | null;
  name: string | null;
  userRole: RoleType;
  studentId: string | null;
};

export async function getUserInfo(userId: string): Promise<UserInfo | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        userRole: true,
        studentId: true,
      },
    });

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      userRole: user.userRole,
      studentId: user.studentId,
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}