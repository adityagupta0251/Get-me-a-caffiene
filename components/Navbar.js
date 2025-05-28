"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/feature", label: "Features" },
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-3">
        <div className="bg-slate-900 border border-blue-800/30 rounded-full shadow-lg">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between gap-4">
              
              {/* Logo Section */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 p-0.5">
                  <Image
                    src="/diversity.png"
                    alt="NextGen Dev Logo"
                    width={28}
                    height={28}
                    className="w-full h-full rounded-full object-cover bg-white"
                    priority
                    unoptimized
                  />
                </div>
                <span className="hidden sm:block text-sm font-medium text-white">
                  NextGen Dev
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 mx-1 rounded-full text-sm font-medium ${
                      pathname === item.href
                        ? "text-white bg-blue-600"
                        : "text-blue-200 hover:text-white hover:bg-blue-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Auth Section */}
              <div className="hidden md:flex items-center gap-2">
                <SignedOut>
                  <SignInButton>
                    <button className="px-3 py-1.5 text-sm text-blue-200 hover:text-white">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <div className="w-7 h-7 rounded-full bg-blue-600 p-0.5">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-full h-full rounded-full"
                        }
                      }}
                    />
                  </div>
                </SignedIn>
              </div>

              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 text-blue-200 hover:text-white"
                  aria-label="Toggle Menu"
                >
                  <div className="w-4 h-4 flex flex-col justify-center items-center gap-0.5">
                    <span className="block w-3.5 h-0.5 bg-current"></span>
                    <span className="block w-3.5 h-0.5 bg-current"></span>
                    <span className="block w-3.5 h-0.5 bg-current"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-slate-900 border border-blue-800/30 rounded-2xl shadow-lg">
              <div className="px-3 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                      pathname === item.href
                        ? "text-white bg-blue-600"
                        : "text-blue-200 hover:text-white hover:bg-blue-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-2 border-t border-blue-800/30 mt-2 space-y-1">
                  <SignedOut>
                    <SignInButton>
                      <button className="w-full text-left px-3 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800 rounded-lg">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </SignedOut>

                  <SignedIn>
                    <div className="px-3 py-2">
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            rootBox: "w-full",
                            avatarBox: "w-7 h-7 rounded-full"
                          }
                        }}
                      />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Body padding for fixed navbar */}
      <style jsx>{`
        body {
          padding-top: 60px;
        }
        
        @media (max-width: 768px) {
          body {
            padding-top: 55px;
          }
        }
      `}</style>
    </>
  );
}