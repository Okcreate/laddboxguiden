'use client'

import { useState } from 'react'

export default function LeadForm({
  installerId,
}: {
  installerId: string
}) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const body = {
      installer_id: installerId,
      customer_name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl p-6">
        Tack! Företaget kommer kontakta dig snart.
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Namn"
        required
        className="w-full border rounded-2xl px-4 py-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border rounded-2xl px-4 py-3"
      />

      <input
        name="phone"
        placeholder="Telefon"
        className="w-full border rounded-2xl px-4 py-3"
      />

      <textarea
        name="message"
        placeholder="Beskriv ditt projekt"
        required
        rows={5}
        className="w-full border rounded-2xl px-4 py-3"
      />

      <button
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-2xl font-semibold"
      >
        {loading ? 'Skickar...' : 'Skicka förfrågan'}
      </button>
    </form>
  )
}