import type { Metadata } from 'next'
import Script from 'next/script'
import { supabase } from '@/lib/supabase'
import InstallerCard from '@/components/InstallerCard'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {

  const brands = [
    'easee',
    'zaptec',
    'charge-amps',
    'tesla',
    'wallbox',
    'abb',
    'garo',
    'defa',
    'ctek',
    'eo',
  ]

  const cities = [
    'stockholm',
    'goteborg',
    'malmo',
    'uppsala',
    'vasteras',
    'orebro',
    'linkoping',
    'jonkoping',
    'helsingborg',
    'lund',
    'boras',
    'gavle',
    'halmstad',
    'kalmar',
    'karlstad',
    'kiruna',
    'kristianstad',
    'norrkoping',
    'skovde',
    'sundsvall',
    'trollhattan',
    'umea',
    'vaxjo',
    'eskilstuna',
    'falun',
    'varberg',
    'ystad',
    'visby',
  ]

  const pages = []

  for (const brand of brands) {
    for (const city of cities) {
      pages.push({
        slug: `${brand}-installator-${city}`,
      })
    }
  }

  return pages
}

export async function generateMetadata({
  params,
}: Props) {

  const { slug } = await params

  const title = slug
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return {
    title: `${title} | LaddboxGuiden`,
    description: `Jämför installatörer och laddboxar för ${title}.`,
  }
}

export default async function SeoPage({
  params,
}: Props) {

  const { slug } = await params

  const parts = slug.split('-')

  const brand = parts[0]
  const citySlug = parts[parts.length - 1]

  const cityName = citySlug
    .replaceAll('goteborg', 'Göteborg')
    .replaceAll('malmo', 'Malmö')
    .replaceAll('vasteras', 'Västerås')
    .replaceAll('orebro', 'Örebro')
    .replaceAll('jonkoping', 'Jönköping')
    .replaceAll('linkoping', 'Linköping')
    .replaceAll('stockholm', 'Stockholm')
    .replaceAll('uppsala', 'Uppsala')
    .replaceAll('lund', 'Lund')
    .replaceAll('helsingborg', 'Helsingborg')

  const brandName = brand
    .replaceAll('easee', 'Easee')
    .replaceAll('zaptec', 'Zaptec')
    .replaceAll('charge-amps', 'Charge Amps')
    .replaceAll('wallbox', 'Wallbox')
    .replaceAll('tesla', 'Tesla')

  const title = slug
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brandName} installatör ${cityName}`,
    areaServed: cityName,
    serviceType: "Laddboxinstallation",
    provider: {
      "@type": "Organization",
      name: "LaddboxGuiden",
    },
  }

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vad kostar installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kostnaden varierar beroende på bostad och laddbox."
      }
    },
    {
      "@type": "Question",
      "name": "Finns grönt avdrag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, många installationer omfattas av grönt teknik-avdrag."
      }
    }
  ]
}

  const relatedLinks = [
    `/seo/${brand}-installator-stockholm`,
    `/seo/${brand}-installator-goteborg`,
    `/seo/${brand}-installator-malmo`,
    `/seo/${brand}-installator-uppsala`,
    `/seo/${brand}-installator-helsingborg`,
    `/seo/${brand}-installator-linkoping`,
  ]

  const { data: installers } = await supabase
    .from('installers')
    .select('*')
    .ilike('city', `%${cityName}%`)
    .limit(6)

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

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

      <h1 className="text-5xl font-bold mb-6">
        {title}
      </h1>

      <p className="text-xl text-slate-600 leading-relaxed">
        Hitta certifierade {brandName}-installatörer i {cityName}.
        Jämför priser, recensioner och installation av laddboxar för villa, BRF och företag.
      </p>

      <div className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">

        <p>
          Att installera en {brandName}-laddbox i {cityName} blir allt vanligare bland villaägare och bostadsrättsföreningar.
          Många väljer professionella installatörer för att säkerställa säker installation och korrekt belastning i elsystemet.
        </p>

        <p>
          En professionell installation säkerställer att laddboxen fungerar korrekt
          och att installationen uppfyller svenska elsäkerhetskrav.
        </p>

        <p>
          Priset för installation varierar beroende på fastighet,
          elcentral och vilken laddbox som väljs.
        </p>

      </div>

      <div className="mt-12 bg-white rounded-3xl p-10 shadow-sm">

        <h2 className="text-3xl font-bold mb-4">
          Vanliga frågor
        </h2>

        <div className="space-y-6 mt-8">

          <div>
            <h3 className="font-bold text-xl">
              Vad kostar installation?
            </h3>

            <p className="text-slate-600 mt-2">
              Kostnaden varierar beroende på bostad och laddbox.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Finns grönt avdrag?
            </h3>

            <p className="text-slate-600 mt-2">
              Ja, många installationer omfattas av grönt teknik-avdrag.
            </p>
          </div>

        </div>

      </div>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Relaterade guider
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedLinks.map((link) => (

            <a
              key={link}
              href={link}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              {link
                .replace('/seo/', '')
                .replaceAll('-', ' ')
                .replace(/\b\w/g, (l) => l.toUpperCase())
              }

            </a>

          ))}

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Installatörer i {cityName}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {installers?.map((installer: any) => (

            <a
              key={installer.id}
              href={`/installer/${installer.slug}`}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition block"
            >
              <h3 className="text-xl font-bold">
                {installer.company_name}
              </h3>

              <p className="text-slate-600 mt-2">
                {installer.city}
              </p>

            </a>

          ))}

        </div>

      </section>

    </main>
  )
}