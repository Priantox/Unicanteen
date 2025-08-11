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
import NavBarNoLogged from "../components/NavBarNoLogged";

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
                    <NavBarNoLogged />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
