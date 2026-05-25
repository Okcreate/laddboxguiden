import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'


export async function POST(req: Request) {
  const body = await req.json()

  const { error } = await supabase
    .from('leads')
    .insert([body])

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
