import { ArrowRight } from 'lucide-react'
import { Reveal } from '../../components/Reveal'
import { SectionHeading } from '../../components/SectionHeading'
import { productItems } from '../../data/siteData'
import { openLeadForm } from '../../utils/leadForm'

function ProductsSection() {
  const showFormForProduct = (interest: string) => {
    const formInterest = {
      'Restaurant POS': 'Restaurant POS - For Food & Beverage Industry',
      'GST Billing': 'GST Billing - For B2B and Retail Businesses',
      'Hotel Management': 'Hotel Management - Rooms, Guests and Billing',
      'Payroll System': 'Payroll - All-in-one Payroll Solutions',
      'Inventory Management': 'Inventory - AI Inventory System',
      'Coming Soon': 'Task Management - Service Business Operations',
    }[interest]

    openLeadForm(formInterest || interest)
  }

  return (
    <section id="products" className="bg-[#f1ffe8]/80 px-4 py-20 dark:bg-[#103f00]/50 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="One platform for everyday business operations."
            description="Pick the modules your business needs today, then scale into deeper controls as operations mature."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productItems.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.05}>
              <article className="group h-full rounded-xl border border-[#b8e69a] bg-white/90 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft dark:border-[#145000] dark:bg-slate-900/90 dark:hover:bg-slate-900">
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-[#238000] shadow-sm dark:bg-slate-950 dark:text-[#6ee22d]">
                    <product.icon className="h-6 w-6" />
                  </span>
                  {product.status && (
                    <span className="rounded-full bg-[#f1ffe8] px-3 py-1 text-xs font-bold text-[#1f7000] dark:bg-[#238000]/10 dark:text-[#a9f56f]">
                      {product.status}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl font-extrabold text-slate-950 dark:text-white">{product.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
                <button
                  type="button"
                  onClick={() => showFormForProduct(product.title)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 transition group-hover:text-[#238000] dark:text-white dark:group-hover:text-[#6ee22d]"
                >
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection;