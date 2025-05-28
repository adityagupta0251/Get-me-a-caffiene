"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-slate-900 border border-blue-800/30 rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between space-x-8">
          {/* Home Icon */}
          <button className="text-blue-300 hover:text-white transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2} 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3 12l9-9 9 9M4.5 10.5V20a1.5 1.5 0 001.5 1.5h3.75v-6h4.5v6h3.75A1.5 1.5 0 0020 20v-9.5" 
              />
            </svg>
          </button>

          {/* Search Icon */}
          <button className="text-blue-300 hover:text-white transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2} 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z" 
              />
            </svg>
          </button>

          {/* Profile Icon */}
          <button className="text-blue-300 hover:text-white transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2} 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
