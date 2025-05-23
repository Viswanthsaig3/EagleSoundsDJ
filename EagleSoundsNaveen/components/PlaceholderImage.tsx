import React from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  className = '',
  width,
  height,
  fill = false,
  priority = false,
}: PlaceholderImageProps) {
  const [isError, setIsError] = React.useState(false);
  const placeholderText = alt.split(' ')[0] || 'Image';

  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''}`}>
      {!isError ? (
        <Image
          src={src}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          className={className}
          onError={() => setIsError(true)}
          priority={priority}
          // Consider adding a generic blurDataURL if you want a loading blur effect
          // placeholder="blur" 
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
      ) : (
        <div 
          className={`placeholder-bg shimmer ${className}`} // Added shimmer class
          style={!fill ? { width: width, height: height } : { position: 'absolute', inset: 0 }}
        >
          {placeholderText}
        </div>
      )}
    </div>
  );
}
