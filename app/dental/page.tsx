import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Star } from "lucide-react";

export default function DentalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/office1.png"
          alt="Modern dental reception area"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center">
            <div className="max-w-2xl text-white px-4">
              <h1 className="text-5xl font-bold mb-6">Comprehensive Dental Care</h1>
              <p className="text-xl leading-relaxed">
                Experience exceptional dental care with our comprehensive range of services, delivered with expertise and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Dentistry Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Preventive Dentistry</h2>
            <p className="text-xl text-muted-foreground">
              Maintain your oral health with our comprehensive preventive care services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Professional Cleanings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Regular cleanings to remove plaque and tartar, preventing tooth decay and gum disease.</p>
                <ul className="space-y-2 text-muted-foreground">
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
                <p className="text-muted-foreground mb-4">Low-radiation digital imaging for early detection of dental issues.</p>
                <ul className="space-y-2 text-muted-foreground">
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
                <p className="text-muted-foreground mb-4">Regular screenings using advanced technology for early detection.</p>
                <ul className="space-y-2 text-muted-foreground">
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Restorative Dentistry</h2>
            <p className="text-xl text-muted-foreground">
              Restore your smile's function and beauty with our advanced restorative treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Composite Fillings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Tooth-colored fillings that blend seamlessly with your natural teeth.</p>
                <ul className="space-y-2 text-muted-foreground">
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
                <p className="text-muted-foreground mb-4">Custom-made restorations to repair and replace damaged or missing teeth.</p>
                <ul className="space-y-2 text-muted-foreground">
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
                <p className="text-muted-foreground mb-4">Advanced treatment to save severely damaged or infected teeth.</p>
                <ul className="space-y-2 text-muted-foreground">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment with Dr. Krishnan. New patients welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Book Appointment
            </Button>
            <a href="tel:+17149900204">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Call (714) 990-0204
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}