import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://laddboxguiden.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://laddboxguiden.vercel.app/city/stockholm',
      lastModified: new Date(),
    },
    {
      url: 'https://laddboxguiden.vercel.app/city/malmo',
      lastModified: new Date(),
    },
    {
      url: 'https://laddboxguiden.vercel.app/city/goteborg',
      lastModified: new Date(),
    },
  ]
}