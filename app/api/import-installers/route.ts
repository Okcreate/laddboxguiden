import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const city =
      req.nextUrl.searchParams.get('city') ||
      'malmo'

    const query =
      `laddboxinstallatör ${city}`

    const url =
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${process.env.GOOGLE_PLACES_API_KEY}`

    const response = await fetch(url)

    const data = await response.json()

    const results = data.results || []

    for (const place of results) {
      const company = {
        company_name: place.name,
        city,
        address: place.formatted_address,
        rating: place.rating || null,
        reviews_count:
          place.user_ratings_total || 0,
        latitude:
          place.geometry?.location?.lat || null,
        longitude:
          place.geometry?.location?.lng || null,
        google_place_id: place.place_id,
        description:
          'Certifierad installatör av laddboxar.',
        featured: false,
      }

      const result = await supabase
  .from('installers')
  .upsert(company, {
    onConflict: 'google_place_id',
  })

console.log(result)
    }

    return NextResponse.json({
      success: true,
      imported: results.length,
      city,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json({
      success: false,
    })
  }
}