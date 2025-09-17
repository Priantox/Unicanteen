import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import {
    ArrowUpDown,
    Ban,
    HandCoins,
    Wallet,
    Search,
    Package,
    Clock,
    MapPin,
    Settings,
    Play,
} from "lucide-react";
import prisma from "@/lib/prisma";

const DeliveryHome = async () => {
    const user = await currentUser();
    console.log("Current User:", user);

    if (!user) {
        return <div>User not found</div>;
    }

    const userData = {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        name: user.firstName + " " + user.lastName,
        phone: user.phoneNumbers[0]?.phoneNumber || "",
        userRole: "DELIVERY_PERSON" as const,
        studentId: "",
    };
    // console.log("User Data to Set:", userData);

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { id: user.id },
        });

        if (existingUser) {
            console.log(`User with ID ${user.id} already exists.`);
            // User exists, continue to render the page
        } else {
            // Create new user
            const newUser = await prisma.user.create({
                data: userData,
            });

            console.log(`User with ID ${user.id} created successfully.`);
        }
    } catch (error) {
        console.error("Error setting user data to DB:", error);
        throw error;
    }

    return (
        <div className="p-4">
            <div className="flex justify-between p-4 bg-white rounded-sm mx-20">
                <div className="flex items-center gap-2 shadow-lg p-4">
                    <ArrowUpDown className="border rounded-full border-orange-500 text-orange-500 h-16 w-16 p-2" />
                    <div>
                        <h2>Total Orders</h2>
                        <h1>50</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2 shadow-lg p-4">
                    <Wallet className="border rounded-full border-orange-500 text-orange-500 h-16 w-16 p-2" />
                    <div>
                        <h2>Total Collections</h2>
                        <h1>5000 BDT </h1>
                    </div>
                </div>

                <div className="flex items-center gap-2 shadow-lg p-4">
                    <HandCoins className="border rounded-full border-orange-500 text-orange-500 h-16 w-16 p-2" />
                    <div>
                        <h2>Total Profit</h2>
                        <h1>999 BDT </h1>
                    </div>
                </div>
                <div className="flex items-center gap-2 shadow-lg p-4">
                    <Ban className="border rounded-full border-orange-500 text-orange-500 h-16 w-16 p-2" />
                    <div>
                        <h2>Order Cancelled</h2>
                        <h1>33 </h1>
                    </div>
                </div>
            </div>

            {/* Orders Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mx-20">
                {/* Recent Ongoing Orders */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Recent Ongoing Orders
                        </h2>
                        <div className="flex items-center gap-2">
                            <button className="text-gray-600 hover:text-gray-800">
                                All
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Order Card 1 - Active */}
                    <div className="border-2 border-orange-300 rounded-lg p-4 mb-4 bg-orange-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Package className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-orange-600">
                                    Delivery Food to Parvez Hossain
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>5:30hrs</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>OlympiaCafe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Card 2 */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Package className="w-6 h-6 text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">
                                    Delivery Food to Adnan Hossain
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>4:00hrs</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>KhansKitchen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Orders */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Upcoming Orders
                    </h2>

                    {/* Upcoming Order 1 */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Settings className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Olympia Delivery Food
                                </h3>
                                <p className="text-sm text-gray-600">5:30pm</p>
                            </div>
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
                            Take
                        </button>
                    </div>

                    {/* Upcoming Order 2 */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Settings className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    KhansKitchen : Fried Rice Deliver
                                </h3>
                                <p className="text-sm text-gray-600">9:00pm</p>
                            </div>
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
                            Take
                        </button>
                    </div>
                </div>
            </div>

            {/* Notifications & Alerts */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6 mx-20">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        Notifications & Alerts
                    </h2>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded">
                        <span className="text-sm text-gray-600 font-medium">
                            1.
                        </span>
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">Mst. Ayesha</span> has
                            sent urgent messages!
                        </p>
                        <Play className="w-4 h-4" />
                    </div>

                    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded">
                        <span className="text-sm text-gray-600 font-medium">
                            2.
                        </span>
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">OlympiaCafe</span>{" "}
                            requested to check the food before delivery!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryHome;
