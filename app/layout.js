import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Caffeine🧋",
  description: "A platform for funding me a caffine",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon2.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon2.svg' }
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Main Favicon (ICO) */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" />

        {/* SVG Favicon for Modern Browsers */}
        <link rel="icon" href="favicon2.svg" type="image/svg+xml" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="favicon2.svg" />

        {/* Fallback for Legacy Browsers */}
        <link rel="alternate icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <body className={`${inter.className} bg-gray-950 text-white`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow overflow-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
