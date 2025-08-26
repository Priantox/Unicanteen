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
                    href: "/orders",
                    icon: <FileText size={20} />,
                    active: isNavItemActive(pathname, "/orders"),
                },
            ],
        },
        {
            section: "MANAGEMENT",
            items: [
                {
                    name: "Menu",
                    href: "/menu",
                    icon: <Utensils size={20} />,
                    active: isNavItemActive(pathname, "/menu"),
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
}
