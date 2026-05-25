import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "LaddboxGuiden | Hitta certifierade laddboxinstallatörer i Sverige",
  
  description:
    "Jämför certifierade installatörer av laddboxar i hela Sverige.",

  verification: {
    google: "wt99FWG0Odk2scfgnstB3w-gadKBsks5rDhfuKts4ys"
  }
}

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
