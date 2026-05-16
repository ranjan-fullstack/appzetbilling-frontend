
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProductsShowcaseSection() {
  return (
    <section
      id="products"
      className="py-28 bg-gradient-to-b from-white to-green-50/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900">
            Our <span className="text-green-600">Products</span>
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Smart business products designed to automate and scale your
            operations.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD */}
          <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:border-green-200 shadow-sm hover:shadow-2xl transition-all duration-500">
            
{/* TOP SECTION */}
<div className="relative h-[240px] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
  
  {/* BACKGROUND GLOW */}
  <div className="absolute w-56 h-56 rounded-full bg-green-200/30 blur-3xl" />

  {/* BILL PAPER */}
  <div className="relative z-10 w-52 bg-white rounded-[26px] shadow-2xl rotate-[-8deg] border border-green-100 p-5">
    
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

      <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold">
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

        <div className="w-10 h-2 rounded-full bg-green-300" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="w-24 h-2 rounded-full bg-slate-200" />
          <div className="w-14 h-2 rounded-full bg-slate-100 mt-2" />
        </div>

        <div className="w-12 h-2 rounded-full bg-green-400" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="w-16 h-2 rounded-full bg-slate-200" />
          <div className="w-10 h-2 rounded-full bg-slate-100 mt-2" />
        </div>

        <div className="w-8 h-2 rounded-full bg-green-300" />
      </div>
    </div>

    {/* TOTAL */}
    <div className="mt-5 p-3 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-between">
      <span className="text-sm font-semibold text-slate-700">
        Total
      </span>

      <span className="text-lg font-black text-green-600">
        ₹24,580
      </span>
    </div>
  </div>

  {/* FLOATING SUCCESS CARD */}
  <div className="absolute right-8 bottom-8 bg-white px-4 py-3 rounded-2xl shadow-lg border border-green-100">
    <p className="text-xs text-slate-400">
      Billing Accuracy
    </p>

    <h5 className="text-2xl font-black text-green-600">
      99%
    </h5>
  </div>
</div>



            {/* CONTENT */}
            <div className="p-7">
              
              {/* LOGO + TITLE */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  AB
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">
                    AppzetBilling
                  </h3>

                  <div className="mt-2 w-14 h-1 rounded-full bg-green-500" />
                </div>
              </div>

             

              {/* BUTTONS */}
              <div className="mt-8 flex items-center justify-between">

                <Link
                  to="/products/appzetbilling"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcaseSection;
