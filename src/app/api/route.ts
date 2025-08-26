// Chech Authnicated User from Clerk Data and check if user exist in DB
// If not exist create user in DB with default role CUSTOMER
import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/lib/auth";      
export async function GET() {
  try {
    const user = await getAuthenticatedUser();
    return NextResponse.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}