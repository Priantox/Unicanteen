"use client";

import Image from "next/image";
import { MoreVertical, Search, Filter, Download } from "lucide-react";
import { useState } from "react";

const orders = [
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/dianne.jpg",
    price: "৳ 90.00",
    status: "Preparing",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/leslie.jpg",
    price: "৳ 75.00",
    status: "Preparing",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/ralph.jpg",
    price: "৳ 110.00",
    status: "On The Way",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/jane.jpg",
    price: "৳ 80.00",
    status: "Preparing",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/kathryn.jpg",
    price: "৳ 80.00",
    status: "On The Way",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/jenny.jpg",
    price: "৳ 30.00",
    status: "Preparing",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/jacob.jpg",
    price: "৳ 70.00",
    status: "Preparing",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/courtney.jpg",
    price: "৳ 60.00",
    status: "On The Way",
  },
  {
    id: "B13789",
    date: "Feb 08, 2022",
    Details: "Beef onion pizza (2x), Beef burger... ",
    photo: "/images/customers/floyd.jpg",
    price: "৳ 79.00",
    status: "On The Way",
  },
];

const statusColors: Record<string, string> = {
  Preparing: "text-blue-500",
  Delivered: "text-green-600",
  Cancelled: "text-red-500",
};

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <span className="bg-amber-400 w-2 h-7 rounded-1.5xl"></span>
        <h2 className="text-lg font-semibold ml-[-1070px]">
          Completed Orders
        </h2>
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center gap-2 ml-auto">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-1.5 border rounded-lg text-sm focus:outline-none"
              />
            </div>
            <button className="px-3 py-1.5 border rounded-lg flex items-center gap-1">
              <Filter size={16} /> Filter
            </button>
            <button className="px-3 py-1.5 border rounded-lg flex items-center gap-1 bg-gray-300">
              <Download size={16} /> Export
            </button>
          </div>
        </div>
      </div>

      {/* 3 BUTTONS */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setActiveTab("All")}
          className={`px-3 py-1.5 border rounded-lg font-medium ${
            activeTab === "All"
              ? "bg-yellow-100 text-yellow-700"
              : "text-gray-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("This Week")}
          className={`px-3 py-1.5 border rounded-lg ${
            activeTab === "This Week"
              ? "bg-yellow-100 text-yellow-700 font-medium"
              : "text-gray-600"
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => setActiveTab("This Month")}
          className={`px-3 py-1.5 border rounded-lg ${
            activeTab === "This Month"
              ? "bg-yellow-100 text-yellow-700 font-medium"
              : "text-gray-600"
          }`}
        >
          This Month
        </button>

        <button
          onClick={() => setActiveTab("This Year")}
          className={`px-3 py-1.5 border rounded-lg ${
            activeTab === "This Year"
              ? "bg-yellow-100 text-yellow-700 font-medium"
              : "text-gray-600"
          }`}
        >
          This Year
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500">
              <th className="px-4 py-3">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  
                  {order.Details}
                </td>
                <td className="px-4 py-3">{order.price}</td>
                <td
                  className={`px-4 py-3 font-medium ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
