import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import UseCaseSection from './components/UseCaseSection'
import FeatureSection from './components/FeatureSection'
import TrustSection from './components/TrustSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductGrid />
      <UseCaseSection />
      <FeatureSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}
