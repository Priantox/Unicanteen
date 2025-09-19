// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Search,
//   Filter,
//   Download,
//   MoreVertical,

// } from "lucide-react";


// const products = [
//   {
//     id: 1,
//     name: "Beef onion pizza",
//     image: "https://via.placeholder.com/40x40.png?text=🍕",
//     category: "Pizza",
//     price: "৳204",
//     status: "In Stock",
//   },
//   {
//     id: 2,
//     name: "Cheese Pizza",
//     image: "https://via.placeholder.com/40x40.png?text=🧀",
//     category: "Pizza",
//     price: "৳254",
//     status: "Stock Out",
//   },
//   {
//     id: 3,
//     name: "Chicken burger",
//     image: "https://via.placeholder.com/40x40.png?text=🍔",
//     category: "Burger",
//     price: "৳50",
//     status: "Stock Out",
//   },
//   {
//     id: 4,
//     name: "Beef burger",
//     image: "https://via.placeholder.com/40x40.png?text=🍔",
//     category: "Burger",
//     price: "৳60",
//     status: "In Stock",
//   },
//   {
//     id: 5,
//     name: "Beef special pizza",
//     image: "https://via.placeholder.com/40x40.png?text=🍕",
//     category: "Pizza",
//     price: "৳204",
//     status: "In Stock",
//   },
//   {
//     id: 6,
//     name: "Cheese Pizza",
//     image: "https://via.placeholder.com/40x40.png?text=🧀",
//     category: "Appetizer",
//     price: "৳204",
//     status: "Stock Out",
//   },
// ];

// const FoodAvailabilityPage = () => {

//   return (
//     <div className="p-4 md:p-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
//         <span className="bg-amber-400 w-2 h-7 rounded-1.5xl"></span>
//         <h2 className="text-xl font-semibold mr-250 flex-none">
//           Staff Lists
//         </h2>
//         <div className="flex items-center gap-2">
//           <div className="relative">
//             <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="pl-8 pr-3 py-2 border rounded-md text-sm w-40 md:w-60"
//             />
//           </div>
//           <button className="flex items-center gap-1 px-3 py-2 border rounded-md text-sm">
//             <Filter className="w-4 h-4" /> Filter
//           </button>

//           <button className="flex justify-center items-center text-white bg-chart-4 w-23 gap-1 px-3 py-2 border rounded-md text-sm">
//             Add Rider
//           </button>
//           <button className="flex items-center gap-1 px-3 py-2 border rounded-md text-sm">
//             <Download className="w-4 h-4" /> Export
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-50 text-left">
//             <tr className="text-[20px] font-bold">
//               <th className="px-4 py-3">#</th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Image</th>
//               <th className="px-4 py-3">Category</th>
//               <th className="px-4 py-3">Price</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((item, idx) => (
//               <tr
//                 key={item.id}
//                 className="border-t hover:bg-gray-50 transition"
//               >
//                 <td className="px-4 py-3">{idx + 1}</td>
//                 <td className="px-4 py-3">{item.name}</td>
//                 <td className="px-4 py-3">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-10 h-10 rounded-md object-cover"
//                   />
//                 </td>
//                 <td className="px-4 py-3">{item.category}</td>
//                 <td className="px-4 py-3">{item.price}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`${item.status === "In Stock"
//                       ? "text-green-600"
//                       : "text-red-600"
//                       } font-medium`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">
//                   <button>
//                     <MoreVertical className="w-5 h-5 text-gray-600" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FoodAvailabilityPage;

// app/riders/page.tsx (Next.js App Router) 
// or pages/riders.tsx (Next.js Pages Router)

"use client"; // only if using App Router

import Image from "next/image";
import { MoreVertical, Download, Search, Filter } from "lucide-react";

const riders = [
  {
    name: "Ayesha Siddiqua",
    photo: "/images/riders/ayesha.jpg",
    phone: "880160000770",
    shift: "10:00 AM - 3:00 PM",
    address: "Asafotse Nettey Road, Accra",
  },
  {
    name: "Mehrin Khan",
    photo: "/images/riders/mehrin.jpg",
    phone: "880160000770",
    shift: "10:00 AM - 3:00 PM",
    address: "Bantuma Road, Elmina",
  },
  {
    name: "Abdul Rahman",
    photo: "/images/riders/abdul.jpg",
    phone: "880160000770",
    shift: "10:00 AM - 3:00 PM",
    address: "Cantonments Road, Osu",
  },
  {
    name: "Rafiq Ahmed",
    photo: "/images/riders/rafiq.jpg",
    phone: "880160000770",
    shift: "10:00 AM - 3:00 PM",
    address: "Asafotse Nettey Road, Accra",
  },
  {
    name: "Hasan Mahmud",
    photo: "/images/riders/hasan.jpg",
    phone: "880160000770",
    shift: "10:00 AM - 3:00 PM",
    address: "Major Kobbina Drive, Kumasi",
  },
  {
    name: "Nazmul Hossain",
    photo: "/images/riders/nazmul.jpg",
    phone: "880160000770",
    shift: "10:00 AM - 3:00 PM",
    address: "Rain Tree Street, Kumasi",
  },
];

export default function RidersTable() {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <span className="bg-amber-400 w-2 h-7 rounded-1.5xl"></span>
        <h2 className="text-xl font-semibold mr-250 flex-none">
          Staff Lists
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

          <button className="flex justify-center items-center text-white bg-chart-4 w-23 gap-1 px-3 py-2 border rounded-md text-sm">
            Add Rider
          </button>
          <button className="flex items-center gap-1 px-3 py-2 border rounded-md text-sm">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="border-b bg-gray-50 text-left  font-semibold uppercase text-black text-[18px]">
              <th className="px-4 py-3">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-4 py-3">Rider Name</th>
              <th className="px-4 py-3">Photo</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Shift</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-4 py-3 text-gray-400 font-medium">
                  {rider.name}
                </td>
                <td className="px-4 py-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={rider.photo}
                      alt={rider.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-4 py-3">{rider.phone}</td>
                <td className="px-4 py-3">{rider.shift}</td>
                <td className="px-4 py-3">{rider.address}</td>
                <td className="px-4 py-3 text-right">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreVertical size={18} className="mr-3"/>
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
