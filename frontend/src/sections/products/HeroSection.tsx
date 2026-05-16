import { CalendarCheck, Star, Users } from 'lucide-react'
import { Button } from '../../components/Button'
import { DashboardMockup } from '../../components/DashboardMockup'
import { Reveal } from '../../components/Reveal'
import { openLeadForm } from '../../utils/leadForm'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_24rem),linear-gradient(135deg,#238000_0%,#1f7000_48%,#103f00_100%)] px-4 pb-20 pt-16 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute right-8 top-24 h-40 w-40 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-[#f4ffe8] [clip-path:polygon(0_68%,100%_28%,100%_100%,0_100%)] dark:bg-[#123f00]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold text-[#f1ffe8] backdrop-blur">
              <Star className="h-4 w-4 fill-current" /> Rated 4.9 by growing SMEs
            </div>
            <h1 className="font-heading text-[clamp(2.55rem,6vw,5.7rem)] font-extrabold leading-[1.02] text-white">
              Smart Billing & Business Management for Modern SMEs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f1ffe8]/90">
              AppzetBilling brings POS billing, GST invoices, inventory, payroll, analytics, and
              customer operations into one fast cloud platform built for busy teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => openLeadForm()}>
                <Users className="h-5 w-5" /> Start Free Trial
              </Button>
              <Button variant="secondary" onClick={() => openLeadForm()}>
                <CalendarCheck className="h-5 w-5" /> Book Demo
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {['RK', 'SN', 'MP', 'JA'].map((avatar) => (
                  <span
                    key={avatar}
                    className="grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-[#103f00] text-xs font-extrabold text-white"
                  >
                    {avatar}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-[#f1ffe8]/90">
                Trusted by retail, restaurant, hotel, and service businesses.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection;