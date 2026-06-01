import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laddboxportalen.se"),

  title: {
    default: "Laddboxportalen | Hitta certifierade laddboxinstallatörer",
    template: "%s | Laddboxportalen",
  },

  description:
    "Jämför certifierade installatörer av laddboxar i hela Sverige.",

  verification: {
    google: "wt99FWG0Odk2scfgnstB3w-gadKBsks5rDhfuKts4ys",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    siteName: "Laddboxportalen",
    locale: "sv_SE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <Navbar />

        <main className="flex-1">
  {children}
</main>

        <Footer />
      </body>
    </html>
  );
}