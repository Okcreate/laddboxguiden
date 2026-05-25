export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-28 pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black">
              ⚡ LaddboxGuiden
            </div>

            <p className="text-slate-400 mt-6 max-w-md leading-relaxed">
              Sveriges största directory för laddboxinstallatörer.
              Jämför företag, priser och recensioner från hela Sverige.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg">
              Plattform
            </h3>

            <div className="flex flex-col gap-4 mt-6 text-slate-400">
              <a href="#">Städer</a>
              <a href="#">Installatörer</a>
              <a href="#">Blogg</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Företag
            </h3>

            <div className="flex flex-col gap-4 mt-6 text-slate-400">
              <a href="#">Lägg till företag</a>
              <a href="#">Featured listing</a>
              <a href="#">Kontakt</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div>
            © 2026 LaddboxGuiden. Alla rättigheter förbehållna.
          </div>

          <div className="flex items-center gap-6">
            <a href="#">Integritet</a>
            <a href="#">Villkor</a>
          </div>
        </div>
      </div>
    </footer>
  )
}