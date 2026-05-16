function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-slate-900">
          Contact <span className="text-green-600">Us</span>
        </h2>

        <p className="mt-6 text-xl text-slate-600">
          Let’s build something amazing together.
        </p>

        <form className="mt-16 bg-white rounded-3xl p-10 shadow-sm text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={6}
            className="mt-6 w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
          />

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;