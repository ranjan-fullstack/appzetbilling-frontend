
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  ShoppingCart,
  Utensils,
} from "lucide-react";

const industries = [
  {
    title: "Retail",
    desc: "Smart POS billing and inventory control for shops and supermarkets.",
    icon: ShoppingCart,
    bg: "from-blue-100 to-sky-50",
    iconBg: "bg-blue-600",
  },
  {
    title: "Restaurants",
    desc: "Table orders, kitchen tickets, QR menus, and fast settlements.",
    icon: Utensils,
    bg: "from-orange-100 to-amber-50",
    iconBg: "bg-orange-500",
  },
  {
    title: "Hotels",
    desc: "Room billing, reservations, housekeeping, and guest ledgers.",
    icon: Hotel,
    bg: "from-violet-100 to-fuchsia-50",
    iconBg: "bg-violet-500",
  },
  {
    title: "Health Care",
    desc: "Digital healthcare management systems and clinic automation.",
    icon: HeartPulse,
    bg: "from-rose-100 to-pink-50",
    iconBg: "bg-rose-500",
  },
  {
    title: "Education",
    desc: "ERP and management systems for schools, colleges, and institutes.",
    icon: GraduationCap,
    bg: "from-sky-100 to-cyan-50",
    iconBg: "bg-sky-500",
  },
  {
    title: "Real Estate",
    desc: "Property management and real-estate business automation.",
    icon: Building2,
    bg: "from-emerald-100 to-teal-50",
    iconBg: "bg-emerald-500",
  },
];

function IndustrySection() {
  return (
    <section
      id="industry"
      className="scroll-mt-24 lg:scroll-mt-36 py-28 bg-gradient-to-b from-[#f5f8ff] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Verticals
          </p>
          <h2 className="mt-3 text-5xl lg:text-6xl font-black text-slate-900">
            Industry
            <span className="text-blue-600"> We Serve</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Industry-aligned billing and automation solutions built for the way
            each business actually runs day to day.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className={`group relative bg-gradient-to-br ${industry.bg} p-[1px] rounded-[28px] hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-2xl`}
              >
                <div className="relative h-full bg-white rounded-[28px] p-8 overflow-hidden border border-white">

                  {/* ICON BOX */}
                  <div
                    className={`relative z-10 w-16 h-16 ${industry.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}
                  >
                    <Icon size={30} className="text-white" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 mt-6">
                    <h3 className="text-2xl font-black text-slate-900">
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {industry.desc}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* HOVER EFFECT */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustrySection;
