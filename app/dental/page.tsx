import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Star, Phone, CheckCircle, Smile, BadgeCheck } from "lucide-react";

export default function DentalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section with Split Layout */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column - Text content */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-px w-12 bg-secondary"></div>
                  <span className="text-secondary font-medium uppercase tracking-wider text-sm">Modern Dentistry</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] tracking-tight text-foreground">
                  Comprehensive <span className="text-primary">Dental Care</span> Tailored for You
                </h1>
                
                <p className="text-xl text-foreground/80 mb-6 leading-relaxed font-light max-w-lg">
                  Experience exceptional dental care with our comprehensive range of services, delivered with expertise and compassion.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white p-3 rounded-xl shadow-sm flex items-center space-x-2 border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Gentle Approach</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm flex items-center space-x-2 border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Advanced Technology</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm flex items-center space-x-2 border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Preventive Focus</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="transition-transform hover:-translate-y-1">
                    <Button size="lg" className="book-btn book-btn-lg font-bold shadow-md w-full sm:w-auto">
                      Schedule Your Visit
                    </Button>
                  </Link>
                  <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
                    <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" /> (714) 990-0204
                    </Button>
                  </a>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-8 flex items-center">
                  <div className="mr-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/70 mt-0.5">
                      <span className="font-medium">100+</span> 5-star reviews
                    </p>
                  </div>
                  <div className="flex items-center rounded-full bg-primary/10 px-4 py-1">
                    <BadgeCheck className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground/80">Board Licensed</span>
                  </div>
                </div>
              </div>
              
              {/* Right column - Hero Image with Floating Elements */}
              <div className="relative">
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/office1.png"
                    alt="Modern dental practice"
                    fill
                    className="object-cover object-center hover:scale-105 transition-all duration-[3s]"
                    priority
                  />
                  
                  {/* Floating service cards */}
                  <div className="absolute -right-6 top-12 md:right-6 md:top-12 bg-white rounded-2xl p-4 shadow-lg w-48 animate-float">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Smile className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-sm">Cosmetic Dentistry</p>
                        <p className="text-xs text-foreground/60">Transform your smile</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-6 bottom-16 md:left-6 md:bottom-16 bg-white rounded-2xl p-4 shadow-lg w-48 animate-float animation-delay-500">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-sm">Preventive Care</p>
                        <p className="text-xs text-foreground/60">Protect your health</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -right-8 bottom-32 w-16 h-16 rounded-full bg-secondary/20 animate-pulse"></div>
                  <div className="absolute -left-8 top-32 w-12 h-12 rounded-full bg-primary/20 animate-pulse"></div>
                </div>
                
                {/* Patient First Badge */}
                <div className="absolute -right-4 -bottom-4 bg-white rounded-full p-4 shadow-lg animate-pulse">
                  <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Smile className="h-6 w-6 text-primary mx-auto" />
                      <p className="text-[10px] text-primary/80 mt-1">PATIENT FIRST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Dentistry Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 text-foreground">Preventive Dentistry</h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Maintain your oral health with our comprehensive preventive care services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Professional Cleanings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Regular cleanings to remove plaque and tartar, preventing tooth decay and gum disease.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Thorough plaque removal
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Gum health assessment
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Polishing and fluoride
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Digital X-Rays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Low-radiation digital imaging for early detection of dental issues.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Instant imaging results
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Reduced radiation exposure
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Enhanced diagnostic accuracy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Oral Cancer Screenings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Regular screenings using advanced technology for early detection.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Visual examination
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Advanced screening tools
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Regular monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restorative Dentistry Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 text-foreground">Restorative Dentistry</h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Restore your smile's function and beauty with our advanced restorative treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Composite Fillings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Tooth-colored fillings that blend seamlessly with your natural teeth.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Natural appearance
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Durable material
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Mercury-free
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Crowns & Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Custom-made restorations to repair and replace damaged or missing teeth.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Custom-designed fit
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Natural appearance
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Long-lasting results
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Root Canal Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Advanced treatment to save severely damaged or infected teeth.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Pain relief
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Tooth preservation
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Modern techniques
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Cosmetic Dentistry</h2>
            <p className="text-xl text-muted-foreground">
              Transform your smile with our range of cosmetic dental treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Professional Whitening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">In-office and take-home options for a brighter, whiter smile.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Quick results
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Safe and effective
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Long-lasting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Porcelain Veneers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom-designed shells to improve the appearance of front teeth.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Natural look
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Stain-resistant
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Custom-designed
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Cosmetic Bonding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Quick, affordable solution for minor cosmetic imperfections.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Single visit
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Conservative treatment
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Affordable option
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Specialty Services</h2>
            <p className="text-xl text-muted-foreground">
              Advanced treatments for complex dental needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Dental Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Permanent solution for missing teeth that look and function naturally.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Permanent solution
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Natural function
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Bone preservation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Invisalign®</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Clear aligners for straightening teeth discreetly and comfortably.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Nearly invisible
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Removable
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Custom-fitted
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">TMJ Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Relief from jaw pain and related symptoms through specialized care.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Pain relief
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Custom treatment
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Long-term solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-4xl mx-auto">
              Contact us today to schedule your appointment with Dr. Krishnan. New patients welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <Button size="lg" className="book-btn book-btn-lg font-bold">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold">
                  <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}