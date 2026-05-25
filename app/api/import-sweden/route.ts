import { NextResponse } from 'next/server'

const cities = [
  'stockholm',
  'goteborg',
  'malmo',
  'uppsala',
  'vasteras',
  'orebro',
  'linkoping',
  'helsingborg',
  'jonkoping',
  'lund',
]

export async function GET() {
  for (const city of cities) {
    await fetch(
      `http://localhost:3000/api/import-installers?city=${city}`
    )
  }

  return NextResponse.json({
    success: true,
    importedCities: cities.length,
  })
}