import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#222222] text-gray-200 border-t border-gray-800 relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary to-primary/30"></div>
      
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold mb-3 text-white">Join Our Newsletter</h3>
            <p className="text-gray-300">
              Stay updated with the latest dental advancements and special offers.
            </p>
          </div>
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary flex-1"
            />
            <Button className="bg-secondary text-[#222222] hover:bg-secondary/90 group whitespace-nowrap">
              Subscribe <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Image
              src="/images/logo3.png"
              alt="Gail Ann Krishnan DDS MS"
              width={160}
              height={160}
              className="mb-8 w-auto h-16 opacity-95"
            />
            <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-md">
              Providing exceptional dental care and aesthetic services in a welcoming, state-of-the-art environment. Dr. Krishnan's practice combines advanced techniques with personalized attention.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-gray-800 hover:bg-secondary hover:text-[#222222] p-2.5 rounded-full text-primary transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-secondary hover:text-[#222222] p-2.5 rounded-full text-primary transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-secondary hover:text-[#222222] p-2.5 rounded-full text-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 flex items-start group hover:text-gray-300 transition-colors duration-300">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary group-hover:text-secondary transition-colors duration-300" />
                <span>
                  255 W Central Ave, Suite 201<br />
                  Brea, CA 92821
                </span>
              </p>
              <p className="text-gray-400 flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-primary group-hover:text-secondary transition-colors duration-300" />
                <a href="tel:+17149900204" className="hover:text-primary transition-colors duration-300 group-hover:text-gray-300">
                  (714) 990-0204
                </a>
              </p>
              <p className="text-gray-400 flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-primary group-hover:text-secondary transition-colors duration-300" />
                <a href="mailto:info@drkreashnan.com" className="hover:text-primary transition-colors duration-300 group-hover:text-gray-300">
                  info@drkreashnan.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              Hours
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span className="font-medium text-gray-300">Monday - Friday</span>
                <span>8am - 6pm</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span className="font-medium text-gray-300">Saturday</span>
                <span>9am - 2pm</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span className="font-medium text-gray-300">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
              Links
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/dental" className="text-gray-400 hover:text-primary transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Dental Services</span>
              </Link>
              <Link href="/facial-aesthetics" className="text-gray-400 hover:text-primary transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Facial Aesthetics</span>
              </Link>
              <Link href="/reviews" className="text-gray-400 hover:text-primary transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Patient Reviews</span>
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-primary transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-gray-800 py-8 text-center text-gray-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Dr. Gail Ann Krishnan DDS MS. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors duration-300">Accessibility</a>
          </div>
        </div>
        
        {/* Decorative accent at the bottom */}
        <div className="h-1 w-full max-w-xs mx-auto mt-8 bg-gradient-to-r from-transparent via-secondary/60 to-transparent"></div>
      </div>
    </footer>
  );
}