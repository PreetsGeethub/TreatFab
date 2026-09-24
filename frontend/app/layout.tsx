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
    default: "Treatfab Chemicals | Textile Process Chemistry",
    template: "%s | Treatfab Chemicals",
  },
  description:
    "Treatfab Chemicals develops and distributes textile process chemistry for pre-treatment, dyeing, printing, sizing and finishing.",
  keywords: [
    "Treatfab Chemicals",
    "textile chemicals",
    "textile process chemistry",
    "textile chemical solutions",
    "dyeing chemicals",
    "textile auxiliaries",
    "textile processing chemicals",
  ],
  authors: [{ name: "Treatfab Chemicals" }],
  creator: "Treatfab Chemicals",
  metadataBase: new URL("https://YOUR-DOMAIN.com"),
  openGraph: {
    title: "Treatfab Chemicals | Textile Process Chemistry",
    description:
      "Ethical chemistry for textile processes — from preparation and dyeing to printing and finishing.",
    siteName: "Treatfab Chemicals",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <TreatFabFooter/>
      </body>
    </html>
  );
}