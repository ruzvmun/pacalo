import type React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaHome } from 'react-icons/fa'
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
      { href: '#about-us', label: 'About Us' },
      { href: '#contact', label: 'Contact' }
    ]
    : [
      { href: '/services', label: 'Services', isRoute: true },
      { href: '/gallery', label: 'Gallery', isRoute: true },
      { href: '/certifications', label: 'Certifications', isRoute: true },
      { href: '/faq', label: 'FAQ', isRoute: true },
      { href: '/contact', label: 'Contact', isRoute: true }
    ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (click to go Home) */}
          <div className="flex-shrink-0">
            <Link to="/" className="inline-block" aria-label="Go to Home">
              <img
                src={getAssetPath('/assets/images/logos/Transparent Logo.png')}
                alt="PACALO Logo"
                className="h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Home icon */}
            <Link
              to="/"
              className="text-gray-700 hover:text-pacalo-blue transition-all duration-200 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Home"
              title="Home"
            >
              <FaHome className="text-2xl" />
            </Link>
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                className="text-gray-700 hover:text-pacalo-blue font-semibold text-lg transition-all duration-200 relative group"
              />
            ))}
            <div className="flex items-center space-x-3">
              <a
                href={CONTACT.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-lg" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-pacalo-blue to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-pacalo-blue transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaPhone className="text-lg" />
                <span className="text-sm">Call Now</span>
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
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-gray-700 hover:text-pacalo-blue hover:bg-blue-50 font-semibold text-lg rounded-lg transition-all duration-200"
                  />
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
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