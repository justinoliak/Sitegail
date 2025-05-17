"use client";

import React, { useState, useRef, useEffect, TouchEvent, MouseEvent } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  /**
   * Source for the before image
   */
  beforeSrc: string;
  /**
   * Source for the after image
   */
  afterSrc: string;
  /**
   * Alt text for the before image
   */
  beforeAlt: string;
  /**
   * Alt text for the after image
   */
  afterAlt: string;
  /**
   * Width of the image in pixels
   */
  width: number;
  /**
   * Height of the image in pixels
   */
  height: number;
  /**
   * CSS class to apply to the container
   */
  className?: string;
  /**
   * Initial position of the slider (0-100)
   */
  initialPosition?: number;
  /**
   * Labels for before and after
   */
  labels?: {
    before: string;
    after: string;
  };
  /**
   * Whether to show labels
   */
  showLabels?: boolean;
  /**
   * Sizes attribute for responsive images
   */
  sizes?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  width,
  height,
  className,
  initialPosition = 50,
  labels = { before: "Before", after: "After" },
  showLabels = true,
  sizes = "(max-width: 768px) 100vw, 33vw"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Handle mouse or touch move events
  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const offsetX = clientX - rect.left;
    
    // Calculate position as percentage
    let newPosition = (offsetX / containerWidth) * 100;
    
    // Clamp value between 5 and 95
    newPosition = Math.max(5, Math.min(95, newPosition));
    
    setSliderPosition(newPosition);
  };

  // Mouse event handlers
  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch event handlers
  const handleTouchStart = (e: TouchEvent) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Set up event listeners
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative h-64 overflow-hidden touch-manipulation rounded-lg",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      aria-label="Before and after comparison slider"
      style={{ userSelect: "none", touchAction: "none" }}
    >
      {/* Before Image (base layer) */}
      <div className="absolute inset-0">
        <Image 
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes={sizes}
          className="object-cover"
          draggable="false"
        />
      </div>
      
      {/* After Image (shown based on slider position) */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <Image 
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes={sizes}
          className="object-cover"
          draggable="false"
        />
      </div>
      
      {/* Slider Control */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div 
          className="absolute h-full w-0.5 bg-white"
          style={{ left: `${sliderPosition}%` }}
        ></div>
        <div 
          className="absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          <ChevronRight className="h-6 w-6 text-dusty-rose -rotate-90 mr-0.5" />
          <ChevronRight className="h-6 w-6 text-dusty-rose rotate-90 ml-0.5" />
        </div>
      </div>
      
      {/* Labels */}
      {showLabels && (
        <>
          <div className="absolute bottom-3 left-3 bg-charcoal/70 text-white text-xs py-1 px-3 rounded-md">
            {labels.before}
          </div>
          <div className="absolute bottom-3 right-3 bg-dusty-rose/70 text-white text-xs py-1 px-3 rounded-md">
            {labels.after}
          </div>
        </>
      )}
    </div>
  );
} 