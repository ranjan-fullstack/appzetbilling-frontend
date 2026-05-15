import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { navItems } from '../data/siteData'
import { openLeadForm } from '../utils/leadForm'

interface NavbarProps {
  isDark: boolean
  onThemeToggle: () => void
}

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-[#b8e69a]/70 bg-[#f1ffe8]/80 backdrop-blur-xl dark:border-[#145000]/70 dark:bg-[#103f00]/75"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="AppzetBilling home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#238000] font-heading text-lg font-extrabold text-white">
            AB
          </span>
          <span className="font-heading text-lg font-extrabold text-slate-950 dark:text-white">
            AppzetBilling
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-slate-600 transition hover:text-[#238000] dark:text-slate-300 dark:hover:text-[#6ee22d]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onThemeToggle}
            className="grid h-11 w-11 place-items-center rounded-lg border border-[#b8e69a] bg-white text-slate-700 transition hover:text-[#238000] dark:border-[#1d6200] dark:bg-slate-900 dark:text-slate-200 dark:hover:text-[#6ee22d]"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button variant="ghost" onClick={() => openLeadForm()}>
            Login
          </Button>
          <Button onClick={() => openLeadForm()}>Get Started</Button>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-[#b8e69a] bg-white text-slate-700 dark:border-[#1d6200] dark:bg-slate-900 dark:text-slate-200 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Open mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#d7f5c8] bg-[#f1ffe8] dark:border-[#145000] dark:bg-[#103f00] lg:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button variant="secondary" className="flex-1" onClick={onThemeToggle}>
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Theme
                </Button>
                <Button className="flex-1" onClick={() => openLeadForm()}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
