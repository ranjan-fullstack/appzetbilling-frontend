import logo from "../../assets/weblogo-w-400x121.png";
function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* LOGO */}
<div className="flex items-center cursor-pointer">
  
  <img
    src={logo}
    alt="AppZet Logo"
    className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
  />
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