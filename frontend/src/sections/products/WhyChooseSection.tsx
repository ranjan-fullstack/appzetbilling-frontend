import { BarChart3, CheckCircle2, IndianRupee } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '../../components/Reveal'
import { SectionHeading } from '../../components/SectionHeading'
import { featureItems } from '../../data/siteData'

function WhyChooseSection() {
  const stats: Array<{ label: string; value: string; icon: LucideIcon }> = [
    { label: 'Net Sales', value: 'Rs 14.8L', icon: IndianRupee },
    { label: 'GST Filed', value: '98%', icon: CheckCircle2 },
  ]

  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="Billing workflows that stay quick when business gets busy."
              description="AppzetBilling keeps front-desk speed, backend controls, and owner-level reporting in the same operating rhythm."
            />
          </Reveal>
          <div className="mt-8 space-y-4">
            {featureItems.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <div className="group flex gap-4 rounded-xl border border-[#b8e69a] bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:translate-x-1 hover:bg-white hover:shadow-soft dark:border-[#145000] dark:bg-slate-900/90">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#f1ffe8] text-[#238000] dark:bg-[#238000]/10 dark:text-[#6ee22d]">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-slate-950 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12}>
          <div className="relative rounded-2xl border border-[#b8e69a] bg-white/90 p-5 shadow-soft dark:border-[#145000] dark:bg-slate-900/90">
            <div className="rounded-xl bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Owner Dashboard</p>
                  <p className="mt-2 font-heading text-3xl font-extrabold">Multi-outlet snapshot</p>
                </div>
                <BarChart3 className="h-10 w-10 text-[#6ee22d]" />
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl bg-white/8 p-5">
                    <Icon className="mb-5 h-6 w-6 text-[#6ee22d]" />
                    <p className="text-sm text-slate-300">{label}</p>
                    <p className="mt-2 text-3xl font-extrabold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-white p-5 text-slate-950">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-bold">Inventory Movement</p>
                  <span className="text-sm font-bold text-[#238000]">Healthy</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-3 w-[82%] rounded-full bg-[#2f9900]" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-8 rounded-xl border border-[#b8e69a] bg-white px-5 py-4 shadow-soft dark:border-[#145000] dark:bg-slate-950">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Avg. checkout time</p>
              <p className="text-2xl font-extrabold text-slate-950 dark:text-white">42 sec</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhyChooseSection;