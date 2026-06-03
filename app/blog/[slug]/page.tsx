import type { Metadata } from 'next'
import Script from 'next/script'

type Props = {
params: Promise<{ slug: string }>
}

const articles = [
  'vad-kostar-en-laddbox',
  'hur-fungerar-lastbalansering',
  'laddbox-for-villa',
  'laddbox-for-brf',
  'laddbox-for-foretag',
  'easee-charge-up-recension',
  'zaptec-go-recension',

  'gront-avdrag-laddbox',
  'laddbox-for-tesla',
  'laddbox-for-volvo-ex30',
  'wallbox-pulsar-plus-recension',
  'charge-amps-halo-recension',
  'basta-laddbox-for-solceller',
  'laddbox-med-appstyrning',
  'hur-snabbt-laddar-en-laddbox',
  'skillnad-mellan-11kw-och-22kw',
  'kan-man-installera-laddbox-sjalv',
]

export async function generateStaticParams() {
return articles.map((slug) => ({
slug,
}))
}

function formatTitle(slug: string) {
return slug
.replaceAll('-', ' ')
.split(' ')
.map(word =>
word.charAt(0).toUpperCase() + word.slice(1)
)
.join(' ')
}

export async function generateMetadata({
params,
}: Props): Promise<Metadata> {

const { slug } = await params

const title = formatTitle(slug)

return {
  title: `${title} | Laddboxportalen`,

  description:
    `${title}. Guide, tips, priser och vanliga frågor om laddboxar.`,

  alternates: {
    canonical: `https://laddboxportalen.se/blog/${slug}`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: `${title} | Laddboxportalen`,
    description:
      `${title}. Guide, tips och information om laddboxar.`,
    url: `https://laddboxportalen.se/blog/${slug}`,
    siteName: 'Laddboxportalen',
    locale: 'sv_SE',
    type: 'article',
  },
}
}

export default async function BlogPage({
params,
}: Props) {

const { slug } = await params

const title = formatTitle(slug)

let intro = ''
let content = ''

if (slug === 'vad-kostar-en-laddbox') {
  intro = 'Vad kostar en laddbox 2026? Här går vi igenom priser för både laddbox och installation.'
  content = 'Priset för en laddbox ligger vanligtvis mellan 5 000 och 12 000 kronor. Med installation hamnar totalkostnaden ofta mellan 10 000 och 25 000 kronor beroende på fastighet och elcentral.'
}

else if (slug === 'hur-fungerar-lastbalansering') {
  intro = 'Lastbalansering hjälper till att fördela elförbrukningen i fastigheten.'
  content = 'Med lastbalansering kan laddboxen automatiskt anpassa laddningen efter hur mycket el som används i huset för tillfället.'
}

else if (slug === 'laddbox-for-villa') {
  intro = 'För villaägare är en laddbox det säkraste sättet att ladda elbilen hemma.'
  content = 'Moderna laddboxar erbjuder smart laddning, appstyrning och möjlighet till lastbalansering.'
}

else if (slug === 'easee-charge-up-recension') {
  intro = 'Easee Charge Up är en av Sveriges mest populära laddboxar.'
  content = 'Easee erbjuder smart laddning, appstyrning och stöd för lastbalansering vilket gör den till ett populärt val bland villaägare.'
}

else if (slug === 'zaptec-go-recension') {
  intro = 'Zaptec Go är en kompakt och smart laddbox för hemmabruk.'
  content = 'Zaptec Go erbjuder hög laddkapacitet, modern design och avancerade funktioner för energistyrning.'
}

else {
  intro = `Guide om ${title.toLowerCase()}.`
  content = `Här hittar du information om ${title.toLowerCase()}, installation, kostnader och vanliga frågor.`
}
const articleSchema = {
"@context": "https://schema.org",
"@type": "Article",
headline: title,
publisher: {
"@type": "Organization",
name: "Laddboxportalen",
},
}

const faqSchema = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: [
{
"@type": "Question",
name: "Vad kostar en laddbox?",
acceptedAnswer: {
"@type": "Answer",
text: "Priset varierar beroende på modell, installation och fastighet.",
},
},
{
"@type": "Question",
name: "Finns grönt teknik-avdrag?",
acceptedAnswer: {
"@type": "Answer",
text: "Ja, många installationer omfattas av grönt teknik-avdrag.",
},
},
],
}

return ( <main className="max-w-5xl mx-auto px-6 pt-40 pb-20">

```
  <Script
    id="article-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(articleSchema),
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

  <section className="mt-16 space-y-8">

    <h2 className="text-3xl font-bold">
      Introduktion
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed">
  {content}
</p>

    <h2 className="text-3xl font-bold">
      Fördelar
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed">
      Moderna laddboxar erbjuder smart laddning, lastbalansering,
      appstyrning och hög säkerhet. Många modeller kan även integreras
      med solceller och energihantering.
    </p>

    <h2 className="text-3xl font-bold">
      Installation
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed">
      Installation ska alltid utföras av behörig elektriker.
      Kostnaden varierar beroende på fastighet, kabeldragning
      och val av laddbox.
    </p>

    <h2 className="text-3xl font-bold">
      Slutsats
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed">
      Rätt laddbox kan ge säkrare laddning, lägre elkostnader
      och bättre kontroll över energiförbrukningen.
    </p>

  </section>

  <section className="mt-20">

    <h2 className="text-3xl font-bold mb-10">
      Vanliga frågor
    </h2>

    <div className="space-y-6">

      <div className="bg-white rounded-2xl p-6 shadow-sm">

        <h3 className="font-bold text-xl mb-2">
          Vad kostar en laddbox?
        </h3>

        <p className="text-slate-600">
          Kostnaden varierar beroende på modell och installation.
        </p>

      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">

        <h3 className="font-bold text-xl mb-2">
          Behöver man lastbalansering?
        </h3>

        <p className="text-slate-600">
          Många fastigheter har stor nytta av lastbalansering för att undvika överbelastning.
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
        href="/topplistor/basta-laddbox-2026"
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
      >
        Bästa Laddbox 2026
      </a>

      <a
        href="/compare/easee-vs-zaptec"
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
      >
        Easee vs Zaptec
      </a>

      <a
        href="/city/stockholm"
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
      >
        Installatörer i Stockholm
      </a>

    </div>

  </section>

</main>


)
}
