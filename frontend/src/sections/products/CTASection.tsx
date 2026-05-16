import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button } from '../../components/Button'
import { openLeadForm } from '../../utils/leadForm'
import { openWhatsApp } from '../../utils/whatsapp'

 function CTASection() {
  return (
    <section id="cta" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f9900] via-[#238000] to-[#1f7000] px-6 py-16 text-center text-white shadow-soft sm:px-10">
        <div className="absolute left-10 top-8 h-24 w-24 rounded-full border border-white/20" />
        <div className="absolute bottom-8 right-12 h-32 w-32 rounded-full border border-white/20" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-heading text-[clamp(2rem,4vw,3.6rem)] font-extrabold leading-tight">
            Ready to run billing, inventory, and operations from one place?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#f1ffe8]">
            Launch with guided onboarding, clean data setup, and a platform your staff can use from day one.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="bg-slate-950 shadow-none hover:bg-slate-900" onClick={() => openLeadForm()}>
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              className="border-white/40 bg-white text-slate-950"
              onClick={() => openWhatsApp('sales')}
            >
              <PhoneCall className="h-5 w-5" /> Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTASection;
