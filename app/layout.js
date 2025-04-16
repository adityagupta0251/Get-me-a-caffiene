import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Caffeine🧋",
  description: "A platform for funding me a caffeine",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon2.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon2.svg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider frontendApi="<your-clerk-frontend-api>">
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon2.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon2.svg" />
          <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        </head>

        <body
          className={`${inter.className} antialiased bg-gray-950 text-white`}
        >
          {/* Main Content Area */}
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow overflow-auto p-4">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
