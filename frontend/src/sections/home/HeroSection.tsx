
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
  className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
>

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    
    <img
      src={heroImages[currentImage]}
      alt="POS Billing"
      className="w-full h-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/65" />
  </div>


  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="grid lg:grid-cols-2 gap-14 items-center">


      {/* LEFT CONTENT */}
      <div className="max-w-[580px]">

        {/* BADGE */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6">

          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-white text-xs sm:text-sm font-medium">
            Smart Business Technology Partner
          </span>
        </div>


        {/* HEADING */}
        <h1 className="font-black leading-[1] text-white">

          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            Smart
          </span>

          <span className="block text-green-500 text-4xl sm:text-5xl lg:text-6xl mt-2">
            Products
          </span>

          <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
            &
          </span>

          <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
            Services
          </span>
        </h1>


        {/* DESCRIPTION */}
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-[500px]">

           AppZet provides powerful software products, 
  business websites, mobile applications, 
  POS billing systems, and digital services 
  that help startups and businesses automate, 
  manage, and scale efficiently in the modern digital world.

        </p>


        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <a
            href="#products"
            className="px-7 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-center transition shadow-xl shadow-green-500/30"
          >
            Explore Products
          </a>

          <a
            href="#services"
            className="px-7 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white font-bold text-center hover:bg-white/20 transition"
          >
            View Services
          </a>

        </div>
      </div>



      {/* RIGHT SIDE DASHBOARD */}
      <div className="hidden lg:flex justify-end">

        <div className="w-full max-w-[380px] xl:max-w-[420px] scale-90 xl:scale-100">

          <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">


            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

              <div>

                <h3 className="text-2xl xl:text-3xl font-bold text-white">
                  AppZet Dashboard
                </h3>

                <p className="text-slate-300 mt-1 text-sm">
                  Live POS Analytics
                </p>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-green-500/30">
                AZ
              </div>
            </div>



            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 p-5">

              {/* CARD */}
              <div className="rounded-[24px] bg-white/10 border border-white/10 p-5">

                <p className="text-slate-300 text-sm">
                  Daily Bills
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  5K+
                </h2>

                <span className="text-green-400 font-semibold text-sm mt-2 block">
                  Generated
                </span>
              </div>


              {/* CARD */}
              <div className="rounded-[24px] bg-white/10 border border-white/10 p-5">

                <p className="text-slate-300 text-sm">
                  GST Reports
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  100%
                </h2>

                <span className="text-green-400 font-semibold text-sm mt-2 block">
                  Automated
                </span>
              </div>
            </div>



            {/* GRAPH */}
            <div className="px-5 pb-5">

              <div className="relative h-[220px] rounded-[28px] bg-white/10 border border-white/10 p-6 flex items-end justify-center gap-4 overflow-hidden">

                {/* GLOW */}
                <div className="absolute bottom-0 w-64 h-32 bg-green-500/10 blur-3xl rounded-full" />

                <div className="relative w-9 rounded-full bg-green-300 h-24" />

                <div className="relative w-9 rounded-full bg-green-400 h-36" />

                <div className="relative w-9 rounded-full bg-green-500 h-48" />

                <div className="relative w-9 rounded-full bg-green-600 h-56" />

                <div className="relative w-9 rounded-full bg-green-400 h-40" />

              </div>
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

