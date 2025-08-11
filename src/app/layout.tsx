import type { Metadata } from "next";
import "./globals.css";

// font Exo
import { Exo } from "next/font/google";

// Authenication Middleware
import {
    ClerkProvider,
    // SignInButton,
    // SignUpButton,
    // SignedIn,
    // SignedOut,
    // UserButton,
} from "@clerk/nextjs";

// All Components
import HomeNavBar from "../components/HomeNavBar";
import HomeSideBar from "@/components/HomeSideBar";
// Import ContextProvider from its module (update the path if needed)
// Update the import path if the ContextProvider is located elsewhere, for example:

const exo = Exo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "UniCanteen",
    description: "UIU Canteen Management System",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={exo.className}>
                    <HomeNavBar />
                    <div className="flex">
                        <HomeSideBar />
                        <div className="w-full overflow-x-auto bg-gray-200">
                            <div className="sm:h-[calc(99vh-60px] overflow auto)">
                                <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100-vh-120px)] overflow-y-auto relative">
                                    <div className="w-full md:max-w-6xl">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
