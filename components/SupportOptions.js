'use client';
import React from 'react';

export default function SupportOptions() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-center mb-4">More Ways to Support</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-2">Exclusive Content</h4>
          <p className="text-gray-300">
            Access posts, videos, and updates available only to supporters.
          </p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-2">Community Access</h4>
          <p className="text-gray-300">
            Join a private community and connect with fellow supporters.
          </p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-2">Behind the Scenes</h4>
          <p className="text-gray-300">
            Get an insider look at the development process and future plans.
          </p>
        </div>
      </div>
    </div>
  );
}
