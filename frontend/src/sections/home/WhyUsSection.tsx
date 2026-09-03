import { featureItems } from "../../data/siteData";

function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Why AppZet
          </p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-slate-900">
            Built for the Modern Business
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We blend product depth, reliable infrastructure, and hands-on support
            so your team can run billing, sales, and operations without friction.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0b1220] flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
