import type React from 'react'
import { Navigation } from '@/features/home'
import Footer from '@/features/home/Footer'
import BookingForm from '@/features/home/components/BookingForm'
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { CONTACT } from '@/@pacalo.core/data/constants'

const RequestRidePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pacalo-blue/10 to-pacalo-gold/10 overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Request a Ride</h2>
          <p className="text-gray-600 mb-6">Tell us where you need to go—we'll handle the rest with safe, professional care.</p>
          <BookingForm />


          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Prefer to talk?</h2>
            <p className="text-gray-700 mb-4">We're available 24/7 for scheduling and questions.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${CONTACT.PHONE}`} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-pacalo-blue text-white font-bold hover:bg-blue-700">
                <FaPhone /> Call Now
              </a>
              <a href={CONTACT.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-pacalo-gold text-white font-bold hover:bg-yellow-600">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RequestRidePage
