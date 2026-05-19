import type React from 'react'
import { Navigation } from '@/features/home'
import Footer from '@/features/home/Footer'
import CertificationsSection from '@/features/home/CertificationsSection'
import RequestRideCTA from '@/features/home/components/RequestRideCTA'

const CertificationsPage: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <main className="pt-24">
        <header className="bg-gradient-to-r from-pacalo-blue/10 to-pacalo-gold/10">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Professional Credentials</h1>
            <p className="text-gray-600 mt-2 max-w-3xl">We are licensed and certified to deliver safe, compliant non-emergency medical transportation across Illinois.</p>
          </div>
        </header>
        <CertificationsSection />
        <RequestRideCTA />
      </main>
      <Footer />
    </div>
  )
}

export default CertificationsPage
