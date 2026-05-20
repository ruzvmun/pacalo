import type React from 'react'
import { Link } from 'react-router-dom'
import CertificationsStrip from './components/CertificationsStrip'
import ReviewsStripCarousel from '../reviews/components/ReviewsStripCarousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { GALLERY_IMAGES } from '../gallery/data/galleryData'
import { getAssetPath } from '../../utils/assets'
import { FaCarSide } from 'react-icons/fa'

interface HighlightTextProps {
  children: React.ReactNode
}

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => (
  <span className="text-pacalo-blue font-extrabold">
    {children}
  </span>
)

const vans = GALLERY_IMAGES.filter(img => img.category === 'vehicle' || img.category === 'interior' || img.category === 'equipment')

const HeroSection: React.FC = () => (
  <div className="">
    <div
      className="min-h-[80vh] md:min-h-[700px] bg-cover bg-top relative flex items-center pt-16"
      style={{
        backgroundImage: window.innerWidth >= 768
          ? `url('${getAssetPath('/assets/images/homepage-bg.png')}')`
          : `url('${getAssetPath('/assets/images/homepage-bg-sm.png')}')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pacalo-gold/40 via-white/45 to-pacalo-blue/70 z-[5]" />

      {/* Vans slideshow */}
      <div className="pointer-events-none absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-[2] w-[42vw] sm:w-[45vw] max-w-[520px] hidden md:block rotate-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/40">
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

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center md:items-start">
          <div className="max-w-4xl">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
              <h1 className="text-gray-900 font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
                We proudly offer top-tier <br /> <HighlightText>stretcher</HighlightText>,{' '}
                <HighlightText>wheelchair</HighlightText>, and{' '}
                <HighlightText>ambulatory transportation</HighlightText>.
              </h1>
              <p className="text-gray-800 font-medium text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                We provide comprehensive intercity, inter-county, and interstate services to ensure you get safely to any destination.
              </p>
              <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                <Link
                  to="/request"
                  className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-pacalo-gold text-pacalo-blue font-extrabold text-sm sm:text-base md:text-lg rounded-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl whitespace-nowrap ring-1 ring-pacalo-blue/10"
                >
                  <FaCarSide className="text-lg group-hover:translate-x-0.5 transition-transform" />
                  <span>Schedule a Ride</span>
                </Link>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/80 text-pacalo-blue font-bold text-sm sm:text-base md:text-lg rounded-xl border-2 border-pacalo-blue hover:bg-pacalo-blue hover:text-white transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  <span>Our Services</span>
                </a>
              </div>
              <div className="mt-5">
                <CertificationsStrip />
              </div>
            </div>
            <div className="pt-6 hidden md:block">
              <ReviewsStripCarousel />
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
)

export default HeroSection