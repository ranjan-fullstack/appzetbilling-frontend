import { Send } from 'lucide-react'
import { type FormEvent, useEffect, useState } from 'react'
import { Reveal } from '../../components/Reveal'
import { apiUrl } from '../../utils/api'

const interests = [
  'Restaurant POS - For Food & Beverage Industry',
  'GST Billing - For B2B and Retail Businesses',
  'Payroll - All-in-one Payroll Solutions',
  'Inventory - AI Inventory System',
  'Hotel Management - Rooms, Guests and Billing',
  'Task Management - Service Business Operations',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
  businessName: '',
  interest: interests[0],
  message: '',
}

function LeadFormSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    const updateInterest = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail
      if (detail) {
        setForm((current) => ({ ...current, interest: detail }))
      }
    }

    window.addEventListener('appzet:set-interest', updateInterest)
    return () => window.removeEventListener('appzet:set-interest', updateInterest)
  }, [])

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.businessName || form.city,
          message: `City: ${form.city}. Interested in: ${form.interest}. ${form.message}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-[#b8e69a] bg-[#f1ffe8]/90 p-6 shadow-soft dark:border-[#145000] dark:bg-[#103f00]/60 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#238000] dark:text-[#6ee22d]">
              Contact us
            </p>
            <h2 className="font-heading text-[clamp(2.3rem,5vw,4.6rem)] font-extrabold leading-tight text-slate-950 dark:text-white">
              We'd love to answer your questions
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500 dark:text-slate-300">
              Have a query? Tell us what you want to run better, and our team will help with the right AppzetBilling setup.
            </p>
          </div>
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                Name*
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 transition focus:border-[#2f9900] dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                Email*
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 transition focus:border-[#2f9900] dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                Phone number*
                <input
                  required
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 transition focus:border-[#2f9900] dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                City*
                <input
                  required
                  value={form.city}
                  onChange={(event) => updateField('city', event.target.value)}
                  className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 transition focus:border-[#2f9900] dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100 sm:col-span-2">
                Business Name*
                <input
                  required
                  value={form.businessName}
                  onChange={(event) => updateField('businessName', event.target.value)}
                  className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 transition focus:border-[#2f9900] dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
            </div>
            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-slate-800 dark:text-slate-100">Interested In*</legend>
              <div className="grid gap-3">
                {interests.map((interest) => (
                  <label key={interest} className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    <input
                      required
                      type="radio"
                      name="interest"
                      checked={form.interest === interest}
                      onChange={() => updateField('interest', interest)}
                      className="mt-1 h-4 w-4 accent-[#238000]"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
              Message
              <textarea
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                rows={4}
                className="resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 transition focus:border-[#2f9900] dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </label>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#238000] px-8 py-3 text-sm font-extrabold text-white transition hover:bg-[#1f7000] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-5 w-5" />
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>
              {status === 'success' && (
                <p className="text-sm font-bold text-[#1f7000] dark:text-[#a9f56f]">
                  Thanks, we received your enquiry.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-bold text-slate-500 dark:text-slate-300">
                  Form is ready. Connect the frontend API proxy or use WhatsApp for now.
                </p>
              )}
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  )
}

export default LeadFormSection;
