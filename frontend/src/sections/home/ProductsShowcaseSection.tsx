
import { ArrowRight } from "lucide-react";
import { productItems } from "../../data/siteData";

function ProductsShowcaseSection() {
  return (
    <section
      id="products"
      className="scroll-mt-24 lg:scroll-mt-36 py-28 bg-gradient-to-b from-white to-blue-50/40"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Products
          </p>
          <h2 className="mt-3 text-5xl lg:text-6xl font-black text-slate-900">
            One Platform, <span className="text-blue-600">Every Module</span>
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Smart business products designed to automate and scale your
            operations.
          </p>
        </div>

        {/* FLAGSHIP CARD */}
        <div className="mt-16 group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all duration-500 grid lg:grid-cols-2">

{/* TOP SECTION */}
<div className="relative h-[280px] lg:h-auto bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute w-56 h-56 rounded-full bg-blue-200/30 blur-3xl" />

  {/* BILL PAPER */}
  <div className="relative z-10 w-52 bg-white rounded-[26px] shadow-2xl rotate-[-8deg] border border-blue-100 p-5">

    {/* BILL HEADER */}
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-lg font-black text-slate-900">
          AppzetBilling
        </h4>

        <p className="text-xs text-slate-400 mt-1">
          GST Invoice
        </p>
      </div>

      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
        ₹
      </div>
    </div>

    {/* LINE */}
    <div className="mt-4 border-t border-dashed border-slate-200" />

    {/* BILL ITEMS */}
    <div className="mt-4 space-y-3">

      <div className="flex items-center justify-between">
        <div>
          <div className="w-20 h-2 rounded-full bg-slate-200" />
          <div className="w-12 h-2 rounded-full bg-slate-100 mt-2" />
        </div>

        <div className="w-10 h-2 rounded-full bg-blue-300" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="w-24 h-2 rounded-full bg-slate-200" />
          <div className="w-14 h-2 rounded-full bg-slate-100 mt-2" />
        </div>

        <div className="w-12 h-2 rounded-full bg-blue-400" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="w-16 h-2 rounded-full bg-slate-200" />
          <div className="w-10 h-2 rounded-full bg-slate-100 mt-2" />
        </div>

        <div className="w-8 h-2 rounded-full bg-blue-300" />
      </div>
    </div>

    {/* TOTAL */}
    <div className="mt-5 p-3 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-700">
        Total
      </span>

      <span className="text-lg font-black text-blue-600">
        ₹24,580
      </span>
    </div>
  </div>

  {/* FLOATING SUCCESS CARD */}
  <div className="absolute right-8 bottom-8 bg-white px-4 py-3 rounded-2xl shadow-lg border border-blue-100">
    <p className="text-xs text-slate-400">
      Billing Accuracy
    </p>

    <h5 className="text-2xl font-black text-blue-600">
      99%
    </h5>
  </div>
</div>



            {/* CONTENT */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">

              {/* LOGO + TITLE */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  AB
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">
                    AppzetBilling
                  </h3>

                  <div className="mt-2 w-14 h-1 rounded-full bg-blue-600" />
                </div>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
                A complete POS billing suite with GST-ready invoices, real-time
                inventory, and cloud sync built into every module below.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex items-center">

                <a
                  href="https://appzetsbilling.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Explore AppzetBilling
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

        {/* APPZET ERP CARD */}
        <div className="mt-8 group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:border-orange-200 shadow-sm hover:shadow-2xl transition-all duration-500 grid lg:grid-cols-2">
          <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                ERP
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900">AppZet ERP</h3>
                <div className="mt-2 w-14 h-1 rounded-full bg-orange-500" />
              </div>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
              GST billing and inventory software for traders and shops in
              Odisha. Invoicing, multi-godown stock, customer and supplier
              dues, purchases, and accounting reports, with role-based access
              for every branch.
            </p>

            <div className="mt-8 flex items-center">
              <a
                href="https://appzeterp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Explore AppZet ERP
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative h-[240px] lg:h-auto bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center overflow-hidden order-1 lg:order-2">
            <div className="absolute w-56 h-56 rounded-full bg-orange-200/40 blur-3xl" />
            <div className="relative z-10 grid grid-cols-2 gap-3 p-6">
              {["GST Invoices", "Stock & Godowns", "Parties & Dues", "Reports"].map((label) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-orange-100 shadow-lg px-5 py-4 text-sm font-bold text-slate-800 text-center"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODULE GRID */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    {item.status && (
                      <span className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
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

export default ProductsShowcaseSection;
