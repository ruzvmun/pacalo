import type React from 'react'
import { Navigation } from '@/features/home'
import Footer from '@/features/home/Footer'
import FAQ from '@/features/home/components/FAQ'
import RequestRideCTA from '@/features/home/components/RequestRideCTA'

const FAQPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pacalo-blue/10 to-pacalo-gold/10 overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h1>

            <FAQ showHeader={false} />
          </div>
        </div>
        <RequestRideCTA />
      </main>
      <Footer />
    </div>
  )
}

export default FAQPage
