"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Bell, Search, ShoppingCart } from "lucide-react";

export default function CusNavBar() {
    return (
        <nav className="bg-white dark:bg-gray-800 border-b h-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link 
                            href="/customer" 
                            className="text-xl font-bold text-gray-800 dark:text-white"
                        >
                            UniCanteen
                        </Link>
                    </div>

                    {/* Right Side Items */}
                    <div className="flex items-center space-x-4">
                        {/* Cart */}
                        <Link href="/customer-home/cart" className="relative">
                            <ShoppingCart className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                2
                            </span>
                        </Link>

                        {/* Notifications */}
                        <button className="relative">
                            <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* User Profile */}
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>
        </nav>
    );
}