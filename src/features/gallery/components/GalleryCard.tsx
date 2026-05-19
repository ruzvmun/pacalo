import type React from 'react'
import { motion } from 'framer-motion'
import { FaExpand } from 'react-icons/fa'
import type { GalleryImage } from '../models/gallery'

interface GalleryCardProps {
  image: GalleryImage
  onClick: () => void
  index: number
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaExpand className="w-4 h-4" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{image.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{image.description}</p>
        <div className="mt-3">
          <span className="inline-block px-3 py-1 bg-pacalo-blue/10 text-pacalo-blue text-xs font-medium rounded-full capitalize">
            {image.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default GalleryCard