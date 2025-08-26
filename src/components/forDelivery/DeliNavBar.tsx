"use client";

import { UserButton } from "@clerk/nextjs";
import { Bell, Package, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DeliNavBar() {
    const pathname = usePathname();

    return (
        <nav className="bg-white dark:bg-gray-800 border-b">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link 
                            href="/delivery" 
                            className="text-xl font-bold text-gray-800 dark:text-white"
                        >
                            UniCanteen Delivery
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/delivery-home/active-orders"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${
                                pathname === '/delivery/active-orders'
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-600 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <Package className="w-5 h-5 inline-block mr-1" />
                            Active Orders
                        </Link>
                        <Link
                            href="/delivery-home/tracking"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${
                                pathname === '/delivery/tracking'
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-600 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <MapPin className="w-5 h-5 inline-block mr-1" />
                            Live Tracking
                        </Link>
                    </div>

                    {/* Right Side Items */}
                    <div className="flex items-center space-x-4">
                        {/* Notifications */}
                        <button className="relative p-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                3
                            </span>
                        </button>

                        {/* User Profile Button */}
                        <UserButton 
                            afterSignOutUrl="/sign-in"
                            appearance={{
                                elements: {
                                    avatarBox: "w-8 h-8"
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}