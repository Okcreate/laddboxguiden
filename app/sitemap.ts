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

  const pageTypes = [
    'installator',
    'laddbox-villa',
    'laddbox-brf',
    'laddbox-foretag',
    'laddbox-med-lastbalansering',
    'basta-laddbox',
  ]

  const seoPages = []

  for (const brand of brands) {

    for (const city of seoCities) {

      for (const type of pageTypes) {

        seoPages.push(
          `${brand}-${type}-${city}`
        )

      }

    }

  }

  const seoUrls = seoPages.map((slug) => ({
  url: `${baseUrl}/seo/${slug}`,
  lastModified: new Date(),
}))

const comparisonPages = [
  'easee-vs-zaptec',
  'easee-vs-wallbox',
  'easee-vs-tesla',
  'zaptec-vs-wallbox',
  'zaptec-vs-tesla',
  'wallbox-vs-tesla',
]

const comparisonUrls = comparisonPages.map((slug) => ({
  url: `${baseUrl}/compare/${slug}`,
  lastModified: new Date(),
}))

const topplistorPages = [
  'basta-laddbox-2026',
  'basta-laddbox-villa',
  'basta-laddbox-brf',
  'basta-laddbox-lastbalansering',
  'basta-laddbox-foretag',
]

const topplistorUrls = topplistorPages.map((slug) => ({
  url: `${baseUrl}/topplistor/${slug}`,
  lastModified: new Date(),
}))

return [
  {
    url: baseUrl,
    lastModified: new Date(),
  },

  ...cityUrls,
  ...seoUrls,
  ...comparisonUrls,
  ...topplistorUrls,
]
}