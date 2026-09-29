import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import TreatFabFooter from "@/components/footer/TreatFabFooter"

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
    default:
      "Treatfab Chemicals | Textile Process Chemicals Manufacturer, Bhilwara",
    template: "%s | Treatfab Chemicals",
  },
  description:
    "Treatfab Chemicals manufactures textile wet-processing chemicals for fibre, yarn, fabric and garment stages — dyeing auxiliaries, sizing chemicals, denim processing chemicals, and finishing agents. Based in Bhilwara, Rajasthan.",
  keywords: [
    "Treatfab Chemicals",
    "textile chemical manufacturer India",
    "textile chemical supplier Bhilwara",
    "textile processing chemicals",
    "textile process chemistry",
    "denim processing chemicals",
    "yarn dyeing auxiliaries",
    "sizing chemicals for cotton yarn",
    "textile scouring bleaching chemicals",
  ],
  authors: [{ name: "Treatfab Chemicals" }],
  creator: "Treatfab Chemicals",
  metadataBase: new URL("https://treatfab.com"),
  alternates: {
    canonical: "https://treatfab.com/",
  },
  openGraph: {
    title: "Treatfab Chemicals | Textile Process Chemistry",
    description:
      "Ethical chemistry for textile processes — from fibre and yarn to fabric and garment finishing.",
    siteName: "Treatfab Chemicals",
    type: "website",
    locale: "en_IN",
    url: "https://treatfab.com/",
    images: [
      {
        url: "https://treatfab.com/images/treatfab-logo3.png",
        alt: "Treatfab Chemicals",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Treatfab Chemicals Private Limited",
  url: "https://treatfab.com",
  description:
    "Treatfab Chemicals manufactures textile wet-processing chemicals covering fibre, spinning, yarn, fabric and garment stages.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 3, III Floor, Orient Arcade, Transport Nagar",
    addressLocality: "Bhilwara",
    addressRegion: "Rajasthan",
    postalCode: "311001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9829093188",
    contactType: "sales",
    email: "treatfabchem@gmail.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        {children}
        <TreatFabFooter/>
      </body>
    </html>
  );
}