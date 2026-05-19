import type { RefObject } from 'react';
import { useState, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export const useContainerDimensions = (containerRef: RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const { width, height } = containerRef.current?.getBoundingClientRect() ?? { width: 0, height: 0 };
      setDimensions({ width, height });
    };

    // Initial measurement
    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);

    window.addEventListener('resize', updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return dimensions;
};