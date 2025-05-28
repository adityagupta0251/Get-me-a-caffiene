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
    <h1>Subscribe</h1>
    
  );
}
