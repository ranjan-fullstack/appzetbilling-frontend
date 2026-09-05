
import { Mail, Menu, MapPin, Phone, X } from "lucide-react";
import { useState } from "react";

import logo from "../../assets/weblogo-c.png";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../../components/icons/SocialIcons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industry Serve", href: "#industry" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* TOP INFO BAR */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-200 via-sky-100 to-blue-200 border-b border-blue-300/60">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-6">
            <a href="tel:+919692428905" className="flex items-center gap-2 hover:text-orange-500 transition">
              <Phone className="h-3.5 w-3.5 text-blue-700" /> +91 96924 28905
            </a>
            <span className="h-3.5 w-px bg-blue-300" />
            <a href="mailto:info@appzet.com" className="flex items-center gap-2 hover:text-orange-500 transition">
              <Mail className="h-3.5 w-3.5 text-blue-700" /> info@appzet.com
            </a>
            <span className="hidden xl:block h-3.5 w-px bg-blue-300" />
            <span className="hidden xl:flex items-center gap-2 text-slate-600">
              <MapPin className="h-3.5 w-3.5 text-blue-700" /> Odisha, DLF, Cybercity
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 font-medium">Follow Us:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white border border-blue-300 text-blue-700 transition hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-gradient-to-r from-blue-200/95 via-sky-100/95 to-blue-200/95 backdrop-blur-xl shadow-sm border-b border-blue-300">
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    link.label === "Home"
                      ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1 transition"
                      : "text-slate-700 hover:text-orange-500 font-semibold pb-1 border-b-2 border-transparent transition"
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:flex items-center gap-4">

<a href="#contact" onClick={() => setMobileMenu(false)}>
  <button className="px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition shadow-lg shadow-orange-500/30">
    Get In Touch
  </button>
</a>


            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-200 flex items-center justify-center"
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
          <div className="px-6 pb-8 bg-blue-100 border-t border-blue-300 shadow-xl">

            <div className="flex flex-col gap-5 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className={`text-base sm:text-lg font-semibold transition ${
                    link.label === "Home" ? "text-orange-500" : "text-slate-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center gap-4 text-sm text-slate-500 pt-2 border-t border-blue-300">
                <a href="tel:+919692428905" className="flex items-center gap-2 hover:text-orange-500 transition">
                  <Phone className="h-4 w-4" /> +91 96924 28905
                </a>
              </div>

              {/* MOBILE BUTTON */}
<a href="#contact" onClick={() => setMobileMenu(false)}>
  <button className="mt-2 w-full py-3 sm:py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-semibold transition shadow-lg shadow-orange-500/30">
    Get In Touch
  </button>
</a>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
