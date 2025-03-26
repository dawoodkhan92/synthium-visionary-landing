
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc = '/placeholder.svg',
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      root: null,
      rootMargin: '100px', // Load images 100px before they come into view
      threshold: 0.1
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        ref={imgRef}
        src={isInView ? src : placeholderSrc}
        alt={alt}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading="lazy"
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;
