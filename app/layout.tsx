import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";   // ✅ ADD THIS
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const handwrite = localFont({
  src: "../public/fonts/PatrickHand-Regular.ttf",
  variable: "--font-handwrite",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A modern portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${handwrite.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
