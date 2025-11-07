import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean; // fill prop 추가
}

/**
 * Next.js Image 컴포넌트를 래핑한 최적화된 이미지 컴포넌트
 * 
 * Next.js Image 컴포넌트는 다음 중 하나가 필요합니다:
 * 1. width와 height를 모두 제공
 * 2. fill prop을 사용하고 부모 요소가 position: relative
 * 3. 정적 import를 사용
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // fill을 사용하는 경우 width/height가 필요 없음
  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ position: 'relative' }}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
        {hasError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">이미지를 불러올 수 없습니다</span>
          </div>
        )}
      </div>
    );
  }

  // width와 height가 모두 제공되지 않은 경우 경고
  if (!width || !height) {
    console.warn('OptimizedImage: width와 height를 모두 제공하거나 fill prop을 사용해야 합니다.');
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">이미지 크기를 지정해주세요</span>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">이미지를 불러올 수 없습니다</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}

