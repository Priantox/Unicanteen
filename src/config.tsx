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

export const NavItems = () => {
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
                            href: "/olympia",
                            icon: <Utensils size={18} />,
                            active: isNavItemActive(pathname, "/olympia-cafe"),
                        },
                        {
                            name: "KhansKitchen",
                            href: "/khans",
                            icon: <Utensils size={18} />,
                            active: isNavItemActive(pathname, "/khans-kitchen"),
                        },
                        {
                            name: "NeptuneCafe",
                            href: "/neptune",
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
