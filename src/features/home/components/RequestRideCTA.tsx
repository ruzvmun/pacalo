import type React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT } from '@/@pacalo.core/data/constants'

const RequestRideCTA: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <section className={`py-10 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-r from-pacalo-blue to-blue-700 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Need a ride?</h2>
            <p className="text-white/90 mt-1">Book now and we'll get you there safely and on time.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/request-ride" className="px-6 py-3 rounded-xl bg-white text-pacalo-blue font-bold hover:bg-gray-100 transition-colors">Request a Ride</Link>
            <a href={`tel:${CONTACT.PHONE}`} className="px-6 py-3 rounded-xl bg-pacalo-gold text-pacalo-blue font-bold hover:bg-yellow-500 transition-colors">Call {CONTACT.PHONE_FORMATTED}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequestRideCTA
