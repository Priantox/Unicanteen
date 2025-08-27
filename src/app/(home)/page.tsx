"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Utensils } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import { useRouter } from "next/navigation";

const Home = () => {


    // const router = useRouter();
    // useEffect(() => {

    //     const checkAndRedirect = async () => {
    //         try {
    //             const response = await fetch('/api/auth/role');
    //             const data = await response.json();
    //             console.log("Role from API in Home:", data.role);
                
    //             if (data.role === "CUSTOMER") {
    //                 router.push("/customer-home");
    //             } else if (data.role === "CANTEEN_OWNER") {
    //                 router.push("/canteen-home");
    //             } else if (data.role === "DELIVERY_PERSON") {
    //                 router.push("/delivery-home");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching role:", error);
    //         }
    //     };

    //     checkAndRedirect();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []); // No error bruh

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "center",
            loop: true,
        },
        [
            Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const featuredItems = [
        {
            name: "Cheese Loaded Pizza",
            image: "/images/pizza.jpg",
            price: "450",
            description: "Fresh from our oven",
            shop: "Neptune Cafe",
        },
        {
            name: "Special Biryani",
            image: "/images/biryani.jpg",
            price: "180",
            description: "Authentic flavor",
            shop: "Khans Kitchen",
        },
        {
            name: "Double Beef Burger",
            image: "/images/burger.jpg",
            price: "250",
            description: "With extra cheese",
            shop: "Olympia Cafe",
        },
    ];

    const popularItems = [
        {
            name: "Club Sandwich",
            image: "/images/sandwich.jpg",
            price: "120",
            shop: "Olympia Cafe",
            rating: "4.5",
            available: true,
        },
        // Add more items as needed
    ];

    const canteens = [
        {
            name: "Olympia Cafe",
            image: "/images/olympia.jpg",
            location: "North Campus",
            rating: "4.5",
            href: "/olympia-cafe",
            isOpen: true,
        },
        {
            name: "Khans Kitchen",
            image: "/images/khans.jpg",
            location: "South Campus",
            rating: "4.3",
            href: "/khans-kitchen",
            isOpen: true,
        },
        {
            name: "Neptune Cafe",
            image: "/images/neptune.jpg",
            location: "East Campus",
            rating: "4.4",
            href: "/neptune-cafe",
            isOpen: false,
        },
    ];

    return (
        <div className="flex-1 h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Welcome to UniCanteen
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Order from your favorite campus restaurants
                    </p>
                </div>

                {/* Featured Items Carousel */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                        Featured Items
                    </h2>
                    <div className="relative">
                        <div
                            className="overflow-hidden rounded-xl"
                            ref={emblaRef}
                        >
                            <div className="flex">
                                {featuredItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-[0_0_100%] min-w-0"
                                    >
                                        <div className="relative h-[400px] rounded-xl overflow-hidden">
                                            {/* <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            /> */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <p className="text-lg font-medium text-gray-200">
                                                    {item.shop}
                                                </p>
                                                <h3 className="text-3xl font-bold mt-2">
                                                    {item.name}
                                                </h3>
                                                <p className="text-lg mt-2 text-gray-200">
                                                    {item.description}
                                                </p>
                                                <p className="text-2xl font-bold mt-3 text-green-400">
                                                    ৳{item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={scrollPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>
                    </div>
                </div>

                {/* Popular Items Grid */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                        Popular Right Now
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {popularItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                            >
                                <div className="relative h-40">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {!item.available && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white font-medium">
                                                Sold Out
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {item.shop}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <Star
                                                size={14}
                                                className="text-yellow-400"
                                            />
                                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                                                {item.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <span className="font-bold text-green-600 dark:text-green-400">
                                            ৳{item.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Canteens Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {canteens.map((canteen) => (
                        <Link
                            href={canteen.href}
                            key={canteen.name}
                            className="block group"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105">
                                <div className="relative h-48 w-full">
                                    {/* <Image
                                        src={canteen.image}
                                        alt={canteen.name}
                                        fill
                                        className="object-cover"
                                    /> */}
                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                canteen.isOpen
                                                    ? "bg-green-500 text-white"
                                                    : "bg-red-500 text-white"
                                            }`}
                                        >
                                            {canteen.isOpen ? "Open" : "Closed"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {canteen.name}
                                        </h3>
                                        <div className="flex items-center">
                                            <Star
                                                size={16}
                                                className="text-yellow-400 mr-1"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {canteen.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                                        <Utensils size={16} className="mr-2" />
                                        <span>{canteen.location}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    Developed by @parvezhossainme
                </div> */}
            </div>
        </div>
    );
};

export default Home;

// import React from "react";

// const Home = () => {
//     return (
//         <div>
//             <h1 className="mt-10"> Welcome to UniCanteen ; Developed via @parvezhossainme </h1>
//         </div>
//     );
// };

// export default Home;
