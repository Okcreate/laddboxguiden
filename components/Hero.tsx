export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white pt-40 pb-28 px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Green glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/20 blur-[140px]" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm text-slate-300">
          ⚡ Sveriges största directory för laddboxinstallatörer
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mt-8">
          Hitta rätt
          <span className="text-green-400">
            {' '}laddboxinstallatör{' '}
          </span>
          i Sverige
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
          Jämför certifierade installatörer, priser och recensioner från hela Sverige.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-3 text-sm">
            ⭐ 4.8/5 genomsnittligt betyg
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-3 text-sm">
            ⚡ 250+ installatörer
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-3 text-sm">
            🇸🇪 Täcker hela Sverige
          </div>
        </div>
      </div>
    </section>
  )
}