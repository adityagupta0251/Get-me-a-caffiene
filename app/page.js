"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Dialog } from '@headlessui/react';

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      id: 'basic',
      title: "Basic Support",
      description: "Show your appreciation with a small caffeine boost!",
      price: "$2/month",
      benefits: [
        "Exclusive updates",
        "Access to basic content",
      ]
    },
    {
      id: 'premium',
      title: "Premium Support",
      description: "Keep the energy flowing with a larger contribution!",
      price: "$5/month",
      benefits: [
        "Everything in Basic",
        "Early access to new features",
        "Exclusive behind-the-scenes content",
      ]
    },
    {
      id: 'custom',
      title: "Custom Support",
      description: "Want to support in your own way? Let's chat!",
      price: "Varies",
      benefits: [
        "Custom perks tailored to you",
        "Direct communication",
      ]
    }
  ];

  const githubSponsor = {
    title: "GitHub Sponsors",
    description:
      "Support the development of our project through GitHub Sponsors. Your contribution helps us deliver better features, maintain code quality, and drive innovation.",
    benefits: [
      "Direct impact on project development",
      "Recognition on our GitHub page",
      "Early access to new features",
      "Exclusive sponsor updates",
    ],
    link: "https://github.com/sponsors/adityagupta0251",
    image: "/images.png" // Replace with your actual image
  };

  const handleSubscribe = (tier) => {
    setSelectedTier(tier);
    alert(`Subscribed to ${tier.title} at ${tier.price}`);
  };

  return (
    <div className="min-h-full flex flex-col bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center px-4 pt-8 pb-4 bg-gray-800">
        <div className="font-bold flex gap-2 text-3xl md:text-5xl justify-center items-center">
          Buy me A Caffeine{" "}
          <span>
            <Image src="/tea.gif" alt="Tea emoji" width={50} height={50} priority unoptimized />
          </span>
        </div>
        <p className="text-center text-sm md:text-base max-w-2xl mt-4">
          A crowdfunding platform for developers. Get funded by your fans and followers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="gradient-btn">
            <span className="btn-inner">Start Here</span>
          </button>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="gradient-btn"
          >
            <span className="btn-inner">Show Support Options</span>
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white h-px opacity-10 w-full"></div>

      {/* Main Content Section */}
      <section className="flex-1 overflow-auto px-4 py-6">
        {/* Introduction Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Your Fans Can Buy You a Caffeine 🧋
          </h1>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image 
                src="/man.gif" 
                alt="Funding illustration" 
                fill
                className="object-contain rounded-lg"
                unoptimized
              />
            </div>
            <p className="text-lg md:text-xl">Fund Yourself!</p>
          </div>
        </div>

        {/* Advanced Feature: GitHub Sponsor Details */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Support via GitHub Sponsors</h2>
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <Image 
                src={githubSponsor.image} 
                alt="GitHub Sponsor" 
                fill
                className="object-contain rounded-full"
                unoptimized
              />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{githubSponsor.title}</h3>
              <p className="mb-4 text-sm md:text-base">{githubSponsor.description}</p>
              <ul className="mb-4 list-disc list-inside text-sm md:text-base">
                {githubSponsor.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <a 
                href={githubSponsor.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm md:text-base"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        {/* Support Tiers Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Choose Your Support Tier</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white text-xl font-semibold mb-2">{tier.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">{tier.description}</p>
                  <p className="text-blue-400 font-bold mb-4 text-sm md:text-base">{tier.price}</p>
                  <ul className="mb-4 space-y-1 list-disc list-inside text-sm md:text-base">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleSubscribe(tier)}
                    className="mt-auto gradient-btn w-full"
                  >
                    <span className="btn-inner">Subscribe</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog: Support Options Modal */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
          <div className="relative bg-gray-800 rounded-lg max-w-4xl w-full mx-4 p-6 shadow-xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close dialog"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Choose Your Support Tier</h2>
            <p className="text-center text-gray-300 mb-6">
              Select a plan that suits you and help fuel our development journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div key={tier.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-700 hover:bg-gray-600 transition-colors flex flex-col">
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-white text-xl font-semibold mb-2">{tier.title}</h3>
                    <p className="text-gray-200 mb-4 text-sm md:text-base">{tier.description}</p>
                    <p className="text-blue-400 font-bold mb-4 text-sm md:text-base">{tier.price}</p>
                    <ul className="mb-4 space-y-1 list-disc list-inside text-sm md:text-base">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => handleSubscribe(tier)}
                      className="mt-auto gradient-btn w-full"
                    >
                      <span className="btn-inner">Subscribe</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
