import { Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = !!payload.consent

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ ok: true, message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Let’s plan your next step</h2>
          <p className="mt-3 text-gray-600">Tell us about your goals. We’ll share quick wins, timelines and a clear path to value.</p>
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> Mon–Fri, 9am–6pm (GMT)</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@webconsulting.ie</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border bg-white/60 backdrop-blur p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-0"/>
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-0"/>
            </div>
            <div>
              <label className="text-sm text-gray-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-0"/>
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-0"/>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-700">Project brief</label>
              <textarea name="message" required rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-0"/>
            </div>
            <label className="sm:col-span-2 inline-flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" name="consent" className="rounded border-gray-300" /> I agree to privacy terms and contact via email or phone.
            </label>
          </div>

          <button disabled={loading} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition disabled:opacity-60">
            <Send className="h-4 w-4"/>{loading ? 'Sending...' : 'Request proposal'}
          </button>

          {status && (
            <p className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
