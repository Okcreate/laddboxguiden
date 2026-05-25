import { supabase } from '@/lib/supabase'
import InstallerCard from './InstallerCard'

export default async function FeaturedInstallers() {
  const { data } = await supabase
    .from('installers')
    .select('*')
    .eq('featured', true)

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="text-center mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium">
              ⚡ Handplockade företag
            </div>

            <h2 className="text-5xl font-black mt-5 tracking-tight">
              Featured installatörer
            </h2>

            <p className="text-slate-500 text-xl mt-4 max-w-2xl mx-auto">
              Sveriges mest rekommenderade laddboxinstallatörer.
            </p>
          </div>


        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  )
}
