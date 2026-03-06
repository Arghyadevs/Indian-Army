import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import GlobalAudio from "@/components/GlobalAudio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Operation: Tribute | Indian Army Digital Memorial",
  description: "An interactive digital memorial honoring the brave soldiers of India. Experience the courage, sacrifice, and legacy of the Indian Army.",
  openGraph: {
    title: "Operation: Tribute | Indian Army Digital Memorial",
    description: "An interactive digital memorial honoring the brave soldiers of India.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544758716-d8c97c8d9b73?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Operation: Tribute Cover",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-black text-white`}>
        <GlobalAudio />
        {children}
      </body>
    </html>
  );
}
