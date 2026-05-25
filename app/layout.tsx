import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "LaddboxGuiden | Hitta certifierade laddboxinstallatörer i Sverige",
  description:
    "Jämför certifierade installatörer av laddboxar i hela Sverige.",

  verification: {
    google: "e_0xJsIbsISTtrwEhUsou3qSn9m2MUjrN2qYUP2FEaQ"
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
