
import { ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";

function HeroSection() {

  const heroImages = [
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [heroImages.length]);

  return (

<section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden pt-40 lg:pt-44 pb-20"
>

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <img
      src={heroImages[currentImage]}
      alt="POS Billing"
      className="w-full h-full object-cover"
    />

    {/* BLUE GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/92 to-blue-800/85" />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/30 to-transparent" />
  </div>


  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="relative max-w-3xl">

      {/* BADGE */}
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6">

        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />

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

      {/* FLOATING CARD 1 */}
      <div className="hidden lg:block absolute top-2 right-[-40px] xl:right-[-90px] w-64 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
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

      {/* FLOATING CARD 2 */}
      <div className="hidden lg:block absolute bottom-[-36px] right-[-10px] xl:right-[-40px] w-72 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-white font-bold text-sm">Billing Accuracy</p>
              <span className="text-orange-400 font-black text-sm">99%</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-[99%] rounded-full bg-orange-500" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
}

export default HeroSection;
