import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-width Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        <Image
          src="/images/office2.png"
          alt="Modern dental clinic reception area"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center">
            <div className="max-w-2xl text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Dental Care in Brea
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Welcome to Dr. Gail Ann Krishnan's premier dental practice, where advanced clinical techniques meet personalized, preventive care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-primary hover:text-white">
                  Schedule Your Visit
                </Button>
                <a href="tel:+17149900204" className="inline-flex items-center justify-center">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/20">
                    <Phone className="mr-2 h-5 w-5" /> (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-foreground">
                  <MapPin className="h-5 w-5 mr-2" /> Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">255 W Central Ave, Suite 201</p>
                <p className="text-muted-foreground">Brea, CA 92821</p>
                <p className="text-sm text-muted-foreground mt-2">Free parking available at the Oliak Center</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-foreground">
                  <Clock className="h-5 w-5 mr-2" /> Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-foreground">
                  <Calendar className="h-5 w-5 mr-2" /> Insurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We accept most PPO plans including Delta Dental</p>
                <p className="text-muted-foreground">CareCredit financing available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-background overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4 flex items-center">
            <div className="h-px bg-border flex-1"></div>
            <div className="mx-4 text-4xl text-primary">✦</div>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
              <Image 
                src="/images/Facetune_30-04-2025-15-12-07.JPG"
                alt="Dr. Gail Ann Krishnan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Meet Dr. Krishnan</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                As a board-licensed general dentist and Assistant Clinical Professor at the University of Michigan School of Dentistry, Dr. Krishnan combines advanced clinical techniques with a preventive, minimally-invasive approach. Her focus on patient education and comfort has earned her consistent 5-star reviews from satisfied patients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">DDS, MS</h3>
                  <p className="text-muted-foreground">Advanced Degrees</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">5/5</h3>
                  <p className="text-muted-foreground">Patient Rating</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Board Licensed</h3>
                  <p className="text-muted-foreground">General Dentist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4 flex items-center">
            <div className="h-px bg-border flex-1"></div>
            <div className="mx-4 text-4xl text-primary">✦</div>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Professional cleanings</li>
                  <li>Digital X-rays</li>
                  <li>Comprehensive exams</li>
                  <li>Periodontal maintenance</li>
                </ul>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Restorative Care</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Composite fillings</li>
                  <li>Crowns and bridges</li>
                  <li>Inlays and onlays</li>
                  <li>Simple extractions</li>
                </ul>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Cosmetic Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Professional whitening</li>
                  <li>Cosmetic bonding</li>
                  <li>Custom nightguards</li>
                  <li>Athletic mouthguards</li>
                </ul>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4 flex items-center">
            <div className="h-px bg-border flex-1"></div>
            <div className="mx-4 text-4xl text-primary">✦</div>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            New patients welcome! Please have your insurance card and photo ID ready. We can review any recent X-rays (taken within 12 months) to avoid duplicate imaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Appointment
            </Button>
            <a href="tel:+17149900204">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}