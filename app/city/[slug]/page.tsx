import Script from 'next/script'
import { supabase } from '@/lib/supabase'
import InstallerCard from '@/components/InstallerCard'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: "stockholm" },
    { slug: "goteborg" },
    { slug: "malmo" },
    { slug: "uppsala" },
    { slug: "vasteras" },
    { slug: "orebro" },
    { slug: "linkoping" },
    { slug: "jonkoping" },
    { slug: "helsingborg" },
    { slug: "lund" },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const cityName = decodeURIComponent(slug)
    .replaceAll('goteborg', 'Göteborg')
    .replaceAll('malmo', 'Malmö')
    .replaceAll('vasteras', 'Västerås')
    .replaceAll('orebro', 'Örebro')
    .replaceAll('jonkoping', 'Jönköping')
    .replaceAll('linkoping', 'Linköping')

  return {
    title: `Laddboxinstallatörer i ${cityName} | LaddboxGuiden`,
    description: `Jämför certifierade installatörer av laddboxar i ${cityName}. Hitta bästa pris och recensioner.`,
  }
}

export default async function CityPage({
  params,
}: Props) {

  const { slug } = await params

  const cityName = decodeURIComponent(slug)
    .replaceAll('goteborg', 'Göteborg')
    .replaceAll('malmo', 'Malmö')
    .replaceAll('vasteras', 'Västerås')
    .replaceAll('orebro', 'Örebro')
    .replaceAll('jonkoping', 'Jönköping')
    .replaceAll('linkoping', 'Linköping')

  const { data, error } = await supabase
    .from('installers')
    .select('*')
    .ilike('city', `%${slug}%`)

  if (error) {
    return (
      <div className="p-10">
        Kunde inte hämta installatörer
      </div>
    )
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Vad kostar installation av laddbox i ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Installation av laddbox i ${cityName} kostar vanligtvis mellan 10 000 och 25 000 kronor.`,
        },
      },
      {
        "@type": "Question",
        name: "Behöver man en certifierad installatör?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, installation av laddbox ska utföras av certifierad elektriker.",
        },
      },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Laddboxinstallatörer i ${cityName}`,
    areaServed: cityName,
    description: `Jämför installatörer av laddboxar i ${cityName}.`,
    url: `https://laddboxportalen.se/city/${slug}`,
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <h1 className="text-5xl font-bold mb-4 capitalize">
        Laddboxinstallatörer i {cityName}
      </h1>

      <p className="text-gray-600 mt-4 mb-10 max-w-3xl">
        Här hittar du certifierade installatörer av laddboxar i {cityName}.
        Jämför omdömen, priser och tjänster för att hitta rätt företag.
      </p>

      <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-14">

        <p>
          Allt fler villaägare och bostadsrättsföreningar installerar laddboxar i {cityName}.
          Med rätt installatör får du en säker installation som följer svenska elsäkerhetskrav.
        </p>

        <p>
          Många väljer populära laddboxar som Easee, Zaptec och Charge Amps
          beroende på funktioner, design och smart laddning.
        </p>

        <p>
          Kostnaden för installation varierar beroende på fastighet,
          elcentral och vilken laddbox som installeras.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {data?.map((installer: any) => (
          <InstallerCard
            key={installer.id}
            slug={installer.slug}
            company_name={installer.company_name}
            city={installer.city}
            description={installer.description}
            logo_url={installer.logo_url}
            rating={installer.rating}
            reviews_count={installer.reviews_count}
          />
        ))}

      </div>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-10">
          Vanliga frågor om laddboxar i {cityName}
        </h2>

        <div className="space-y-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">
              Vad kostar installation av laddbox i {cityName}?
            </h3>

            <p className="text-slate-600">
              Priset för installation av laddbox i {cityName} ligger vanligtvis mellan 10 000 och 25 000 kronor beroende på laddbox och installation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">
              Behöver man en certifierad installatör?
            </h3>

            <p className="text-slate-600">
              Ja, installation av laddbox ska utföras av certifierad elektriker enligt svenska regler.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">
              Vilken laddbox är mest populär?
            </h3>

            <p className="text-slate-600">
              Easee och Zaptec är två av de mest populära laddboxarna i Sverige.
            </p>
          </div>

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Populära guider i {cityName}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href={`/seo/easee-installator-${slug}`}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Easee installatör {cityName}
          </a>

          <a
            href={`/seo/zaptec-installator-${slug}`}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Zaptec installatör {cityName}
          </a>

          <a
            href={`/seo/charge-amps-installator-${slug}`}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Charge Amps installatör {cityName}
          </a>

        </div>

      </section>

    </main>
  )
}