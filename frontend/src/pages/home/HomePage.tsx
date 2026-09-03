import Navbar from "../../sections/home/Navbar";
import Footer from "../../sections/home/Footer";

import HeroSection from "../../sections/home/HeroSection";
import WhyUsSection from "../../sections/home/WhyUsSection";
import ProductsShowcaseSection from "../../sections/home/ProductsShowcaseSection";
import ServicesSection from "../../sections/home/ServicesSection";
import IndustrySection from "../../sections/home/IndustrySection";
import StatsSection from "../../sections/home/StatsSection";
import AboutSection from "../../sections/home/AboutSection";
import ExpertiseSection from "../../sections/home/ExpertiseSection";
import ProcessSection from "../../sections/home/ProcessSection";
import TestimonialsSection from "../../sections/home/TestimonialsSection";
import CTASection from "../../sections/home/CTASection";
import ContactSection from "../../sections/home/ContactSection";

function HomePage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      <Navbar />

      <HeroSection />

      <WhyUsSection />

      <ProductsShowcaseSection />

      <ServicesSection />

      <IndustrySection />

      <StatsSection />

      <AboutSection />

      <ExpertiseSection />

      <ProcessSection />

      <TestimonialsSection />

      <CTASection />

      <ContactSection />

      <Footer />
    </div>
  );
}

export default HomePage;
