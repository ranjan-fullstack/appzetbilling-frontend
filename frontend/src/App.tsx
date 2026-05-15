import { useState } from 'react'
import { Footer } from './layouts/Footer'
import { Navbar } from './layouts/Navbar'
import { CTASection } from './sections/CTASection'
import { HeroSection } from './sections/HeroSection'
import { LeadFormSection } from './sections/LeadFormSection'
import { MarqueeSection } from './sections/MarqueeSection'
import { MetricsSection } from './sections/MetricsSection'
import { ProductsSection } from './sections/ProductsSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { TrustedBrandsSection } from './sections/TrustedBrandsSection'
import { WhyChooseSection } from './sections/WhyChooseSection'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(35,128,0,0.16),transparent_32rem),linear-gradient(180deg,#f4ffe8_0%,#efffde_45%,#d8f8c6_100%)] text-slate-800 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,rgba(35,128,0,0.18),transparent_30rem),linear-gradient(180deg,#123f00_0%,#0b2f00_52%,#020617_100%)] dark:text-slate-100">
        <Navbar isDark={isDark} onThemeToggle={() => setIsDark((value) => !value)} />
        <main>
          <HeroSection />
          <TrustedBrandsSection />
          <MarqueeSection />
          <WhyChooseSection />
          <ProductsSection />
          <MetricsSection />
          <TestimonialsSection />
          <CTASection />
          <LeadFormSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
