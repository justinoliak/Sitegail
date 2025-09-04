import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Section, Heading, ServiceCard } from "@/components/common";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle,
  ChevronRight,
  Shield
} from "lucide-react";

const testimonials = [
  {
    name: "Lucy Amador",
    location: "Brea, CA",
    text: "Dr. Krishnan makes patients feel very special, and she is extremely professional, caring, and knowledgeable. Her assistant Alyssa is also the best!"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 hero-gradient overflow-hidden">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-accent-mint mr-2 animate-pulse"></span>
                  Welcoming new patients • Same-day appointments available
                </div>
                <h1 className="hero-title text-charcoal">
                  Quality Dental Care in
                  <span className="text-accent-mint block">Brea, CA</span>
                </h1>
                <p className="hero-subtitle max-w-2xl">
                  Dr. Gail Krishnan provides comprehensive dental care for patients and families in Brea. Preventive, cosmetic, and restorative treatments in a comfortable environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    Schedule Appointment
                    <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
                <Link href="tel:+17149900204">
                  <Button className="btn btn-outline btn-lg group">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (714) 990-0204
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center space-x-6">
                <div>
                  <p className="text-charcoal font-medium">Trusted by families in Brea</p>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-mint text-accent-mint" />
                    ))}
                    <span className="ml-2 text-sm text-charcoal/60">5.0 rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/Gail/gail-practice.jpg"
                  alt="Dr. Krishnan with patient"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-md border border-primary-mint/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-mint" />
                  <p className="text-charcoal text-sm font-medium">New patients welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">
              Everything You Need for a Healthy Smile
            </h2>
            <p className="text-charcoal/70 text-lg">
              Don't wait until it's too late. From gentle cleanings to complete smile makeovers, we'll help you love your smile again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="group border-0 rounded-3xl shadow-soft card-hover-lift overflow-hidden bg-white relative">
              <div className="h-64 relative bg-gradient-to-br from-light-mint to-primary-mint/30">
                <Image 
                  src="/images/stock/stockimagetoothpaste.jpg" 
                  alt="Preventive Dental Care" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-charcoal">Preventive Care</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Stop problems before they start. Regular cleanings and exams save you money and keep your smile healthy for life.
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-accent-mint font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>

            {/* Service Card 2 */}
            <Card className="border border-gray-100 rounded-xl shadow-sm card-hover-lift overflow-hidden bg-white">
              <div className="h-48 relative bg-light-mint">
                <Image 
                  src="/images/stock/stockimageteeth.jpg" 
                  alt="Cosmetic Dentistry" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-charcoal">Cosmetic Dentistry</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  Love your smile again. Professional whitening, veneers, and smile makeovers that look completely natural.
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-accent-mint font-medium hover:underline transition-colors"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Card>

            {/* Service Card 3 */}
            <Card className="border border-gray-100 rounded-xl shadow-sm card-hover-lift overflow-hidden bg-white">
              <div className="h-48 relative bg-light-mint">
                <Image 
                  src="/images/stock/stockimagechair.jpg" 
                  alt="Restorative Dentistry" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-charcoal">Restorative Dentistry</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  Eat what you want again. Crowns, implants, and bridges that feel and function like your natural teeth.
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-accent-mint font-medium hover:underline transition-colors"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="btn btn-outline btn-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Krishnan Section */}
      <section className="py-20 bg-light-mint">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image 
                  src="/images/@2.png"
                  alt="Dr. Gail Ann Krishnan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-3 text-charcoal">
                  Meet Dr. Gail Ann Krishnan
                </h2>
                <p className="text-accent-mint font-medium">DDS, MS • 23 years experience</p>
              </div>
              <p className="text-charcoal/70 mb-6 leading-relaxed text-lg">
                With 23 years of experience, Dr. Krishnan helps patients achieve healthier, more beautiful smiles. She takes time to listen and creates treatment plans that fit your budget and goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-mint flex-shrink-0" />
                  <span className="text-charcoal">Doctor of Dental Surgery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-mint flex-shrink-0" />
                  <span className="text-charcoal">MS in Dental Sciences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-mint flex-shrink-0" />
                  <span className="text-charcoal">ADA Member</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-mint flex-shrink-0" />
                  <span className="text-charcoal">Invisalign Certified</span>
                </div>
              </div>
              <Link href="/about">
                <Button className="btn btn-outline btn-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">
              What Our Patients Say
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border border-gray-100 rounded-xl shadow-sm bg-white p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-charcoal/70 mb-6 italic text-lg leading-relaxed">
                "Dr. Krishnan makes patients feel very special, and she is extremely professional, caring, and knowledgeable. Her assistant Alyssa is also the best!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-mint flex items-center justify-center text-white font-medium mr-4">
                  LA
                </div>
                <div>
                  <h4 className="font-medium text-charcoal">Lucy Amador</h4>
                  <p className="text-sm text-charcoal/60">Verified patient</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-light-mint rounded-xl p-6 text-center">
              <Shield className="h-8 w-8 text-accent-mint mx-auto mb-3" />
              <h4 className="font-medium text-charcoal mb-2">Insurance Accepted</h4>
              <p className="text-sm text-charcoal/70">Most major providers</p>
            </div>
            <div className="bg-light-mint rounded-xl p-6 text-center">
              <Shield className="h-8 w-8 text-accent-mint mx-auto mb-3" />
              <h4 className="font-medium text-charcoal mb-2">Gentle Care</h4>
              <p className="text-sm text-charcoal/70">Comfort-focused approach</p>
            </div>
            <div className="bg-light-mint rounded-xl p-6 text-center">
              <Shield className="h-8 w-8 text-accent-mint mx-auto mb-3" />
              <h4 className="font-medium text-charcoal mb-2">Modern Technology</h4>
              <p className="text-sm text-charcoal/70">State-of-the-art equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 bg-light-mint">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-charcoal">
                Visit Our Office
              </h2>
              <p className="text-charcoal/70 mb-8 text-lg">
                Conveniently located in Brea with free parking and flexible appointment times.
              </p>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-charcoal mb-2">Location</h4>
                    <p className="text-charcoal/70">255 W Central Ave, Suite 201</p>
                    <p className="text-charcoal/70">Brea, CA 92821</p>
                    <a 
                      href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-mint hover:underline inline-flex items-center mt-2 text-sm"
                    >
                      Get directions <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-charcoal mb-2">Hours</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-charcoal/70">Mon - Fri:</span>
                        <span className="text-charcoal/70">8am - 6pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-charcoal/70">Saturday:</span>
                        <span className="text-charcoal/70">9am - 2pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-charcoal/70">Sunday:</span>
                        <span className="text-charcoal/70">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-charcoal mb-2">Contact</h4>
                    <p className="text-charcoal/70">(714) 990-0204</p>
                    <p className="text-charcoal/70">breadentaloffice@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          
            <div>
              <div className="h-[400px] rounded-xl overflow-hidden shadow-sm">
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
              <div className="bg-white shadow-sm p-6 rounded-xl mt-6 border border-gray-100">
                <p className="text-charcoal/70">
                  <span className="font-medium text-charcoal">Free parking available.</span> Located in the Oliak Center with convenient access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mint-gradient rounded-2xl card-padding shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-white mb-6">
                Ready to Schedule Appointment?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto text-large">
                We're committed to providing the highest quality dental care in a comfortable environment. New patients welcome!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Link href="/contact">
                <Button className="bg-white text-charcoal hover:bg-white/90 btn-lg w-full sm:w-auto shadow-sm">
                  <Calendar className="mr-2 h-5 w-5" /> Book Appointment
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button className="btn btn-outline btn-lg w-full sm:w-auto border-white text-white hover:bg-white hover:text-charcoal">
                  <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-large">
                "Your smile is our priority - let us help you achieve the confidence you deserve."
              </p>
              <p className="font-medium text-white mt-3 text-large">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}