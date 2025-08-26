import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { RoleType } from "./types/roles";

const publicRoutes = ["/", "/sign-in", "/sign-up","/olympia-cafe","/neptune-cafe","/khans-kitchen"];
const IsCanteenProtectedRoute = createRouteMatcher(["/canteen(.*)"]);
const IsCustomerProtectedRoute = createRouteMatcher(["/customer(.*)"]);
const IsDeliveryProtectedRoute = createRouteMatcher(["/delivery(.*)"]);


export default clerkMiddleware(async (auth, request) => {
    const data = await auth();
    const path = new URL(request.url).pathname;

    // Skip role check for API routes
    if (path.startsWith('/api')) {
        return NextResponse.next();
    }

    // Allow public routes without role check
    if (publicRoutes.includes(path)) {
        return NextResponse.next();
    }

    let role: RoleType = "DEFAULT";
    
    if (data.userId) {
        try {
            const headers = new Headers();
            headers.set("Cookie", request.headers.get("cookie") || "");
            
            const roleResponse = await fetch(`${request.nextUrl.origin}/api/auth/role`, {
                headers
            });
            
            if (roleResponse.ok) {
                const { role: userRole } = await roleResponse.json();
                role = userRole;
            }
        } catch (error) {
            console.error("Error fetching role in middleware:", error);
        }
    }

    if (IsCanteenProtectedRoute(request)) {
        if (role !== "CANTEEN_OWNER") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (IsCustomerProtectedRoute(request)) {
        if (role !== "CUSTOMER") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (IsDeliveryProtectedRoute(request)) {
        if (role !== "DELIVERY_PERSON") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};