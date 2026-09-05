
import { ClipboardCheck, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";

import HeroShowcase from "../../components/HeroShowcase";

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: ClipboardCheck, value: "500+", label: "Projects Delivered" },
  { icon: ShieldCheck, value: "99%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "Growth", label: "Your Growth Partner" },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden pt-32 lg:pt-36"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -top-24 right-0 w-[30rem] h-[30rem] bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-orange-500/10 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-16 lg:pb-24">

        <div className="relative min-w-0 max-w-xl">

          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6 max-w-full">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shrink-0" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Smart Business Technology Partner
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-black leading-[1.05]">
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
              Smart Software.
            </span>
            <span className="block text-orange-500 text-4xl sm:text-5xl lg:text-6xl mt-2">
              Powerful Billing.
            </span>
            <span className="block text-sky-300 text-4xl sm:text-5xl lg:text-6xl mt-2">
              Real Growth.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-blue-100/80 leading-relaxed max-w-[540px]">
            AppZet provides powerful software products, business websites, mobile
            applications, POS billing systems, and digital services that help
            startups and businesses automate, manage, and scale efficiently in the
            modern digital world.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#products"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center transition shadow-xl shadow-orange-500/30"
            >
              Explore Products
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-transparent border border-white/40 text-white font-bold text-center hover:bg-white/10 transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* SHOWCASE */}
        <div className="relative min-w-0 flex justify-center lg:justify-end">
          <HeroShowcase />

          {/* FLOATING CARD */}
          <div className="hidden lg:block absolute -top-8 -right-4 xl:right-4 w-56 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Fast Billing</p>
                <p className="text-blue-100/70 text-xs mt-0.5">60-second checkout</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* STATS STRIP */}
      <div className="relative z-10 border-t border-white/10 bg-[#0b1220]/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 ${
                index !== 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none">{value}</p>
                <p className="text-blue-200/70 text-xs mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
