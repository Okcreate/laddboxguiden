'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="backdrop-blur-2xl bg-slate-900/40 border border-white/10 shadow-2xl rounded-[28px] px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-black tracking-tight text-white">
              ⚡ Laddboxportalen
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Städer
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Installatörer
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Blogg
            </a>
          </nav>

          {/* CTA */}
          <button className="bg-green-500 text-white hover:bg-green-400 hover:text-white transition px-5 py-3 rounded-2xl font-bold shadow-lg">
            Lägg till företag
          </button>
        </div>
      </div>
    </header>
  )
}