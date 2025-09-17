import Link from "next/link";
import React from "react";
import Image from "next/image";

// Notification Icon add
import { BellIcon } from "@heroicons/react/24/outline";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

const HomeNavBar = () => {
    return (
        <header className="flex justify-between p-2 bg-amber-100 h-20">
            <Link href="/">
                <Image
                    src="/UniCanteen_L.png"
                    alt="UniCanteen Logo"
                    className="object-cover h-20"
                    width={300}
                    height={5}
                />
            </Link>

            <nav className="flex items-center">
                <BellIcon className="text-red-700 mr-4 border rounded-full h-10 w-10 p-1 " />
                <ul className="flex gap-4">
                    <li>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="signBtn">Sign In</button>
                            </SignInButton>
                        </SignedOut>
                    </li>
                    <li>
                        <SignedOut>
                            <SignUpButton mode="modal">
                                <button className="signBtn">Sign Up</button>
                            </SignUpButton>
                        </SignedOut>
                    </li>
                    <li>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "h-48 w-48",
                                    },
                                }}
                                showName={true}
                            />
                        </SignedIn>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HomeNavBar;
