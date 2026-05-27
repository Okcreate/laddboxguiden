import type { Metadata } from 'next'

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

  const title = slug
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        {title}
      </h1>

      <p className="text-xl text-slate-600 leading-relaxed">
        Här hittar du information om {title}.
        Jämför laddboxar, installatörer och priser för att hitta bästa lösningen.
      </p>
<div className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">
  <p>
    Att välja rätt installatör är viktigt för både säkerhet och prestanda.
    Många villaägare jämför idag olika laddboxar som Easee, Zaptec och Charge Amps innan installation.
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

    <a
      href="/seo/easee-installator-stockholm"
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
    >
      Easee installatör Stockholm
    </a>

    <a
      href="/seo/zaptec-installator-goteborg"
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
    >
      Zaptec installatör Göteborg
    </a>

    <a
      href="/seo/charge-amps-installator-malmo"
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
    >
      Charge Amps Malmö
    </a>

  </div>
</section>

    </main>
  )
}