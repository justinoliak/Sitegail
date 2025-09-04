import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail, ArrowRight, ChevronUp, Check, ExternalLink, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 text-foreground relative">
      {/* Main footer content */}
      <div className="bg-slate-900 pt-20 pb-16 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-mint to-transparent"></div>
        
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Newsletter section */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-mint to-primary-mint mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-white">Stay Connected</h3>
              <p className="text-slate-300 text-lg mb-8">
                Get dental health tips, appointment reminders, and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="glass-effect border-0 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-mint flex-1"
                />
                <Button className="btn btn-primary btn-lg whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-700 pt-16">
            {/* Practice Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/logobw.png"
                  alt="Dr. Gail Krishnan"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
                <div>
                  <div className="text-lg font-semibold text-white">Dr. Gail Krishnan</div>
                  <div className="text-sm text-slate-400">DDS, MS</div>
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Providing exceptional dental care with advanced techniques and personalized attention in Brea, California.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a href="https://maps.google.com/?q=255+W+Central+Ave,+Suite+201,+Brea,+CA+92821" target="_blank" rel="noopener noreferrer" className="flex items-start group text-slate-300 hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent-mint flex-shrink-0" />
                  <span>
                    255 W Central Ave, Suite 201<br />
                    Brea, CA 92821
                  </span>
                </a>
                <a href="tel:+17149900204" className="flex items-center group text-slate-300 hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5 mr-3 text-accent-mint flex-shrink-0" />
                  <span>(714) 990-0204</span>
                </a>
                <a href="mailto:breadentaloffice@gmail.com" className="flex items-center group text-slate-300 hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5 mr-3 text-accent-mint flex-shrink-0" />
                  <span>breadentaloffice@gmail.com</span>
                </a>
              </div>
            </div>
          
            {/* Office Hours & Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Office Hours</h4>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">8am - 6pm</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Saturday</span>
                  <span className="text-white font-medium">9am - 2pm</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Sunday</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-white">Emergency Care</h4>
              <p className="text-slate-300 text-sm">
                After-hours emergency dental care available. Call our office for instructions.
              </p>
            </div>
          
            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <div className="space-y-3">
                <Link href="/services" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Preventive Care
                </Link>
                <Link href="/services" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Cosmetic Dentistry
                </Link>
                <Link href="/services" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Restorative Dentistry
                </Link>
                <Link href="/btl" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  BTL Aesthetics
                </Link>
                <Link href="/gallery" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Results Gallery
                </Link>
              </div>
            </div>

            {/* Quick Links & Trust */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3 mb-8">
                <Link href="/about" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  About Dr. Krishnan
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Schedule Consultation
                </Link>
                <Link href="/gallery" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Patient Results
                </Link>
                <Link href="#" className="block text-slate-300 hover:text-accent-mint transition-colors duration-300">
                  Patient Portal
                </Link>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-white">Insurance</h4>
              <p className="text-slate-300 text-sm mb-3">
                We accept most major dental insurance plans
              </p>
              <div className="flex items-center text-sm text-accent-mint">
                <Shield className="h-4 w-4 mr-2" />
                HIPAA Compliant
              </div>
            </div>
          
          {/* Bottom section - Social & Reviews */}
          <div className="border-t border-slate-700 pt-12 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-accent-mint flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-accent-mint flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300">
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Google Reviews" className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-accent-mint flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300">
                    <Star className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold mb-4 text-white">Patient Reviews</h4>
                <div className="flex items-center justify-center md:justify-end space-x-6">
                  <div className="text-center">
                    <div className="flex mb-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-4 w-4 text-accent-mint fill-accent-mint" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">5.0 on Google</span>
                  </div>
                  <div className="text-center">
                    <div className="flex mb-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-4 w-4 text-accent-mint fill-accent-mint" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">5.0 on Yelp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="py-8 text-center bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600">&copy; {currentYear} Dr. Gail Ann Krishnan. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-accent-mint transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-accent-mint transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-accent-mint transition-colors duration-300">Accessibility</a>
              <a href="#" className="text-slate-500 hover:text-accent-mint transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}