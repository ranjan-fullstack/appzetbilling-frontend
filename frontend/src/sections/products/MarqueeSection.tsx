import { marqueeItems } from '../../data/siteData'

function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section className="overflow-hidden bg-[#103f00] py-6 text-white" aria-label="AppzetBilling products">
      <div className="marquee-track flex w-max gap-4">
        {items.map((item, index) => (
          <span
            key={item + index}
            className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-extrabold uppercase tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
export default MarqueeSection;
