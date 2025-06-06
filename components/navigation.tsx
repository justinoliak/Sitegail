"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-mint/20 hover:text-charcoal focus:bg-light-mint/20",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (id: string) => {
    setActiveMobileDropdown(activeMobileDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled down from very top
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
        aria-label="Main Navigation"
      >
        <div className={`w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm" 
            : "bg-white border-b border-gray-100"
        }`}>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Dr. Gail Krishnan, DDS - Aesthetic Dentistry"
                    width={300}
                    height={75}
                    className="h-12 w-auto"
                    priority
                  />
                </div>
              </Link>
            
              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:block flex-1">
                <div className="flex items-center justify-center space-x-8">
                  <Link 
                    href="/services" 
                    className="text-gray-700 hover:text-gray-900 font-medium px-2 py-2 transition-colors duration-200"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/aesthetics" 
                    className="text-gray-700 hover:text-gray-900 font-medium px-2 py-2 transition-colors duration-200"
                  >
                    Aesthetics
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-gray-700 hover:text-gray-900 font-medium px-2 py-2 transition-colors duration-200"
                  >
                    About
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="text-gray-700 hover:text-gray-900 font-medium px-2 py-2 transition-colors duration-200"
                  >
                    Gallery
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-gray-700 hover:text-gray-900 font-medium px-2 py-2 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-3">
                {/* Log in Button */}
                <Link href="/contact">
                  <Button variant="ghost" className="hidden md:inline-flex text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors duration-200">
                    Log in
                  </Button>
                </Link>
                
                {/* CTA Button */}
                <Link href="/contact">
                  <Button className="bg-accent-mint hover:bg-accent-mint-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200">
                    Book Appointment
                  </Button>
                </Link>
                
                {/* Mobile Actions */}
                <div className="flex items-center space-x-2 lg:hidden">
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle menu"
                  >
                    <span className="sr-only">Toggle menu</span>
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <Menu className="w-5 h-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-6 space-y-2">
                {/* Navigation Links */}
                <Link
                  href="/services"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                
                <Link
                  href="/aesthetics"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Aesthetics
                </Link>
                
                <Link 
                  href="/about"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                
                <Link 
                  href="/gallery"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                
                <Link 
                  href="/contact"
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* CTA Section */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link href="/contact">
                    <Button 
                      className="w-full bg-accent-mint hover:bg-accent-mint-dark text-white py-3 rounded-full font-medium transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile persistent booking button */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <Link href="/contact">
          <Button className="bg-accent-mint hover:bg-accent-mint-dark text-white shadow-xl px-8 py-3 rounded-full font-medium">
            Book Now
          </Button>
        </Link>
      </div>
    </>
  );
}