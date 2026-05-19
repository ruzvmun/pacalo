import { useState, useEffect } from 'react'

interface UseResponsiveReturn {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  windowWidth: number
}

export const useResponsive = (): UseResponsiveReturn => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isMobile: windowDimensions.width <= 768,
    isTablet: windowDimensions.width > 768 && windowDimensions.width <= 1024,
    isDesktop: windowDimensions.width > 1024,
    windowWidth: windowDimensions.width,
  }
}