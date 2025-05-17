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
  Shield
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
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-b from-light-mint to-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">
                Exceptional Dental Care with a Gentle Touch
              </h1>
              <p className="text-charcoal/80 leading-relaxed mb-10 text-lg">
                Dr. Gail Ann Krishnan combines advanced dental expertise with a compassionate approach for a comfortable experience you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact">
                  <Button 
                    className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap"
                  >
                    Book Your Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline"
                    className="border-primary-mint text-charcoal hover:bg-primary-mint/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-2 mr-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border-2 border-background bg-primary-mint flex items-center justify-center text-white font-medium text-xs"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-charcoal font-medium text-lg">Trusted by 1000+ happy patients</p>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-accent-mint text-accent-mint" />
                    ))}
                    <span className="ml-3 text-sm text-charcoal/70">5.0 (256 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-full">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-xl h-[120%] lg:h-[140%] lg:-mt-16 lg:mb-10 pt-8">
                <Image
                  src="/images/gail-photos/gailwithpatient1.jpg"
                  alt="Dr. Krishnan's welcoming dental office"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-lg border-t-4 border-primary-mint">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent-mint" />
                  <p className="text-charcoal font-medium">New patients welcome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">
              Comprehensive Dental Services for Your Entire Family
            </h2>
            <p className="text-charcoal/80 text-lg">
              From routine check-ups to complete smile transformations, we provide personalized care for all your dental needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <Card className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
              <div className="h-56 relative bg-light-mint">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/images/dental/stockimagetoothpaste.jpg" 
                    alt="Preventive Dental Care" 
                    width={300} 
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-charcoal group-hover:text-accent-mint transition-colors duration-300">Preventive Care</h3>
                <p className="text-charcoal/70 mb-6">
                  Maintain your smile's health with regular cleanings, exams, and early intervention to prevent dental issues.
                </p>
                <Link 
                  href="/services/preventive" 
                  className="inline-flex items-center text-accent-mint font-medium group-hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </Card>

            {/* Service Card 2 */}
            <Card className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
              <div className="h-56 relative bg-light-mint">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/images/dental/stockimageteeth.jpg" 
                    alt="Cosmetic Dentistry" 
                    width={300} 
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-charcoal group-hover:text-accent-mint transition-colors duration-300">Cosmetic Dentistry</h3>
                <p className="text-charcoal/70 mb-6">
                  Transform your smile with our aesthetic treatments including whitening, veneers, and smile makeovers.
                </p>
                <Link 
                  href="/services/cosmetic" 
                  className="inline-flex items-center text-accent-mint font-medium group-hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </Card>

            {/* Service Card 3 */}
            <Card className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
              <div className="h-56 relative bg-light-mint">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/images/dental/stockimagechair.jpg" 
                    alt="Restorative Dentistry" 
                    width={300} 
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-charcoal group-hover:text-accent-mint transition-colors duration-300">Restorative Dentistry</h3>
                <p className="text-charcoal/70 mb-6">
                  Regain full function and confidence with our advanced restorative solutions for damaged or missing teeth.
                </p>
                <Link 
                  href="/services/restorative" 
                  className="inline-flex items-center text-accent-mint font-medium group-hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services">
              <Button 
                variant="outline" 
                className="border-primary-mint text-charcoal hover:bg-primary-mint/10 rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Krishnan Section */}
      <section className="py-32 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[12px]">
                <Image 
                  src="/images/btl/1.png"
                  alt="Dr. Gail Ann Krishnan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-8 rounded-2xl shadow-lg border-t-4 border-primary-mint max-w-xs">
                <h4 className="text-lg font-semibold mb-3 text-charcoal">Dr. Gail Ann Krishnan</h4>
                <p className="text-charcoal/70">DDS, MS with over 15 years of experience in comprehensive dentistry</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-charcoal">
                Meet Dr. Gail Ann Krishnan
              </h2>
              <p className="text-charcoal/80 mb-8 leading-relaxed text-lg">
                Dr. Krishnan combines her extensive education and clinical expertise with a genuinely compassionate approach to patient care. She believes in creating partnerships with her patients, educating them about their oral health, and developing personalized treatment plans.
              </p>
              <p className="text-charcoal/80 mb-10 leading-relaxed text-lg">
                Her commitment to continuing education ensures that she stays at the forefront of dental advancements, bringing the latest techniques and technologies to benefit her patients.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-mint" />
                  <span className="text-charcoal">DDS, University of California</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-mint" />
                  <span className="text-charcoal">MS in Dental Sciences</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-mint" />
                  <span className="text-charcoal">ADA Member</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-mint" />
                  <span className="text-charcoal">Invisalign Certified</span>
                </div>
              </div>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="border-primary-mint text-charcoal hover:bg-primary-mint/10 rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300"
                >
                  Learn More About Dr. Krishnan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">
              What Our Patients Say
            </h2>
            <p className="text-charcoal/80 text-lg">
              We're proud to have earned the trust and satisfaction of our patients through our commitment to exceptional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <Card className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden bg-background p-10">
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-8 italic text-lg">
                "Dr. Krishnan and her team are amazing! They made me feel comfortable from the moment I walked in. My smile has never looked better, and I actually look forward to my dental visits now."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-primary-mint flex items-center justify-center text-white font-medium mr-5">
                  SM
                </div>
                <div>
                  <h4 className="font-medium text-charcoal text-lg">Sarah M.</h4>
                  <p className="text-sm text-charcoal/70">Patient since 2019</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden bg-background p-10">
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-8 italic text-lg">
                "After years of dental anxiety, I finally found a dentist who understands. Dr. Krishnan took the time to address all my concerns and made sure I was comfortable throughout my procedure."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-primary-mint flex items-center justify-center text-white font-medium mr-5">
                  JD
                </div>
                <div>
                  <h4 className="font-medium text-charcoal text-lg">James D.</h4>
                  <p className="text-sm text-charcoal/70">Patient since 2021</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden bg-background p-10">
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-8 italic text-lg">
                "I couldn't be happier with my veneers! Dr. Krishnan listened to exactly what I wanted and delivered results that exceeded my expectations. The entire team is professional and friendly."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-primary-mint flex items-center justify-center text-white font-medium mr-5">
                  EL
                </div>
                <div>
                  <h4 className="font-medium text-charcoal text-lg">Emily L.</h4>
                  <p className="text-sm text-charcoal/70">Patient since 2020</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-20">
            <div className="bg-light-mint rounded-[12px] p-8 flex items-center">
              <Shield className="h-10 w-10 text-accent-mint mr-6" />
              <div>
                <h4 className="font-medium text-charcoal text-lg">PPO Insurance Accepted</h4>
                <p className="text-sm text-charcoal/70">We work with most major insurance providers</p>
              </div>
            </div>
            <div className="bg-light-mint rounded-[12px] p-8 flex items-center">
              <Shield className="h-10 w-10 text-accent-mint mr-6" />
              <div>
                <h4 className="font-medium text-charcoal text-lg">Gentle Dental Care</h4>
                <p className="text-sm text-charcoal/70">Comfort-focused approach for all patients</p>
              </div>
            </div>
            <div className="bg-light-mint rounded-[12px] p-8 flex items-center">
              <Shield className="h-10 w-10 text-accent-mint mr-6" />
              <div>
                <h4 className="font-medium text-charcoal text-lg">Modern Technology</h4>
                <p className="text-sm text-charcoal/70">State-of-the-art equipment for better care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-32 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-charcoal">
                Our Location & Hours
              </h2>
              <p className="text-charcoal/80 mb-10 text-lg">
                Conveniently located in Brea with free parking for all our patients. We offer flexible appointment times to accommodate your busy schedule.
              </p>
              
              <div className="space-y-10 mb-10">
                <div className="flex items-start">
                  <MapPin className="h-7 w-7 text-accent-mint mr-5 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal mb-2 text-lg">Office Location</h4>
                    <p className="text-charcoal/80">255 W Central Ave, Suite 201</p>
                    <p className="text-charcoal/80">Brea, CA 92821</p>
                    <a 
                      href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-mint hover:underline inline-flex items-center mt-2"
                    >
                      Get directions <ChevronRight className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-7 w-7 text-accent-mint mr-5 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal mb-2 text-lg">Office Hours</h4>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                      <div className="text-charcoal/80">Mon - Fri:</div>
                      <div className="text-charcoal/80">8am - 6pm</div>
                      <div className="text-charcoal/80">Sat:</div>
                      <div className="text-charcoal/80">9am - 2pm</div>
                      <div className="text-charcoal/80">Sun:</div>
                      <div className="text-charcoal/80">Closed</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-7 w-7 text-accent-mint mr-5 mt-1" />
                  <div>
                    <h4 className="font-medium text-charcoal mb-2 text-lg">Contact Us</h4>
                    <p className="text-charcoal/80">Phone: (714) 990-0204</p>
                    <p className="text-charcoal/80">Email: breadentaloffice@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          
            <div>
              <div className="h-[450px] rounded-[12px] overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7790247825244!2d-117.9010532!3d33.9221456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5cc6d32e7bf%3A0xe5b43a5e17e89fe8!2s255%20W%20Central%20Ave%20%23201%2C%20Brea%2C%20CA%2092821!5e0!3m2!1sen!2sus!4v1652891234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[12px]"
                ></iframe>
              </div>
              <div className="bg-background shadow-lg p-8 rounded-[12px] mt-8 border-t-4 border-primary-mint">
                <p className="text-charcoal/80 text-lg">
                  <span className="font-medium text-charcoal">Free parking available.</span> Our office is located in the Oliak Center with convenient access from Central Avenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mint-gradient rounded-[24px] p-12 md:p-16 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto text-lg">
                We're committed to providing you with the highest quality dental care in a comfortable, welcoming environment. New patients are always welcome!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button 
                  className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  <Calendar className="mr-3 h-5 w-5" /> Book Your Appointment
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white/90 border-charcoal/20 text-charcoal hover:bg-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                <Phone className="mr-3 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-lg">
                "We promise to make your dental experience as comfortable and stress-free as possible."
              </p>
              <p className="font-medium text-white mt-3 text-lg">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}