import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ChevronRight, Car, CalendarDays, FileText, CreditCard, Shield, CheckCircle, Film } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-light-mint/30 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">Contact Us</h1>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8 max-w-4xl mx-auto">
              We're here to help with all your dental and aesthetic needs. Reach out to schedule an appointment or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Scheduling Information */}
      <section className="py-28 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Card for Contact and Schedule */}
            <Card className="border-none shadow-lg rounded-[32px] overflow-hidden mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Get in Touch Section - Left Side */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-light-mint/10 to-primary-mint/30">
                  <h2 className="text-3xl font-semibold mb-8 text-charcoal flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary-mint flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-accent-mint" />
                    </span>
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <MapPin className="h-5 w-5 text-accent-mint" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-charcoal mb-1">Location</h3>
                        <p className="text-charcoal/80">255 W Central Ave, Suite 201</p>
                        <p className="text-charcoal/80">Brea, CA 92821</p>
                        <a 
                          href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-accent-mint hover:underline"
                        >
                          Get directions
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Phone className="h-5 w-5 text-accent-mint" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-charcoal mb-1">Phone</h3>
                        <p className="text-charcoal/80">(714) 990-0204</p>
                        <a 
                          href="tel:+17149900204" 
                          className="mt-2 inline-flex items-center text-accent-mint hover:underline"
                        >
                          Call now
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Mail className="h-5 w-5 text-accent-mint" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-charcoal mb-1">Email</h3>
                        <p className="text-charcoal/80">breadentaloffice@gmail.com</p>
                        <a 
                          href="mailto:breadentaloffice@gmail.com" 
                          className="mt-2 inline-flex items-center text-accent-mint hover:underline"
                        >
                          Send email
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Clock className="h-5 w-5 text-accent-mint" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-charcoal mb-1">Hours</h3>
                        <div className="text-charcoal/80">
                          <div className="flex justify-between text-charcoal/80 mb-1">
                            <span className="font-medium mr-8">Monday - Friday:</span>
                            <span>8am - 6pm</span>
                          </div>
                          <div className="flex justify-between text-charcoal/80 mb-1">
                            <span className="font-medium mr-8">Saturday:</span>
                            <span>9am - 2pm</span>
                          </div>
                          <div className="flex justify-between text-charcoal/80">
                            <span className="font-medium mr-8">Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Schedule Your Visit - Right Side */}
                <div className="p-8 md:p-12 bg-white">
                  <h2 className="text-3xl font-semibold mb-8 text-charcoal flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary-mint flex items-center justify-center mr-4">
                      <CalendarDays className="h-5 w-5 text-accent-mint" />
                    </span>
                    Schedule Your Visit
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-charcoal/80">
                      New patients welcome! Please have your insurance card and photo ID ready for your appointment.
                    </p>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent-mint mr-3 flex-shrink-0" />
                        <p className="text-charcoal/80 text-sm">
                          We can review any recent X-rays (taken within 12 months) to avoid duplicate imaging.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-2">
                      <Button 
                        size="lg" 
                        className="w-full bg-accent-mint text-white hover:bg-accent-mint/90 font-bold rounded-[24px] shadow-sm py-6"
                      >
                        Book Appointment
                      </Button>
                      <a href="tel:+17149900204" className="block">
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="w-full rounded-[24px] border-charcoal/20 text-charcoal hover:bg-light-mint py-6"
                        >
                          <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* First Visit & Insurance Information - Integrated card */}
            <Card className="border-none shadow-lg rounded-[32px] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* First Visit Information */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-semibold mb-8 text-charcoal flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary-mint flex items-center justify-center mr-4">
                      <FileText className="h-5 w-5 text-accent-mint" />
                    </span>
                    First Visit Information
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <FileText className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal mb-1">Forms</h3>
                          <p className="text-sm text-charcoal/80">Complete medical history form</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Shield className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal mb-1">ID & Insurance</h3>
                          <p className="text-sm text-charcoal/80">Insurance card and photo ID</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <CheckCircle className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal mb-1">Medications</h3>
                          <p className="text-sm text-charcoal/80">List of current medications</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Film className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal mb-1">X-Rays</h3>
                          <p className="text-sm text-charcoal/80">Recent dental X-rays (if available)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary-mint/10 p-4 rounded-xl">
                    <p className="text-charcoal/80 text-sm flex items-center">
                      <Clock className="inline-block h-4 w-4 mr-2 text-primary-mint" />
                      <span>Please arrive 15 minutes early to complete any necessary paperwork</span>
                    </p>
                  </div>
                </div>
                
                {/* Insurance & Payment */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-light-mint/10 to-primary-mint/10">
                  <h2 className="text-3xl font-semibold mb-8 text-charcoal flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary-mint/40 flex items-center justify-center mr-4">
                      <CreditCard className="h-5 w-5 text-accent-mint" />
                    </span>
                    Insurance & Payment
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-light-mint flex items-center justify-center">
                          <Shield className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal">Delta Dental</h3>
                          <p className="text-sm text-charcoal/70">Premier Provider</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-light-mint flex items-center justify-center">
                          <Shield className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal">PPO Plans</h3>
                          <p className="text-sm text-charcoal/70">Most plans accepted</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm col-span-1 sm:col-span-2">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-light-mint flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-charcoal">Financing Options</h3>
                          <p className="text-sm text-charcoal/70">CareCredit available & flexible payment plans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-charcoal/70 italic text-sm">
                      Please contact our office if you have questions about your specific insurance coverage.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-4 text-charcoal">Find Our Office</h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                Conveniently located in the Oliak Center in Brea with free parking available for all patients.
              </p>
            </div>
            
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7790247825244!2d-117.9010532!3d33.9221456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5cc6d32e7bf%3A0xe5b43a5e17e89fe8!2s255%20W%20Central%20Ave%20%23201%2C%20Brea%2C%20CA%2092821!5e0!3m2!1sen!2sus!4v1652891234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="bg-white shadow-lg p-6 rounded-2xl -mt-24 max-w-xl w-full relative z-10 border-t-4 border-primary-mint">
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full bg-light-mint flex items-center justify-center">
                    <Car className="h-5 w-5 text-accent-mint" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-charcoal mb-1">Parking Information</h3>
                    <p className="text-charcoal/80">Free parking available at the Oliak Center</p>
                    <a 
                      href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-accent-mint hover:underline"
                    >
                      Get directions
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-28 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-4 text-charcoal">Send Us a Message</h2>
              <p className="text-lg text-charcoal/80">
                Have a question or need more information? Fill out the form below and we'll get back to you promptly.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full rounded-lg border border-primary-mint/30 bg-white p-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-mint"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full rounded-lg border border-primary-mint/30 bg-white p-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-mint"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-primary-mint/30 bg-white p-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-mint"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-primary-mint/30 bg-white p-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-mint"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-primary-mint/30 bg-white p-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-mint"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-primary-mint/30 bg-white p-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-mint"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-primary-mint/30 text-accent-mint focus:ring-primary-mint"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-charcoal/80">
                    I agree to the <a href="/privacy-policy" className="text-accent-mint hover:underline">Privacy Policy</a> and consent to having my submitted information collected and stored.
                  </label>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-accent-mint hover:bg-accent-mint/90 text-white rounded-[24px] px-8 py-3 font-medium transition-all duration-300 shadow-sm"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Emergency Information Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="seafoam-gradient rounded-[16px] p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Phone className="h-8 w-8 text-accent-mint" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-charcoal">Dental Emergency?</h2>
                <p className="text-charcoal/80 mb-4">
                  If you're experiencing a dental emergency during business hours, please call us immediately at (714) 990-0204. For after-hours emergencies, please call our emergency line.
                </p>
                <a href="tel:+17149900204">
                  <Button 
                    className="bg-white text-accent-mint hover:bg-white/90 rounded-[24px] px-6 py-2 font-medium transition-all duration-300 shadow-sm border border-white"
                  >
                    Call Emergency Line: (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}