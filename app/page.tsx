import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Users,
  Smile,
  ChevronDown,
  ChevronRight
} from "lucide-react";

const testimonials = [
  {
    name: "Jennifer L.",
    location: "Brea, CA",
    text: "Dr. Krishnan is incredible! She takes the time to explain everything and makes me feel comfortable. The office is beautiful and the staff is so friendly."
  },
  {
    name: "Michael T.",
    location: "Fullerton, CA",
    text: "I've been to many dentists over the years, but Dr. Krishnan is by far the best. Her attention to detail and gentle approach have made me actually look forward to my dental visits."
  },
  {
    name: "Sarah K.",
    location: "Brea, CA",
    text: "I came in for Botox and was amazed at Dr. Krishnan's expertise. The results are natural and exactly what I wanted. I'll definitely be back for more treatments!"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Tend-inspired styling */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] tracking-tight text-foreground max-w-xl">
                Experience the Art of <span className="text-primary">Modern Dentistry</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-light max-w-lg">
                Welcome to Dr. Gail Ann Krishnan's premier dental practice, where advanced clinical techniques meet personalized, preventive care.
              </p>
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
            </div>
            
            {/* Right column - Image */}
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/images/office2.png"
                alt="Modern dental clinic reception area"
                fill
                className="object-cover object-center hover:scale-105 transition-all duration-[3s] rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section with Tend-inspired styling */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="flex items-center text-xl text-foreground">
                  <div className="mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">255 W Central Ave, Suite 201</p>
                <p className="text-foreground/80">Brea, CA 92821</p>
                <p className="text-sm text-foreground/70 mt-4">Free parking available at the Oliak Center</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary mt-4 text-sm hover:underline">
                  Get Directions
                  <ChevronRight className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="flex items-center text-xl text-foreground">
                  <div className="mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-foreground/80 mb-1 pb-1 border-b border-foreground/10">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8am - 6pm</span>
                </div>
                <div className="flex justify-between text-foreground/80 mb-1 pb-1 border-b border-foreground/10">
                  <span className="font-medium">Saturday:</span>
                  <span>9am - 2pm</span>
                </div>
                <div className="flex justify-between text-foreground/80">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="flex items-center text-xl text-foreground">
                  <div className="mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  Insurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-3">We accept most PPO plans including Delta Dental</p>
                <p className="text-foreground/80 flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  CareCredit financing available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section - Using original terminology with Tend-inspired styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-4 uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Comprehensive Services</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Dental care tailored to your unique needs with the latest technology and techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <Link href="/contact" className="block">
                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 h-full rounded-[24px]">
                  <CardHeader className="pb-2 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Preventive Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-foreground/70 space-y-3 mb-6">
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Professional cleanings</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Digital X-rays</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Comprehensive exams</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Periodontal maintenance</span>
                      </li>
                    </ul>
                    <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/contact" className="block">
                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 h-full rounded-[24px]">
                  <CardHeader className="pb-2 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Restorative Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-foreground/70 space-y-3 mb-6">
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Composite fillings</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Crowns and bridges</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Inlays and onlays</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Simple extractions</span>
                      </li>
                    </ul>
                    <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/contact" className="block">
                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 h-full rounded-[24px]">
                  <CardHeader className="pb-2 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Smile className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Cosmetic Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-foreground/70 space-y-3 mb-6">
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Professional whitening</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Cosmetic bonding</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Custom nightguards</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3 h-5 w-5 text-primary flex-shrink-0">•</div>
                        <span>Athletic mouthguards</span>
                      </li>
                    </ul>
                    <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-2">
              <Link href="/contact" className="no-underline">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with Tend-inspired styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image 
                src="/images/Facetune_30-04-2025-15-12-07.JPG"
                alt="Dr. Gail Ann Krishnan"
                fill
                className="object-cover hover:scale-105 transition-all duration-3000 rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-8">
                <h3 className="text-white text-2xl font-semibold mb-1">Dr. Gail Ann Krishnan</h3>
                <p className="text-white/90 text-base">DDS, MS, Board Licensed</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-primary font-medium tracking-wider mb-4 uppercase text-sm">About</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground leading-tight">
                Elevating Your Dental Experience
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                As a board-licensed general dentist and Assistant Clinical Professor at the University of Michigan School of Dentistry, Dr. Krishnan combines advanced clinical techniques with a preventive, minimally-invasive approach. Her focus on patient education and comfort has earned her consistent 5-star reviews from satisfied patients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="bg-background p-6 rounded-xl shadow-sm border-t-2 border-primary/30">
                  <h3 className="text-2xl font-semibold mb-1 text-foreground">DDS, MS</h3>
                  <p className="text-foreground/70">Advanced Degrees</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm border-t-2 border-secondary">
                  <h3 className="text-2xl font-semibold mb-1 text-foreground flex items-center">5/5 <Star className="h-4 w-4 text-secondary ml-1 fill-current"/></h3>
                  <p className="text-foreground/70">Patient Rating</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm border-t-2 border-primary/30">
                  <h3 className="text-2xl font-semibold mb-1 text-foreground">Board Licensed</h3>
                  <p className="text-foreground/70">General Dentist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Photos Section with Tend-inspired styling */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium tracking-wider mb-4 uppercase text-sm">Our Office</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Experience Our Modern Facility
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our state-of-the-art dental office is designed with your comfort in mind
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              <div className="min-w-[300px] md:min-w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 snap-center group">
                <Image
                  src="/images/office/office1.png"
                  alt="Modern dental office reception area"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>
              <div className="min-w-[300px] md:min-w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 snap-center group">
                <Image
                  src="/images/office/office2.png"
                  alt="Dental operatory with advanced equipment"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>
              <div className="min-w-[300px] md:min-w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 snap-center group">
                <Image
                  src="/images/office/office3.jpg"
                  alt="Modern dental office waiting area"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>
              <div className="min-w-[300px] md:min-w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 snap-center group">
                <Image
                  src="/images/office1.png"
                  alt="Panoramic view of dental office"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>
              <div className="min-w-[300px] md:min-w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 snap-center group">
                <Image
                  src="/images/office2.png"
                  alt="Dental chair and equipment"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-primary/30'} transition-all duration-300 hover:bg-primary cursor-pointer`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Tend-inspired styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>
              <p className="ml-3 text-foreground/70">
                <span className="font-medium">+100</span> 5-star reviews
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-[24px]">
                <CardContent className="pt-8 pb-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/70">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/contact" className="no-underline">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with Tend-inspired styling */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 max-w-2xl mx-auto leading-tight">
            Ready to experience modern, personalized dental care?
          </h2>
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            New patients welcome! Please have your insurance card and photo ID ready. We can review any recent X-rays (taken within 12 months) to avoid duplicate imaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="transition-transform hover:-translate-y-1">
              <Button size="lg" className="book-btn book-btn-lg font-medium shadow-md w-full sm:w-auto">
                Book Your Appointment
              </Button>
            </Link>
            <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
              <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}