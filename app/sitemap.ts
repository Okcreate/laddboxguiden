import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = 'https://laddboxguiden.vercel.app'

  const { data } = await supabase
    .from('installers')
    .select('city')

  const cities =
    [...new Set(
      data
        ?.map(item => item.city?.toLowerCase())
        .filter(Boolean)
    )]

  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/city/${city}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...cityUrls
  ]
}