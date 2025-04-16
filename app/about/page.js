'use client';

import { Typography } from "@material-tailwind/react";

export default function MyComponent() {
  return (
    <>
      <div className="container">
        <Typography variant="h4" className="font-normal !text-gray-500 text-center mb-6">
          NextGendev: Innovative Discord Bot Platform
        </Typography>

        <Typography className="font-normal !text-gray-500">
          <p>
            Welcome to NextGendev, where cutting-edge technology meets community engagement.
            Our forthcoming Discord bot is designed to manage image uploads and deliver a
            complete, automated server solution—crafted to streamline your daily digital
            interactions while keeping the human element alive.
          </p>
          <p>
            As we embark on this innovative venture, we invite you to become an integral part
            of our evolution. By funding our project, you not only receive a complimentary
            one-month trial of our Discord bot but also gain exclusive access to our evolving
            community and platform.
          </p>
          <p>
            <strong>Basic Support:</strong> At just <em>$5 per month</em>, you secure instant
            access to our Discord bot and enjoy a complimentary month of our Telegram bot,
            along with membership in our exclusive early adopters community.
          </p>
          <p>
            <strong>Standard Support:</strong> For a six-month period at <em>$7</em>, unlock
            access to our specialized suite of Discord bots and benefit from full integration
            with our Telegram solution, keeping you connected and in control at all times.
          </p>
          <p>
            <strong>Pro Support:</strong> With this tier, gain priority access, auto
            pre-registration for premium features, exclusive discount coupons, and a complete
            suite of bot solutions—ensuring rapid support and a fully optimized experience.
          </p>
          <p>
            Join us at NextGendev on this exciting journey, where every contribution helps
            shape the future of seamless server management and innovative connectivity.
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
    </>
  );
}
