import type { Metadata } from "next";
import { Inter, Teko, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "CrickIQ",
  description: "Smarter Cricket Insights, Every Ball.",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${teko.variable} 
          ${rajdhani.variable} 
          bg-[#0D1B2A] 
          text-[#F8FAFC] 
          antialiased
          font-inter
        `}
      >
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
