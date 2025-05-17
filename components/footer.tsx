import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail, ArrowRight, ChevronUp, Check, ExternalLink, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-foreground border-t border-primary-mint/20 relative">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-light-mint via-primary-mint to-light-mint"></div>
      
      {/* Main footer content */}
      <div className="bg-charcoal pt-16 pb-12 rounded-[30px] mx-4 sm:mx-6 lg:mx-8 mt-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Newsletter section - inside dark footer */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3 className="text-2xl font-semibold mb-3 text-white">Join Our Newsletter</h3>
                <p className="text-white/80">
                  Stay updated with the latest dental health tips and special offers.
            </p>
          </div>
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
                  className="bg-charcoal/50 border border-light-mint/30 rounded-full px-4 py-2 text-charcoal placeholder:text-charcoal focus:outline-none focus:ring-2 focus:ring-light-mint flex-1"
            />
                <Button className="bg-light-mint text-charcoal hover:bg-primary-mint rounded-full group whitespace-nowrap px-5">
              Subscribe <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 border-t border-light-mint/10 pt-16">
            {/* Primary Contact Information */}
            <div className="lg:col-span-4">
            <Image
              src="/images/logo3.png"
              alt="Gail Ann Krishnan DDS MS"
              width={160}
              height={160}
                className="mb-6 w-auto h-16"
            />
              <p className="text-white/80 mb-6 text-base leading-relaxed max-w-md">
                Providing exceptional dental care in a welcoming, state-of-the-art environment. Dr. Krishnan combines advanced techniques with personalized attention.
            </p>
              <div className="space-y-4 mb-8">
                <a href="https://maps.google.com/?q=255+W+Central+Ave,+Suite+201,+Brea,+CA+92821" target="_blank" rel="noopener noreferrer" className="flex items-start group text-white/80 hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-light-mint group-hover:text-primary-mint transition-colors duration-300 flex-shrink-0" />
                <span>
                  255 W Central Ave, Suite 201<br />
                  Brea, CA 92821
                </span>
                </a>
                <a href="tel:+17149900204" className="flex items-center group text-white/80 hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5 mr-3 text-light-mint group-hover:text-primary-mint transition-colors duration-300 flex-shrink-0" />
                  <span>(714) 990-0204</span>
                </a>
                <a href="mailto:breadentaloffice@gmail.com" className="flex items-center group text-white/80 hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5 mr-3 text-light-mint group-hover:text-primary-mint transition-colors duration-300 flex-shrink-0" />
                  <span>breadentaloffice@gmail.com</span>
                </a>
            </div>
          </div>
          
            {/* Office Hours */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                Office Hours
            </h3>
              <div className="space-y-3">
                <div className="flex items-start group text-white/80">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-light-mint flex-shrink-0" />
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">Mon - Fri</span>
                <span>8am - 6pm</span>
              </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">Sat</span>
                <span>9am - 2pm</span>
              </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-white">Sun</span>
                <span>Closed</span>
              </div>
                  </div>
                </div>
            </div>
          </div>
          
            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-3">
                <Link href="/about" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">About Dr. Krishnan</span>
                </Link>
                <Link href="/services" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Dental</span>
              </Link>
                <Link href="/btl" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Aesthetics</span>
              </Link>
                <Link href="/gallery" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Smile Gallery</span>
              </Link>
                <Link href="/contact" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
              </Link>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-white relative inline-block">
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <Link href="/services/preventive" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Preventive Care</span>
                </Link>
                <Link href="/services/cosmetic" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Cosmetic Dentistry</span>
                </Link>
                <Link href="/services/restorative" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Restorative Dentistry</span>
                </Link>
                <Link href="/btl/exion" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">BTL Exion</span>
                </Link>
                <Link href="/btl/emsculpt" className="text-white/80 hover:text-light-mint transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">BTL Emsculpt</span>
                </Link>
                <Link href="/contact" className="text-light-mint hover:text-primary-mint font-medium transition-all duration-300 group">
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">Book an Appointment</span>
              </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold mb-4 text-white relative inline-block">
                    Insurance Accepted
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-charcoal/80 rounded-md px-2 py-1 text-xs text-white/80 border border-light-mint/20">Delta Dental</div>
                    <div className="bg-charcoal/80 rounded-md px-2 py-1 text-xs text-white/80 border border-light-mint/20">Cigna</div>
                    <div className="bg-charcoal/80 rounded-md px-2 py-1 text-xs text-white/80 border border-light-mint/20">Aetna</div>
                    <div className="bg-charcoal/80 rounded-md px-2 py-1 text-xs text-white/80 border border-light-mint/20">MetLife</div>
                    <div className="bg-charcoal/80 rounded-md px-2 py-1 text-xs text-white/80 border border-light-mint/20">Guardian</div>
                    <div className="bg-charcoal/80 rounded-md px-2 py-1 text-xs text-white/80 border border-light-mint/20">United</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-light-mint" />
                  <span className="text-xs text-white/80">HIPAA Compliant Practice</span>
                </div>
              </div>
            </div>
            
            {/* Memberships & Social */}
            <div className="lg:col-span-12 border-t border-light-mint/10 pt-8 mt-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-base font-semibold mb-4 text-white text-center md:text-left">Connect With Us</h3>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    <a href="#" aria-label="Facebook" className="bg-charcoal/70 hover:bg-light-mint/30 p-2.5 rounded-full text-light-mint border border-light-mint/20 transition-all duration-300 hover:scale-110">
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Instagram" className="bg-charcoal/70 hover:bg-light-mint/30 p-2.5 rounded-full text-light-mint border border-light-mint/20 transition-all duration-300 hover:scale-110">
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Twitter" className="bg-charcoal/70 hover:bg-light-mint/30 p-2.5 rounded-full text-light-mint border border-light-mint/20 transition-all duration-300 hover:scale-110">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-semibold mb-4 text-white text-center md:text-right">Reviews</h3>
                  <div className="flex space-x-4 justify-center md:justify-end">
                    <a href="#" className="flex items-center bg-charcoal/70 px-3 py-2 rounded-md shadow-md border border-light-mint/20 hover:border-light-mint/40 transition-all duration-300">
                      <div className="mr-2">
                        <div className="flex">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <Star key={i} className="h-3 w-3 text-light-mint fill-light-mint" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-white">Google</span>
                    </a>
                    <a href="#" className="flex items-center bg-charcoal/70 px-3 py-2 rounded-md shadow-md border border-light-mint/20 hover:border-light-mint/40 transition-all duration-300">
                      <div className="mr-2">
                        <div className="flex">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <Star key={i} className="h-3 w-3 text-light-mint fill-light-mint" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-white">Yelp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="py-6 text-center text-charcoal/70 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Dr. Gail Ann Krishnan DDS MS. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <a href="#" className="text-charcoal/70 hover:text-accent-mint transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-charcoal/70 hover:text-accent-mint transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-charcoal/70 hover:text-accent-mint transition-colors duration-300">Accessibility</a>
            <a href="#" className="text-charcoal/70 hover:text-accent-mint transition-colors duration-300">Site Map</a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <a 
        href="#top" 
        className="fixed bottom-6 right-6 bg-background p-3 rounded-full shadow-md border border-primary-mint/20 text-primary-mint hover:bg-light-mint transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5" />
      </a>
    </footer>
  );
}