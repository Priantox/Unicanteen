import { checkRole } from "@/lib/roles";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Check if user is authenticated
        const { userId } = await auth();
        
        if (!userId) {
            return NextResponse.json(
                { role: "DEFAULT" }
            );
        }

        // Check roles in order of hierarchy
        if (await checkRole("ADMIN")) {
            return NextResponse.json({ role: "ADMIN" });
        }

        if (await checkRole("CANTEEN_OWNER")) {
            return NextResponse.json({ role: "CANTEEN_OWNER" });
        }

        if (await checkRole("DELIVERY_PERSON")) {
            return NextResponse.json({ role: "DELIVERY_PERSON" });
        }

        if (await checkRole("CUSTOMER")) {
            return NextResponse.json({ role: "CUSTOMER" });
        }

        return NextResponse.json({ role: "DEFAULT" });

    } catch (error) {
        console.error("Role check error:", error);
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}

// import { checkRole } from "@/lib/roles";
// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function GET() {
//     try {
//         // Check if user is authenticated
//         const { userId } = await auth();
        
//         if (!userId) {
//             return NextResponse.json(
//                 { error: "Unauthorized" }, 
//                 { status: 401 }
//             );
//         }

//         // Check roles in order of hierarchy
//         if (await checkRole("ADMIN")) {
//             return NextResponse.json({ role: "ADMIN" });
//         }

//         if (await checkRole("CANTEEN_OWNER")) {
//             return NextResponse.json({ role: "CANTEEN_OWNER" });
//         }

//         if (await checkRole("DELIVERY_PERSON")) {
//             return NextResponse.json({ role: "DELIVERY_PERSON" });
//         }

//         if (await checkRole("CUSTOMER")) {
//             return NextResponse.json({ role: "CUSTOMER" });
//         }

//         return NextResponse.json({ role: "DEFAULT" });

//     } catch (error) {
//         console.error("Role check error:", error);
//         return NextResponse.json(
//             { error: "Internal server error" }, 
//             { status: 500 }
//         );
//     }
// }