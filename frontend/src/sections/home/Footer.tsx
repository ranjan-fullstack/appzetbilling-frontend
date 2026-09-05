import { ArrowUp, Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import logo from "../../assets/weblogo-w-400x121.png";

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industry" },
  { label: "Contact", href: "#contact" },
];

const solutions = [
  "AppzetBilling POS",
  "Website Development",
  "Software Development",
  "Mobile Apps",
  "Digital Marketing",
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-12">
        {/* LOGO */}
        <div>
          <img
            src={logo}
            alt="AppZet Logo"
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
          />
          <p className="mt-6 text-slate-400 leading-relaxed max-w-xs">
            AppZet is a technology company orchestrating smart billing, websites,
            apps, and digital solutions for ambitious businesses across India.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />

          <ul className="mt-6 space-y-3 text-slate-400">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-blue-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Solutions</h3>
          <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />

          <ul className="mt-6 space-y-3 text-slate-400">
            {solutions.map((item) => (
              <li key={item} className="transition hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />

          <ul className="mt-6 space-y-3 text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400 shrink-0" /> info@appzet.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400 shrink-0" /> +91 96924 28905
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400 shrink-0" /> Odisha, DLF, Cybercity
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400 shrink-0" /> Mon – Sat, 9:30–6:30 IST
            </li>
          </ul>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-10 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold">Stay in the loop</h4>
            <p className="mt-1 text-sm text-slate-400">
              Product updates and business tips, straight to your inbox.
            </p>
          </div>

          <form className="flex w-full sm:w-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 sm:w-64 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-bold transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>Copyright © 2023–2026 AppZet. All rights reserved.</p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <a key={link} href="#home" className="hover:text-blue-400 transition">
              {link}
            </a>
          ))}
        </div>

        <a
          href="#home"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-blue-600 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
