"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"
import Link from "next/link"

export default function MyComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)

  // Features information
  const features = [
    {
      id: "discord-bot",
      title: "Discord Bot",
      description:
        "Our advanced Discord bot provides seamless image handling, server management, and automated moderation to enhance your community experience.",
      icon: (
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
      ),
      benefits: [
        "Automated image moderation",
        "Custom command creation",
        "Role management",
        "Server analytics",
        "Event scheduling",
      ],
      detailedDescription:
        "Our Discord bot is designed to streamline your server management with powerful automation tools. From handling image uploads with intelligent moderation to providing detailed analytics about your community's engagement, our bot offers a comprehensive solution for Discord server owners and moderators.",
    },
    {
      id: "telegram-integration",
      title: "Telegram Integration",
      description:
        "Seamlessly connect your Discord and Telegram communities with our cross-platform integration, ensuring consistent communication across both platforms.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      ),
      benefits: [
        "Cross-platform messaging",
        "Synchronized notifications",
        "Media sharing between platforms",
        "User identity linking",
        "Unified command system",
      ],
      detailedDescription:
        "Our Telegram integration bridges the gap between Discord and Telegram communities, allowing for seamless communication across both platforms. Users can receive messages, share media, and interact with your community regardless of their preferred platform, creating a unified experience that enhances engagement and accessibility.",
    },
    {
      id: "community-tools",
      title: "Community Tools",
      description:
        "Build and nurture your community with our suite of engagement tools, analytics, and customization options designed to foster meaningful connections.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      benefits: [
        "Engagement analytics",
        "Custom welcome messages",
        "Event management",
        "Polls and surveys",
        "Member recognition systems",
      ],
      detailedDescription:
        "Our community tools are designed to help you build, grow, and maintain an active and engaged community. From detailed analytics that help you understand member behavior to customizable welcome messages and event management features, our suite of tools provides everything you need to create a thriving community space.",
    },
  ]

  // Support tiers information (same as home page)
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
  ]

  const handleFeatureDetails = (feature) => {
    setSelectedFeature(feature)
    setIsDialogOpen(true)
  }

  const handleSubscribe = (tier) => {
    alert(`Subscribed to ${tier.title} at ${tier.price}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center px-4 pt-12 pb-8 bg-gray-800">
        <div className="font-bold flex gap-2 text-3xl md:text-5xl justify-center items-center">
          Platform Features{" "}
          <span>
            <Image src="/placeholder.svg?height=50&width=50" alt="Features icon" width={50} height={50} priority />
          </span>
        </div>
        <p className="text-center text-sm md:text-base max-w-2xl mt-4">
          Discover the powerful features that make our platform the perfect solution for managing your Discord and
          Telegram communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="gradient-btn">
            <span className="btn-inner">Try Demo</span>
          </button>
          <Link href="/" className="gradient-btn">
            <span className="btn-inner">Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white h-px opacity-10 w-full"></div>

      {/* Features Section */}
      <section className="flex-1 px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Powerful Features for Your Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col rounded-lg bg-slate-800 shadow-lg border border-slate-700 overflow-hidden hover:border-slate-500 transition-all duration-300"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-center mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="p-1 border rounded-full border-slate-600 bg-slate-700">
                        <svg
                          className="w-3 h-3 text-slate-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <p className="text-slate-300 text-sm">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-slate-700">
                <button
                  onClick={() => handleFeatureDetails(feature)}
                  className="w-full rounded-md bg-white py-2 px-4 text-sm text-slate-800 transition-all shadow-md hover:shadow-lg hover:bg-white/90"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-700 rounded-tl-lg">Feature</th>
                  <th className="p-4 text-center bg-gray-700">Basic</th>
                  <th className="p-4 text-center bg-gray-700">Standard</th>
                  <th className="p-4 text-center bg-gray-700 rounded-tr-lg">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-4 bg-gray-700">Discord Bot Access</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 bg-gray-700">Telegram Integration</td>
                  <td className="p-4 text-center bg-gray-700 text-yellow-400">1 month</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 bg-gray-700">Custom Commands</td>
                  <td className="p-4 text-center bg-gray-700 text-yellow-400">Limited</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 bg-gray-700">Analytics Dashboard</td>
                  <td className="p-4 text-center bg-gray-700 text-red-400">✗</td>
                  <td className="p-4 text-center bg-gray-700 text-yellow-400">Basic</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">Advanced</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 bg-gray-700">Priority Support</td>
                  <td className="p-4 text-center bg-gray-700 text-red-400">✗</td>
                  <td className="p-4 text-center bg-gray-700 text-red-400">✗</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="p-4 bg-gray-700 rounded-bl-lg">API Access</td>
                  <td className="p-4 text-center bg-gray-700 text-red-400">✗</td>
                  <td className="p-4 text-center bg-gray-700 text-yellow-400">Limited</td>
                  <td className="p-4 text-center bg-gray-700 text-green-400 rounded-br-lg">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-xl font-bold mr-4">
                JD
              </div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-400">Discord Server Owner</p>
              </div>
            </div>
            <p className="text-gray-300">
              "This bot has completely transformed how I manage my Discord server. The image moderation alone has saved
              me countless hours of work."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
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

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-xl font-bold mr-4">
                AS
              </div>
              <div>
                <h3 className="font-semibold">Alice Smith</h3>
                <p className="text-sm text-gray-400">Community Manager</p>
              </div>
            </div>
            <p className="text-gray-300">
              "The cross-platform integration between Discord and Telegram has allowed us to unify our community. Our
              members love being able to stay connected regardless of which platform they prefer."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
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

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-xl font-bold mr-4">
                RJ
              </div>
              <div>
                <h3 className="font-semibold">Robert Johnson</h3>
                <p className="text-sm text-gray-400">Gaming Community Admin</p>
              </div>
            </div>
            <p className="text-gray-300">
              "The analytics provided by the Pro tier have given us incredible insights into our community's behavior.
              We've been able to tailor our events and content to better serve our members."
            </p>
            <div className="flex mt-4">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Community?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of community managers who have enhanced their Discord and Telegram experiences with our
            powerful tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-btn">
              <span className="btn-inner">Get Started Today</span>
            </button>
            <button onClick={() => setIsDialogOpen(true)} className="gradient-btn">
              <span className="btn-inner">View Support Options</span>
            </button>
          </div>
        </div>
      </section>

      {/* Feature Details Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
          <div className="relative bg-gray-800 rounded-lg max-w-3xl w-full mx-4 p-6 shadow-xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close dialog"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedFeature ? (
              <>
                <div className="flex items-center mb-6">
                  <div className="mr-4">{selectedFeature.icon}</div>
                  <h2 className="text-2xl font-bold">{selectedFeature.title}</h2>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 mb-4">{selectedFeature.detailedDescription}</p>

                  <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {selectedFeature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="p-1 border rounded-full border-slate-600 bg-slate-700 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <p className="text-gray-300">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">Available in These Tiers:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tiers.map((tier) => (
                      <div key={tier.id} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                        {tier.title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button onClick={() => setIsDialogOpen(false)} className="gradient-btn">
                    <span className="btn-inner">Close</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p>Loading feature details...</p>
              </div>
            )}
          </div>
        </div>
      </Dialog>

      {/* Support Options Dialog */}
      <Dialog
        open={isDialogOpen && !selectedFeature}
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
              Select a plan that suits you and help fuel our NextGendev Discord bot development journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-700 hover:bg-gray-600 transition-colors flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-white text-xl font-semibold mb-2">{tier.title}</h3>
                    <p className="text-gray-200 mb-4 text-sm md:text-base">{tier.description}</p>
                    <p className="text-blue-400 font-bold mb-4 text-sm md:text-base">{tier.price}</p>
                    <ul className="mb-4 space-y-1 list-disc list-inside text-sm md:text-base">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                    <button onClick={() => handleSubscribe(tier)} className="mt-auto gradient-btn w-full">
                      <span className="btn-inner">Subscribe</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>

      {/* CSS for gradient buttons */}
      <style jsx>{`
        .gradient-btn {
          position: relative;
          z-index: 1;
          padding: 1px;
          border-radius: 0.5rem;
          background: linear-gradient(to right, #4f46e5, #06b6d4);
          cursor: pointer;
        }
        
        .btn-inner {
          display: block;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          background-color: #1f2937;
          color: white;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .gradient-btn:hover .btn-inner {
          background-color: rgba(31, 41, 55, 0.8);
        }
      `}</style>
    </div>
  )
}
