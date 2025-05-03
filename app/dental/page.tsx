import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Star, Phone, CheckCircle, Smile, BadgeCheck, Sparkles, Stethoscope, PenTool } from "lucide-react";

export default function DentalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simplified Hero Section */}
      <section className="pt-40 pb-28 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left column - Text content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.1] tracking-tight text-foreground">
                Complete <span className="text-primary">Dental Care</span> For Your Family
              </h1>
              
              <p className="text-xl text-foreground/80 mb-10 leading-relaxed font-light max-w-lg">
                From routine cleanings to advanced procedures, our comprehensive dental services are designed for patients of all ages.
              </p>
              
              <div className="flex flex-wrap gap-5 mb-12">
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Preventive Care</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Restorative Treatments</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Cosmetic Dentistry</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="transition-transform hover:-translate-y-1">
                  <Button size="lg" className="book-btn book-btn-lg font-bold shadow-md w-full sm:w-auto px-8 py-6 text-base">
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
                  <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto px-6 py-6 text-base">
                    <Phone className="mr-3 h-5 w-5" /> (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Right column - Hero Image */}
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/office/office2.png"
                  alt="Modern dental treatment room"
                  fill
                  className="object-cover object-center hover:scale-105 transition-all duration-[3s]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
              </div>
              
              {/* Trust indicators */}
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
      </section>

      {/* Preventive Dentistry Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Preventive Care</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Preventive Dentistry</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Maintain your oral health with our comprehensive preventive care services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Professional Cleanings</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Regular cleanings to remove plaque and tartar, preventing tooth decay and gum disease.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Thorough plaque removal</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Gum health assessment</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Polishing and fluoride</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Digital X-Rays</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Low-radiation digital imaging for early detection of dental issues.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Instant imaging results</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Reduced radiation exposure</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Enhanced diagnostic accuracy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Oral Cancer Screenings</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Regular screenings using advanced technology for early detection.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Visual examination</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Advanced screening tools</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Regular monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restorative Dentistry Section */}
      <section className="py-28 bg-muted">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Restorative Care</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Restorative Dentistry</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Restore your smile's function and beauty with our advanced restorative treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Composite Fillings</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Tooth-colored fillings that blend seamlessly with your natural teeth.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Natural appearance</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Durable material</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Mercury-free</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Crowns & Bridges</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Custom-made restorations to repair and replace damaged or missing teeth.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Custom-designed fit</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Natural appearance</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Long-lasting results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Root Canal Therapy</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Advanced treatment to save severely damaged or infected teeth.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Pain relief</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Tooth preservation</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Modern techniques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Cosmetic Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Cosmetic Dentistry</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Transform your smile with our range of cosmetic dental treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Professional Whitening</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">In-office and take-home options for a brighter, whiter smile.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Quick results</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Safe and effective</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Long-lasting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Porcelain Veneers</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Custom-designed shells to improve the appearance of front teeth.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Natural look</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Stain-resistant</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Custom-designed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Cosmetic Bonding</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Quick, affordable solution for minor cosmetic imperfections.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Single visit</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Conservative treatment</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Affordable option</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
      <section className="py-28 bg-muted">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Advanced Treatment</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Specialty Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Advanced treatments for complex dental needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Dental Implants</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Permanent solution for missing teeth that look and function naturally.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Permanent solution</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Natural function</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Bone preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">Invisalign®</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Clear aligners for straightening teeth discreetly and comfortably.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Nearly invisible</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Removable</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Custom-fitted</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground">TMJ Treatment</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">Relief from jaw pain and related symptoms through specialized care.</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Pain relief</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Custom treatment</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Long-term solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Contact us today to schedule your appointment with Dr. Krishnan. New patients welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="transition-transform hover:-translate-y-1">
                <Button size="lg" className="book-btn book-btn-lg font-bold shadow-md px-8 py-6 text-base">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold">
                  <Phone className="mr-3 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}