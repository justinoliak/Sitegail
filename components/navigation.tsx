"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 w-full ${
      scrolled ? "top-2" : "top-4"
    }`}>
      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto flex items-center justify-between rounded-full ${
          scrolled ? "py-3 bg-white/95 backdrop-blur-sm shadow-md" : "py-4 bg-white shadow-sm"
        }`}>
          <Link href="/" className="flex items-center space-x-2 relative z-10 ml-4">
            <Image
              src="/images/logo3.png"
              alt="Gail Ann Krishnan DDS MS"
              width={160}
              height={160}
              className={`transition-all duration-300 rounded-xl ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
            />
          </Link>
          
          <div className="hidden space-x-12 md:flex items-center">
            {[
              { name: "Dental", href: "/dental" },
              { name: "Facial Aesthetics", href: "/facial-aesthetics" },
              { name: "Reviews", href: "/reviews" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-foreground/90 font-medium transition-all duration-300 hover:text-primary py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-8 mr-4">
            <div className="hidden md:block">
              <a href="tel:+17149900204" className="flex items-center text-foreground/90 hover:text-primary font-medium transition-all duration-300">
                <Phone className="mr-2 h-4 w-4" />
                (714) 990-0204
              </a>
            </div>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className={`hidden sm:inline-flex bg-primary text-foreground hover:bg-primary/90 font-bold transition-all duration-300 px-6 rounded-full ${
                  scrolled ? 'py-2' : 'py-2.5'
                }`}>
                Book Now
              </Button>
            </Link>
            
            {/* Mobile book button */}
            <Link href="/contact" className="md:hidden">
              <Button 
                size="sm" 
                className="bg-primary text-foreground hover:bg-primary/90 font-bold px-4 py-1.5 rounded-full">
                Book
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-full bg-primary/5 text-foreground md:hidden hover:bg-primary/10 transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with improved styling */}
      {isMobileMenuOpen && (
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:hidden bg-white rounded-3xl mt-2 shadow-lg animate-fade-in">
            <div className="px-8 pt-6 pb-8 space-y-3">
              {[
                { name: "Dental", href: "/dental" },
                { name: "Facial Aesthetics", href: "/facial-aesthetics" },
                { name: "Reviews", href: "/reviews" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3.5 text-base font-medium text-foreground hover:bg-primary/5 rounded-full transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
              
              <div className="pt-4 border-t border-primary/10 mt-4">
                <a 
                  href="tel:+17149900204"
                  className="block px-4 py-3.5 rounded-full text-base font-medium text-foreground hover:bg-primary/5 flex items-center transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="inline-block mr-3 h-4 w-4 text-primary" />
                  (714) 990-0204
                </a>
                <div className="mt-5">
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary text-foreground hover:bg-primary/90 flex items-center justify-center py-3 rounded-full font-bold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Appointment
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}