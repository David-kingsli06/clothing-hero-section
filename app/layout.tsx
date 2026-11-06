import type { Metadata } from "next";
import { Syne, Space_Grotesk, Italiana } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KAVRA | High-Fashion Luxury Streetwear",
  description: "Avant-garde menswear silhouettes and heavyweight minimalist essentials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${italiana.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#0E0F12] text-[#F3F4F6] selection:bg-[#E5E7EB] selection:text-black">
        {children}
      </body>
    </html>
  );
}
