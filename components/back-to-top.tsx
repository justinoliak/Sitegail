"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 bg-copper text-white rounded-full shadow-lg hover:bg-copper-90 transition-all duration-300 z-40 w-12 h-12 flex items-center justify-center touch-manipulation"
          aria-label="Back to top"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
} 