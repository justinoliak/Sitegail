"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends Omit<ImageProps, 'sizes'> {
  /**
   * Mobile-first sizes attribute for responsive images
   * Default optimizes for typical component widths at various breakpoints
   */
  sizes?: string;
  /**
   * Container class to apply to the wrapper div
   */
  containerClassName?: string;
  /**
   * Whether the image should be eager loaded (for LCP images)
   */
  isLCP?: boolean;
  /**
   * Aspect ratio to maintain (e.g. "16/9", "4/3", "1/1")
   */
  aspectRatio?: string;
  /**
   * Apply blur effect while loading
   */
  enableBlur?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
  containerClassName,
  isLCP = false,
  aspectRatio,
  enableBlur = false,
  ...props
}: ResponsiveImageProps) {
  return (
    <div 
      className={cn("overflow-hidden relative", containerClassName)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn("object-cover w-full h-full", className)}
        priority={isLCP}
        loading={isLCP ? "eager" : "lazy"}
        placeholder={enableBlur ? "blur" : "empty"}
        blurDataURL={enableBlur ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" : undefined}
        {...props}
      />
    </div>
  );
} 