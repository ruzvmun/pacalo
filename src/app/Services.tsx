import type React from 'react'
import { Navigation, ServicesSection } from '@/features/home'
import Footer from '@/features/home/Footer'
import { Link } from 'react-router-dom'
import RequestRideCTA from '@/features/home/components/RequestRideCTA'

const ServicesPage: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        <header className="bg-gradient-to-r from-pacalo-blue/10 to-pacalo-gold/10">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h1>
            <p className="text-gray-600 mt-2 max-w-3xl">Professional non-emergency medical transportation: wheelchair, ambulatory, and gurney/stretcher rides with trained staff.</p>
          </div>
        </header>

        <ServicesSection />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-800">
                <h2 className="text-xl md:text-2xl font-bold">Ready to request a ride?</h2>
                <p className="text-gray-600">Book now and we'll get you there safely and on time.</p>
              </div>
              <Link to="/request-ride" className="px-6 py-3 rounded-xl bg-pacalo-blue text-white font-bold hover:bg-blue-700 transition-colors">Request a Ride</Link>
            </div>
          </div>
        </section>
        <RequestRideCTA />
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage
