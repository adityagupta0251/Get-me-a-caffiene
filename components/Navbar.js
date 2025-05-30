"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const { user, isLoaded, isSignedIn } = useUser();

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Handle escape key to close menu
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [mobileMenuOpen]);

    // Handle navigation with consistent behavior
    const handleNavigation = (href, closeMenu = true) => {
        if (closeMenu) {
            setMobileMenuOpen(false);
        }
        router.push(href);
    };

    // Handle sign in with menu closure
    const handleSignIn = () => {
        setMobileMenuOpen(false);
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    return (
        <>
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Main Navbar Container */}
            <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-2 sm:mt-4 w-full max-w-7xl px-3 sm:px-4">
                <div className="bg-white/95 backdrop-blur-md border border-blue-200/50 rounded-2xl sm:rounded-full shadow-xl shadow-blue-500/10">
                    <div className="px-4 sm:px-6 py-2.5 sm:py-3">
                        <div className="flex items-center justify-between gap-4 sm:gap-6">
                            
                            {/* Logo Section */}
                            <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer group flex-shrink-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-200">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="NextGendev Logo"
                                        width={40}
                                        height={40}
                                        className="w-full h-full rounded-full object-cover bg-white"
                                        priority
                                        unoptimized
                                    />
                                </div>
                                <span className="hidden sm:block text-slate-800 font-semibold text-base sm:text-lg">
                                    NextGendev
                                </span>
                            </Link>

                            {/* Desktop & Tablet Navigation */}
                            <div className="hidden lg:flex items-center">
                                <NavItems />
                            </div>

                            {/* Desktop & Tablet Auth Section */}
                            <div className="hidden lg:flex items-center gap-3">
                                {!isLoaded ? (
                                    // Loading state
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-8 bg-slate-200 animate-pulse rounded-full"></div>
                                        <div className="w-20 h-8 bg-slate-200 animate-pulse rounded-full"></div>
                                    </div>
                                ) : isSignedIn && user ? (
                                    // Signed in state with user info
                                    <div className="flex items-center gap-3">
                                        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
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
                                            <button className="px-3 xl:px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200">
                                                Sign In
                                            </button>
                                        </SignInButton>
                                        <SignInButton mode="modal">
                                            <button className="px-3 xl:px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                                Get Started
                                            </button>
                                        </SignInButton>
                                    </div>
                                )}
                            </div>

                            {/* Mobile & Tablet Auth (for tablets in portrait mode) */}
                            <div className="hidden sm:flex lg:hidden items-center gap-2">
                                {!isLoaded ? (
                                    <div className="w-8 h-8 bg-slate-200 animate-pulse rounded-full"></div>
                                ) : isSignedIn && user ? (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-lg">
                                        <UserButton 
                                            afterSignOutUrl="/"
                                            appearance={{
                                                elements: {
                                                    avatarBox: "w-full h-full rounded-full border-2 border-white",
                                                    userButtonPopoverCard: "shadow-2xl border border-blue-100",
                                                }
                                            }}
                                            userProfileMode="navigation"
                                            userProfileUrl="/profile"
                                        />
                                    </div>
                                ) : (
                                    <SignInButton mode="modal">
                                        <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full shadow-lg transition-all duration-200">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                )}
                            </div>

                            {/* Enhanced Mobile Hamburger */}
                            <div className="lg:hidden flex items-center">
                                <button
                                    ref={hamburgerRef}
                                    onClick={toggleMobileMenu}
                                    className="relative p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                                    aria-label="Toggle Menu"
                                    aria-expanded={mobileMenuOpen}
                                >
                                    <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                                        <span className={cn(
                                            "block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                                            mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                        )}></span>
                                        <span className={cn(
                                            "block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                                            mobileMenuOpen ? 'opacity-0' : ''
                                        )}></span>
                                        <span className={cn(
                                            "block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                                            mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                        )}></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Mobile & Tablet Menu */}
                <div 
                    ref={mobileMenuRef}
                    className={cn(
                        "lg:hidden mt-3 transition-all duration-300 ease-in-out",
                        mobileMenuOpen 
                            ? "opacity-100 translate-y-0 pointer-events-auto" 
                            : "opacity-0 -translate-y-4 pointer-events-none"
                    )}
                >
                    <div className="bg-white/95 backdrop-blur-md border border-blue-200/50 rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden">
                        <div className="p-4 sm:p-6">
                            {/* Mobile Navigation */}
                            <div className="mb-4">
                                <NavItems 
                                    mobile 
                                    onItemClick={(href) => handleNavigation(href, true)}
                                />
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
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-slate-800 truncate">
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-slate-600 truncate">
                                                    {user.emailAddresses[0]?.emailAddress}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Profile Button with consistent navigation */}
                                        <button
                                            onClick={() => handleNavigation('/profile', true)}
                                            className="w-full flex items-center justify-center px-4 py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium touch-manipulation"
                                        >
                                            View Profile
                                        </button>
                                        
                                        {/* UserButton with enhanced mobile styling */}
                                        <div className="flex items-center justify-center py-2">
                                            <UserButton 
                                                afterSignOutUrl="/"
                                                appearance={{
                                                    elements: {
                                                        rootBox: "w-full h-full",
                                                        avatarBox: "w-10 h-10 rounded-full border-2 border-white",
                                                        userButtonPopoverCard: "shadow-2xl border border-blue-100 rounded-2xl",
                                                        userButtonPopoverActionButton: "hover:bg-blue-50 rounded-xl touch-manipulation",
                                                        userButtonPopoverActionButtonText: "text-sm"
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
                                                onClick={handleSignIn}
                                                className="w-full px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-200 font-medium touch-manipulation"
                                            >
                                                Sign In
                                            </button>
                                        </SignInButton>
                                        <SignInButton mode="modal">
                                            <button 
                                                onClick={handleSignIn}
                                                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 touch-manipulation active:scale-95"
                                            >
                                                Get Started Free
                                            </button>
                                        </SignInButton>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Mobile Menu Footer */}
                        <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-50 to-slate-50 border-t border-blue-100">
                            <p className="text-xs text-center text-blue-600 font-medium">
                                ✨ Professional Navigation Experience
                            </p>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Global Styles for Enhanced Responsiveness */}
            <style jsx global>{`
                /* Body padding for fixed navbar with responsive spacing */
                body {
                    padding-top: 70px;
                }
                
                @media (min-width: 640px) {
                    body {
                        padding-top: 85px;
                    }
                }

                /* Smooth transitions and touch optimization */
                * {
                    -webkit-tap-highlight-color: transparent;
                }

                /* Ensure proper scrolling on mobile devices */
                @supports (-webkit-touch-callout: none) {
                    body {
                        -webkit-overflow-scrolling: touch;
                    }
                }

                /* Improved focus styles for accessibility */
                button:focus-visible,
                a:focus-visible {
                    outline: 2px solid #3b82f6;
                    outline-offset: 2px;
                }

                /* Tablet-specific optimizations */
                @media (min-width: 768px) and (max-width: 1023px) {
                    /* Tablet styles */
                    .navbar-tablet {
                        padding: 0.75rem 1.5rem;
                    }
                }

                /* Prevent zoom on input focus for iOS */
                @media screen and (-webkit-min-device-pixel-ratio: 0) {
                    select,
                    textarea,
                    input[type="text"],
                    input[type="password"],
                    input[type="datetime"],
                    input[type="datetime-local"],
                    input[type="date"],
                    input[type="month"],
                    input[type="time"],
                    input[type="week"],
                    input[type="number"],
                    input[type="email"],
                    input[type="url"],
                    input[type="search"],
                    input[type="tel"],
                    input[type="color"] {
                        font-size: 16px;
                    }
                }

                /* High contrast mode support */
                @media (prefers-contrast: high) {
                    .bg-white\\/95 {
                        background-color: white;
                    }
                    .border-blue-200\\/50 {
                        border-color: #3b82f6;
                        border-width: 2px;
                    }
                }

                /* Reduced motion support */
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;