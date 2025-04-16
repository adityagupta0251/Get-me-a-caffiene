'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      id: "basic",
      title: "Basic Support",
      description: "Show your appreciation with a small caffeine boost!",
      price: "$2/month",
      benefits: ["Exclusive updates", "Access to basic content"],
    },
    {
      id: "premium",
      title: "Premium Support",
      description: "Keep the energy flowing with a larger contribution!",
      price: "$5/month",
      benefits: [
        "Everything in Basic",
        "Early access to new features",
        "Exclusive behind-the-scenes content",
      ],
    },
    {
      id: "custom",
      title: "Custom Support",
      description: "Want to support in your own way? Let's chat!",
      price: "Varies",
      benefits: ["Custom perks tailored to you", "Direct communication"],
    },
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
    image: "/images.png", // Replace with your actual image
  };

  const handleSubscribe = (tier) => {
    setSelectedTier(tier);
    alert(`Subscribed to ${tier.title} at ${tier.price}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center px-4 pt-8 pb-4 bg-gray-800">
        <div className="font-bold flex gap-2 text-3xl md:text-5xl justify-center items-center">
          Buy me A Caffeine{" "}
          <span>
            <Image
              src="/tea.gif"
              alt="Tea emoji"
              width={50}
              height={50}
              priority
              unoptimized
            />
          </span>
        </div>
        <p className="text-center text-sm md:text-base max-w-2xl mt-4">
          A crowdfunding platform for developers. Get funded by your fans and
          followers.
        </p>
        <div className="flex w-full p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Tania Andrew"
              className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  Tania Andrew
                </h5>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
                Designer @ Google
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </p>
          </div>
        </div>
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
        {/* Card Grid Section */}
        <div>
          <div className="flex flex-wrap justify-center items-stretch gap-6 overflow-x-auto w-full px-4 py-6">
            <div className="flex-shrink-0 w-full sm:w-[22rem] min-h-80 flex flex-col justify-center items-center bg-white shadow-sm border border-slate-200 rounded-lg p-4">
              <div className="p-3 text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    />
                  </svg>
                </div>
                <h5 className="text-slate-800 text-2xl font-semibold mb-2">
                  Lit Ideas for Startups
                </h5>
                <p className="text-slate-600 font-light mb-4 max-w-xs mx-auto">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </p>
                <button className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700 transition shadow">
                  View More
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-[22rem] relative grid h-[35rem] flex-col items-end justify-center overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative text-center p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 text-3xl font-medium text-white">
                  How we design and code open-source projects?
                </h2>
                <h5 className="mb-4 text-xl font-semibold text-slate-300">
                  Lewis Daniel
                </h5>
                <img
                  alt="Lewis Daniel"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  className="inline-block h-32 w-32 rounded-full border-4 border-white"
                />
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-[22rem] min-h-80 flex flex-col justify-center items-center bg-white shadow-sm border border-slate-200 rounded-lg p-4">
              <div className="p-3 text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    />
                  </svg>
                </div>
                <h5 className="text-slate-800 text-2xl font-semibold mb-2">
                  Lit Ideas for Startups
                </h5>
                <p className="text-slate-600 font-light mb-4 max-w-xs mx-auto">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </p>
                <button className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700 transition shadow">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Sponsor Section */}
        <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
          <div className="flex flex-col rounded-lg bg-slate-800 shadow-sm max-w-96 p-8 border border-slate-600">
            <div className="pb-8 mb-8 text-center text-slate-100 border-b border-slate-600">
              <p className="text-sm uppercase font-semibold text-slate-300">
                standard
              </p>
              <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
                <span className="text-3xl">$</span>29
                <span className="self-end text-3xl">/mo</span>
              </h1>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">5 team members</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">200+ components</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">40+ built-in pages</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">1 year free updates</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">Lifetime technical support</p>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <button className="w-full rounded-md bg-white py-2 px-4 text-sm text-slate-600 transition-all shadow-md hover:shadow-lg hover:bg-white/90 focus:bg-white/90 active:bg-white/90">
                Buy Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-lg bg-slate-800 shadow-sm max-w-96 p-8 border border-slate-600">
            <div className="pb-8 mb-8 text-center text-slate-100 border-b border-slate-600">
              <p className="text-sm uppercase font-semibold text-slate-300">
                standard
              </p>
              <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
                <span className="text-3xl">$</span>29
                <span className="self-end text-3xl">/mo</span>
              </h1>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">5 team members</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">200+ components</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">40+ built-in pages</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">1 year free updates</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">Lifetime technical support</p>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <button className="w-full rounded-md bg-white py-2 px-4 text-sm text-slate-600 transition-all shadow-md hover:shadow-lg hover:bg-white/90 focus:bg-white/90 active:bg-white/90">
                Buy Now
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-lg bg-slate-800 shadow-sm max-w-96 p-8 border border-slate-600">
            <div className="pb-8 mb-8 text-center text-slate-100 border-b border-slate-600">
              <p className="text-sm uppercase font-semibold text-slate-300">
                standard
              </p>
              <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-6xl">
                <span className="text-3xl">$</span>29
                <span className="self-end text-3xl">/mo</span>
              </h1>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">5 team members</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">200+ components</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">40+ built-in pages</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">1 year free updates</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                    <svg
                      className="w-4 h-4 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-slate-300">Lifetime technical support</p>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <button className="w-full rounded-md bg-white py-2 px-4 text-sm text-slate-600 transition-all shadow-md hover:shadow-lg hover:bg-white/90 focus:bg-white/90 active:bg-white/90">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Support Tiers Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Choose Your Support Tier
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    {tier.description}
                  </p>
                  <p className="text-blue-400 font-bold mb-4 text-sm md:text-base">
                    {tier.price}
                  </p>
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

      {/* Content Section 16 as Footer */}
      <section className="p-8 bg-gray-800">
        <div className="mx-auto max-w-screen-md">
          <div className="mb-4 h-[28rem] w-full relative rounded-xl overflow-hidden">
            <Image
              src="https://www.material-tailwind.com/img/content2.jpg"
              alt="team work"
              fill
              className="object-cover"
              priority
            />
          </div>
          <Typography variant="small" className="font-medium !text-blue-500">
            #blog #post
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl !leading-snug"
          >
            The Castle Looks Different at Night...
          </Typography>
          <Typography className="font-normal !text-gray-500">
            This is the paragraph where you can write more details about your
            product. Keep your user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise they wouldn&apos;t
            scroll to get here. Add a button if you want the user to see more. We
            are here to make life better.
            <br /><br />
            And now I look and look around and there's so many Kanyes I've been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound... and thank you for turning my personal jean
            jacket into a couture piece.
            <br /><br />
            Thank you Anna for the invite, thank you to the whole Vogue team. And I
            love you like Kanye loves Kanye. Panda Panda Panda. I've been trying to
            figure out the bed design for the master bedroom at our Hidden Hills
            compound...The Pablo pop-up was almost a pop-up of influence. All
            respect, prayers, and love to Phife's family. Thank you for so much
            inspiration. I love this new Ferg album! The Life of Pablo is
            now available for purchase. I have a dream. Thank you to everybody who
            made The Life of Pablo the number 1 album in the world! I'm so proud
            of the number #1 song in the country. Panda!
          </Typography>
        </div>
      </section>

      {/* Dialog: Support Options Modal */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div
            className="fixed inset-0 bg-black opacity-50"
            aria-hidden="true"
          />
          <div className="relative bg-gray-800 rounded-lg max-w-4xl w-full mx-4 p-6 shadow-xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close dialog"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Choose Your Support Tier
            </h2>
            <p className="text-center text-gray-300 mb-6">
              Select a plan that suits you and help fuel our development
              journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-700 hover:bg-gray-600 transition-colors flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm md:text-base">
                      {tier.description}
                    </p>
                    <p className="text-blue-400 font-bold mb-4 text-sm md:text-base">
                      {tier.price}
                    </p>
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