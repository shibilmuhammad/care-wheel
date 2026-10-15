import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

const fontPrimary = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0B132B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Carewheel | Life moves. We're here to protect it.",
  description:
    "Simple guidance for health and vehicle insurance, so you can make confident decisions for what matters most. Protection for every part of your life.",
  keywords: [
    "Carewheel",
    "Health Insurance",
    "Vehicle Insurance",
    "All Vehicle Insurance",
    "Car Insurance",
    "Two Wheeler Insurance",
    "Commercial Vehicle Insurance",
    "Auto Rickshaw Insurance",
    "Goods Vehicle Insurance",
    "Taxi Insurance",
    "Family Health Cover",
    "Insurance Advisor Kerala",
    "Motor Insurance",
  ],
  authors: [{ name: "Carewheel" }],
  creator: "Carewheel",
  publisher: "Carewheel",
  metadataBase: new URL(`https://${siteConfig.domain}`),
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
  openGraph: {
    title: "Carewheel | Life moves. We're here to protect it.",
    description:
      "Simple guidance for health and vehicle insurance. Protection for every part of your life.",
    url: `https://${siteConfig.domain}`,
    siteName: "Carewheel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-family.jpg",
        width: 1200,
        height: 630,
        alt: "Carewheel - Simple, Trustworthy Insurance Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carewheel | Life moves. We're here to protect it.",
    description:
      "Simple guidance for health and vehicle insurance. Protection for every part of your life.",
    images: ["/images/hero-family.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontPrimary.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-emerald-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
