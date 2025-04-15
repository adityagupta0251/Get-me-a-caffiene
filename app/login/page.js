'use client';

import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Dinoser</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full gradient-btn">
            <span className="btn-inner">Log In</span>
          </button>
        </form>
      </div>
    </div>
  );
}
