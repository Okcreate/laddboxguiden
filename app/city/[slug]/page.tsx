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

  const city =
    slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    title: `Laddboxinstallatörer i ${city} | LaddboxGuiden`,
    description: `Jämför certifierade installatörer av laddboxar i ${city}. Hitta bästa pris och recensioner.`,
  }
}



export default async function CityPage({
  params,
}: Props) {

  const { slug } = await params

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

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-4 capitalize">
        Laddboxinstallatörer i {slug}
      </h1>

      <p className="text-gray-600 mt-4 mb-10 max-w-3xl">
        Här hittar du certifierade installatörer av laddboxar i {slug}.
      Jämför omdömen, priser och tjänster för att hitta rätt företag.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {data?.map((installer: any) => (
          <InstallerCard
            key={installer.id}
            company_name={installer.company_name}
            city={installer.city}
            description={installer.description}
            logo_url={installer.logo_url}
            rating={installer.rating}
            reviews_count={installer.reviews_count}
          />
        ))}

      </div>
    </main>
  )
}