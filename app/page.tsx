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
  ChevronRight,
  BadgeCheck,
  Shield,
  UserRound
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

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section with Split Layout */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-teal/30 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-charcoal">
                Modern Dental Care for Your Family
              </h1>
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
                Experience exceptional care at Dr. Gail Ann Krishnan's premier dental practice in Brea. We combine advanced clinical techniques with a compassionate approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-amber hover:bg-amber/90 text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    Schedule Your Visit
                  </Button>
                </Link>
                <a href="tel:+17149900204">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-jade text-charcoal hover:bg-jade/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (714) 990-0204
                  </Button>
                </a>
              </div>
              <div className="flex items-center mt-8 px-4 py-3 bg-white rounded-full shadow-sm max-w-fit">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-teal flex items-center justify-center text-charcoal font-medium text-xs">
                  <UserRound className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-charcoal font-medium">Trusted by 1000+ happy patients</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                    ))}
                    <span className="ml-2 text-sm text-charcoal/70">5.0 (256 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/images/office2.png"
                alt="Modern dental clinic reception area"
                fill
                className="object-cover object-center hover:scale-105 transition-all duration-[3s] rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border-t-4 border-jade">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-amber" />
                  <p className="text-charcoal font-medium">New patients welcome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">
              Comprehensive Dental Services
            </h2>
            <p className="text-lg text-charcoal/80">
              Our practice offers a complete range of dental care services for your entire family
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <Link href="/services/preventive" className="block">
                <div className="h-48 relative bg-teal/20">
                  <Image 
                    src="/images/services/preventive.jpg"
                    alt="Preventive dental care"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
                  />
                </div>
                <div className="p-6 bg-white border border-gray-200 group-hover:border-teal rounded-b-2xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-amber transition-colors duration-300">Preventive Care</h3>
                  <p className="text-charcoal/70 mb-4">
                    Regular check-ups, cleanings, digital x-rays, and sealants to keep your smile healthy.
                  </p>
                  <div 
                    className="inline-flex items-center text-amber font-medium group-hover:underline"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/services/cosmetic" className="block">
                <div className="h-48 relative bg-teal/20">
                  <Image 
                    src="/images/services/cosmetic.jpg"
                    alt="Cosmetic dentistry services"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
                  />
                </div>
                <div className="p-6 bg-white border border-gray-200 group-hover:border-teal rounded-b-2xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-amber transition-colors duration-300">Cosmetic Dentistry</h3>
                  <p className="text-charcoal/70 mb-4">
                    Teeth whitening, veneers, and smile makeovers to enhance your natural beauty.
                  </p>
                  <div 
                    className="inline-flex items-center text-amber font-medium group-hover:underline"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/services/restorative" className="block">
                <div className="h-48 relative bg-teal/20">
                  <Image 
                    src="/images/services/restorative.jpg"
                    alt="Restorative dental procedures"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
                  />
                </div>
                <div className="p-6 bg-white border border-gray-200 group-hover:border-teal rounded-b-2xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-amber transition-colors duration-300">Restorative Dentistry</h3>
                  <p className="text-charcoal/70 mb-4">
                    Fillings, crowns, bridges, and implants to restore function and aesthetics.
                  </p>
                  <div 
                    className="inline-flex items-center text-amber font-medium group-hover:underline"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button 
                variant="outline" 
                className="border-jade text-charcoal hover:bg-jade/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-teal/10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image 
                  src="/images/doctor.jpg"
                  alt="Dr. Gail Ann Krishnan"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full hover:scale-105 transition-all duration-[3s]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-jade max-w-xs">
                <h4 className="text-lg font-semibold mb-2 text-charcoal">Dr. Gail Ann Krishnan</h4>
                <p className="text-charcoal/70">DDS, MS with over 15 years of experience in comprehensive dentistry</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-charcoal">
                Meet Dr. Gail Ann Krishnan
              </h2>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                Dr. Krishnan combines advanced clinical expertise with a compassionate, patient-centered approach. She is dedicated to providing the highest quality dental care in a comfortable, welcoming environment.
              </p>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                As both a skilled clinician and educator, she stays at the forefront of modern dental techniques to deliver exceptional results for her patients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber" />
                  <span className="text-charcoal">DDS, University of California</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber" />
                  <span className="text-charcoal">MS in Dental Sciences</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber" />
                  <span className="text-charcoal">ADA Member</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber" />
                  <span className="text-charcoal">Invisalign Certified</span>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    className="border-jade text-charcoal hover:bg-jade/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    Learn More About Dr. Krishnan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">
              What Our Patients Say
            </h2>
            <p className="text-lg text-charcoal/80">
              Read testimonials from our satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-6 italic">
                "Dr. Krishnan is incredible! She takes the time to explain everything and makes me feel comfortable. The office is beautiful and the staff is so friendly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-charcoal font-medium mr-4">
                  <span className="text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal">Sarah M.</h4>
                  <p className="text-sm text-charcoal/70">Patient since 2019</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-6 italic">
                "I've been to many dentists over the years, but Dr. Krishnan is by far the best. Her attention to detail and gentle approach have made me actually look forward to my dental visits."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-charcoal font-medium mr-4">
                  <span className="text-lg">J</span>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal">James D.</h4>
                  <p className="text-sm text-charcoal/70">Patient since 2021</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-6 italic">
                "I came in for Botox and was amazed at Dr. Krishnan's expertise. The results are natural and exactly what I wanted. I'll definitely be back for more treatments!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-charcoal font-medium mr-4">
                  <span className="text-lg">E</span>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal">Emily L.</h4>
                  <p className="text-sm text-charcoal/70">Patient since 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-teal/20 rounded-[8px] p-6 flex items-center">
              <Shield className="h-8 w-8 text-amber mr-4" />
              <div>
                <h4 className="font-medium text-charcoal">PPO Insurance Accepted</h4>
                <p className="text-sm text-charcoal/70">We work with most major insurance providers</p>
              </div>
            </div>
            <div className="bg-teal/20 rounded-[8px] p-6 flex items-center">
              <Shield className="h-8 w-8 text-amber mr-4" />
              <div>
                <h4 className="font-medium text-charcoal">Gentle Dental Care</h4>
                <p className="text-sm text-charcoal/70">Comfort-focused approach for all patients</p>
              </div>
            </div>
            <div className="bg-teal/20 rounded-[8px] p-6 flex items-center">
              <Shield className="h-8 w-8 text-amber mr-4" />
              <div>
                <h4 className="font-medium text-charcoal">Modern Technology</h4>
                <p className="text-sm text-charcoal/70">State-of-the-art equipment for better care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-teal/10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">
              Schedule Your Visit Today
            </h2>
            <p className="text-lg text-charcoal/80 mb-8">
              We're conveniently located in Brea and accepting new patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-amber mr-4 mt-1" />
              <div>
                <h4 className="font-medium text-charcoal mb-1">Office Location</h4>
                <p className="text-charcoal/80">255 W Central Ave, Suite 201</p>
                <p className="text-charcoal/80">Brea, CA 92821</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  className="text-amber hover:underline inline-flex items-center mt-1"
                >
                  Get Directions <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-amber mr-4 mt-1" />
              <div>
                <h4 className="font-medium text-charcoal mb-1">Office Hours</h4>
                <p className="text-charcoal/80">Monday - Friday: 8am - 6pm</p>
                <p className="text-charcoal/80">Saturday: 9am - 2pm</p>
                <p className="text-charcoal/80">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-amber hover:bg-amber-light text-white font-medium px-8 py-3 rounded-full shadow-md text-lg transition-transform hover:-translate-y-1"
              >
                Schedule Your Appointment
              </Button>
            </Link>
            <a href="tel:+17149900204">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-jade text-charcoal hover:bg-jade/10 px-8 py-3 rounded-full text-lg transition-transform hover:-translate-y-1"
              >
                <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}