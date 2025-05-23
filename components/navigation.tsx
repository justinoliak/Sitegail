"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronRight, ChevronDown, Calendar } from "lucide-react";
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
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "py-2" : "py-4"}`}
        aria-label="Main Navigation"
      >
        <div className="container max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mx-auto flex items-center justify-between rounded-full ${
            scrolled ? "py-2 bg-background/95 backdrop-blur-sm shadow-md" : "py-3 bg-background shadow-sm"
          }`}>
            <Link href="/" className="flex items-center space-x-2 relative z-10 ml-4">
              <Image
                src="/images/logo3.png"
                alt="Gail Ann Krishnan DDS MS"
                width={160}
                height={160}
                className={`transition-all duration-300 rounded-xl ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
                priority
              />
            </Link>
            
            {/* Desktop Navigation with Dropdowns */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-4">
                  {/* Dental Services Dropdown */}
                  <NavigationMenuItem>
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink className="text-base text-charcoal/90 font-medium py-2 px-4">
                        Dental
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  {/* Facial Aesthetics Dropdown */}
                  <NavigationMenuItem>
                    <Link href="/btl" legacyBehavior passHref>
                      <NavigationMenuLink className="text-base text-charcoal/90 font-medium py-2 px-4">
                        Aesthetics
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  {/* Regular Menu Items */}
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="text-base text-charcoal/90 font-medium py-2 px-4">
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="/gallery" legacyBehavior passHref>
                      <NavigationMenuLink className="text-base text-charcoal/90 font-medium py-2 px-4">
                        Gallery
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="text-base text-charcoal/90 font-medium py-2 px-4">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center space-x-8 mr-4">
              <div className="hidden md:block">
                <Link
                  href="tel:+17149900204"
                  className="flex items-center text-base text-charcoal/90 font-medium"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (714) 990-0204
                </Link>
              </div>
              
              {/* Desktop Book Button */}
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className={`hidden sm:inline-flex bg-accent-mint text-white font-bold px-6 rounded-full shadow-sm text-base ${
                    scrolled ? 'py-2' : 'py-3'
                  }`}>
                  Book Online
                </Button>
              </Link>
              
              {/* Mobile tap-to-call button */}
              <a href="tel:+17149900204" className="md:hidden">
                <Button 
                  size="sm" 
                  className="bg-light-mint/30 font-medium px-4 py-2 rounded-full shadow-sm flex items-center text-base"
                >
                  <Phone className="mr-1 h-4 w-4" />
                  Call
                </Button>
              </a>
              
              {/* Mobile menu button - improved tap target */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-light-mint/20 text-charcoal md:hidden min-w-[44px] min-h-[44px]"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
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
        
        {/* Improved Mobile Menu with React State for Dropdowns */}
        {isMobileMenuOpen && (
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:hidden bg-background rounded-3xl mt-2 shadow-lg animate-fade-in">
              <div className="px-4 pt-6 pb-8 space-y-1">
                {/* Mobile dropdown for Dental */}
                <div className="border-b border-light-mint/20 pb-2">
                  <Link
                    href="/services"
                    className="w-full px-5 py-4 text-base font-medium text-charcoal rounded-xl flex justify-between items-center min-h-[54px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dental
                    <ChevronRight className="h-5 w-5 text-primary-mint" />
                  </Link>
                </div>
                
                {/* Mobile dropdown for Aesthetic Treatments */}
                <div className="border-b border-light-mint/20 pb-2">
                  <Link
                    href="/btl"
                    className="w-full px-5 py-4 text-base font-medium text-charcoal rounded-xl flex justify-between items-center min-h-[54px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Aesthetics
                    <ChevronRight className="h-5 w-5 text-primary-mint" />
                  </Link>
                </div>
                
                {/* Regular mobile links - with improved tap targets */}
                <Link 
                  href="/about"
                  className="block px-5 py-4 text-base font-medium text-charcoal hover:bg-light-mint/10 rounded-xl transition-colors duration-200 flex justify-between items-center border-b border-light-mint/20 min-h-[54px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                  <ChevronRight className="h-5 w-5 text-primary-mint" />
                </Link>
                
                <Link 
                  href="/gallery"
                  className="block px-5 py-4 text-base font-medium text-charcoal hover:bg-light-mint/10 rounded-xl transition-colors duration-200 flex justify-between items-center border-b border-light-mint/20 min-h-[54px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                  <ChevronRight className="h-5 w-5 text-primary-mint" />
                </Link>
                
                <Link 
                  href="/contact"
                  className="block px-5 py-4 text-base font-medium text-charcoal hover:bg-light-mint/10 rounded-xl transition-colors duration-200 flex justify-between items-center border-b border-light-mint/20 min-h-[54px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                  <ChevronRight className="h-5 w-5 text-primary-mint" />
                </Link>
                
                <div className="pt-4 mt-4">
                  <a 
                    href="tel:+17149900204"
                    className="block px-5 py-4 rounded-xl text-base font-medium text-charcoal hover:bg-light-mint/10 flex items-center transition-colors duration-200 min-h-[54px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="inline-block mr-3 h-5 w-5 text-primary-mint" />
                    (714) 990-0204
                  </a>
                  <div className="mt-5 px-1">
                    <Link href="/contact">
                      <Button 
                        size="lg" 
                        className="w-full bg-accent-mint text-white hover:bg-accent-mint/90 flex items-center justify-center py-4 rounded-full font-bold shadow-sm min-h-[54px] text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Book Online
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile persistent booking button */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center z-40 px-4">
        <Link href="/contact" className="w-full max-w-xs">
          <Button 
            size="lg" 
            className="w-full bg-accent-mint text-white hover:bg-accent-mint/90 font-bold py-3 rounded-full shadow-lg flex items-center justify-center touch-manipulation text-base"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
        </Link>
      </div>
    </>
  );
}