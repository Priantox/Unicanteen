import CanNavBar from "@/components/forCanteen/CanNavBar";
import CanSideBar from "@/components/forCanteen/CanSideBar";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import "../globals.css";

// font Exo
import { Exo } from "next/font/google";
const exo = Exo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Canteen | UniCanteen",
    description: "Manage Your Canteen",
};



export default function canteenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={exo.className}>
                    <CanNavBar />
                    <div className="flex h-[calc(100vh-64px)]">
                        <CanSideBar />
                        <main className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-auto">
                            {children}
                        </main>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
