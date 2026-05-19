import type React from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'
import BookingBarForm from './components/BookingBarForm'
import CertificationsStrip from './components/CertificationsStrip'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { GALLERY_IMAGES } from '../gallery/data/galleryData'
import ReviewsStripCarousel from '../reviews/components/ReviewsStripCarousel'
import { getAssetPath } from '../../utils/assets'
import { CONTACT } from '@/@pacalo.core/data/constants'

interface HighlightTextProps {
  children: React.ReactNode
}

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => (
  <span className="relative inline-block">
    <span className="text-pacalo-blue font-extrabold bg-gradient-to-r from-pacalo-blue to-blue-600 bg-clip-text text-transparent">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pacalo-gold/50 to-blue-400/50 blur-sm"></span>
  </span>
)

const vans = GALLERY_IMAGES.filter(img => img.category === 'vehicle' || img.category === 'interior' || img.category === 'equipment')

const HeroSection: React.FC = () => (
  <div className="">
    <style>{`
      .soft-cloud {
        border-radius: 65% 35% 45% 55% / 55% 40% 60% 45%;
      }
    `}</style>

    <div
      className="min-h-[80vh] md:min-h-[70vh] bg-cover bg-top relative flex items-center"
      style={{
        backgroundImage: window.innerWidth >= 768
          ? `url('${getAssetPath('/assets/images/homepage-bg.png')}')`
          : `url('${getAssetPath('/assets/images/homepage-bg-sm.png')}')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pacalo-gold/40 via-white/45 to-pacalo-blue/70 z-[5]" />

      {/* Vans slideshow with soft cloud frame */}
      <div className="pointer-events-none absolute right-1 sm:right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-[2] w-[42vw] sm:w-[45vw] max-w-[520px] hidden md:block">
        <div className="relative">
          {/* Soft cloud-shaped border with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 p-1 soft-cloud shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md soft-cloud"></div>
          </div>

          {/* Soft glow effects */}
          <span className="absolute -top-16 -left-16 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl" />
          <span className="absolute -bottom-16 -right-16 w-52 h-52 bg-blue-100/30 rounded-full blur-3xl" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

          {/* Content container */}
          <div className="relative overflow-hidden soft-cloud shadow-xl">
            <Swiper
              modules={[Autoplay, EffectFade]}
              slidesPerView={1}
              loop
              effect="fade"
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {vans.map((image) => (
                <SwiperSlide key={image.src}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="block w-full h-full object-cover aspect-[16/10]"
                    loading="eager"
                    decoding="async"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="relative mt-16 z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-4xl">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <h1 className="text-gray-900 font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
              We proudly offer top-tier <br /> <HighlightText>stretcher</HighlightText>,{' '}
              <HighlightText>wheelchair</HighlightText>, and{' '}
              <HighlightText>ambulatory transportation</HighlightText>.
            </h1>
            <p className="text-black font-bold text-sm md:text-base lg:text-lg leading-relaxed mb-6">
              We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              <a
                href={`tel:${CONTACT.PHONE}`}
                className="w-full flex items-center justify-center px-4 py-3 bg-pacalo-blue text-white font-bold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaPhone className="w-4 h-4 mr-2 text-pacalo-gold" />
                <span className="hidden sm:inline">Call Us </span>
                <span className="sm:hidden"> Call</span>
              </a>
              <a
                href={CONTACT.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="w-full flex items-center justify-center px-4 py-3 bg-pacalo-gold text-white font-bold rounded-xl hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Email Us</span>
                <span className="sm:hidden"> Email</span>
              </a>

              <a
                href="#services"
                className="col-span-2 md:col-span-1 w-full hidden md:flex items-center justify-center px-4 py-3 bg-white text-pacalo-blue font-bold rounded-xl border-2 border-pacalo-blue hover:bg-pacalo-blue hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Our Services</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 opacity-50 w-full flex justify-center">
          <CertificationsStrip />
        </div>

        <div className="mt-6 opacity-80 hidden md:flex justify-center">
          <ReviewsStripCarousel />
        </div>
      </div>
    </div>

    <div className="hidden md:block">
      <BookingBarForm />
    </div>
  </div>
)

export default HeroSection