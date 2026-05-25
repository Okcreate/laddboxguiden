import { supabase } from '@/lib/supabase'
import InstallerCard from '@/components/InstallerCard'
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params

  const cityName =
    slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    title: `Laddboxinstallatörer i ${cityName} | LaddboxGuiden`,
    description: `Jämför certifierade installatörer av laddboxar i ${cityName}. Hitta företag, recensioner och laddboxlösningar nära dig.`,
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data } = await supabase
    .from('installers')
    .select('*')
   .ilike('city', `%${slug}%`)
   console.log(data)

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12 capitalize">
        Laddboxinstallatörer i {slug}
      </h1>
      <p className="text-gray-600 mt-4 mb-8 max-w-3xl">
  Jämför certifierade installatörer av laddboxar i {slug}. 
  Hitta företag som installerar Easee, Zaptec och Tesla-laddare 
  för villa, BRF och företag.
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