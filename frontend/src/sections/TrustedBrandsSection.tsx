const brands = [
  { name: 'BIRA 91', logo: '/brand-logos/bira.svg' },
  { name: 'L Realty', logo: '/brand-logos/l-realty.svg' },
  { name: 'La Pinoz Pizza', logo: '/brand-logos/lapinoz.svg' },
  { name: 'Apsara Ice Creams', logo: '/brand-logos/apsara.svg' },
  { name: 'HOCCO Eatery', logo: '/brand-logos/hocco.svg' },
  { name: 'JK Foods', logo: '/brand-logos/jk-foods.svg' },
  { name: 'Vasanta Bhavan', logo: '/brand-logos/vasanta.svg' },
  { name: 'Moti Mahal', logo: '/brand-logos/moti-mahal.svg' },
  { name: 'Cafe Metro', logo: '/brand-logos/cafe-metro.svg' },
]

export function TrustedBrandsSection() {
  const scrollingBrands = [...brands, ...brands]

  return (
    <section className="overflow-hidden rounded-t-[2rem] border-t border-[#d7f5c8] bg-[#fffafa]/85 py-14 dark:border-[#145000] dark:bg-[#103f00]/35">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <span className="hidden h-px flex-1 bg-[#d7f5c8] sm:block" />
          <h2 className="shrink-0 text-center font-heading text-lg font-extrabold uppercase text-slate-950 dark:text-white sm:text-2xl">
            Trusted by <span className="text-[#238000] dark:text-[#6ee22d]">1,00,000+</span> businesses across the globe
          </h2>
          <span className="hidden h-px flex-1 bg-[#d7f5c8] sm:block" />
        </div>
      </div>

      <div className="mt-12 flex overflow-hidden">
        <div className="marquee-track flex min-w-max items-center gap-10 pr-10">
          {scrollingBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="grid h-24 min-w-44 place-items-center rounded-xl border border-[#d7f5c8] bg-white px-5 shadow-sm dark:border-[#145000] dark:bg-white/95"
            >
              <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" className="h-16 w-36 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
