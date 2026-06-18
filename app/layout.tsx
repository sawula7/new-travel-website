import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });

export const metadata: Metadata = {
  title: "Ceylon Journeys | Discover Sri Lanka",
  description: "Premium Sri Lanka travel experiences. Cultural heritage, beach escapes, wildlife safaris, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0D1117] text-[#E6EDF3] font-sans">{children}</body>
    </html>
  );
}
