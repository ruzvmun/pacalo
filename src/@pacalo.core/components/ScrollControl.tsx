import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

interface ScrollControlsProps {
  onScrollLeft: () => void
  onScrollRight: () => void
  showLeft: boolean
  showRight: boolean
  isMobile: boolean
}

const ScrollControls: React.FC<ScrollControlsProps> = ({
  onScrollLeft,
  onScrollRight,
  showLeft,
  showRight,
  isMobile,
}) => {
  if (isMobile) return null

  return (
    <>
      {showLeft && (
        <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
          <IconButton onClick={onScrollLeft} className="bg-white shadow-lg hover:bg-gray-100">
            <ChevronLeft />
          </IconButton>
        </div>
      )}
      {showRight && (
        <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
          <IconButton onClick={onScrollRight} className="bg-white shadow-lg hover:bg-gray-100">
            <ChevronRight />
          </IconButton>
        </div>
      )}
    </>
  )
}

export default ScrollControls
