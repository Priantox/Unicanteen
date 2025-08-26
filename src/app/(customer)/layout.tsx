
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import "../globals.css";
import CusNavBar from "@/components/forCustomer/CusNavBar";
import CusSideBar from "@/components/forCustomer/CusSideBar";

// font Exo
import { Exo } from "next/font/google";
const exo = Exo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Yummy | UniCanteen",
    description: "Eat Your Fav Foods",
};



export default function customerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={exo.className}>
                    <CusNavBar />
                    <div className="flex h-[calc(100vh-64px)]">
                        <CusSideBar />
                        <main className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-auto">
                            {children}
                        </main>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
