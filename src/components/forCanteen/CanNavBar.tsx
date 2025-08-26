import Link from "next/link";
import React from "react";

// Notification Icon add
import { BellIcon } from "@heroicons/react/24/outline";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

const CanNavBar = () => {
    return (
        <header className="flex justify-between p-4 bg-amber-100">
            <div className="text-2xl font-bold py-1">
                <Link href="/">UNICANTEEN LOGO</Link>
            </div>
            <div>
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-96 border border-red-300 rounded-3xl px-3 py-1 focus:outline-none focus:border-red-500"
                />
            </div>
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

export default CanNavBar;
