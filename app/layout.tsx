import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Teko } from "next/font/google"; // Correct import for naming
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", // Define variable for Tailwind
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Retainer AI - Professional Social Media Analytics",
  description: "AI Analysis & Captions for Social Media Creators. Data-driven insights to grow your profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${teko.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
