"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  // Consistent pricing tiers information
  const tiers = [
    {
      id: "basic",
      title: "Basic Support",
      description:
        "At just $5 per month, you secure instant access to our Discord bot and enjoy a complimentary month of our Telegram bot, along with membership in our exclusive early adopters community!",
      price: "$5/month",
      benefits: [
        "Access to Discord bot",
        "Telegram bot free for 1 month",
        "Early adopters community membership",
        "Regular platform updates",
      ],
    },
    {
      id: "standard",
      title: "Standard Support",
      description:
        "For a six-month period at $7, unlock access to our specialized suite of Discord bots and benefit from full integration with our Telegram solution, keeping you connected and in control at all times!",
      price: "$7 per 6 months",
      benefits: [
        "All Basic tier benefits",
        "Multiple specialized Discord bots",
        "Full Telegram bot integration",
        "Extended member benefits",
        "Early access to new features",
      ],
    },
    {
      id: "pro",
      title: "Pro Support",
      description:
        "With this tier, gain priority access, auto pre-registration for premium features, exclusive discount coupons, and a complete suite of bot solutions—ensuring rapid support and a fully optimized experience.",
      price: "Contact for pricing",
      benefits: [
        "All Standard tier benefits",
        "Priority access and support",
        "Auto pre-registration for premium features",
        "Exclusive discount coupons",
        "Complete bot solution suite",
        "Direct developer communication",
      ],
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
              alt="NextGendev Developer"
              className="relative inline-block h-14 w-14 rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  NextGendev Team
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
                Discord Bot Developers
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              "Supporting NextGendev's innovative Discord bot platform is your
              chance to be part of the next generation of server management
              solutions. Our bots streamline image handling and provide complete
              server automation with a personal touch!"
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
          <h2 className="text-2xl font-bold text-center mb-8">
            What We're Building
          </h2>
          <div className="flex flex-wrap justify-center items-stretch gap-6 overflow-x-auto w-full px-4 py-6">
            <div className="flex-shrink-0 w-full sm:w-80 min-h-80 flex flex-col justify-center items-center bg-white shadow-sm border border-slate-200 rounded-lg p-4">
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
                  Discord Bot Suite
                </h5>
                <p className="text-slate-600 font-light mb-4 max-w-xs mx-auto">
                  Our Discord bot manages image uploads and provides a complete
                  server automation solution, designed to streamline your daily
                  digital interactions.
                </p>
                <button className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700 transition shadow">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-80 relative grid h-96 flex-col items-end justify-center overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative text-center p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 text-3xl font-medium text-white">
                  Join Our Growing Community
                </h2>
                <h5 className="mb-4 text-xl font-semibold text-slate-300">
                  NextGendev
                </h5>
                <img
                  alt="NextGendev Logo"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  className="inline-block h-32 w-32 rounded-full border-4 border-white"
                />
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-80 min-h-80 flex flex-col justify-center items-center bg-white shadow-sm border border-slate-200 rounded-lg p-4">
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
                  Telegram Integration
                </h5>
                <p className="text-slate-600 font-light mb-4 max-w-xs mx-auto">
                  Our platform seamlessly connects Discord and Telegram,
                  providing a unified communication experience across multiple
                  platforms.
                </p>
                <button className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700 transition shadow">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tier Section */}
        <div className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Support Tiers</h2>
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="flex flex-col rounded-lg bg-slate-800 shadow-sm max-w-sm p-8 border border-slate-600"
              >
                <div className="pb-8 mb-8 text-center text-slate-100 border-b border-slate-600">
                  <p className="text-sm uppercase font-semibold text-slate-300">
                    {tier.title}
                  </p>
                  <h1 className="flex justify-center gap-1 mt-4 font-bold text-white text-4xl">
                    {tier.price}
                  </h1>
                </div>
                <div>
                  <p className="text-slate-300 mb-6">{tier.description}</p>
                  <ul className="flex flex-col gap-4">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-4">
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
                        <p className="text-slate-300">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12">
                  <button
                    onClick={() => handleSubscribe(tier)}
                    className="w-full rounded-md bg-white py-2 px-4 text-sm text-slate-600 transition-all shadow-md hover:shadow-lg hover:bg-white/90 focus:bg-white/90 active:bg-white/90"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section as Footer */}
      <section className="p-8 bg-gray-800">
        <div className="mx-auto max-w-screen-md">
          <div className="mb-4 h-64 w-full relative rounded-xl overflow-hidden">
            <Image
              src="/api/placeholder/1200/400"
              alt="NextGendev Banner"
              layout="fill"
              objectFit="cover"
              unoptimized
            />
          </div>
          <Typography variant="small" className="font-medium !text-blue-500">
            #discord #nextgendev #bots
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl !leading-snug text-white"
          >
            NextGendev: Innovative Discord Bot Platform
          </Typography>

          <div className="container">
            <Typography className="font-normal !text-gray-300">
              <p>
                Welcome to NextGendev, where cutting-edge technology meets
                community engagement. Our forthcoming Discord bot is designed to
                manage image uploads and deliver a complete, automated server
                solution—crafted to streamline your daily digital interactions
                while keeping the human element alive.
              </p>
              <p>
                As we embark on this innovative venture, we invite you to become
                an integral part of our evolution. By funding our project, you
                not only receive a complimentary one-month trial of our Discord
                bot but also gain exclusive access to our evolving community and
                platform.
              </p>
              <p>
                <strong>Basic Support:</strong> At just <em>$5 per month</em>,
                you secure instant access to our Discord bot and enjoy a
                complimentary month of our Telegram bot, along with membership
                in our exclusive early adopters community.
              </p>
              <p>
                <strong>Standard Support:</strong> For a six-month period at{" "}
                <em>$7</em>, unlock access to our specialized suite of Discord
                bots and benefit from full integration with our Telegram
                solution, keeping you connected and in control at all times.
              </p>
              <p>
                <strong>Pro Support:</strong> With this tier, gain priority
                access, auto pre-registration for premium features, exclusive
                discount coupons, and a complete suite of bot solutions—ensuring
                rapid support and a fully optimized experience.
              </p>
              <p>
                Join us at NextGendev on this exciting journey, where every
                contribution helps shape the future of seamless server
                management and innovative connectivity.
              </p>
            </Typography>
          </div>

          <style jsx>{`
            .container {
              max-width: 800px;
              margin: 40px auto;
              padding: 30px;
              background: rgba(0, 30, 60, 0.6);
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0, 0, 80, 0.7);
              font-family: "Courier New", Courier, monospace;
              color: #ffffff;
              line-height: 1.6;
            }
            p {
              margin: 15px 0;
              text-align: justify;
              font-size: 16px;
            }
            strong {
              color: #66b3ff;
            }
            em {
              color: #ffd700;
            }
          `}</style>
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
              Select a plan that suits you and help fuel our NextGendev Discord
              bot development journey.
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
