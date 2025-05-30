"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = ({ mobile = false, onItemClick }) => {
    const pathname = usePathname();

    const handleClick = (href, e) => {
        // For mobile, we want to handle the click through onItemClick
        if (mobile && onItemClick) {
            e.preventDefault();
            onItemClick(href);
        }
    };

    const isActiveLink = (href) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname === href || pathname.startsWith(href + '/');
    };

    if (mobile) {
        return (
            <nav className="space-y-2">
                {navItems.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        onClick={(e) => handleClick(href, e)}
                        className={cn(
                            "block w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-200 touch-manipulation",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                            isActiveLink(href)
                                ? "bg-blue-100 text-blue-700 shadow-sm font-semibold"
                                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100"
                        )}
                    >
                        <span className="flex items-center gap-2">
                            {isActiveLink(href) && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            )}
                            {label}
                        </span>
                    </Link>
                ))}
            </nav>
        );
    }

    // Desktop and tablet navigation
    return (
        <nav className="flex items-center gap-1 lg:gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        "px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200",
                        "hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        "touch-manipulation active:scale-95",
                        isActiveLink(href) 
                            ? 'text-blue-600 font-semibold bg-blue-50 shadow-sm' 
                            : 'text-slate-700'
                    )}
                >
                    <span className="relative">
                        {label}
                        {isActiveLink(href) && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
                        )}
                    </span>
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;