import type React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { GalleryImage } from '../models/gallery'

interface ImageModalProps {
  image: GalleryImage | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev
}) => {
  if (!image || !isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="relative max-w-7xl max-h-[90vh] mx-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Previous button */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src={image.src}
              alt={image.title}
              className="max-w-full max-h-[60vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageModal