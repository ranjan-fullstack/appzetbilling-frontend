function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="bg-green-100 rounded-3xl h-[500px] flex items-center justify-center text-3xl text-green-700 font-bold">
            About AppZet
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Building Smart Digital Products For Modern Businesses
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            AppZet is a technology company focused on building scalable software
            products, websites, billing systems, and enterprise solutions.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-5xl font-black text-green-600">50+</h3>
              <p className="mt-2 text-slate-600">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-green-600">100%</h3>
              <p className="mt-2 text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;