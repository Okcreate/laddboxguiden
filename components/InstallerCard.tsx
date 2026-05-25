import Link from 'next/link'

interface InstallerCardProps {
  slug: string
  company_name: string
  city: string
  description: string
  logo_url?: string
  rating?: number
reviews_count?: number
}

export default function InstallerCard({
  company_name,
  city,
 description,
logo_url,
rating,
reviews_count,
slug,
}: InstallerCardProps) {

  

  return (
    <div className="group bg-white border border-slate-200 rounded-[32px] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      {/* Top */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border flex items-center justify-center">
  {logo_url ? (
    <img
      src={logo_url}
      alt={company_name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600" />
  )}
</div>
        <div>
          <h3 className="font-bold text-xl">
            {company_name}
          </h3>

          <p className="text-slate-500 mt-1">
            📍 {city}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-6">
        <div className="flex items-center gap-2 text-sm mt-5">
  <div className="text-yellow-500">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>

  <span className="text-slate-600">
    {rating || 4.8}
    {' '}
    ({reviews_count || 0} recensioner)
  </span>
</div>

        <div className="text-sm text-slate-500">
         
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-slate-600 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        <div className="bg-slate-100 rounded-full px-3 py-1 text-sm">
          Easee
        </div>

        <div className="bg-slate-100 rounded-full px-3 py-1 text-sm">
          Zaptec
        </div>

        <div className="bg-slate-100 rounded-full px-3 py-1 text-sm">
          Certifierad
        </div>
      </div>

      {/* Button */}
      <Link href={`/installer/${slug}`}>
        <button className="w-full mt-8 bg-slate-950 group-hover:bg-green-600 transition text-white py-4 rounded-2xl font-semibold">
          Visa profil
        </button>
      </Link>
    </div>
  )
}
