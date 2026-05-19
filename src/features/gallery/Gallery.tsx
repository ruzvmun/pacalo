import type React from 'react'
import { Link } from 'react-router-dom'
import { FaImages, FaArrowLeft } from 'react-icons/fa'
import { Navigation } from '../home'
import GalleryGrid from './components/GalleryGrid'
import RequestRideCTA from '@/features/home/components/RequestRideCTA'

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      {/* Header */}
      <div className="bg-white shadow-sm border-b mt-16 md:mt-0">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-pacalo-blue hover:text-blue-700 font-medium transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-pacalo-blue/10 rounded-lg">
              <FaImages className="w-6 h-6 text-pacalo-blue" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Vehicle Gallery
              </h1>
              <p className="text-gray-600 mt-1">
                Explore our professional medical transport vehicles and equipment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8">
        <GalleryGrid />
      </div>

      <RequestRideCTA />
    </div>
  )
}

export default Gallery