import { Bell, LayoutDashboard, Package, Receipt, ReceiptText, Search, Users } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, color: "bg-blue-500" },
  { icon: ReceiptText, label: "Billing", color: "bg-emerald-500" },
  { icon: Package, label: "Inventory", color: "bg-sky-500" },
  { icon: Receipt, label: "Orders", color: "bg-orange-500" },
  { icon: Users, label: "Customers", color: "bg-rose-500" },
];

const statCards = [
  { label: "Total Sales", value: "₹1,25,000", change: "+12%" },
  { label: "Total Orders", value: "320", change: "+8%" },
  { label: "New Customers", value: "48", change: "+15%" },
];

const bars = [40, 65, 50, 80, 60, 95, 70];

const recentOrders = [
  { name: "Veg Biryani", amount: "₹240", status: "Completed" },
  { name: "Chicken Roll", amount: "₹180", status: "Completed" },
  { name: "Paneer Tikka", amount: "₹320", status: "Completed" },
];

function HeroShowcase() {
  return (
    <div className="relative hidden lg:block">
      {/* LAPTOP */}
      <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-2 shadow-2xl">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>

        <div className="rounded-xl bg-white overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-400">
              <Search className="h-3.5 w-3.5" /> Search
            </div>
            <div className="flex items-center gap-3">
              <Bell className="h-4 w-4 text-slate-400" />
              <div className="h-7 w-7 rounded-full bg-blue-950 grid place-items-center text-[10px] font-bold text-white">
                S
              </div>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm font-bold text-slate-900">Good Morning! Swadhin</p>
            <p className="text-xs text-slate-400 mb-4">Here's your business overview</p>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {statCards.map((card) => (
                <div key={card.label} className="rounded-lg border border-slate-100 p-3">
                  <p className="text-[10px] text-slate-400">{card.label}</p>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">{card.value}</p>
                  <p className="text-[10px] font-bold text-emerald-500 mt-1">{card.change}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-100 p-3">
                <p className="text-[10px] font-bold text-slate-500 mb-2">Sales Overview</p>
                <div className="flex items-end gap-1.5 h-16">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-sky-400"
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-slate-100 p-3">
                <p className="text-[10px] font-bold text-slate-500 mb-2">Recent Orders</p>
                <div className="space-y-1.5">
                  {recentOrders.map((order) => (
                    <div key={order.name} className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-600">{order.name}</span>
                      <span className="font-bold text-slate-900">{order.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* LAPTOP BASE */}
      <div className="mx-auto h-2 w-[85%] rounded-b-xl bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700" />

      {/* PHONE */}
      <div className="absolute -bottom-12 -right-10 w-28 rounded-2xl border-4 border-slate-800 bg-slate-900 shadow-2xl">
        <div className="rounded-xl overflow-hidden bg-white p-2.5">
          <p className="text-[9px] font-bold text-slate-900">AppZet</p>
          <div className="mt-2 space-y-1.5">
            {sidebarItems.map(({ icon: Icon, label, active, color }) => (
              <div
                key={label}
                className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 ${
                  active ? "bg-blue-950" : ""
                }`}
              >
                <span className={`grid h-4 w-4 place-items-center rounded ${color}`}>
                  <Icon className="h-2.5 w-2.5 text-white" />
                </span>
                <span className={`text-[8px] font-semibold ${active ? "text-white" : "text-slate-500"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroShowcase;
