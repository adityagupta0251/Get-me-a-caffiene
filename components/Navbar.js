'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/signup', label: 'Sign Up' },
    { href: '/login', label: 'Login' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md text-white py-2 px-6 border-b border-gray-800 rounded-b-xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/tea.gif" alt="Tea emoji" width={50} height={50} priority unoptimized />
          <span className="text-2xl font-bold">Get me A Caffeine🧋</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition-all ${
                pathname === link.href ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-lg hover:text-blue-400 transition-all ${
                  pathname === link.href ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
