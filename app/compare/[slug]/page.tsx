import type { Metadata } from 'next'
import Script from 'next/script'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {

  const comparisons = [
  'zaptec-go-vs-easee-charge-up',
  'easee-charge-up-vs-wallbox-pulsar-plus',
  'zaptec-go-vs-wallbox-pulsar-plus',
  'zaptec-go-vs-tesla-wall-connector',
  'easee-charge-up-vs-tesla-wall-connector',
  'charge-amps-halo-vs-zaptec-go',
  'charge-amps-halo-vs-easee-charge-up',
  'garo-entity-vs-zaptec-go',
  'defa-power-vs-easee-charge-up',
  'abb-vs-zaptec-go',
]

  return comparisons.map((slug) => ({
    slug,
  }))
}

function formatName(name: string) {

  return name
    .replaceAll('-', ' ')
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ')

}

export async function generateMetadata({
  params,
}: Props) {

  const { slug } = await params

  const parts = slug.split('-')

  const brand1 = parts[0]
  const brand2 = parts[parts.length - 1]

  const brand1Name = formatName(brand1)
  const brand2Name = formatName(brand2)

  const title = formatName(slug)

  return {
    title: `${title} | Laddboxportalen`,

    description: `Jämför ${brand1Name} och ${brand2Name}. Pris, funktioner, app, lastbalansering och installation.`,

    alternates: {
      canonical: `https://laddboxportalen.se/compare/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${title} | Laddboxportalen`,
      description: `Jämför ${brand1Name} och ${brand2Name}.`,
      url: `https://laddboxportalen.se/compare/${slug}`,
      siteName: 'Laddboxportalen',
      locale: 'sv_SE',
      type: 'article',
    },
  }
}

export default async function ComparePage({
  params,
}: Props) {

  const { slug } = await params

  const [brand1, , brand2] = slug.split('-')

  const brand1Name = formatName(brand1)
  const brand2Name = formatName(brand2)

  const title = `${brand1Name} vs ${brand2Name}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: `Jämför ${brand1Name} och ${brand2Name}.`,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Vilken är bäst: ${brand1Name} eller ${brand2Name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Både ${brand1Name} och ${brand2Name} är populära laddboxar med smarta funktioner och stöd för appstyrning.`,
        },
      },
      {
        "@type": "Question",
        name: "Har båda stöd för lastbalansering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, många moderna laddboxar erbjuder stöd för lastbalansering och smart energistyrning.",
        },
      },
    ],
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">

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
        Jämför {brand1Name} och {brand2Name}.
        Se skillnader i funktioner, smart laddning, design och installation.
      </p>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Jämförelse
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">

            <thead className="bg-slate-100">

              <tr>
                <th className="text-left p-4">Funktion</th>
                <th className="text-left p-4">{brand1Name}</th>
                <th className="text-left p-4">{brand2Name}</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-4">Appstyrning</td>
                <td className="p-4">Ja</td>
                <td className="p-4">Ja</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Lastbalansering</td>
                <td className="p-4">Ja</td>
                <td className="p-4">Ja</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">WiFi-stöd</td>
                <td className="p-4">Ja</td>
                <td className="p-4">Ja</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Smart laddning</td>
                <td className="p-4">Ja</td>
                <td className="p-4">Ja</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Fördelar med {brand1Name}
        </h2>

        <div className="space-y-4 text-lg text-slate-600">

          <p>
            {brand1Name} är populär tack vare smart appstyrning,
            modern design och stöd för dynamisk lastbalansering.
          </p>

          <p>
            Många villaägare väljer {brand1Name}
            för enkel installation och energieffektiv laddning.
          </p>

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Fördelar med {brand2Name}
        </h2>

        <div className="space-y-4 text-lg text-slate-600">

          <p>
            {brand2Name} erbjuder smart laddning,
            appfunktioner och stöd för moderna elbilar.
          </p>

          <p>
            Många väljer {brand2Name}
            för hög prestanda och framtidssäker teknik.
          </p>

        </div>

      </section>

      <section className="mt-20">

  <h2 className="text-3xl font-bold mb-8">
    Slutsats
  </h2>

  <div className="bg-white rounded-2xl p-8 shadow-sm">

    <p className="text-lg text-slate-600 leading-relaxed">
      Både {brand1Name} och {brand2Name} är populära val bland svenska
      villaägare. Vilken laddbox som passar bäst beror på budget,
      installationsförutsättningar och vilka funktioner som är viktigast.

      För den som prioriterar smart styrning, appfunktioner och
      framtidssäker teknik är båda alternativen starka kandidater.
    </p>

  </div>

</section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-10">
          Vanliga frågor
        </h2>

        <div className="space-y-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h3 className="font-bold text-xl mb-2">
              Vilken laddbox är bäst?
            </h3>

            <p className="text-slate-600">
              Valet beror på behov, budget och vilka funktioner som prioriteras.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h3 className="font-bold text-xl mb-2">
              Har båda stöd för smart laddning?
            </h3>

            <p className="text-slate-600">
              Ja, både {brand1Name} och {brand2Name}
              erbjuder smarta funktioner för laddning och energihantering.
            </p>

          </div>

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Relaterade jämförelser
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="/compare/easee-vs-zaptec"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Easee Vs Zaptec
          </a>

          <a
            href="/compare/easee-vs-wallbox"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Easee Vs Wallbox
          </a>

          <a
            href="/compare/zaptec-vs-tesla"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Zaptec Vs Tesla
          </a>

        </div>

      </section>

    </main>
  )
}