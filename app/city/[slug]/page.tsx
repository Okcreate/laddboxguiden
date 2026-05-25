import { supabase } from '@/lib/supabase'
import InstallerCard from '@/components/InstallerCard'


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