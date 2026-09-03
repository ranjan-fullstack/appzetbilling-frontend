import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0b1220] via-[#0b1220] to-blue-950 px-8 py-16 sm:px-16 sm:py-20 text-center">

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Let's Build Something Amazing Together
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Whether you need a billing system, a website, an app, or a long-term
              technology partner — we're here to help. Drop us a line and we'll
              respond within one business day.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition shadow-xl shadow-blue-600/30"
            >
              Get In Touch <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
