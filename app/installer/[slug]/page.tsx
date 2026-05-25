import LeadForm from '@/components/LeadForm'
import { supabase } from '@/lib/supabase'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const company = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return {
    title: `${company} | Laddboxinstallatör`,
    description: `Läs om ${company}. Jämför recensioner, laddboxar och kontaktuppgifter.`,
  }
}

export default async function InstallerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: installer } = await supabase
    .from('installers')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!installer) {
    return (
      <div className="p-20 text-center">
        Företaget hittades inte.
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-slate-700" />

            <div>
              <h1 className="text-5xl font-bold">
                {installer.company_name}
              </h1>

              <p className="text-slate-300 mt-3 text-xl">
                {installer.city}
<div className="flex items-center gap-2 mt-4">
  <span className="text-yellow-400">★★★★★</span>

  <span className="text-slate-300">
    {installer.rating} ({installer.reviews_count} recensioner)
  </span>
</div>

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">
                Om företaget
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                {installer.description}
<div className="mt-10">
  <h3 className="text-2xl font-bold mb-4">
    Varför välja {installer.company_name}?
  </h3>

  <ul className="space-y-3 text-slate-600">
    <li>✅ Certifierad installatör</li>
    <li>✅ Installation i {installer.city}</li>
    <li>✅ Hjälp med grön teknik-avdrag</li>
    <li>✅ Installation av populära laddboxar</li>
  </ul>
</div>

              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-10">
              <h3 className="text-2xl font-bold mb-6">
                Kontakt
              </h3>

              <div className="space-y-4 text-slate-600">
                <p>
                  📍 {installer.city}
                </p>

                <p>
                  📞 {installer.phone || 'Ej angivet'}
                </p>

                <p>
                  🌐 {installer.website || 'Ej angivet'}
                </p>
              </div>

              <div className="mt-8">
  <LeadForm installerId={installer.id} />
</div>
            </div>
          </div>
        </div>
      </section>
<section className="max-w-6xl mx-auto px-6 pb-20">
  <div className="bg-white rounded-3xl p-10 shadow-sm">
    <h3 className="text-2xl font-bold mb-6">
      Fler installatörer i {installer.city}
    </h3>

    <a
      href={`/city/${installer.city.toLowerCase()}`}
      className="text-blue-600 hover:underline"
    >
      Se alla installatörer i {installer.city}
    </a>
  </div>
</section>

    </main>
  )
}