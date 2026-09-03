import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "AppZet Technologies, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@appzet.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:30 AM – 6:30 PM IST",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 lg:scroll-mt-36 py-28 bg-[#f5f8ff]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Contact Us
          </p>
          <h2 className="mt-3 text-5xl font-black text-slate-900">
            Let's Talk About Your Business
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Tell us a little about what you need and we'll get back to you.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* CONTACT INFO */}
          <div className="rounded-3xl bg-[#0b1220] p-10 text-white">
            <h3 className="text-2xl font-black">Contact Information</h3>
            <p className="mt-3 text-slate-400 leading-relaxed">
              Reach out directly or send a message — we typically respond within
              one business day.
            </p>

            <ul className="mt-10 space-y-7">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* FORM */}
          <form className="bg-white rounded-3xl p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
              />

              <select
                defaultValue=""
                className="border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 text-slate-500"
              >
                <option value="" disabled>
                  Service of Interest
                </option>
                <option>POS Billing</option>
                <option>Website Development</option>
                <option>Mobile App</option>
                <option>Digital Marketing</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="mt-6 w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
            />

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
