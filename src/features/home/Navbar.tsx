import type React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaHome, FaCarSide } from 'react-icons/fa'
import { getAssetPath } from '../../utils/assets'
import { CONTACT } from '@/@pacalo.core/data/constants'

interface NavigationItem {
  href: string
  label: string
  isRoute?: boolean
}

const NavLink: React.FC<{ item: NavigationItem; className?: string; onClick?: () => void }> = ({
  item,
  className = '',
  onClick
}) => {
  if (item.isRoute) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pacalo-blue transition-all duration-200 group-hover:w-full"></span>
      </Link>
    )
  }

  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pacalo-blue transition-all duration-200 group-hover:w-full"></span>
    </a>
  )
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navigationItems: NavigationItem[] = isHome
    ? [
      { href: '#services', label: 'Services' },
      { href: '/gallery', label: 'Gallery', isRoute: true },
      { href: '#partner', label: 'Our Partners' },
      { href: '#about-us', label: 'About Us' }
    ]
    : [
      { href: '/services', label: 'Services', isRoute: true },
      { href: '/gallery', label: 'Gallery', isRoute: true },
      { href: '/certifications', label: 'Certifications', isRoute: true },
      { href: '/faq', label: 'FAQ', isRoute: true }
    ]

  const contactItem: NavigationItem = { href: '/contact', label: 'Contact Us', isRoute: true }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0 inline-block" aria-label="Go to Home">
            <img
              src={getAssetPath('/assets/images/logos/Transparent Logo.png')}
              alt="PACALO Logo"
              className="h-14 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Middle: Desktop nav links (including Contact Us) */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            {[...navigationItems, contactItem].map((item, idx, arr) => (
              <div key={item.href} className="flex items-center">
                <NavLink
                  item={item}
                  className="text-gray-700 hover:text-pacalo-blue font-bold text-[14px] tracking-wide transition-all duration-200 relative group"
                />
                {idx < arr.length - 1 && (
                  <span className="h-4 w-px bg-gray-300 mx-5" aria-hidden />
                )}
              </div>
            ))}
          </div>

          {/* Right: Desktop action bar */}
          <div className="hidden lg:flex items-center">
            <div className="inline-flex items-stretch rounded-xl border-2 border-pacalo-blue overflow-hidden shadow-md bg-white">

              <Link
                to="/request"
                title="Request a Ride"
                className="flex items-center gap-2 px-5 py-3 bg-pacalo-blue hover:bg-blue-50 text-white hover:text-pacalo-blue font-bold transition-colors border-r border-pacalo-blue/20"
              >
                <FaCarSide className="text-lg" />
                <span className="text-sm whitespace-nowrap">Request a Ride</span>
              </Link>
              <a
                href={`tel:${CONTACT.PHONE}`}
                title="Call Us"
                className="flex items-center gap-2 px-5 py-3 text-pacalo-blue font-bold hover:bg-blue-50 transition-colors"
              >
                <FaPhone className="text-lg" />
                <span className="text-sm whitespace-nowrap">Call Us</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 hover:text-pacalo-blue focus:outline-none transition-all duration-200 p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <FaTimes size={28} className="text-gray-700" />
            ) : (
              <FaBars size={28} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block px-6 py-4 text-gray-700 hover:text-pacalo-blue hover:bg-blue-50 font-semibold text-lg rounded-lg transition-all duration-200"
                >
                  <span className="inline-flex items-center gap-2"><FaHome /> Home</span>
                </Link>
                {[...navigationItems, contactItem].map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-gray-700 hover:text-pacalo-blue hover:bg-blue-50 font-semibold text-lg rounded-lg transition-all duration-200"
                  />
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                  <Link
                    to="/request"
                    onClick={closeMenu}
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-pacalo-blue to-blue-700 text-white rounded-xl font-bold w-full transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <FaCarSide className="text-lg" />
                    <span className="text-lg">Request a Ride</span>
                  </Link>
                  <a
                    href={CONTACT.WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold w-full transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span className="text-lg">WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${CONTACT.PHONE}`}
                    className="flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-pacalo-blue to-blue-700 text-white rounded-xl font-bold w-full transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <FaPhone className="text-lg" />
                    <span className="text-lg">Call {CONTACT.PHONE_FORMATTED}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation