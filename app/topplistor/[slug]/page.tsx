import type { Metadata } from 'next'
import Script from 'next/script'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {

  const pages = [
    'basta-laddbox-2026',
    'basta-laddbox-villa',
    'basta-laddbox-brf',
    'basta-laddbox-lastbalansering',
    'basta-laddbox-foretag',
  ]

  return pages.map((slug) => ({
    slug,
  }))
}

function formatText(text: string) {

  return text
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

  const title = formatText(slug)

  return {
    title: `${title} | LaddboxGuiden`,
    description: `Jämför de bästa laddboxarna för ${title}.`,
  }
}

export default async function TopplistaPage({
  params,
}: Props) {

  const { slug } = await params

  const title = formatText(slug)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: `Topplista över bästa laddboxarna för ${title}.`,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vilken laddbox är bäst?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Det beror på behov, funktioner och budget.",
        },
      },
      {
        "@type": "Question",
        name: "Behöver man lastbalansering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lastbalansering rekommenderas för många fastigheter för att undvika överbelastning.",
        },
      },
    ],
  }

  const products = [
    {
      name: 'Easee Charge',
      description: 'Populär smart laddbox med appstyrning och lastbalansering.',
    },
    {
      name: 'Zaptec Go',
      description: 'Kompakt laddbox med smart energihantering.',
    },
    {
      name: 'Wallbox Pulsar Plus',
      description: 'Modern laddbox med WiFi och smarta funktioner.',
    },
  ]

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
        Här jämför vi några av marknadens mest populära laddboxar
        baserat på funktioner, smart laddning och användarvänlighet.
      </p>

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-10">
          Topplista
        </h2>

        <div className="space-y-6">

          {products.map((product, index) => (

            <div
              key={product.name}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >

              <div className="flex items-center gap-4 mb-4">

                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

              </div>

              <p className="text-slate-600 text-lg">
                {product.description}
              </p>

            </div>

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
              Vilken laddbox är bäst?
            </h3>

            <p className="text-slate-600">
              Det beror på vilka funktioner, budget och smarta funktioner som prioriteras.
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h3 className="font-bold text-xl mb-2">
              Är smart laddning viktigt?
            </h3>

            <p className="text-slate-600">
              Många väljer idag smart laddning för bättre energistyrning och lägre elkostnader.
            </p>

          </div>

        </div>

      </section>

      <section className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Relaterade guider
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="/compare/easee-vs-zaptec"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Easee Vs Zaptec
          </a>

          <a
            href="/seo/easee-installator-stockholm"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Easee Installatör Stockholm
          </a>

          <a
            href="/seo/zaptec-laddbox-villa-goteborg"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            Zaptec Laddbox Villa Göteborg
          </a>

        </div>

      </section>

    </main>
  )
}