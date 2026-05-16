function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-black text-green-500">AppZet</h2>

          <p className="mt-6 text-slate-400 leading-relaxed">
            Smart business solutions for modern enterprises.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Products</h3>

          <ul className="mt-6 space-y-3 text-slate-400">
            <li>AppzetBilling</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Services</h3>

          <ul className="mt-6 space-y-3 text-slate-400">
            <li>Website Development</li>
            <li>Software Development</li>
            <li>Mobile Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Contact</h3>

          <ul className="mt-6 space-y-3 text-slate-400">
            <li>info@appzet.com</li>
            <li>+91 9876543210</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-slate-500">
        Copyright 2026 AppZet. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;