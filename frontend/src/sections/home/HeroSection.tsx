
import { ArrowRight, Play } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black min-h-screen">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white mb-8">
              
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

              <span className="font-medium">
                Smart Business Technology Partner
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
              Smart
              <span className="text-green-500"> Products</span>
              <br />
              &
              <span className="text-green-500"> Services</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-10 text-2xl leading-relaxed text-slate-200 max-w-2xl">
              AppZet builds premium software products, websites, mobile apps,
              and digital solutions that help businesses automate, scale, and
              grow faster in the modern digital world.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap items-center gap-5">
              
              <button className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-2xl shadow-green-500/20">
                Explore Products

                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300">
                
                <Play size={22} />

                View Services
              </button>
            </div>

            {/* SERVICE TAGS */}
            <div className="mt-16 flex flex-wrap gap-4">
              
              <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <p className="text-white font-semibold text-lg">
                  Billing Software
                </p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <p className="text-white font-semibold text-lg">
                  Website Development
                </p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <p className="text-white font-semibold text-lg">
                  Mobile App Development
                </p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <p className="text-white font-semibold text-lg">
                  Digital Marketing
                </p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                <p className="text-white font-semibold text-lg">
                  ERP Solutions
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:flex justify-center">
            
            {/* MAIN DASHBOARD */}
            <div className="relative w-[520px] h-[620px] rounded-[40px] bg-white/10 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
              
              {/* HEADER */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                
                <div>
                  <h3 className="text-2xl font-black text-white">
                    AppZet Dashboard
                  </h3>

                  <p className="text-slate-300 mt-1">
                    Live Business Analytics
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl font-black">
                  AZ
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                
                {/* TOP CARDS */}
                <div className="grid grid-cols-2 gap-5">
                  
                  <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
                    <p className="text-slate-300">
                      Active Projects
                    </p>

                    <h4 className="mt-3 text-4xl font-black text-white">
                      120+
                    </h4>

                    <span className="mt-3 inline-block text-green-400 font-semibold">
                      Running
                    </span>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
                    <p className="text-slate-300">
                      Software Products
                    </p>

                    <h4 className="mt-3 text-4xl font-black text-white">
                      25+
                    </h4>

                    <span className="mt-3 inline-block text-green-400 font-semibold">
                      Live
                    </span>
                  </div>
                </div>

                {/* GRAPH */}
                <div className="mt-8 rounded-3xl bg-white/10 border border-white/10 p-8">
                  
                  <div className="flex items-end gap-4 h-52">
                    <div className="w-10 h-24 rounded-t-2xl bg-green-300" />
                    <div className="w-10 h-36 rounded-t-2xl bg-green-400" />
                    <div className="w-10 h-28 rounded-t-2xl bg-green-500" />
                    <div className="w-10 h-44 rounded-t-2xl bg-green-600" />
                    <div className="w-10 h-52 rounded-t-2xl bg-green-500" />
                    <div className="w-10 h-40 rounded-t-2xl bg-green-400" />
                  </div>

                  <p className="mt-6 text-slate-300">
                    Weekly Product Performance
                  </p>
                </div>

                {/* BOTTOM CARDS */}
                <div className="mt-8 grid grid-cols-2 gap-5">
                  
                  <div className="rounded-3xl bg-green-500 p-6">
                    <p className="text-white/80">
                      Business Growth
                    </p>

                    <h4 className="mt-3 text-5xl font-black text-white">
                      95%
                    </h4>
                  </div>

                  <div className="rounded-3xl bg-white/10 border border-white/10 p-6">
                    <p className="text-slate-300">
                      Industries Served
                    </p>

                    <h4 className="mt-3 text-5xl font-black text-white">
                      15+
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-3xl p-6 shadow-2xl">
              
              <p className="text-slate-500">
                New Businesses
              </p>

              <h4 className="mt-2 text-4xl font-black text-slate-900">
                +2.5K
              </h4>

              <span className="mt-2 inline-block text-green-600 font-semibold">
                This Month
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

