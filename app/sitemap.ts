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
  'zaptec-go-vs-easee-charge-up',
  'easee-charge-up-vs-wallbox-pulsar-plus',
  'zaptec-go-vs-wallbox-pulsar-plus',
  'zaptec-go-vs-tesla-wall-connector',
  'easee-charge-up-vs-tesla-wall-connector',
  'charge-amps-halo-vs-zaptec-go',
  'charge-amps-halo-vs-easee-charge-up',
  'garo-entity-vs-zaptec-go',
  'defa-power-vs-easee-charge-up',
  'abb-vs-zaptec-go',
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

const blogPages = [
  'vad-kostar-en-laddbox',
  'hur-fungerar-lastbalansering',
  'laddbox-for-villa',
  'laddbox-for-brf',
  'laddbox-for-foretag',
  'easee-charge-up-recension',
  'zaptec-go-recension',

  'gront-avdrag-laddbox',
  'laddbox-for-tesla',
  'laddbox-for-volvo-ex30',
  'wallbox-pulsar-plus-recension',
  'charge-amps-halo-recension',
  'basta-laddbox-for-solceller',
  'laddbox-med-appstyrning',
  'hur-snabbt-laddar-en-laddbox',
  'skillnad-mellan-11kw-och-22kw',
  'kan-man-installera-laddbox-sjalv',
]

const topplistorUrls = topplistorPages.map((slug) => ({
  url: `${baseUrl}/topplistor/${slug}`,
  lastModified: new Date(),
}))

const blogUrls = blogPages.map((slug) => ({
  url: `${baseUrl}/blog/${slug}`,
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
  ...blogUrls,
]
}