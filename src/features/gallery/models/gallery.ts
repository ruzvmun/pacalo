export interface GalleryImage {
  src: string
  title: string
  description: string
  category: 'vehicle' | 'interior' | 'equipment'
}

export type GalleryCategory = 'vehicle' | 'interior' | 'equipment'