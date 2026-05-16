import Navbar from "../../sections/home/Navbar";
import Footer from "../../sections/home/Footer";

import HeroSection from "../../sections/home/HeroSection";
import ProductsShowcaseSection from "../../sections/home/ProductsShowcaseSection";
import ServicesSection from "../../sections/home/ServicesSection";
import IndustrySection from "../../sections/home/IndustrySection";
import AboutSection from "../../sections/home/AboutSection";
import ContactSection from "../../sections/home/ContactSection";

function HomePage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <Navbar />

      <HeroSection />

      <ProductsShowcaseSection />

      <ServicesSection />

      <IndustrySection />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  );
}

export default HomePage;