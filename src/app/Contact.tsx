import type React from 'react'
import { Navigation } from '@/features/home'
import Footer from '@/features/home/Footer'
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa'
import RequestRideCTA from '@/features/home/components/RequestRideCTA'
import { CONTACT } from '@/@pacalo.core/data/constants'

const ContactPage: React.FC = () => {
  return (
    <div className="font-roboto bg-white overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">Questions about availability, rates, or scheduling? Reach out anytime—we're here 24/7.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href={`tel:${CONTACT.PHONE}`} className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <FaPhone className="text-pacalo-blue text-2xl" />
                <div>
                  <div className="text-sm text-gray-600">Call Us</div>
                  <div className="text-xl font-bold">(309) 307-4564</div>
                </div>
              </a>
              <a href={CONTACT.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-green-50 border border-green-100">
                <FaWhatsapp className="text-green-600 text-2xl" />
                <div>
                  <div className="text-sm text-gray-600">Message on WhatsApp</div>
                  <div className="text-xl font-bold">(309) 307-4564</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="flex items-center gap-4 p-6 rounded-2xl bg-yellow-50 border border-yellow-100">
                <FaEnvelope className="text-pacalo-gold text-2xl" />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="text-xl font-bold break-all">{CONTACT.EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <FaClock className="text-gray-700 text-2xl" />
                <div>
                  <div className="text-sm text-gray-600">Service Hours</div>
                  <div className="text-xl font-bold">24/7 Available</div>
                  <div className="text-sm text-gray-500">Monday - Sunday</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <RequestRideCTA />
      <Footer />
    </div>
  )
}

export default ContactPage
