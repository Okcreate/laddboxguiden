import type { Metadata } from 'next'
import Script from 'next/script'
import { supabase } from '@/lib/supabase'

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

  const pageTypes = [
    'installator',
    'laddbox-villa',
    'laddbox-brf',
    'laddbox-foretag',
    'laddbox-med-lastbalansering',
    'basta-laddbox',
  ]

  const pages = []

  for (const brand of brands) {
    for (const city of cities) {

      for (const type of pageTypes) {

        pages.push({
          slug: `${brand}-${type}-${city}`,
        })

      }

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
    description: `Jämför laddboxar, installatörer och priser för ${title}.`,
  }
}

export default async function SeoPage({
  params,
}: Props) {

  const { slug } = await params

  const parts = slug.split('-')

  const brand = parts[0]
  const citySlug = decodeURIComponent(parts[parts.length - 1])

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

  const pageType = parts.slice(1, -1).join('-')

  let intro = ''
  let content = ''

  if (pageType === 'laddbox-villa') {

    intro = `Jämför ${brandName}-laddboxar för villa i ${cityName}.`

    content = `
    Villaägare i ${cityName} väljer allt oftare smarta laddboxar från ${brandName}.
    Med rätt installation får du snabbare och säkrare laddning hemma.

    Många väljer laddboxar med lastbalansering för att skydda husets elsystem
    och optimera laddningen under dygnets billigaste timmar.
    `

  } else if (pageType === 'laddbox-brf') {

    intro = `Hitta ${brandName}-lösningar för BRF i ${cityName}.`

    content = `
    Bostadsrättsföreningar i ${cityName} installerar allt oftare laddboxar
    för boende och besökare.

    Många BRF:er väljer smart lastbalansering och skalbara laddlösningar
    för framtidens elbilar.
    `

  } else if (pageType === 'laddbox-foretag') {

    intro = `Jämför ${brandName}-laddboxar för företag i ${cityName}.`

    content = `
    Företag i ${cityName} investerar allt oftare i laddinfrastruktur
    för anställda och företagsbilar.

    Moderna laddlösningar kan bidra till bättre hållbarhetsprofil
    och framtidssäkra verksamheten.
    `

  } else if (pageType === 'laddbox-med-lastbalansering') {

    intro = `Hitta ${brandName}-laddboxar med lastbalansering i ${cityName}.`

    content = `
    Lastbalansering hjälper fastigheter i ${cityName}
    att undvika överbelastning av elsystemet.

    Många väljer smart dynamisk lastbalansering
    för att optimera energiförbrukningen.
    `

  } else if (pageType === 'basta-laddbox') {

    intro = `Jämför bästa ${brandName}-laddboxarna i ${cityName}.`

    content = `
    Många villaägare jämför idag olika laddboxar
    för att hitta bästa funktioner, design och smart laddning.

    ${brandName} är ett populärt alternativ tack vare användarvänlighet,
    appstyrning och energieffektivitet.
    `

  } else {

    intro = `Hitta certifierade ${brandName}-installatörer i ${cityName}.`

    content = `
    Professionella installatörer i ${cityName}
    hjälper villaägare och företag med säker installation av laddboxar.

    En korrekt installation säkerställer optimal prestanda
    och följer svenska elsäkerhetskrav.
    `
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brandName} ${title}`,
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
    mainEntity: [
      {
        "@type": "Question",
        name: `Vad kostar installation av ${brandName} i ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Priset varierar beroende på fastighet och installation.",
        },
      },
      {
        "@type": "Question",
        name: "Finns grönt avdrag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, många installationer omfattas av grönt teknik-avdrag.",
        },
      },
    ],
  }

  const relatedBrands = [
    'easee',
    'zaptec',
    'tesla',
    'wallbox',
  ]

  const relatedCities = [
    'stockholm',
    'goteborg',
    'malmo',
  ]

  const relatedPageTypes = [
    'installator',
    'laddbox-villa',
    'laddbox-brf',
  ]

  const relatedLinks = []

  for (const relatedBrand of relatedBrands) {

    if (relatedBrand !== brand) {

      relatedLinks.push({
        href: `/seo/${relatedBrand}-${pageType}-${citySlug}`,
        label: `${relatedBrand} ${pageType} ${cityName}`
          .replaceAll('-', ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase()),
      })

    }

  }

  for (const relatedType of relatedPageTypes) {

    if (relatedType !== pageType) {

      relatedLinks.push({
        href: `/seo/${brand}-${relatedType}-${citySlug}`,
        label: `${brandName} ${relatedType} ${cityName}`
          .replaceAll('-', ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase()),
      })

    }

  }

  for (const relatedCity of relatedCities) {

    if (relatedCity !== citySlug) {

      relatedLinks.push({
        href: `/seo/${brand}-${pageType}-${relatedCity}`,
        label: `${brandName} ${pageType} ${relatedCity}`
          .replaceAll('-', ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase()),
      })

    }

  }

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
        {intro}
      </p>

      <div className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">

        <p>
          {content}
        </p>

      </div>

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

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-10">
          Vanliga frågor
        </h2>

        <div className="space-y-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">
              Vad kostar installation?
            </h3>

            <p className="text-slate-600">
              Kostnaden varierar beroende på fastighet och laddbox.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">
              Finns grönt avdrag?
            </h3>

            <p className="text-slate-600">
              Ja, många installationer omfattas av grönt teknik-avdrag.
            </p>
          </div>

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Relaterade guider
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedLinks.map((link) => (

            <a
              key={link.href}
              href={link.href}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition block"
            >
              {link.label}
            </a>

          ))}

        </div>

      </section>

    </main>
  )
}