import { ClipboardList, Rocket, Search, Wrench } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    desc: "We listen first — understanding your business, workflows, and the real problem behind the request.",
  },
  {
    step: "02",
    title: "Design",
    icon: ClipboardList,
    desc: "We map a tailored solution — product, website, or app — scoped to your timeline and budget.",
  },
  {
    step: "03",
    title: "Deploy",
    icon: Wrench,
    desc: "Our team builds and rolls out the solution, integrated smoothly with how your business already runs.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    icon: Rocket,
    desc: "Continuous monitoring and responsive support keep everything running long after launch.",
  },
];

function ProcessSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#f5f8ff] to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            How We Work
          </p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-slate-900">
            A Proven 4-Step Engagement
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From discovery to delivery, our process is transparent, collaborative,
            and measurable.
          </p>
        </div>

        <div className="mt-20 relative grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative text-center">
                <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-[#0b1220] flex items-center justify-center shadow-lg">
                  <Icon className="text-white" size={26} />
                </div>

                <p className="mt-6 text-sm font-black text-blue-600 tracking-widest">
                  STEP {item.step}
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
