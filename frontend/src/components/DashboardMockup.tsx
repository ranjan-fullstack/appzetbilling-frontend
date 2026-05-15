import { motion } from 'framer-motion'
import { BarChart3, CircleDollarSign, PackageCheck, ReceiptText, TrendingUp } from 'lucide-react'

const tabs = ['POS', 'Billing', 'Payroll', 'Inventory']
const bars = ['h-16', 'h-24', 'h-20', 'h-32', 'h-28', 'h-36', 'h-24']

export function DashboardMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative hidden lg:block"
      aria-label="AppzetBilling dashboard preview"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#b8e69a] bg-white/95 p-4 shadow-soft dark:border-[#145000] dark:bg-slate-900">
        <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <div>
            <p className="text-sm font-bold text-slate-950 dark:text-white">Live Business Desk</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Today, 10:42 AM</p>
          </div>
          <div className="rounded-full bg-[#f1ffe8] px-3 py-1 text-xs font-bold text-[#1f7000] dark:bg-[#238000]/10 dark:text-[#a9f56f]">
            Synced
          </div>
        </div>
        <div className="mb-5 grid grid-cols-4 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                index === 0
                  ? 'bg-[#238000] text-white'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
            <CircleDollarSign className="mb-4 h-6 w-6 text-[#238000] dark:text-[#6ee22d]" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Revenue</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-950 dark:text-white">Rs 8.4L</p>
            <p className="mt-2 flex items-center gap-1 text-xs font-bold text-[#238000]">
              <TrendingUp className="h-4 w-4" /> 18.6%
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
            <ReceiptText className="mb-4 h-6 w-6 text-[#238000] dark:text-[#6ee22d]" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Orders</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-950 dark:text-white">1,284</p>
            <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">12 outlets active</p>
          </div>
          <div className="col-span-2 rounded-xl border border-slate-100 p-4 dark:border-slate-800">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-950 dark:text-white">Sales Graph</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Weekly performance</p>
              </div>
              <BarChart3 className="h-5 w-5 text-[#238000] dark:text-[#6ee22d]" />
            </div>
            <div className="flex h-40 items-end gap-3">
              {bars.map((height, index) => (
                <div key={height + index} className="flex flex-1 items-end rounded-t-lg bg-[#d7f5c8] dark:bg-[#238000]/10">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.06 }}
                    className={`${height} w-full rounded-t-lg bg-[#238000]`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-slate-950 p-4 text-white dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <PackageCheck className="h-6 w-6 text-[#6ee22d]" />
              <div>
                <p className="text-sm font-bold">Inventory Health</p>
                <p className="text-xs text-slate-300">96% items are above reorder levels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-7 top-32 rounded-xl border border-[#d7f5c8] bg-white px-5 py-4 shadow-soft dark:border-[#238000]/20 dark:bg-slate-950"
      >
        <p className="text-2xl font-extrabold text-[#238000] dark:text-[#6ee22d]">0%</p>
        <p className="text-xs font-bold text-slate-600 dark:text-slate-300">Billing Errors</p>
      </motion.div>
    </motion.div>
  )
}
