
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../../assets/weblogo-c.png";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="h-20 lg:h-24 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="AppZet Logo"
              className="h-12 sm:h-14 lg:h-20 w-auto object-contain"
            />
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
           
<a href="#contact" onClick={() => setMobileMenu(false)}>
  <button className="px-7 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold transition shadow-lg shadow-green-500/20">
    Get Started
  </button>
</a>


          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 flex items-center justify-center"
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
        <div className="px-6 pb-8 bg-white border-t border-slate-100 shadow-xl">
          
          <div className="flex flex-col gap-5 pt-6">
            
            <a
              href="#home"
              onClick={() => setMobileMenu(false)}
              className="text-base sm:text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Home
            </a>

            <a
              href="#products"
              onClick={() => setMobileMenu(false)}
              className="text-base sm:text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Products
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenu(false)}
              className="text-base sm:text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Services
            </a>

            <a
              href="#industry"
              onClick={() => setMobileMenu(false)}
              className="text-base sm:text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Industry Serve
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenu(false)}
              className="text-base sm:text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              About Us
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="text-base sm:text-lg font-semibold text-slate-700 hover:text-green-600 transition"
            >
              Contact
            </a>

            {/* MOBILE BUTTON */}
         


           
<a href="#contact" onClick={() => setMobileMenu(false)}>
  <button className="mt-4 w-full py-3 sm:py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg font-semibold transition shadow-lg shadow-green-500/20">
    Get Started
  </button>
</a>






          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

