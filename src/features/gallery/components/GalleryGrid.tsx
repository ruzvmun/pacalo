import type React from 'react'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import GalleryCard from './GalleryCard'
import ImageModal from './ImageModal'
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../data/galleryData'
import type { GalleryCategory } from '../models/gallery'

const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | 'all'>('all')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_IMAGES
    return GALLERY_IMAGES.filter(image => image.category === selectedCategory)
  }, [selectedCategory])

  const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const hasNext = selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1
  const hasPrev = selectedImageIndex !== null && selectedImageIndex > 0

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === 'all'
              ? 'bg-pacalo-blue text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          All Images ({GALLERY_IMAGES.length})
        </button>
        {GALLERY_CATEGORIES.map(category => {
          const count = GALLERY_IMAGES.filter(img => img.category === category.key).length
          return (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category.key
                  ? 'bg-pacalo-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.label} ({count})
            </button>
          )
        })}
      </div>

      {/* Images Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredImages.map((image, index) => (
          <GalleryCard
            key={image.src}
            image={image}
            index={index}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  )
}

export default GalleryGrid