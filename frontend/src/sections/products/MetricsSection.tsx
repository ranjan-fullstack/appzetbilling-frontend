import { Counter } from '../../components/Counter'
import { metrics } from '../../data/siteData'

function MetricsSection() {
  return (
    <section id="pricing" className="bg-[#103f00] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="font-heading text-4xl font-extrabold text-[#6ee22d]">
              <Counter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-sm font-bold text-slate-300">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MetricsSection;