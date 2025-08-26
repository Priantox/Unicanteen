import { usePathname } from "next/navigation";
import {
    Home,
    Settings,
    User,
    FileText,
    Languages,
    Star,
    Utensils,
} from "lucide-react";

export const HomeNavItems = () => {
    const pathname = usePathname();

    function isNavItemActive(pathname: string, nav: string) {
        return pathname.includes(nav);
    }

    return [
        {
            section: "DASHBOARD",
            items: [
                {
                    name: "Canteens",
                    href: "/",
                    icon: <Home size={20} />,
                    active: pathname === "/",
                    subItems: [
                        {
                            name: "OlympiaCafe",
                            href: "/olympia-cafe",
                            icon: <Utensils size={18} />,
                            active: isNavItemActive(pathname, "/olympia-cafe"),
                        },
                        {
                            name: "KhansKitchen",
                            href: "/khans-kitchen",
                            icon: <Utensils size={18} />,
                            active: isNavItemActive(pathname, "/khans-kitchen"),
                        },
                        {
                            name: "NeptuneCafe",
                            href: "/neptune-cafe",
                            icon: <Utensils size={18} />,
                            active: isNavItemActive(pathname, "/neptune-cafe"),
                        },
                    ],
                },
                {
                    name: "Reports",
                    href: "/reports",
                    icon: <FileText size={20} />,
                    active: isNavItemActive(pathname, "/reports"),
                },
            ],
        },
        {
            section: "COMMUNICATION",
            items: [
                {
                    name: "Top Snacks",
                    href: "/snacks",
                    icon: <Star size={20} />,
                    active: isNavItemActive(pathname, "/snacks"),
                },
                {
                    name: "Reviews",
                    href: "/reviews",
                    icon: <User size={20} />,
                    active: isNavItemActive(pathname, "/reviews"),
                },
            ],
        },
        {
            section: "SETTINGS",
            items: [
                {
                    name: "Language",
                    href: "/language",
                    icon: <Languages size={20} />,
                    active: isNavItemActive(pathname, "/language"),
                },
                {
                    name: "Settings",
                    href: "/settings",
                    icon: <Settings size={20} />,
                    active: isNavItemActive(pathname, "/settings"),
                },
            ],
        },
    ];
};

// Delivery SideBar Items
export const DeliNavItems = () => {
    const pathname = usePathname();
    function isNavItemActive(pathname: string, nav: string) {
        return pathname.includes(nav);
    }

    return [
        {
            section: "DASHBOARD",
            items: [
                {
                    name: "Orders",
                    href: "/delivery/orders",
                    icon: <FileText size={20} />,
                    active: isNavItemActive(pathname, "/delivery/orders"),
                },
                {
                    name: "Tracking",
                    href: "/delivery/tracking",
                    icon: <User size={20} />,
                    active: isNavItemActive(pathname, "/delivery/tracking"),
                },
            ],
        },
        {
            section: "SETTINGS",
            items: [
                {
                    name: "Language",
                    href: "/language",
                    icon: <Languages size={20} />,
                    active: isNavItemActive(pathname, "/language"),
                },
                {
                    name: "Settings",
                    href: "/settings",
                    icon: <Settings size={20} />,
                    active: isNavItemActive(pathname, "/settings"),
                },
            ],
        },
    ];
};
// Customer SideBar Items
export const CustomerNavItems = () => {
    const pathname = usePathname();
    function isNavItemActive(pathname: string, nav: string) {
        return pathname.includes(nav);
    }

    return [
        {
            section: "DASHBOARD",
            items: [
                {
                    name: "Home",
                    href: "/customer-home/home",
                    icon: <Home size={20} />,
                    active: pathname === "/customer-home/home",
                },
                {
                    name: "Orders",
                    href: "/customer-home/orders",
                    icon: <FileText size={20} />,
                    active: isNavItemActive(pathname, "/customer-home/orders"),
                },
            ],
        },
        {
            section: "MANAGEMENT",
            items: [
                {
                    name: "Menu",
                    href: "/customer-home/menu",
                    icon: <Utensils size={20} />,
                    active: isNavItemActive(pathname, "/customer-home/menu"),
                },
                {
                    name: "Reviews",
                    href: "/customer-home/reviews",
                    icon: <User size={20} />,
                    active: isNavItemActive(pathname, "/customer-home/reviews"),
                },
            ],
        },
        {
            section: "SETTINGS",
            items: [
                {
                    name: "Language",
                    href: "/customer-home/language",
                    icon: <Languages size={20} />,
                    active: isNavItemActive(pathname, "/customer-home/language"),
                },
                {
                    name: "Settings",
                    href: "/customer-home/settings",
                    icon: <Settings size={20} />,
                    active: isNavItemActive(pathname, "/customer-home/settings"),
                },
            ],
        },
    ];
};


// Canteen SideBar Items
export const CanNavItems = () => {
    const pathname = usePathname();

    function isNavItemActive(pathname: string, nav: string) {
        return pathname.includes(nav);
    }

    return [
        {
            section: "DASHBOARD",
            items: [
                {
                    name: "Home",
                    href: "/canteen-home",
                    icon: <Home size={20} />,
                    active: pathname === "/canteen-home",
                },
                {
                    name: "Orders",
                    href: "/canteen-home/orders",
                    icon: <FileText size={20} />,
                    active: isNavItemActive(pathname, "/canteen-home/orders"),
                },
            ],
        },
        {
            section: "MANAGEMENT",
            items: [
                {
                    name: "Menu",
                    href: "/canteen-home/menu",
                    icon: <Utensils size={20} />,
                    active: isNavItemActive(pathname, "/canteen-home/menu"),
                },
                {
                    name: "Reviews",
                    href: "/canteen-home/reviews",
                    icon: <User size={20} />,
                    active: isNavItemActive(pathname, "/canteen-home/reviews"),
                },
            ],
        },
        {
            section: "SETTINGS",
            items: [
                {
                    name: "Language",
                    href: "/canteen-home/language",
                    icon: <Languages size={20} />,
                    active: isNavItemActive(pathname, "/canteen-home/language"),
                },
                {
                    name: "Settings",
                    href: "/canteen-home/settings",
                    icon: <Settings size={20} />,
                    active: isNavItemActive(pathname, "/canteen-home/settings"),
                },
            ],
        },
    ];
}
