import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Future-ready billing, POS, and web platforms for growing businesses",
  "Industry-specific solutions for retail, hospitality, healthcare, and more",
  "Dedicated engineering for websites, mobile apps, and digital campaigns",
  "Transparent delivery, predictable pricing, and long-term partnerships",
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-36 py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-3xl h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1974&auto=format&fit=crop"
              alt="AppZet team at work"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* BOTTOM GRADIENT SCRIM */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* CAPTION */}
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-black text-white">A Customer-First Team</h3>
              <p className="mt-1 text-sm text-white/80">
                Driven by service, powered by technology.
              </p>
            </div>
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute top-8 left-8 bg-white/95 backdrop-blur rounded-2xl shadow-2xl px-7 py-5 text-center">
            <p className="text-4xl font-black text-orange-500">5+</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
              Years of Excellence
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">About Us</p>

          <h2 className="mt-3 text-5xl font-black text-slate-900 leading-tight">
            Building Smart Digital Products For Modern Businesses
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            AppZet is a technology company focused on building scalable software
            products, websites, billing systems, and enterprise solutions for
            startups and SMEs across India.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-5xl font-black text-blue-600">50+</h3>
              <p className="mt-2 text-slate-600">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-blue-600">100%</h3>
              <p className="mt-2 text-slate-600">Client Satisfaction</p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 bg-[#0b1220] hover:bg-blue-600 text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300"
          >
            Learn More About Us <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
