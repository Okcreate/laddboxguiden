'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar() {
  const [city, setCity] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (!city) return

    router.push(
  `/city/${city
    .toLowerCase()
    .replaceAll('ö', 'o')
    .replaceAll('ä', 'a')
    .replaceAll('å', 'a')}`
)
  }

  return (
    <section className="-mt-10 relative z-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[32px] p-5 border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Input */}
          <div className="flex-1 relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              🔍
            </div>

            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Sök stad, exempelvis Malmö"
              className="w-full h-16 rounded-2xl border border-slate-200 pl-14 pr-5 text-lg outline-none focus:ring-4 focus:ring-green-200"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="h-16 px-10 rounded-2xl bg-green-600 hover:bg-green-700 transition text-white font-bold text-lg shadow-lg shadow-green-500/20"
          >
            Sök installatörer
          </button>
        </div>

        {/* Popular searches */}
        <div className="flex flex-wrap gap-3 mt-5">
          {[
            'Stockholm',
            'Göteborg',
            'Malmö',
            'Lund',
          ].map((city) => (
            <button
              key={city}
              onClick={() =>
                router.push(
  `/city/${city
    .toLowerCase()
    .replaceAll('ö', 'o')
    .replaceAll('ä', 'a')
    .replaceAll('å', 'a')}`
)
              }
              className="bg-slate-100 hover:bg-slate-200 transition rounded-full px-4 py-2 text-sm"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}