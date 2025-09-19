"use client"

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { CanteenDetails } from "@/types/canteen";

import { UserPlus, MapPin, User, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";

export default function CanteenHome() {
    // const { userId } = useAuth();

    // const [canteenDetails, setCanteenDetails] = useState<CanteenDetails | null>(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchCanteenDetails = async () => {
    //         try {
    //             const response = await fetch('/api/canteen-home/canteen-info');
    //             console.log("Response:", response);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch canteen details');
    //                 // console.error('Failed to fetch canteen details', await response.text());
    //             }
    //             const data = await response.json();
    //             setCanteenDetails(data);
    //         } catch (err) {
    //             setError(err instanceof Error ? err.message : 'An error occurred');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (userId) {
    //         fetchCanteenDetails();
    //     }
    // }, [userId]);


    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    // if (!canteenDetails) {
    //     return (
    //         <div className="p-6">
    //             <h1 className="text-2xl font-bold mb-4">No Canteen Found</h1>
    //             <p>Please contact an administrator to set up your canteen.</p>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="p-6">
    //         <h1 className="text-2xl font-bold mb-4">{canteenDetails.name} Dashboard</h1>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div className="p-4 border rounded-lg">
    //                 <div className="relative w-full h-48 rounded mb-4">
    //                     <Image
    //                         src={canteenDetails.canteen_image || '/default-canteen.jpg'}
    //                         alt={`${canteenDetails.name} image`}
    //                         fill
    //                         className="object-cover rounded"
    //                     />
    //                 </div>
    //                 <p>Created: {new Date(canteenDetails.createdAt).toLocaleDateString()}</p>
    //             </div>
    //             <div className="p-4 border rounded-lg">
    //                 <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
    //                 {/* <p>Total Menu Items: {canteenDetails.CanteenFood.length}</p> */}
    //                 {/* <p>Total Reviews: {canteenDetails.reviews.length}</p> */}
    //             </div>
    //         </div>
    //     </div>
    // );

    const stats = [
        { title: "Customers", value: "2.14K", change: "↑ 5.5% Since Last Week", color: "text-green-500", icon: <User size={24} /> },
        { title: "Per Day Orders", value: "214.00", change: "↑ 4.2% Since Last Week", color: "text-green-500", icon: <ShoppingCart size={24} /> },
        { title: "Total Income", value: "৳34200.247", change: "↑ 6.5% Since Last Week", color: "text-green-500", icon: <DollarSign size={24} /> },
        { title: "Total Employees", value: "100", change: "↑ 2% Since Last Week", color: "text-green-500", icon: <TrendingUp size={24} /> },
    ];

    const orders = [
        { id: "#1452", time: "3:29 PM", location: "132, first Street", status: "Delivered" },
        { id: "#1453", time: "3:23 PM", location: "33, Palm Street", status: "Canceled" },
        { id: "#1454", time: "3:08 PM", location: "14, West Street", status: "On Delivery" },
        { id: "#1455", time: "2:48 PM", location: "124, Green Ave.", status: "Delivered" },
    ];

    const topSelling = [
        { name: "Chees Burger", count: 150, img: "https://via.placeholder.com/40" },
        { name: "Pizza Peperoni", count: 120, img: "https://via.placeholder.com/40" },
        { name: "Pizza Steake", count: 110, img: "https://via.placeholder.com/40" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered": return "bg-green-100 text-green-600";
            case "Canceled": return "bg-red-100 text-red-600";
            case "On Delivery": return "bg-blue-100 text-blue-600";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    const deliveryBoys = [
        { id: 1, name: "Mominul", phone: "01622365202", address: "10/3 mirpur road", status: "ACTIVE" },
        { id: 2, name: "Mehran", phone: "01343767544", address: "10/4 mirpur road", status: "ACTIVE" },
        { id: 3, name: "Mehran", phone: "01715190747", address: "10/5 mirpur road", status: "OFFLINE" },
    ];

    const getDeliveryStatusColor = (status: string) => {
        switch (status) {
            case "ACTIVE":
                return "bg-green-500 text-white";
            case "OFFLINE":
                return "bg-gray-500 text-white";
            default:
                return "bg-gray-300 text-black";
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((item, idx) => (
                    <div key={idx} className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">{item.icon}</span>
                            <h3 className="text-gray-600">{item.title}</h3>
                        </div>
                        <h2 className="text-2xl font-bold">{item.value}</h2>
                        <p className={`text-sm ${item.color}`}>{item.change}</p>
                    </div>
                ))}
            </div>

            {/* Orders + Top Selling */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Orders Table */}
                <div className="bg-white shadow rounded-xl p-4 col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Last Orders</h2>
                        <button className="text-blue-500 text-sm">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b text-gray-600">
                                    <th className="py-2">Order ID</th>
                                    <th className="py-2">O.Time</th>
                                    <th className="py-2">Location</th>
                                    <th className="py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, idx) => (
                                    <tr key={idx} className="border-b last:border-0">
                                        <td className="py-2">{order.id}</td>
                                        <td className="py-2">{order.time}</td>
                                        <td className="py-2">{order.location}</td>
                                        <td className="py-2">
                                            <span
                                                className={`px-3 py-1 rounded-lg text-sm w-28 text-center inline-block ${getStatusColor(order.status)}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

                {/* Top Selling */}
                <div className="bg-white shadow rounded-xl p-4">
                    <h2 className="text-lg font-semibold mb-4">Top Selling Item</h2>
                    <p className="text-gray-500 text-sm mb-4">The top ordered menu this week</p>
                    <ul className="space-y-4">
                        {topSelling.map((item, idx) => (
                            <li key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                                    <span>{item.name}</span>
                                </div>
                                <span className="font-semibold">{item.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Delivery Boy */}
            <div className="p-6 bg-white rounded-lg shadow mt-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Delivery Boy</h2>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-orange-400 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-500">
                            <UserPlus size={16} />
                            ADD DELIVERY BOY
                        </button>

                        <button className="flex justify-center items-center w-31 pr-6 h-10 gap-2 bg-orange-400 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-500">
                            <MapPin size={16} />
                            TRACK
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 px-3 text-left">#</th>
                                <th className="py-2 px-3 text-left">Name</th>
                                <th className="py-2 px-3 text-left">Phone Number</th>
                                <th className="py-2 px-3 text-left">Address</th>
                                <th className="py-2 px-3 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deliveryBoys.map((boy) => (
                                <tr key={boy.id} className="border-b last:border-0">
                                    <td className="py-2 px-3">{boy.id}</td>
                                    <td className="py-2 px-3">{boy.name}</td>
                                    <td className="py-2 px-3">{boy.phone}</td>
                                    <td className="py-2 px-3">{boy.address}</td>
                                    <td className="py-2 px-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold w-20 text-center inline-block ${getDeliveryStatusColor(
                                                boy.status
                                            )}`}
                                        >
                                            {boy.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}