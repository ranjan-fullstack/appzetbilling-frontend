
import {
  Code2,
  Globe,
  Smartphone,
  Megaphone,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    desc: "Custom scalable business software solutions for startups and enterprises.",
    icon: Code2,
    bg: "from-green-100 to-emerald-50",
    iconBg: "bg-green-500",
    glow: "bg-green-400/20",
  },
  {
    title: "Website Development",
    desc: "Modern responsive websites with premium UI/UX for growing brands.",
    icon: Globe,
    bg: "from-sky-100 to-cyan-50",
    iconBg: "bg-sky-500",
    glow: "bg-sky-400/20",
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS mobile apps built with powerful modern technologies.",
    icon: Smartphone,
    bg: "from-violet-100 to-fuchsia-50",
    iconBg: "bg-violet-500",
    glow: "bg-violet-400/20",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media, and online marketing solutions for brand growth.",
    icon: Megaphone,
    bg: "from-orange-100 to-amber-50",
    iconBg: "bg-orange-500",
    glow: "bg-orange-400/20",
  },
  {
    title: "Political Marketing",
    desc: "Complete election campaign branding and digital political promotions.",
    icon: Users,
    bg: "from-pink-100 to-rose-50",
    iconBg: "bg-pink-500",
    glow: "bg-pink-400/20",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900">
            Our
            <span className="text-green-500"> Services</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            AppZet delivers premium digital solutions for businesses,
            startups, enterprises, and organizations with modern technology.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[36px] bg-gradient-to-br ${service.bg} p-[1px] hover:-translate-y-3 transition-all duration-500`}
              >
                
                {/* CARD */}
                <div className="relative h-full rounded-[36px] bg-white/80 backdrop-blur-xl p-10 border border-white/50 shadow-xl overflow-hidden">
                  
                  {/* FLOATING GLOW */}
                  <div
                    className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl ${service.glow}`}
                  />

                  {/* ICON */}
                  <div
                    className={`relative z-10 w-24 h-24 rounded-3xl ${service.iconBg} flex items-center justify-center shadow-2xl shadow-black/10 group-hover:scale-110 transition duration-500`}
                  >
                    <Icon className="text-white" size={42} />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 mt-10">
                    
                    <h3 className="text-4xl font-black text-slate-900 leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                      {service.desc}
                    </p>

                    {/* FLOATING BADGE */}
                    <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-lg border border-slate-100">
                      
                      <div
                        className={`w-3 h-3 rounded-full ${service.iconBg}`}
                      />

                      <span className="font-semibold text-slate-700">
                        Premium Solution
                      </span>
                    </div>
                  </div>

                  {/* HOVER LINE */}
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

export default ServicesSection;

