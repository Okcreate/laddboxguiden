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
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">

      {/* Företag */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {logo_url ? (
            <img
              src={logo_url}
              alt={`Logotyp för ${company_name}`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-green-400 to-green-600" />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold leading-tight text-slate-950">
            {company_name}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            <span aria-hidden="true">📍</span> {city}
          </p>
        </div>
      </div>

      {/* Betyg */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <div
          className="text-amber-500"
          aria-label={`Betyg ${rating ?? 4.8} av 5`}
        >
          ★★★★★
        </div>

        <span className="text-sm font-medium text-slate-700">
          {rating ?? 4.8}
        </span>

        <span className="text-sm text-slate-500">
          ({reviews_count ?? 0} recensioner)
        </span>
      </div>

      {/* Beskrivning */}
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-700">
        {description}
      </p>

      {/* Egenskaper */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
          Easee
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
          Zaptec
        </span>

        <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800">
          Certifierad
        </span>
      </div>

      {/* Profil */}
      <div className="mt-auto pt-6">
        <Link
          href={`/installer/${slug}`}
          className="flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
        >
          Visa profil
          <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

    </article>
  )
}