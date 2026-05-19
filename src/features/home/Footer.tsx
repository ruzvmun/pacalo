import type React from 'react'
import { FaEnvelope, FaPhone, FaStar, FaWhatsapp } from 'react-icons/fa'
import { getAssetPath } from '../../utils/assets'
import { Link } from 'react-router-dom'
import { CONTACT } from '@/@pacalo.core/data/constants'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Logo and Company Info */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <img
                src={getAssetPath("/assets/images/logos/Transparent Logo.png")}
                alt="PACALO Logo"
                className="h-16 mx-auto md:mx-0"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Professional non-emergency medical transportation services in Central Illinois.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-pacalo-gold">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5" />
              ))}
              <span className="ml-3 text-base font-semibold">Highest Rated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-bold text-xl lg:text-2xl mb-6">Quick Links</h3>
            <nav>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-300 hover:text-pacalo-gold transition-all duration-200 text-lg font-medium hover:scale-105 inline-block">Our Services</a></li>
                <li><a href="#partner" className="text-gray-300 hover:text-pacalo-gold transition-all duration-200 text-lg font-medium hover:scale-105 inline-block">Our Partners</a></li>
                <li><a href="#about-us" className="text-gray-300 hover:text-pacalo-gold transition-all duration-200 text-lg font-medium hover:scale-105 inline-block">About Us</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-xl lg:text-2xl mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <a href={`tel:${CONTACT.PHONE}`} className="flex items-center justify-center md:justify-end text-lg hover:text-pacalo-gold transition-colors">
                <FaPhone className="mr-3" />
                {CONTACT.PHONE_FORMATTED}
              </a>
              <a
                href={CONTACT.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end text-green-400 hover:text-green-300 transition-colors"
              >
                <FaWhatsapp className="mr-3" />
                WhatsApp
              </a>
              <a href={`mailto:${CONTACT.EMAIL}`} className="flex items-center justify-center md:justify-end text-lg hover:text-pacalo-gold transition-colors break-all">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                {CONTACT.EMAIL}
              </a>
              <div className="pt-4 flex justify-center md:justify-end">
                <Link
                  to="/request-ride"
                  className="inline-block px-6 py-3 bg-pacalo-gold hover:bg-yellow-500 text-pacalo-blue font-bold rounded-lg transition-colors"
                >
                  Request a Ride
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-400 text-base">
              &copy; {currentYear} PACALO Transportation. All rights reserved.
            </div>
            <div className="text-gray-400 text-base text-center lg:text-right">
              Contact <span className="text-pacalo-gold font-bold">PACALO</span> for the right Transportation Experience.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer