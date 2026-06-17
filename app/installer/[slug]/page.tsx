import Script from 'next/script'
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
    .replace(/\b[a-zåäö]/g, (l) => l.toUpperCase())

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: installer.company_name,
    image: installer.logo_url || "",
    telephone: installer.phone || "",
    address: {
      "@type": "PostalAddress",
      addressLocality: installer.city,
      addressCountry: "SE",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: installer.rating || 4.8,
      reviewCount: installer.reviews_count || 1,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Installerar ${installer.company_name} Easee och Zaptec?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, ${installer.company_name} installerar populära laddboxar som Easee och Zaptec.`,
        },
      },
      {
        "@type": "Question",
        name: `Erbjuder ${installer.company_name} grön teknik-avdrag?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, många installationer omfattas av grön teknik-avdrag.",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
<section className="bg-slate-950 text-white pt-44 pb-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-slate-700" />

            <div>

              <h1 className="text-5xl font-bold">
                {installer.company_name}
              </h1>

              <p className="text-slate-300 mt-3 text-xl">
                {installer.city}
              </p>

              <div className="flex items-center gap-2 mt-4">

                <span className="text-yellow-400">
                  ★★★★★
                </span>

                <span className="text-slate-300">
                  {installer.rating} ({installer.reviews_count} recensioner)
                </span>

              </div>

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
              </p>

              <div className="mt-12">

  <h3 className="text-2xl font-bold mb-4">
    Laddboxinstallation i {installer.city}
  </h3>

  <p className="text-slate-600 text-lg leading-relaxed">
    Efterfrågan på laddboxar ökar snabbt i {installer.city} när allt fler
    hushåll och företag väljer elbil. En professionellt installerad
    laddbox ger snabbare laddning, högre säkerhet och bättre kontroll
    över energiförbrukningen jämfört med vanliga eluttag.
  </p>

</div>

<div className="mt-12">

  <h3 className="text-2xl font-bold mb-4">
    Tjänster
  </h3>

  <ul className="space-y-3 text-slate-600">

    <li>✓ Installation av laddbox för villa</li>
    <li>✓ Installation för bostadsrättsföreningar</li>
    <li>✓ Installation för företag</li>
    <li>✓ Lastbalansering</li>
    <li>✓ Hjälp med grön teknik-avdrag</li>

  </ul>

</div>

<div className="mt-12">

  <h3 className="text-2xl font-bold mb-4">
    Vanliga laddboxar
  </h3>

  <p className="text-slate-600 text-lg leading-relaxed">
    Många installatörer arbetar med populära modeller från Easee,
    Zaptec, Wallbox, Tesla, Charge Amps och andra ledande tillverkare.
    Valet av laddbox beror på fastighetens förutsättningar och vilka
    funktioner som önskas.
  </p>

</div>

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

              <div className="mt-12">

                <h3 className="text-2xl font-bold mb-4">
                  Laddboxar de installerar
                </h3>

                <div className="flex flex-wrap gap-3">

                  <span className="bg-slate-100 px-4 py-2 rounded-full">
                    Easee
                  </span>

                  <span className="bg-slate-100 px-4 py-2 rounded-full">
                    Zaptec
                  </span>

                  <span className="bg-slate-100 px-4 py-2 rounded-full">
                    Wallbox
                  </span>

                  <span className="bg-slate-100 px-4 py-2 rounded-full">
                    Tesla
                  </span>

                </div>

              </div>

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

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl p-10 shadow-sm">

          <h3 className="text-2xl font-bold mb-8">
            Vanliga frågor
          </h3>

          <div className="space-y-6">

            <div>

              <h4 className="font-bold text-lg mb-2">
                Installerar {installer.company_name} Easee och Zaptec?
              </h4>

              <p className="text-slate-600">
                Ja, företaget arbetar ofta med populära laddboxar som Easee, Zaptec och Wallbox.
              </p>

            </div>

            <div>

              <h4 className="font-bold text-lg mb-2">
                Erbjuds grön teknik-avdrag?
              </h4>

              <p className="text-slate-600">
                Många installationer omfattas av grön teknik-avdrag vilket sänker kostnaden.
              </p>

            </div>

            <div>

              <h4 className="font-bold text-lg mb-2">
                Installerar de i hela {installer.city}?
              </h4>

              <p className="text-slate-600">
                Många installatörer arbetar i stora delar av {installer.city} och närliggande områden.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}