import type React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WhyChooseUsSection: React.FC = () => {

  return (
    <section id="partner" className="py-20 lg:py-12 bg-gradient-to-br from-white via-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose PACALO
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands for reliable medical transportation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto mt-8"></div>
        </div>

        <div className="bg-gradient-to-r from-pacalo-blue to-blue-700 rounded-3xl p-6 lg:p-12 text-white text-center shadow-2xl">
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-6 h-6 lg:w-8 lg:h-8 text-pacalo-gold" />
              ))}
            </div>
          </div>
          <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Highest-Rated in Central Illinois
          </h3>
          <p className="text-base lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
            Read our outstanding customer reviews to see why we are the top choice for medical transportation.
          </p>
          <a
            href="https://g.page/r/CfW0pd4CwkDbEAE/review"
            className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-pacalo-gold hover:bg-yellow-500 text-pacalo-blue font-bold rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaStar className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
            <span className="text-base lg:text-lg">Write a Review</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUsSection