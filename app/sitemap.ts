import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = 'https://laddboxguiden.vercel.app'

  const { data } = await supabase
    .from('installers')
    .select('city')

  const cities = [
    ...new Set(
      data
        ?.map(item =>
          item.city
            ?.toLowerCase()
            .replaceAll('ö', 'o')
            .replaceAll('ä', 'a')
            .replaceAll('å', 'a')
        )
        .filter(Boolean)
    )
  ]

  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/city/${city}`,
    lastModified: new Date(),
  }))

const brands = [
  'easee',
  'zaptec',
  'charge-amps',
]

const seoCities = [
  'stockholm',
  'goteborg',
  'malmo',
  'lund',
  'uppsala',
]

const seoPages = []

for (const brand of brands) {
  for (const city of seoCities) {
    seoPages.push(
      `${brand}-installator-${city}`
    )
  }
}

  const seoUrls = seoPages.map((slug) => ({
    url: `${baseUrl}/seo/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...cityUrls,
    ...seoUrls,
  ]
}