import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaddboxGuiden | Hitta certifierade laddboxinstallatörer i Sverige",

  description:
    "Jämför certifierade installatörer av laddboxar i hela Sverige.",

  verification: {
    google: "wt99FWG0Odk2scfgnstB3w-gadKBsks5rDhfuKts4ys",
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
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col bg-slate-50">

        {/* Header */}
        <header className="border-b bg-white sticky top-0 z-50">

          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link
              href="/"
              className="text-2xl font-bold text-slate-900"
            >
              LaddboxGuiden
            </Link>

            <nav className="flex items-center gap-6 text-slate-600">

              <Link
                href="/"
                className="hover:text-black transition"
              >
                Hem
              </Link>

              <Link
                href="/topplistor/basta-laddbox-2026"
                className="hover:text-black transition"
              >
                Topplistor
              </Link>

              <Link
                href="/compare/easee-vs-zaptec"
                className="hover:text-black transition"
              >
                Jämförelser
              </Link>

              <Link
                href="/city/stockholm"
                className="hover:text-black transition"
              >
                Städer
              </Link>

            </nav>

          </div>

        </header>

        {/* Main */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-white mt-20">

          <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid md:grid-cols-4 gap-10">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  LaddboxGuiden
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Jämför laddboxar, installatörer och smarta laddlösningar i hela Sverige.
                </p>

              </div>

              <div>

                <h4 className="font-bold mb-4">
                  Populära guider
                </h4>

                <div className="space-y-3 text-slate-400">

                  <Link
                    href="/topplistor/basta-laddbox-2026"
                    className="block hover:text-white"
                  >
                    Bästa Laddbox 2026
                  </Link>

                  <Link
                    href="/compare/easee-vs-zaptec"
                    className="block hover:text-white"
                  >
                    Easee Vs Zaptec
                  </Link>

                  <Link
                    href="/seo/easee-installator-stockholm"
                    className="block hover:text-white"
                  >
                    Easee Installatör Stockholm
                  </Link>

                </div>

              </div>

              <div>

                <h4 className="font-bold mb-4">
                  Populära städer
                </h4>

                <div className="space-y-3 text-slate-400">

                  <Link
                    href="/city/stockholm"
                    className="block hover:text-white"
                  >
                    Stockholm
                  </Link>

                  <Link
                    href="/city/goteborg"
                    className="block hover:text-white"
                  >
                    Göteborg
                  </Link>

                  <Link
                    href="/city/malmo"
                    className="block hover:text-white"
                  >
                    Malmö
                  </Link>

                </div>

              </div>

              <div>

                <h4 className="font-bold mb-4">
                  SEO-sidor
                </h4>

                <div className="space-y-3 text-slate-400">

                  <Link
                    href="/seo/zaptec-laddbox-villa-stockholm"
                    className="block hover:text-white"
                  >
                    Zaptec Villa Stockholm
                  </Link>

                  <Link
                    href="/seo/easee-laddbox-brf-goteborg"
                    className="block hover:text-white"
                  >
                    Easee BRF Göteborg
                  </Link>

                  <Link
                    href="/seo/wallbox-basta-laddbox-malmo"
                    className="block hover:text-white"
                  >
                    Wallbox Malmö
                  </Link>

                </div>

              </div>

            </div>

            <div className="border-t border-slate-800 mt-14 pt-8 text-slate-500 text-sm">

              © {new Date().getFullYear()} LaddboxGuiden. Alla rättigheter förbehållna.

            </div>

          </div>

        </footer>

      </body>

    </html>
  );
}