import type React from 'react'
import {
  Navigation,
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  AboutUsSection
} from '../features/home'
import Footer from '../features/home/Footer'
import BookingForm from '@/features/home/components/BookingForm'
import { getAssetPath } from '../utils/assets'
import FAQ from '@/features/home/components/FAQ'
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CertificationsSection from '@/features/home/CertificationsSection'
import FloatingActionButton from '@/features/home/components/FloatingActionButton'
import ReviewsCarousel from '@/features/reviews/components/ReviewsCarousel'

const Home: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      {/*     <ContactRow /> */}
      <main className="relative space-y-0">
        <ServicesSection />
        <WhyChooseUsSection />
        <CertificationsSection />
        <ReviewsCarousel />
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: (window.innerWidth >= 768)
                ? `url('${getAssetPath('/assets/images/homepage-bg-2.jpg')}')`
                : `url('${getAssetPath('/assets/images/homepage-bg-sm.jpg')}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/35" />
          <div className="relative container mx-auto sm:p-8 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-1">
                <BookingForm />
              </div>
              <div className="order-2">
                <FAQ />
                <div className="mt-4 text-right">
                  <Link to="/faq" className="text-white font-semibold hover:underline">View all FAQs →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutUsSection />
      </main>
      <Footer />

      <FloatingActionButton />
    </div>
  )
}

export default Home