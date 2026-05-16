
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="h-24 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-4 cursor-pointer">
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              AZ
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900">
                AppZet
              </h2>

              <p className="text-sm text-slate-500">
                Smart Digital Solutions
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">
            
            <a
              href="#home"
              className="text-slate-700 hover:text-green-600 font-semibold transition"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-slate-700 hover:text-green-600 font-semibold transition"
            >
              Products
            </a>

            <a
              href="#services"
              className="text-slate-700 hover:text-green-600 font-semibold transition"
            >
              Services
            </a>

            <a
              href="#industry"
              className="text-slate-700 hover:text-green-600 font-semibold transition"
            >
              Industry Serve
            </a>

            <a
              href="#about"
              className="text-slate-700 hover:text-green-600 font-semibold transition"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="text-slate-700 hover:text-green-600 font-semibold transition"
            >
              Contact
            </a>
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            
            <button className="px-7 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold transition shadow-lg shadow-green-500/20">
              Get Started
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center"
          >
            {mobileMenu ? (
              <X size={28} className="text-slate-900" />
            ) : (
              <Menu size={28} className="text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-8 bg-white border-t border-slate-100">
          
          <div className="flex flex-col gap-5 pt-6">
            
            <a
              href="#home"
              className="text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Products
            </a>

            <a
              href="#services"
              className="text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Services
            </a>

            <a
              href="#industry"
              className="text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Industry Serve
            </a>

            <a
              href="#about"
              className="text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Contact
            </a>

            {/* MOBILE BUTTON */}
            <button className="mt-4 w-full py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-lg font-semibold transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
