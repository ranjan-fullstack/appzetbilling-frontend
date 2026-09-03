import { Calculator, Cloud, Code2, Megaphone, Smartphone } from "lucide-react";
import { useState } from "react";

const areas = [
  {
    key: "billing",
    label: "POS & Billing",
    icon: Calculator,
    tagline: "Orchestrating Accurate Transactions",
    description:
      "GST-ready billing engines and point-of-sale systems built for speed, accuracy, and daily reconciliation.",
    points: [
      "Fast, offline-capable checkout counters",
      "Automated GST and tax reporting",
      "Multi-outlet inventory and stock sync",
    ],
  },
  {
    key: "web",
    label: "Web Development",
    icon: Code2,
    tagline: "Engineering Reliable Platforms",
    description:
      "Modern, responsive websites and web applications engineered for performance and easy content management.",
    points: [
      "React, Node, and modern JS stacks",
      "SEO-friendly, fast-loading builds",
      "Custom dashboards and admin panels",
    ],
  },
  {
    key: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    tagline: "Powering On-the-Go Business",
    description:
      "Android and iOS apps that extend your billing, ordering, and customer experience to every device.",
    points: [
      "Native and cross-platform delivery",
      "Push notifications and offline sync",
      "Play Store / App Store rollout support",
    ],
  },
  {
    key: "cloud",
    label: "Cloud & Hosting",
    icon: Cloud,
    tagline: "Elevating Uptime, Reducing Risk",
    description:
      "Secure cloud infrastructure and hosting so your data stays synced, backed up, and available around the clock.",
    points: [
      "Managed hosting and daily backups",
      "Real-time multi-device data sync",
      "Scalable infrastructure as you grow",
    ],
  },
  {
    key: "marketing",
    label: "Digital Marketing",
    icon: Megaphone,
    tagline: "Driving Visibility, Growing Demand",
    description:
      "SEO, social media, and campaign management that bring the right customers to your business and products.",
    points: [
      "SEO and local search optimization",
      "Social media and ad campaign management",
      "Brand and political campaign promotions",
    ],
  },
];

function ExpertiseSection() {
  const [active, setActive] = useState(areas[0].key);
  const current = areas.find((area) => area.key === active) ?? areas[0];
  const Icon = current.icon;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Expertise
          </p>
          <h2 className="mt-3 text-4xl lg:text-5xl font-black text-slate-900">
            Aligned With Critical Technologies
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Focused capability across every layer of your business — from the
            checkout counter to the cloud.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <button
              key={area.key}
              type="button"
              onClick={() => setActive(area.key)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                active === area.key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {area.label}
            </button>
          ))}
        </div>

        {/* PANEL */}
        <div className="mt-10 rounded-[32px] bg-[#0b1220] p-10 lg:p-14 grid lg:grid-cols-[auto_1fr] gap-10 items-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full" />

          <div className="relative z-10 w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
            <Icon className="text-white" size={36} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white">{current.label}</h3>
            <p className="mt-2 text-blue-400 font-semibold">{current.tagline}</p>
            <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl">
              {current.description}
            </p>

            <ul className="mt-6 grid sm:grid-cols-3 gap-4">
              {current.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-200"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
