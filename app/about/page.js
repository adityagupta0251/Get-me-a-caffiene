'use client';

import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 overflow-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Dinoser</h1>
        <p className="text-lg text-gray-300">
          Dinoser is a crowdfunding platform designed for developers, creators, and tech enthusiasts to receive support from their fans. Whether you&rsquo;re building side projects, sharing open source contributions, or creating educational content &mdash; Dinoser gives you the tools to be appreciated and funded.
        </p>
        <div className="mt-10 text-md text-gray-400">
          Made with <span role="img" aria-label="love">❤️</span> to empower devs everywhere.
        </div>
      </div>
    </div>
  );
}
