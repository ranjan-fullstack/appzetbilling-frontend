
import {
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
} from "lucide-react";

function IndustryServeSection() {
  return (
    <section
      id="industry"
      className="py-32 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900">
            Industry <span className="text-green-600">We Serve</span>
          </h2>

          <p className="mt-6 text-xl text-slate-500 leading-relaxed">
            We provide scalable digital solutions for every type of industry.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* HEALTH CARE */}
          <div className="group bg-white rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            
            <div className="w-28 h-28 rounded-[30px] bg-green-100 flex items-center justify-center">
              <HeartPulse
                size={52}
                className="text-green-600"
                strokeWidth={2.5}
              />
            </div>

            <h3 className="mt-10 text-4xl font-black text-slate-900">
              Health Care
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Digital healthcare management systems and hospital automation
              solutions.
            </p>
          </div>

          {/* ECOMMERCE */}
          <div className="group bg-white rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            
            <div className="w-28 h-28 rounded-[30px] bg-green-100 flex items-center justify-center">
              <ShoppingCart
                size={52}
                className="text-green-600"
                strokeWidth={2.5}
              />
            </div>

            <h3 className="mt-10 text-4xl font-black text-slate-900">
              Ecommerce
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Smart ecommerce platforms for online stores and digital
              marketplaces.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="group bg-white rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            
            <div className="w-28 h-28 rounded-[30px] bg-green-100 flex items-center justify-center">
              <GraduationCap
                size={52}
                className="text-green-600"
                strokeWidth={2.5}
              />
            </div>

            <h3 className="mt-10 text-4xl font-black text-slate-900">
              Education
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              ERP and management systems for schools, colleges, and institutes.
            </p>
          </div>

          {/* REAL ESTATE */}
          <div className="group bg-white rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            
            <div className="w-28 h-28 rounded-[30px] bg-green-100 flex items-center justify-center">
              <Building2
                size={52}
                className="text-green-600"
                strokeWidth={2.5}
              />
            </div>

            <h3 className="mt-10 text-4xl font-black text-slate-900">
              Real Estate
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Property management and real-estate business automation
              platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryServeSection;
