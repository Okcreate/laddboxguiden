export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://laddboxguiden.vercel.app</loc>
    </url>
    <url>
      <loc>https://laddboxguiden.vercel.app/city/stockholm</loc>
    </url>
    <url>
      <loc>https://laddboxguiden.vercel.app/city/malmo</loc>
    </url>
    <url>
      <loc>https://laddboxguiden.vercel.app/city/goteborg</loc>
    </url>
  </urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}