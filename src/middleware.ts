import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { RoleType } from "./types/roles";

const publicRoutes = ["/", "/sign-in", "/sign-up","/olympia-cafe","/neptune-cafe","/khans-kitchen"];
const canteenProtectedRoute = createRouteMatcher(["/canteen(.*)"]);

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

    if (canteenProtectedRoute(request)) {
        if (role !== "CANTEEN_OWNER") {
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
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { RoleType } from "./types/roles";

// import { PrismaClient } from "./generated/prisma";
// const prisma = new PrismaClient();


// const canteenProtectedRoute = createRouteMatcher(["/canteen(.*)"]);

// export default clerkMiddleware(async (auth, request) => {
//     const data = await auth();
//     const path = new URL(request.url).pathname;

//     // Skip role check for API routes
//     if (path.startsWith('/api')) {
//         return NextResponse.next();
//     }

//     let role: RoleType = "DEFAULT";
    
//     if (data.userId) {
//         try {
//             const user = await prisma.user.findUnique({
//                 where: { id: data.userId },
//                 select: { userRole: true }
//             });
//             console.log("User Data: ", user);
//             role = user?.userRole || "DEFAULT";
//         } catch (error) {
//             console.error("Error fetching role in middleware:", error);
//         }
//     }

//     console.log(
//         "Middleware - User Role:",
//         role,
//         "\nUser ID:",
//         data.userId,
//         "\nPath:",
//         path
//     );

//     if (canteenProtectedRoute(request)) {
//         console.log("Middleware - Canteen Protected Route");
//         if (role !== "CANTEEN_OWNER") {
//             console.log("Middleware - Access Denied to Canteen Route");
//             return NextResponse.redirect(new URL("/", request.url));
//         }
//     }

//     return NextResponse.next();
// });

// export const config = {
//     matcher: [
//         "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//         "/(api|trpc)(.*)",
//     ],
// };

// // import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// // import { getRole } from "./actions/user/getRole";
// // import { NextResponse } from "next/server";
// // import { RoleType } from "./types/roles";

// // // Public routes that don't require authentication
// // // const publicRoutes = createRouteMatcher([
// // //     "/",
// // //     "/olympia-cafe",
// // //     "/khans-kitchen",
// // //     "/neptune-cafe",
// // // ]);
// // const canteenProtectedRoute = createRouteMatcher(["/canteen(.*)"]);

// // export  default  clerkMiddleware(async (auth, request) => {
// //     const data = await auth();
// //     // const role: RoleType = await getRole();
// //     const path = new URL(request.url).pathname;
    

// //     // let role : RoleType = "DEFAULT";
// //     // if (data.userId) {
// //     //   console.log("Getting role to middleware-")
// //     //     role = await getRole();
// //     // }
// //     const role: RoleType = await getRole();

// //     console.log(
// //         "Middleware - User Role:",
// //         role,
// //         "\nUser ID:",
// //         data.userId,
// //         "\nPath:",
// //         path
// //     );

// //     if (!data.userId) {
// //         console.log("Middleware - No User ID");
// //     }

// //     if (canteenProtectedRoute(request)) {
// //         console.log("Middleware - Canteen Protected Route");
// //         if (role !== "CANTEEN_OWNER") {
// //             console.log("Middleware - Access Denied to Canteen Route");
// //             return NextResponse.redirect(new URL("/", request.url));
// //         }
// //     }

// //     return NextResponse.next();
// // });

// // export const config = {
// //     matcher: [
// //         "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
// //         "/(api|trpc)(.*)",
// //     ],
// // };
