"use client";
// import { changeFoodAvailability } from "@/actions/canteen/canteen.action";
// import { Button } from "@/components/ui/button";
// import { CanteenFood } from "@/types/food";
import React, { useEffect, useRef, useState } from "react";
import {
    Search,
    Filter,
    Download,
    MoreVertical,
} from "lucide-react";

{/* Parvez part */ }
// const FOOD_CATEGORIES = [
//     "POPULAR",
//     "BREAKFAST",
//     "LUNCH",
//     "DINNER",
//     "FAST_FOOD",
//     "DESSERT",
//     "BEVERAGE",
//     "SNACK",
//     "RICE_ITEMS",
//     "DRINKS",
//     "PACKET_ITEMS",
//     "OTHERS",
//     "MEAT_ITEMS",
// ];

// import { FoodCategory } from "@prisma/client";
// const FOOD_CATEGORIES: FoodCategory[] = [
//     "POPULAR",
//     "BREAKFAST",
//     "LUNCH",
//     "DINNER",
//     "FAST_FOOD",
//     "DESSERT",
//     "BEVERAGE",
//     "SNACK",
//     "RICE_ITEMS",
//     "DRINKS",
//     "PACKET_ITEMS",
//     "OTHERS",
//     "MEAT_ITEMS",
// ];

// type FilterType = FoodCategory | "ALL";
{/* */ }

const products = [
    {
        id: 1,
        name: "Beef onion pizza",
        image: "https://via.placeholder.com/40x40.png?text=🍕",
        category: "Pizza",
        price: "৳204",
        status: "In Stock",
    },
    {
        id: 2,
        name: "Cheese Pizza",
        image: "https://via.placeholder.com/40x40.png?text=🧀",
        category: "Pizza",
        price: "৳254",
        status: "Stock Out",
    },
    {
        id: 3,
        name: "Chicken burger",
        image: "https://via.placeholder.com/40x40.png?text=🍔",
        category: "Burger",
        price: "৳50",
        status: "Stock Out",
    },
    {
        id: 4,
        name: "Beef burger",
        image: "https://via.placeholder.com/40x40.png?text=🍔",
        category: "Burger",
        price: "৳60",
        status: "In Stock",
    },
    {
        id: 5,
        name: "Beef special pizza",
        image: "https://via.placeholder.com/40x40.png?text=🍕",
        category: "Pizza",
        price: "৳204",
        status: "In Stock",
    },
    {
        id: 6,
        name: "Cheese Pizza",
        image: "https://via.placeholder.com/40x40.png?text=🧀",
        category: "Appetizer",
        price: "৳204",
        status: "Stock Out",
    },
];

const FoodAvailabilityPage = () => {
    {/* Parvez part */ }
    // const [foods, setFoods] = useState<CanteenFood[]>([]);
    // const [loading, setLoading] = useState(true);
    // // const [filter, setFilter] = useState<string>("ALL");
    // const [filter, setFilter] = useState<FilterType>("ALL");
    // const formRef = useRef<HTMLFormElement>(null);

    // useEffect(() => {
    //     const fetchFoods = async () => {
    //         try {
    //             const res = await fetch("/api/canteen-home/all-foods/");
    //             const data: CanteenFood[] = await res.json();
    //             setFoods(data);
    //         } catch (err) {
    //             console.error("Failed to fetch foods:", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchFoods();
    // }, []);

    // // Filter foods by selected category
    // const filteredFoods =
    //     filter === "ALL"
    //         ? foods
    //         : foods.filter(
    //             (food) =>
    //                 Array.isArray(food.category) &&
    //                 food.category.includes(filter as FoodCategory)
    //         );

    // return (
    //     <div className="p-6 max-w-3xl mx-auto">
    //         <h1 className="text-3xl font-bold mb-8 text-center">
    //             Food Availability
    //         </h1>
    //         <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
    //             <label htmlFor="category-filter" className="font-medium">
    //                 Filter by Category:
    //             </label>
    //             <select
    //                 id="category-filter"
    //                 value={filter}
    //                 onChange={(e) => setFilter(e.target.value as FilterType)}
    //                 className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
    //             >
    //                 <option value="ALL">All</option>
    //                 {FOOD_CATEGORIES.map((cat) => (
    //                     <option key={cat} value={cat}>
    //                         {cat.replace(/_/g, " ")}
    //                     </option>
    //                 ))}
    //             </select>
    //         </div>
    //         {loading ? (
    //             <div className="flex flex-col items-center justify-center h-64">
    //                 <div className="animate-spin rounded-full h-16 w-16 border-t-4  border-b-4 border-gray-200 mb-4"></div>
    //                 <p className="text-lg text-gray-500">
    //                     Loading food items...
    //                 </p>
    //             </div>
    //         ) : (
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //                 {filteredFoods.map((food) => (
    //                     <form
    //                         ref={formRef}
    //                         key={food.id}
    //                         action={async () => {
    //                             await changeFoodAvailability(
    //                                 food.id,
    //                                 food.canteenId,
    //                                 food.availability
    //                             );
    //                             const res = await fetch(
    //                                 "/api/canteen-home/all-foods/"
    //                             );
    //                             const updatedFoods: CanteenFood[] =
    //                                 await res.json();
    //                             setFoods(updatedFoods);
    //                         }}
    //                         className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-3 border hover:shadow-lg transition"
    //                     >
    //                         <div className="flex items-center justify-between">
    //                             <span className="text-lg font-semibold">
    //                                 {food.name}
    //                             </span>
    //                             <span
    //                                 className={`px-3 py-1 rounded-full text-xs font-bold ${food.availability
    //                                         ? "bg-green-100 text-green-700"
    //                                         : "bg-red-100 text-red-700"
    //                                     }`}
    //                             >
    //                                 {food.availability
    //                                     ? "Available"
    //                                     : "Not Available"}
    //                             </span>
    //                         </div>
    //                         <div className="flex flex-wrap gap-2 my-2">
    //                             {Array.isArray(food.category) &&
    //                                 food.category.map((cat) => (
    //                                     <span
    //                                         key={cat}
    //                                         className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
    //                                     >
    //                                         {cat.replace(/_/g, " ")}
    //                                     </span>
    //                                 ))}
    //                         </div>
    //                         <div className="text-sm text-gray-600">
    //                             <span className="font-semibold">Stocks:</span>{" "}
    //                             {food.stocks}
    //                         </div>
    //                         <Button
    //                             type="submit"
    //                             className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
    //                         >
    //                             Toggle Availability
    //                         </Button>
    //                     </form>
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // );
    {/* */ }


    return (
        <div className="p-4 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <span className="bg-amber-400 w-2 h-7 rounded-1.5xl"></span>
                <h2 className="text-xl font-semibold mr-285">
                    Lists
                </h2>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-8 pr-3 py-2 border rounded-md text-sm w-40 md:w-60"
                        />
                    </div>
                    <button className="flex items-center gap-1 px-3 py-2 border rounded-md text-sm">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 border rounded-md text-sm">
                        <Download className="w-4 h-4" /> Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-left">
                        <tr className="text-[20px] font-bold">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, idx) => (
                            <tr
                                key={item.id}
                                className="border-t hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3">{idx + 1}</td>
                                <td className="px-4 py-3">{item.name}</td>
                                <td className="px-4 py-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-md object-cover"
                                    />
                                </td>
                                <td className="px-4 py-3">{item.category}</td>
                                <td className="px-4 py-3">{item.price}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`${item.status === "In Stock"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            } font-medium`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <button>
                                        <MoreVertical className="w-5 h-5 text-gray-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodAvailabilityPage;
