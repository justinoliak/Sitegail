import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail, ArrowRight, ChevronUp, Check, ExternalLink, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-charcoal border-t border-rose-light relative">
      {/* Subtle gradient border on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-rose to-blush"></div>
      
      {/* Footer Content with Rounded Edges */}
      <div className="bg-charcoal pt-16 pb-12 rounded-[30px] mx-4 sm:mx-6 lg:mx-8 mt-12 text-white">
        <div className="container mx-auto">
          
          {/* Newsletter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto mb-16">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-3 text-white">Join Our Newsletter</h3>
              <p className="text-white/80">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-charcoal-50 border border-blush-light rounded-full px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blush flex-1"
              />
              <Button className="bg-blush text-charcoal hover:bg-rose rounded-full group whitespace-nowrap px-5">
                Subscribe <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
          
          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 border-t border-blush-light pt-16">
            {/* About Practice */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Link href="/">
                  <h2 className="text-xl font-semibold mb-0 text-white">Dr. Gail Ann Krishnan</h2>
                  <p className="text-white/80 text-sm">DDS, MS</p>
                </Link>
              </div>
              <p className="text-white/80 mb-6 text-base leading-relaxed max-w-md">
                Providing exceptional dental care in Brea. Dr. Krishnan combines advanced clinical techniques with a compassionate, patient-focused approach for your best smile.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start group text-white/80 hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blush group-hover:text-rose transition-colors duration-300 flex-shrink-0" />
                  <div>
                    <p className="leading-snug">255 W Central Ave, Suite 201</p>
                    <p className="leading-snug">Brea, CA 92821</p>
                  </div>
                </div>
                
                <a href="tel:+17149900204" className="flex items-center group text-white/80 hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5 mr-3 text-blush group-hover:text-rose transition-colors duration-300 flex-shrink-0" />
                  (714) 990-0204
                </a>
                <a href="mailto:breadentaloffice@gmail.com" className="flex items-center group text-white/80 hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5 mr-3 text-blush group-hover:text-rose transition-colors duration-300 flex-shrink-0" />
                  breadentaloffice@gmail.com
                </a>
              </div>
            </div>
            
            {/* Hours */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                Office Hours
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blush"></span>
              </h3>
              <div className="flex items-start group text-white/80">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-blush flex-shrink-0" />
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="font-medium text-white">Mon - Fri</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-white">Sat</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-white">Sun</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blush"></span>
              </h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-white/80 hover:text-blush transition-all duration-300 group">About <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-blush transition-all duration-300 group">Services <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/btl" className="text-white/80 hover:text-blush transition-all duration-300 group">BTL Aesthetics <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/gallery" className="text-white/80 hover:text-blush transition-all duration-300 group">Gallery <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-blush transition-all duration-300 group">Contact <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blush"></span>
              </h3>
              <ul className="space-y-3">
                <li><Link href="/services/preventive" className="text-white/80 hover:text-blush transition-all duration-300 group">Preventive Care <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/services/cosmetic" className="text-white/80 hover:text-blush transition-all duration-300 group">Cosmetic Dentistry <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/services/restorative" className="text-white/80 hover:text-blush transition-all duration-300 group">Restorative Dentistry <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/btl/exion" className="text-white/80 hover:text-blush transition-all duration-300 group">BTL Exion <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/btl/emsculpt" className="text-white/80 hover:text-blush transition-all duration-300 group">BTL Emsculpt <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
                <li><Link href="/contact" className="text-blush hover:text-rose font-medium transition-all duration-300 group">Schedule Appointment <ArrowRight className="inline-block h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" /></Link></li>
              </ul>
            </div>
            
            {/* Insurance */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-white relative inline-block">
                Insurance Accepted
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blush"></span>
              </h3>
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="bg-charcoal-80 rounded-md px-2 py-1 text-xs text-white/80 border border-blush-light">Delta Dental</div>
                <div className="bg-charcoal-80 rounded-md px-2 py-1 text-xs text-white/80 border border-blush-light">Cigna</div>
                <div className="bg-charcoal-80 rounded-md px-2 py-1 text-xs text-white/80 border border-blush-light">Aetna</div>
                <div className="bg-charcoal-80 rounded-md px-2 py-1 text-xs text-white/80 border border-blush-light">MetLife</div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {currentYear} Dr. Gail Ann Krishnan DDS, MS. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <a 
        href="#top" 
        className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-md border border-rose-light text-charcoal hover:bg-blush transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5" />
      </a>
    </footer>
  );
}