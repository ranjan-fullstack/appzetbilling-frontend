
import {
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
} from "lucide-react";

const industries = [
  {
    title: "Health Care",
    desc: "Digital healthcare management systems and hospital automation solutions.",
    icon: HeartPulse,
    bg: "from-green-100 to-emerald-50",
    iconBg: "bg-green-500",
    shape: "rounded-[50px_20px_50px_20px]",
  },
  {
    title: "Ecommerce",
    desc: "Smart ecommerce platforms for online stores and digital marketplaces.",
    icon: ShoppingCart,
    bg: "from-orange-100 to-amber-50",
    iconBg: "bg-orange-500",
    shape: "rounded-[20px_50px_20px_50px]",
  },
  {
    title: "Education",
    desc: "ERP and management systems for schools, colleges, and institutes.",
    icon: GraduationCap,
    bg: "from-sky-100 to-cyan-50",
    iconBg: "bg-sky-500",
    shape: "rounded-[50px_50px_20px_20px]",
  },
  {
    title: "Real Estate",
    desc: "Property management and real-estate business automation solutions.",
    icon: Building2,
    bg: "from-violet-100 to-fuchsia-50",
    iconBg: "bg-violet-500",
    shape: "rounded-[20px_20px_50px_50px]",
  },
];

function IndustrySection() {
  return (
    <section
      id="industry"
      className="py-28 bg-gradient-to-b from-[#f5fff7] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900">
            Industry
            <span className="text-green-500"> We Serve</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            We provide scalable digital solutions for every type of industry
            with premium technology and automation systems.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${industry.bg} p-[1px] ${industry.shape} hover:-translate-y-4 transition-all duration-500 shadow-xl`}
              >
                
                {/* INNER CARD */}
                <div
                  className={`relative h-full bg-white/90 backdrop-blur-xl p-10 ${industry.shape} overflow-hidden border border-white`}
                >
                  
                  {/* FLOATING GLOW */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/60 blur-3xl rounded-full" />

                  {/* ICON BOX */}
                  <div
                    className={`relative z-10 w-28 h-28 ${industry.iconBg} rounded-[30px] flex items-center justify-center shadow-2xl shadow-black/10 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                  >
                    <Icon size={52} className="text-white" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 mt-10">
                    
                    <h3 className="text-4xl font-black text-slate-900 leading-tight">
                      {industry.title}
                    </h3>

                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                      {industry.desc}
                    </p>
                  </div>

                  {/* FLOATING BADGE */}
                  <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-lg border border-slate-100">
                    
                    <div
                      className={`w-3 h-3 rounded-full ${industry.iconBg}`}
                    />

                    <span className="font-semibold text-slate-700">
                      Smart Industry Solution
                    </span>
                  </div>

                  {/* HOVER EFFECT */}
                  <div className="absolute bottom-0 left-0 h-2 w-0 bg-green-500 group-hover:w-full transition-all duration-500 rounded-full" />
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
