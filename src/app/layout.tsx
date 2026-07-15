import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tax Preparers Myrtle Beach | Expert Tax Preparation Services",
    template: "%s | Tax Preparers Myrtle Beach",
  },
  description: "Expert tax preparation services in Myrtle Beach, SC. Individual, small business, and corporate tax solutions. Call (843) 555-1234 for a consultation.",
  keywords: ["tax preparer myrtle beach", "tax preparation SC", "individual tax returns", "small business tax", "corporate tax", "myrtle beach accountant"],
  openGraph: {
    title: "Tax Preparers Myrtle Beach | Expert Tax Preparation Services",
    description: "Navigate the complexities of tax season with confidence. Our expert team ensures your tax returns are accurate, compliant, and optimized.",
    url: "https://taxpreparersmyrtlebeach.com",
    siteName: "Tax Preparers Myrtle Beach",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Tax Preparers Myrtle Beach",
              "telephone": "+1-843-555-1234",
              "email": "info@taxpreparersmyrtlebeach.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6850 Blue Heron Blvd Unit 103",
                "addressLocality": "Myrtle Beach",
                "addressRegion": "SC",
                "postalCode": "29588",
                "addressCountry": "US"
              },
              "url": "https://taxpreparersmyrtlebeach.com",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "serviceType": ["Tax Preparation", "Individual Tax Returns", "Business Tax Services", "Corporate Tax"]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
