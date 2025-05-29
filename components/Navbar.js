"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const { user, isLoaded, isSignedIn } = useUser();

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Main Navbar Container */}
            <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-4 w-full max-w-6xl px-4">
                <div className="bg-white/95 backdrop-blur-md border border-blue-200/50 rounded-full shadow-xl shadow-blue-500/10">
                    <div className="px-6 py-3">
                        <div className="flex items-center justify-between gap-6">
                            
                            {/* Logo Section */}
                            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-200">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="NextGendev Logo"
                                        width={46}
                                        height={44}
                                        className="w-full h-full rounded-full object-cover bg-white"
                                        priority
                                        unoptimized
                                    />
                                </div>
                                <span className="hidden sm:block text-slate-800 font-semibold text-lg">
                                    NextGendev
                                </span>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center">
                                <NavItems />
                            </div>

                            {/* Auth Section */}
                            <div className="hidden md:flex items-center gap-3">
                                {!isLoaded ? (
                                    // Loading state
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-8 bg-slate-200 animate-pulse rounded-full"></div>
                                        <div className="w-20 h-8 bg-slate-200 animate-pulse rounded-full"></div>
                                    </div>
                                ) : isSignedIn && user ? (
                                    // Signed in state with user info
                                    <div className="flex items-center gap-3">
                                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                                            <span className="text-sm text-slate-600">Welcome,</span>
                                            <span className="text-sm font-medium text-blue-600">
                                                {user.firstName || user.username || 'User'}
                                            </span>
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-lg hover:shadow-xl transition-shadow duration-200">
                                            <UserButton 
                                                afterSignOutUrl="/"
                                                appearance={{
                                                    elements: {
                                                        avatarBox: "w-full h-full rounded-full border-2 border-white",
                                                        userButtonPopoverCard: "shadow-2xl border border-blue-100",
                                                        userButtonPopoverActionButton: "hover:bg-blue-50"
                                                    }
                                                }}
                                                userProfileMode="navigation"
                                                userProfileUrl="/profile"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    // Signed out state
                                    <div className="flex items-center gap-3">
                                        <SignInButton mode="modal">
                                            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200">
                                                Sign In
                                            </button>
                                        </SignInButton>
                                        <SignInButton mode="modal">
                                            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                                Get Started
                                            </button>
                                        </SignInButton>
                                    </div>
                                )}
                            </div>

                            {/* Enhanced Mobile Hamburger */}
                            <div className="md:hidden" ref={mobileMenuRef}>
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Toggle Menu"
                                    aria-expanded={mobileMenuOpen}
                                >
                                    <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 animate-in slide-in-from-top-2 duration-300">
                        <div className="bg-white/95 backdrop-blur-md border border-blue-200/50 rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden">
                            <div className="p-4">
                                {/* Mobile Navigation */}
                                <div className="mb-4">
                                    <NavItems mobile onItemClick={() => setMobileMenuOpen(false)} />
                                </div>

                                {/* Mobile Auth Section */}
                                <div className="pt-4 border-t border-blue-100 space-y-3">
                                    {!isLoaded ? (
                                        // Mobile loading state
                                        <div className="space-y-3">
                                            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-2xl"></div>
                                            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-2xl"></div>
                                        </div>
                                    ) : isSignedIn && user ? (
                                        // Mobile signed in state
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-lg">
                                                    <Image
                                                        src={user.imageUrl || '/images/default-avatar.svg'}
                                                        alt={user.firstName || 'Profile'}
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full rounded-full object-cover border-2 border-white"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium text-slate-800">
                                                        {user.firstName} {user.lastName}
                                                    </p>
                                                    <p className="text-xs text-slate-600">
                                                        {user.emailAddresses[0]?.emailAddress}
                                                    </p>
                                                </div>
                                            </div>
                                            <Link 
                                                href="/profile"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="w-full flex items-center justify-center px-4 py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium"
                                            >
                                                View Profile
                                            </Link>
                                            <div className="flex items-center justify-center py-2">
                                                <UserButton 
                                                    afterSignOutUrl="/"
                                                    appearance={{
                                                        elements: {
                                                            rootBox: "w-full h-full",
                                                            avatarBox: "w-10 h-10 rounded-full border-2 border-white"
                                                        }
                                                    }}
                                                    userProfileMode="navigation"
                                                    userProfileUrl="/profile"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        // Mobile signed out state
                                        <div className="space-y-3">
                                            <SignInButton mode="modal">
                                                <button 
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="w-full px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium"
                                                >
                                                    Sign In
                                                </button>
                                            </SignInButton>
                                            <SignInButton mode="modal">
                                                <button 
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                                >
                                                    Get Started Free
                                                </button>
                                            </SignInButton>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Mobile Menu Footer */}
                            <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-slate-50 border-t border-blue-100">
                                <p className="text-xs text-center text-blue-600 font-medium">
                                    ✨ Professional Navigation Experience
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Body padding for fixed navbar with enhanced spacing */}
            <style jsx>{`
                body {
                    padding-top: 80px;
                }
                
                @media (max-width: 768px) {
                    body {
                        padding-top: 75px;
                    }
                }

                @keyframes slide-in-from-top-2 {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-in {
                    animation: slide-in-from-top-2 0.2s ease-out;
                }
            `}</style>
        </>
    );
};

export default Navbar;