import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = 'https://laddboxportalen.se'

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
  'tesla',
  'wallbox',
  'abb',
  'garo',
  'defa',
  'ctek',
  'eo',
]

const seoCities = [
  'stockholm',
  'goteborg',
  'malmo',
  'uppsala',
  'vasteras',
  'orebro',
  'linkoping',
  'jonkoping',
  'helsingborg',
  'lund',
  'boras',
  'gavle',
  'halmstad',
  'kalmar',
  'karlstad',
  'kiruna',
  'kristianstad',
  'norrkoping',
  'skovde',
  'sundsvall',
  'trollhattan',
  'umea',
  'vaxjo',
  'eskilstuna',
  'falun',
  'varberg',
  'ystad',
  'visby',
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