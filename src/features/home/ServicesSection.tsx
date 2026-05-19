import type React from 'react'
import { ServiceCard } from './components/ServiceComponents'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../../utils/assets'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Professional Gurney/Stretcher Transport",
      description: "Our service is professional, comfortable, and safe, with a team of highly trained EMTs and CPR-qualified personnel. You can trust us for a peaceful, secure journey every time.",
      icon: getAssetPath("/assets/images/stretcher.jpg")
    },
    {
      title: "Wheelchair Transportation Excellence",
      description: "Embrace accessible transportation with our ADA-compliant services, tailored to accommodate wheelchairs of all sizes!",
      icon: getAssetPath("/assets/images/van.jpg")
    },
    {
      title: "Ambulatory Transportation Convenience",
      description: "Experience effortless mobility with our reliable Ambulatory transportation services!",
      icon: getAssetPath("/assets/images/car.jpg")
    },
  ];

  const features = [
    {
      icon: getAssetPath('/assets/images/icons/time.png'),
      title: 'Always On Time',
      description: 'Regular, punctual appointments that respect your health schedule'
    },
    {
      icon: getAssetPath('/assets/images/icons/shield.png'),
      title: 'Safe & Reliable',
      description: 'Professional drivers with comprehensive safety training'
    },
    {
      icon: getAssetPath('/assets/images/icons/stars.png'),
      title: 'Highest Rated',
      description: 'Top-rated NEMT service in Central Illinois'
    },
    {
      icon: getAssetPath('/assets/images/icons/van.png'),
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles with medical equipment'
    }
  ]

  return (
    <section id="services" className="py-8 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional medical transportation solutions for your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pacalo-blue to-pacalo-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Compact Feature Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-4 lg:p-6 hover:bg-gradient-to-br hover:from-pacalo-blue hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100 text-center h-full">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 lg:mb-4 flex items-center justify-center bg-gradient-to-br from-pacalo-blue to-blue-700 group-hover:from-white group-hover:to-gray-100 rounded-xl shadow transition-all duration-300">
                    <img src={feature.icon} alt={feature.title} className="w-7 h-7 lg:w-8 lg:h-8 object-contain" />
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/services" className="inline-block px-6 py-3 rounded-xl bg-pacalo-blue text-white font-bold hover:bg-blue-700 transition-colors">Learn more about our services</Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection