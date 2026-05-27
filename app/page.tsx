import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import InstallerCard from '@/components/InstallerCard'
import Footer from '@/components/Footer'
import FeaturedInstallers from '@/components/FeaturedInstallers'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <SearchBar />
      <FeaturedInstallers />
      {/* Trusted by */}
<section className="py-20 px-6 border-y bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <p className="text-slate-500 uppercase tracking-[0.3em] text-sm">
        Trusted by installers using
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-14 mt-12 text-3xl font-black text-slate-300">
      <div>TESLA</div>
      <div>EASEE</div>
      <div>ZAPTEC</div>
      <div>GREENELY</div>
      <div>TIBBER</div>
    </div>
  </div>
</section>

{/* Stats */}
<section className="py-20 px-6 bg-slate-950 text-white relative overflow-hidden">
  {/* Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[160px]" />

  <div className="relative max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 text-sm text-slate-300">
        ⚡ Plattform i snabb tillväxt
      </div>

      <h2 className="text-5xl font-black mt-6">
        Sveriges snabbast växande
        <span className="text-green-400">
          {' '}laddbox-directory
        </span>
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          value: '250+',
          label: 'Installatörer',
        },
        {
          value: '25',
          label: 'Svenska städer',
        },
        {
          value: '4.8',
          label: 'Genomsnittligt betyg',
        },
        {
          value: '1000+',
          label: 'Förfrågningar',
        },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10 text-center hover:border-green-500/30 transition"
        >
          <div className="text-5xl font-black">
            {stat.value}
          </div>

          <div className="text-slate-400 mt-4">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Cities */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Populära städer
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              'Stockholm',
              'Göteborg',
              'Malmö',
              'Lund',
              'Helsingborg',
              'Uppsala',
              'Västerås',
              'Linköping'
            ].map((city) => (
              <div
                key={city}
                className="bg-white border rounded-2xl p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="font-semibold text-lg">
                  {city}
                </div>

                <div className="text-slate-500 mt-2">
                  Se installatörer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold mb-10">
    Populära guider
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <a
      href="/seo/easee-installator-stockholm"
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold">
        Easee installatör Stockholm
      </h3>

      <p className="text-slate-600 mt-4">
        Jämför installatörer av Easee laddbox i Stockholm.
      </p>
    </a>

    <a
      href="/seo/zaptec-malmo"
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold">
        Zaptec Malmö
      </h3>

      <p className="text-slate-600 mt-4">
        Hitta certifierade Zaptec-installatörer i Malmö.
      </p>
    </a>

    <a
      href="/seo/laddbox-villa-goteborg"
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold">
        Laddbox villa Göteborg
      </h3>

      <p className="text-slate-600 mt-4">
        Installation av laddbox för villa i Göteborg.
      </p>
    </a>

  </div>
</section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-[40px] text-white p-14 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Driver du ett installationsföretag?
          </h2>

          <p className="text-slate-300 mt-6 text-xl">
            Få fler kunder genom att synas på Sveriges största laddbox-directory.
          </p>

          <button className="mt-10 bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl font-semibold text-lg">
            Lägg till företag
          </button>
        </div>
      </section>
{/* Testimonials */}
<section className="py-24 px-6 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black">
        Vad kunder säger
      </h2>

      <p className="text-slate-500 text-xl mt-4">
        Tusentals villaägare använder LaddboxGuiden.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          name: 'Johan Andersson',
          text: 'Hittade installatör samma dag. Väldigt smidigt.',
        },
        {
          name: 'Maria Svensson',
          text: 'Bästa sättet att jämföra laddboxinstallatörer.',
        },
        {
          name: 'Erik Nilsson',
          text: 'Fick offert inom 2 timmar.',
        },
      ].map((review) => (
        <div
          key={review.name}
          className="bg-white rounded-[32px] p-8 shadow-sm border"
        >
          <div className="text-yellow-500 text-xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-5 text-slate-600 leading-relaxed">
            "{review.text}"
          </p>

          <div className="mt-6 font-bold">
            {review.name}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black">
        Vanliga frågor
      </h2>
    </div>

    <div className="space-y-6">
      {[
        {
          q: 'Vad kostar installation av laddbox?',
          a: 'Vanligtvis mellan 10 000–25 000 SEK beroende på installation.',
        },
        {
          q: 'Kan jag använda grönt avdrag?',
          a: 'Ja, de flesta installationer är berättigade till grönt teknik-avdrag.',
        },
        {
          q: 'Hur snabbt kan jag få offert?',
          a: 'Ofta inom några timmar.',
        },
      ].map((faq) => (
        <div
          key={faq.q}
          className="border rounded-[28px] p-8"
        >
          <h3 className="text-2xl font-bold">
            {faq.q}
          </h3>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold mb-10">
    Populära guider
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <a
      href="/seo/easee-installator-stockholm"
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold">
        Easee installatör Stockholm
      </h3>

      <p className="text-slate-600 mt-4">
        Jämför installatörer av Easee laddbox i Stockholm.
      </p>
    </a>

    <a
      href="/seo/zaptec-malmo"
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold">
        Zaptec Malmö
      </h3>

      <p className="text-slate-600 mt-4">
        Hitta certifierade Zaptec-installatörer i Malmö.
      </p>
    </a>

    <a
      href="/seo/laddbox-villa-goteborg"
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold">
        Laddbox villa Göteborg
      </h3>

      <p className="text-slate-600 mt-4">
        Installation av laddbox för villa i Göteborg.
      </p>
    </a>

  </div>
</section>
      <Footer />
    </main>
  )
}
