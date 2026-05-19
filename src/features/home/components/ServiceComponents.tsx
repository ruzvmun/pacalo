import type React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
    <div className="relative w-full h-56 lg:h-64 overflow-hidden">
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
    </div>
    <div className="p-6 lg:p-8">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-pacalo-blue transition-colors duration-200">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base lg:text-lg">{description}</p>
    </div>
  </div>
)