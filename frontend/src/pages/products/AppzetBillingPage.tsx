
import CTASection from "../../sections/products/CTASection";
import HeroSection from "../../sections/products/HeroSection";
import LeadFormSection from "../../sections/products/LeadFormSection";
import MarqueeSection from "../../sections/products/MarqueeSection";
import MetricsSection from "../../sections/products/MetricsSection";
import ProductsSection from "../../sections/products/ProductsSection";
import TestimonialsSection from "../../sections/products/TestimonialsSection";
import TrustedBrandsSection from "../../sections/products/TrustedBrandsSection";
import WhyChooseSection from "../../sections/products/WhyChooseSection";

function AppzetBillingPage() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <MarqueeSection />
      <WhyChooseSection />
      <ProductsSection />
      <MetricsSection />
      <TestimonialsSection />
      <CTASection />
      <LeadFormSection />
    </>
  );
}

export default AppzetBillingPage;

