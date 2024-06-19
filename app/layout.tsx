import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | iAM (that iAM) RETAIL THERAPY, Inc",
    default: "iAM (that iAM) RETAIL THERAPY, Inc",
  },
  description:
    "Professional Consultant. Business development strategist with demonstrated success for ideating, cultivating and consummating new Brands, spearheading turnarounds, as well as generating, or accelerating growth potential across Men's, Women's, Children's Apparel/Footwear/ Accessories, Home, Health & Wellness (products and services), Hospitality, Healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative z-0`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
