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

// Define dropdown menu items
const dentalServices = [
  { name: "Preventive Care", href: "/services/preventive", description: "Regular cleanings and checkups to maintain oral health" },
  { name: "Cosmetic Dentistry", href: "/services/cosmetic", description: "Treatments to enhance your smile's appearance" },
  { name: "Restorative Dentistry", href: "/services/restorative", description: "Repair damaged teeth and restore function" },
];

const btlServices = [
  { name: "BTL Exion", href: "/btl/exion", description: "Advanced facial rejuvenation and skin treatments" },
  { name: "BTL Emsculpt", href: "/btl/emsculpt", description: "Non-invasive body contouring and muscle building" },
  { name: "BTL Overview", href: "/btl", description: "Learn about all our advanced BTL aesthetic treatments" },
];

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F7D1D1]/20 hover:text-[#3C3C3C] focus:bg-[#F7D1D1]/20",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-[#3C3C3C]">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-[#3C3C3C]/80">
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
            scrolled ? "py-2 bg-white/95 backdrop-blur-sm shadow-md" : "py-3 bg-white shadow-sm"
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
                    <NavigationMenuTrigger className="text-[#3C3C3C]/90 font-medium hover:text-[#D8A7B1] hover:bg-transparent focus:bg-transparent bg-transparent">
                      Dental Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-1 md:grid-cols-2">
                        {dentalServices.map((service) => (
                          <ListItem 
                            key={service.name} 
                            title={service.name} 
                            href={service.href}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                        <ListItem 
                          title="All Dental Services" 
                          href="/services"
                          className="bg-[#F7D1D1]/30 hover:bg-[#F7D1D1]/40"
                        >
                          View our complete range of dental services
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  {/* Facial Aesthetics Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#3C3C3C]/90 font-medium hover:text-[#D8A7B1] hover:bg-transparent focus:bg-transparent bg-transparent">
                      Aesthetic Treatments
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] grid-cols-1 md:grid-cols-2">
                        {btlServices.map((service) => (
                          <ListItem 
                            key={service.name} 
                            title={service.name} 
                            href={service.href}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  {/* Regular Menu Items */}
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="text-[#3C3C3C]/90 font-medium hover:text-[#D8A7B1] transition-colors py-2 px-4">
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="/gallery" legacyBehavior passHref>
                      <NavigationMenuLink className="text-[#3C3C3C]/90 font-medium hover:text-[#D8A7B1] transition-colors py-2 px-4">
                        Smile Gallery
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="text-[#3C3C3C]/90 font-medium hover:text-[#D8A7B1] transition-colors py-2 px-4">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center space-x-8 mr-4">
              <div className="hidden md:block">
                <a 
                  href="tel:+17149900204" 
                  className="flex items-center text-[#3C3C3C]/90 hover:text-[#D8A7B1] font-medium transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (714) 990-0204
                </a>
              </div>
              
              {/* Desktop Book Button */}
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className={`hidden sm:inline-flex bg-[#B87333] text-white hover:bg-[#B87333]/90 font-bold transition-all duration-300 px-6 rounded-full shadow-sm ${
                    scrolled ? 'py-2' : 'py-2.5'
                  }`}>
                  Book Now
                </Button>
              </Link>
              
              {/* Mobile tap-to-call button */}
              <a href="tel:+17149900204" className="md:hidden">
                <Button 
                  size="sm" 
                  className="bg-[#D8A7B1] text-white hover:bg-[#D8A7B1]/90 font-medium px-4 py-2 rounded-full shadow-sm flex items-center"
                >
                  <Phone className="mr-1 h-4 w-4" />
                  Call
                </Button>
              </a>
              
              {/* Mobile menu button - improved tap target */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#F7D1D1]/20 text-[#3C3C3C] md:hidden hover:bg-[#F7D1D1]/40 transition-colors duration-300 min-w-[44px] min-h-[44px]"
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
            <div className="md:hidden bg-white rounded-3xl mt-2 shadow-lg animate-fade-in">
              <div className="px-4 pt-6 pb-8 space-y-1">
                {/* Mobile dropdown for Dental */}
                <div className="border-b border-[#F7D1D1]/20 pb-2">
                  <button
                    onClick={() => toggleMobileDropdown('dental')}
                    className="w-full px-5 py-4 text-base font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-xl transition-colors duration-200 flex justify-between items-center min-h-[54px]"
                    aria-expanded={activeMobileDropdown === 'dental'}
                    aria-controls="dental-dropdown"
                  >
                    Dental Services
                    <ChevronDown 
                      className={`h-5 w-5 text-[#D8A7B1] transition-transform duration-200 ${
                        activeMobileDropdown === 'dental' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div 
                    id="dental-dropdown" 
                    className={`pl-4 pr-2 mt-1 space-y-1 ${activeMobileDropdown === 'dental' ? '' : 'hidden'}`}
                  >
                    {dentalServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3.5 text-sm text-[#3C3C3C]/90 hover:bg-[#F7D1D1]/10 rounded-lg transition-colors duration-200 flex items-center min-h-[44px]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D8A7B1] mr-2"></span>
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-4 py-3.5 mt-1 text-sm font-medium text-[#3C3C3C] bg-[#F7D1D1]/10 hover:bg-[#F7D1D1]/20 rounded-lg transition-colors duration-200 flex items-center min-h-[44px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <ChevronRight className="h-4 w-4 text-[#D8A7B1] mr-1" />
                      View All Dental Services
                    </Link>
                  </div>
                </div>
                
                {/* Mobile dropdown for Aesthetic Treatments */}
                <div className="border-b border-[#F7D1D1]/20 pb-2">
                  <button
                    onClick={() => toggleMobileDropdown('aesthetics')}
                    className="w-full px-5 py-4 text-base font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-xl transition-colors duration-200 flex justify-between items-center min-h-[54px]"
                    aria-expanded={activeMobileDropdown === 'aesthetics'}
                    aria-controls="aesthetics-dropdown"
                  >
                    Aesthetic Treatments
                    <ChevronDown 
                      className={`h-5 w-5 text-[#D8A7B1] transition-transform duration-200 ${
                        activeMobileDropdown === 'aesthetics' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <div 
                    id="aesthetics-dropdown" 
                    className={`pl-4 pr-2 mt-1 space-y-1 ${activeMobileDropdown === 'aesthetics' ? '' : 'hidden'}`}
                  >
                    {btlServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3.5 text-sm text-[#3C3C3C]/90 hover:bg-[#F7D1D1]/10 rounded-lg transition-colors duration-200 flex items-center min-h-[44px]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D8A7B1] mr-2"></span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Regular mobile links - with improved tap targets */}
                <Link 
                  href="/about"
                  className="block px-5 py-4 text-base font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-xl transition-colors duration-200 flex justify-between items-center border-b border-[#F7D1D1]/20 min-h-[54px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                  <ChevronRight className="h-5 w-5 text-[#D8A7B1]" />
                </Link>
                
                <Link 
                  href="/gallery"
                  className="block px-5 py-4 text-base font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-xl transition-colors duration-200 flex justify-between items-center border-b border-[#F7D1D1]/20 min-h-[54px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Smile Gallery
                  <ChevronRight className="h-5 w-5 text-[#D8A7B1]" />
                </Link>
                
                <Link 
                  href="/contact"
                  className="block px-5 py-4 text-base font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-xl transition-colors duration-200 flex justify-between items-center border-b border-[#F7D1D1]/20 min-h-[54px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                  <ChevronRight className="h-5 w-5 text-[#D8A7B1]" />
                </Link>
                
                <div className="pt-4 mt-4">
                  <a 
                    href="tel:+17149900204"
                    className="block px-5 py-4 rounded-xl text-base font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/10 flex items-center transition-colors duration-200 min-h-[54px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="inline-block mr-3 h-5 w-5 text-[#D8A7B1]" />
                    (714) 990-0204
                  </a>
                  <div className="mt-5 px-1">
                    <Link href="/contact">
                      <Button 
                        size="lg" 
                        className="w-full bg-[#B87333] text-white hover:bg-[#B87333]/90 flex items-center justify-center py-4 rounded-full font-bold shadow-sm min-h-[54px]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Book Now
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
            className="w-full bg-[#B87333] text-white hover:bg-[#B87333]/90 font-bold py-3 rounded-full shadow-lg flex items-center justify-center touch-manipulation"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
        </Link>
      </div>
    </>
  );
}