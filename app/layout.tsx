import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import StickyCartBar from "@/components/StickyCartBar";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeVoice | Never Miss a Big Job Again",
  description:
    "Your 24/7 AI receptionist answers every call, books appointments, and handles customer inquiries — so you never lose business to a missed call. Better than your answering service. Better than voicemail.",
  openGraph: {
    title: "PrimeVoice | Never Miss a Big Job Again",
    description:
      "Your 24/7 AI receptionist answers every call, books appointments, and handles customer inquiries — so you never lose business to a missed call.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="noise-bg">
        <div className="pb-16">{children}</div>
        <StickyCartBar />
      </body>
    </html>
  );
}
