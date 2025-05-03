import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ChevronRight, Car, CalendarDays, FileText, CreditCard, Shield, CheckCircle, Film } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">Contact Us</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-4xl mx-auto">
              We're here to help with all your dental and aesthetic needs. Reach out to schedule an appointment or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Scheduling Information - Redesigned for better cohesion */}
      <section className="py-28 bg-muted">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Card for Contact and Schedule */}
            <Card className="border-none shadow-lg rounded-[32px] overflow-hidden mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Get in Touch Section - Left Side */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/15">
                  <h2 className="text-3xl font-semibold mb-8 text-foreground flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </span>
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-1">Location</h3>
                        <p className="text-foreground/80">255 W Central Ave, Suite 201</p>
                        <p className="text-foreground/80">Brea, CA 92821</p>
                        <a 
                          href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-primary hover:underline"
                        >
                          Get directions
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-1">Phone</h3>
                        <p className="text-foreground/80">(714) 990-0204</p>
                        <a 
                          href="tel:+17149900204" 
                          className="mt-2 inline-flex items-center text-primary hover:underline"
                        >
                          Call now
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-1">Email</h3>
                        <p className="text-foreground/80">info@breaaesthetics.com</p>
                        <a 
                          href="mailto:info@breaaesthetics.com" 
                          className="mt-2 inline-flex items-center text-primary hover:underline"
                        >
                          Send email
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-1">Hours</h3>
                        <div className="text-foreground/80">
                          <div className="flex justify-between text-foreground/80 mb-1">
                            <span className="font-medium mr-8">Monday - Friday:</span>
                            <span>8am - 6pm</span>
                          </div>
                          <div className="flex justify-between text-foreground/80 mb-1">
                            <span className="font-medium mr-8">Saturday:</span>
                            <span>9am - 2pm</span>
                          </div>
                          <div className="flex justify-between text-foreground/80">
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
                  <h2 className="text-3xl font-semibold mb-8 text-foreground flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <CalendarDays className="h-5 w-5 text-primary" />
                    </span>
                    Schedule Your Visit
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      New patients welcome! Please have your insurance card and photo ID ready for your appointment.
                    </p>
                    
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <p className="text-foreground/80 text-sm">
                          We can review any recent X-rays (taken within 12 months) to avoid duplicate imaging.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-2">
                      <Button size="lg" className="w-full book-btn book-btn-lg font-bold">
                        Book Appointment
                      </Button>
                      <a href="tel:+17149900204" className="block">
                        <Button size="lg" variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
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
                  <h2 className="text-3xl font-semibold mb-8 text-foreground flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <FileText className="h-5 w-5 text-primary" />
                    </span>
                    First Visit Information
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-1">Forms</h3>
                          <p className="text-sm text-foreground/80">Complete medical history form</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-1">ID & Insurance</h3>
                          <p className="text-sm text-foreground/80">Insurance card and photo ID</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-1">Medications</h3>
                          <p className="text-sm text-foreground/80">List of current medications</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Film className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-1">X-Rays</h3>
                          <p className="text-sm text-foreground/80">Recent dental X-rays (if available)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-xl">
                    <p className="text-foreground/80 text-sm flex items-center">
                      <Clock className="inline-block h-4 w-4 mr-2 text-secondary" />
                      <span>Please arrive 15 minutes early to complete any necessary paperwork</span>
                    </p>
                  </div>
                </div>
                
                {/* Insurance & Payment */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <h2 className="text-3xl font-semibold mb-8 text-foreground flex items-center">
                    <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                      <CreditCard className="h-5 w-5 text-secondary" />
                    </span>
                    Insurance & Payment
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Shield className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground">Delta Dental</h3>
                          <p className="text-sm text-foreground/70">Premier Provider</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Shield className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground">PPO Plans</h3>
                          <p className="text-sm text-foreground/70">Most plans accepted</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm col-span-1 sm:col-span-2">
                      <div className="flex items-center">
                        <div className="mr-3 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground">Financing Options</h3>
                          <p className="text-sm text-foreground/70">CareCredit available & flexible payment plans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-foreground/70 italic text-sm">
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
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
              <div className="bg-white shadow-lg p-6 rounded-2xl -mt-24 max-w-xl w-full relative z-10 border-t-4 border-primary">
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">Parking Information</h3>
                    <p className="text-foreground/80">Free parking available at the Oliak Center</p>
                    <a 
                      href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-primary hover:underline"
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
    </div>
  );
}