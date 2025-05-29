'use client';
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

    const handleClick = (href) => {
        if (onItemClick) {
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
                        onClick={() => handleClick(href)}
                        className={cn(
                            "block w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-200",
                            isActiveLink(href)
                                ? "bg-blue-100 text-blue-700 shadow-sm font-semibold"
                                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                        )}
                    >
                        <span className="flex items-center gap-2">
                            {isActiveLink(href) && (
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                            {label}
                        </span>
                    </Link>
                ))}
            </nav>
        );
    }

    // Desktop navigation
    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        "px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600",
                        isActiveLink(href) && 'text-primary font-semibold bg-blue-50'
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;
