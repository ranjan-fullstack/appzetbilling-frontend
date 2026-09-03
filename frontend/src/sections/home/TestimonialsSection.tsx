import { Quote, Star } from "lucide-react";
import { testimonials } from "../../data/siteData";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 lg:scroll-mt-36 py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Client Voices
          </p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-slate-900">
            Trusted by Growing Businesses
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-[#f5f8ff] border border-slate-100 p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-blue-600" />

              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mt-4 text-slate-700 leading-relaxed grow">
                “{item.review}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
