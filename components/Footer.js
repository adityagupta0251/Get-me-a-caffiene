'use client';
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="sticky bottom-0 bg-gray-950 text-white py-6 border-t border-gray-800 rounded-t-xl shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Get me a Caffeine🧋 - All rights Reserved
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
