import { PrismaClient, RoleType } from "@/generated/prisma";

const prisma = new PrismaClient();

export type UserInfo = {
  id: string;
  email: string | null;
  name: string | null;
  userRole: RoleType;
  studentId: string | null;
};

export async function getUserRole(userId: string): Promise<UserInfo | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
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

    return user;
  } catch (error) {
    console.error('Error fetching user roles:', error);
    throw new Error('Failed to fetch user roles');
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to check if user has specific role
export function hasRole(user: UserInfo | null, role: RoleType): boolean {
  if (!user) return false;
  return user.userRole === role;
}