const services = [
  "Software Development",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
  "Political Marketing",
];

function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-slate-900">
            Our <span className="text-green-600">Services</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            We provide advanced technology services for modern businesses.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-3xl font-bold">
                ✓
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {service}
              </h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Professional and scalable business solution built for modern
                companies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
