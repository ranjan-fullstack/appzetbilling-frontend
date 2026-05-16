import { Star } from 'lucide-react'
import { Reveal } from '../../components/Reveal'
import { SectionHeading } from '../../components/SectionHeading'
import { testimonials } from '../../data/siteData'

function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Built for owners who need clarity every day."
            description="Teams use AppzetBilling to reduce manual work, control billing accuracy, and make better operational decisions."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="h-full rounded-xl border border-[#b8e69a] bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft dark:border-[#145000] dark:bg-slate-900/90">
                <div className="mb-5 flex text-[#6ee22d]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="min-h-32 leading-8 text-slate-600 dark:text-slate-300">"{testimonial.review}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-sm font-extrabold text-white">
                    {testimonial.avatar}
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-950 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{testimonial.business}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;