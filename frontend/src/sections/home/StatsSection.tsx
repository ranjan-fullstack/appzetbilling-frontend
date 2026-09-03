import { metrics } from "../../data/siteData";
import { Counter } from "../../components/Counter";

function StatsSection() {
  return (
    <section className="relative bg-[#0b1220] py-20 overflow-hidden">
      {/* GLOW */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-white">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-400 font-medium">
                {metric.label}
              </p>
              <div className="mt-4 mx-auto h-1 w-10 rounded-full bg-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
