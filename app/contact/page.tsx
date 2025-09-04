import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ChevronRight, Car, CalendarDays, FileText, CreditCard, Shield, CheckCircle, Film } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-charcoal mb-6">Contact Us</h1>
            <p className="hero-subtitle mx-auto">
              Contact our dental office to schedule an appointment or request information about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Scheduling Information */}
      <section className="section-padding bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Card for Contact and Schedule */}
            <Card className="card shadow-soft rounded-2xl overflow-hidden mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Get in Touch Section - Left Side */}
                <div className="card-padding bg-gradient-to-br from-light-mint/10 to-primary-mint/30">
                  <h2 className="text-charcoal mb-8 flex items-center">
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
                        <h4 className="text-charcoal mb-1">Location</h4>
                        <p className="text-body">255 W Central Ave, Suite 201</p>
                        <p className="text-body">Brea, CA 92821</p>
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
                        <h4 className="text-charcoal mb-1">Phone</h4>
                        <p className="text-body">(714) 990-0204</p>
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
                        <h4 className="text-charcoal mb-1">Email</h4>
                        <p className="text-body">info@drgailanndds.com</p>
                        <a 
                          href="mailto:info@drgailanndds.com" 
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
                        <h4 className="text-charcoal mb-1">Hours</h4>
                        <div className="text-body">
                          <div className="flex justify-between text-body mb-1">
                            <span className="font-medium mr-8">Monday - Friday:</span>
                            <span>8am - 6pm</span>
                          </div>
                          <div className="flex justify-between text-body mb-1">
                            <span className="font-medium mr-8">Saturday:</span>
                            <span>9am - 2pm</span>
                          </div>
                          <div className="flex justify-between text-body">
                            <span className="font-medium mr-8">Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Schedule Your Visit - Right Side */}
                <div className="card-padding bg-white">
                  <h2 className="text-charcoal mb-8 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary-mint flex items-center justify-center mr-4">
                      <CalendarDays className="h-5 w-5 text-accent-mint" />
                    </span>
                    Schedule Your Visit
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-body">
                      New patients welcome! Please have your insurance card and photo ID ready for your appointment.
                    </p>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent-mint mr-3 flex-shrink-0" />
                        <p className="text-small">
                          We can review any recent X-rays (taken within 12 months) to avoid duplicate imaging.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-2">
                      <a href="https://calendly.com/drgailannkrishnan/30min" target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="btn btn-primary btn-lg w-full">
                          <CalendarDays className="mr-2 h-5 w-5" />
                          Book Appointment
                        </Button>
                      </a>
                      <a href="tel:+17149900204" className="block">
                        <Button className="btn btn-outline btn-lg w-full">
                          <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* First Visit & Insurance Information - Integrated card */}
            <Card className="card shadow-soft rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* First Visit Information */}
                <div className="card-padding">
                  <h2 className="text-charcoal mb-8 flex items-center">
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
                          <h5 className="text-charcoal mb-1">Forms</h5>
                          <p className="text-small">Complete medical history form</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Shield className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h5 className="text-charcoal mb-1">ID & Insurance</h5>
                          <p className="text-small">Insurance card and photo ID</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <CheckCircle className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h5 className="text-charcoal mb-1">Medications</h5>
                          <p className="text-small">List of current medications</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-light-mint p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Film className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h5 className="text-charcoal mb-1">Digital X-Rays</h5>
                          <p className="text-small">Safe imaging with no radiation using Siroma sensors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary-mint/10 p-4 rounded-xl mb-4">
                    <p className="text-small flex items-center">
                      <Clock className="inline-block h-4 w-4 mr-2 text-primary-mint" />
                      <span>Please arrive 15 minutes early to complete any necessary paperwork</span>
                    </p>
                  </div>
                  
                  <div className="bg-primary-mint/10 p-4 rounded-xl">
                    <p className="text-small flex items-start">
                      <CheckCircle className="inline-block h-4 w-4 mr-2 text-primary-mint flex-shrink-0 mt-1" />
                      <span>Comfortable sedation available with our state-of-the-art Accutron™ Digital Newport™ Flowmeter System for nitrous oxide</span>
                    </p>
                  </div>
                </div>
                
                {/* Insurance & Payment */}
                <div className="card-padding bg-gradient-to-br from-light-mint/10 to-primary-mint/10">
                  <h2 className="text-charcoal mb-8 flex items-center">
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
                          <h5 className="text-charcoal">Delta Dental</h5>
                          <p className="text-small">In-Network Provider</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-light-mint flex items-center justify-center">
                          <Shield className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h5 className="text-charcoal">PPO Plans</h5>
                          <p className="text-small">We accept all PPO insurance plans</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm col-span-1 sm:col-span-2">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-light-mint flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-accent-mint" />
                        </div>
                        <div>
                          <h5 className="text-charcoal">Financing Options</h5>
                          <p className="text-small">CareCredit available & flexible payment plans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-small italic">
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
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-charcoal mb-6">Find Our Office</h2>
              <p className="text-large max-w-3xl mx-auto">
                Conveniently located in the Oliak Center in Brea with free parking available for all patients.
              </p>
            </div>
            
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7790247825244!2d-117.9010532!3d33.9221456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5cc6d32e7bf%3A0xe5b43a5e17e89fe8!2s255%20W%20Central%20Ave%20%23201%2C%20Brea%2C%20CA%2092821!5e0!3m2!1sen!2sus!4v1652891234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="bg-white shadow-soft p-6 rounded-xl -mt-24 max-w-xl w-full relative z-10 border-t-4 border-primary-mint">
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full bg-light-mint flex items-center justify-center">
                    <Car className="h-5 w-5 text-accent-mint" />
                  </div>
                  <div>
                    <h4 className="text-charcoal mb-1">Parking Information</h4>
                    <p className="text-body">Free parking available at the Oliak Center</p>
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
      
      {/* Email Us Section */}
      <section className="section-padding bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-charcoal mb-6">Send Us a Message</h2>
            <p className="text-large mb-8">
              Have a question or need more information? Click below to send us an email using your default email client.
            </p>
            
            <a href="mailto:info@drgailanndds.com?subject=Website%20Inquiry">
              <Button className="btn btn-primary btn-lg">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}