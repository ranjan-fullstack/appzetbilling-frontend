import { Globe, Mail, MapPin, MessageCircle, Phone, Send, Share2 } from 'lucide-react'
import { footerGroups } from '../data/siteData'

export function Footer() {
  return (
    <footer className="bg-[#103f00] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#238000] font-heading font-extrabold">
              AB
            </span>
            <span className="font-heading text-xl font-extrabold">AppzetBilling</span>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Business billing and management software for SMEs that need speed, accuracy, and control.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#6ee22d]" /> hello@appzetbilling.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#6ee22d]" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#6ee22d]" /> India</p>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-heading font-extrabold">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-sm text-slate-300 transition hover:text-[#6ee22d]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">Copyright 2026 AppzetBilling. All rights reserved.</p>
        <div className="flex gap-3">
          {[Globe, Share2, Send, MessageCircle].map((Icon, index) => (
            <a
              key={index}
              href="#home"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-[#238000] hover:text-white"
              aria-label="Social profile"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
