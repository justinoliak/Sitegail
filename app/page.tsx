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
      <section className="pt-32 pb-20 bg-gradient-to-b from-blush-light to-background">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-charcoal">
                Welcome to <span className="text-copper">Dr. Gail Ann Krishnan's</span> Dental Practice
              </h1>
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
                Comprehensive dental care in a comfortable environment. From routine check-ups to advanced cosmetic procedures, we provide personalized treatment with a gentle touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-copper hover:bg-copper-90 text-background rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    Schedule an Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-rose text-charcoal hover:bg-rose-light rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-blush flex items-center justify-center text-charcoal font-medium text-xs">
                    JM
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-blush flex items-center justify-center text-charcoal font-medium text-xs">
                    SA
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-blush flex items-center justify-center text-charcoal font-medium text-xs">
                    KL
                  </div>
                </div>
                <p className="text-charcoal font-medium">Trusted by 1000+ happy patients</p>
                <div className="ml-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                  ))}
                  <span className="ml-2 text-sm text-charcoal/70">5.0 (256 reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/office1.png"
                  alt="Modern dental office interior"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-2xl shadow-lg border-t-4 border-rose">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-copper" />
                  <p className="text-charcoal font-medium">New patients welcome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">
              Our Comprehensive Dental Services
            </h2>
            <p className="text-lg text-charcoal/80">
              We provide a wide range of dental services to meet all your oral health needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
              <div className="h-48 relative bg-blush-medium">
                <Image
                  src="/images/services/preventive.jpg"
                  alt="Preventive dental care"
                  fill
                  className="object-cover object-center opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-background/90 rounded-full px-4 py-1">
                  <p className="text-sm font-medium text-charcoal">Preventive</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-copper transition-colors duration-300">Preventive Care</h3>
                <p className="text-charcoal/70 mb-4">
                  Regular cleanings, exams, and early intervention to maintain your oral health.
                </p>
                <Link 
                  href="/dental#preventive"
                  className="inline-flex items-center text-copper font-medium group-hover:underline"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
              <div className="h-48 relative bg-blush-medium">
                <Image
                  src="/images/services/cosmetic.jpg"
                  alt="Cosmetic dentistry procedures"
                  fill
                  className="object-cover object-center opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-background/90 rounded-full px-4 py-1">
                  <p className="text-sm font-medium text-charcoal">Cosmetic</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-copper transition-colors duration-300">Cosmetic Dentistry</h3>
                <p className="text-charcoal/70 mb-4">
                  Enhance your smile with whitening, veneers, and other cosmetic procedures.
                </p>
                <Link 
                  href="/dental#cosmetic"
                  className="inline-flex items-center text-copper font-medium group-hover:underline"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
              <div className="h-48 relative bg-blush-medium">
                <Image
                  src="/images/services/restorative.jpg"
                  alt="Restorative dental procedures"
                  fill
                  className="object-cover object-center opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-background/90 rounded-full px-4 py-1">
                  <p className="text-sm font-medium text-charcoal">Restorative</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-copper transition-colors duration-300">Restorative Dentistry</h3>
                <p className="text-charcoal/70 mb-4">
                  Repair damaged teeth with fillings, crowns, implants, and other solutions.
                </p>
                <Link 
                  href="/dental#restorative"
                  className="inline-flex items-center text-copper font-medium group-hover:underline"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/dental">
              <Button 
                variant="outline"
                className="border-rose text-charcoal hover:bg-rose-light rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Krishnan Section */}
      <section className="py-20 bg-[#F7D1D1]/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[8px] shadow-xl">
              <Image 
                  src="/images/dr-krishnan.jpg"
                alt="Dr. Gail Ann Krishnan"
                fill
                  className="object-cover"
              />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#D8A7B1] max-w-xs">
                <h4 className="text-lg font-semibold mb-2 text-[#3C3C3C]">Dr. Gail Ann Krishnan</h4>
                <p className="text-[#3C3C3C]/70">DDS, MS with over 15 years of experience in comprehensive dentistry</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C]">
                Meet Dr. Gail Ann Krishnan
              </h2>
              <p className="text-lg text-[#3C3C3C]/80 mb-6 leading-relaxed">
                Dr. Krishnan combines her extensive education and clinical expertise with a genuinely compassionate approach to patient care. She believes in creating partnerships with her patients, educating them about their oral health, and developing personalized treatment plans.
              </p>
              <p className="text-lg text-[#3C3C3C]/80 mb-8 leading-relaxed">
                Her commitment to continuing education ensures that she stays at the forefront of dental advancements, bringing the latest techniques and technologies to benefit her patients.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B87333]" />
                  <span className="text-[#3C3C3C]">DDS, University of California</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B87333]" />
                  <span className="text-[#3C3C3C]">MS in Dental Sciences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B87333]" />
                  <span className="text-[#3C3C3C]">ADA Member</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#B87333]" />
                  <span className="text-[#3C3C3C]">Invisalign Certified</span>
                </div>
              </div>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="border-[#D8A7B1] text-[#3C3C3C] hover:bg-[#D8A7B1]/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
                >
                  Learn More About Dr. Krishnan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#3C3C3C]">
              What Our Patients Say
            </h2>
            <p className="text-lg text-[#3C3C3C]/80">
              We're proud to have earned the trust and satisfaction of our patients through our commitment to exceptional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden bg-white p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B87333] text-[#B87333]" />
                ))}
              </div>
              <p className="text-[#3C3C3C]/80 mb-6 italic">
                "Dr. Krishnan and her team are amazing! They made me feel comfortable from the moment I walked in. My smile has never looked better, and I actually look forward to my dental visits now."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#F7D1D1] flex items-center justify-center text-[#3C3C3C] font-medium mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-medium text-[#3C3C3C]">Sarah M.</h4>
                  <p className="text-sm text-[#3C3C3C]/70">Patient since 2019</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden bg-white p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B87333] text-[#B87333]" />
                ))}
              </div>
              <p className="text-[#3C3C3C]/80 mb-6 italic">
                "After years of dental anxiety, I finally found a dentist who understands. Dr. Krishnan took the time to address all my concerns and made sure I was comfortable throughout my procedure."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#F7D1D1] flex items-center justify-center text-[#3C3C3C] font-medium mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-medium text-[#3C3C3C]">James D.</h4>
                  <p className="text-sm text-[#3C3C3C]/70">Patient since 2021</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden bg-white p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B87333] text-[#B87333]" />
                ))}
              </div>
              <p className="text-[#3C3C3C]/80 mb-6 italic">
                "I couldn't be happier with my veneers! Dr. Krishnan listened to exactly what I wanted and delivered results that exceeded my expectations. The entire team is professional and friendly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#F7D1D1] flex items-center justify-center text-[#3C3C3C] font-medium mr-4">
                  EL
                </div>
                <div>
                  <h4 className="font-medium text-[#3C3C3C]">Emily L.</h4>
                  <p className="text-sm text-[#3C3C3C]/70">Patient since 2020</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <div className="bg-[#F7D1D1]/20 rounded-[8px] p-6 flex items-center">
              <Shield className="h-8 w-8 text-[#B87333] mr-4" />
              <div>
                <h4 className="font-medium text-[#3C3C3C]">PPO Insurance Accepted</h4>
                <p className="text-sm text-[#3C3C3C]/70">We work with most major insurance providers</p>
              </div>
            </div>
            <div className="bg-[#F7D1D1]/20 rounded-[8px] p-6 flex items-center">
              <Shield className="h-8 w-8 text-[#B87333] mr-4" />
              <div>
                <h4 className="font-medium text-[#3C3C3C]">Gentle Dental Care</h4>
                <p className="text-sm text-[#3C3C3C]/70">Comfort-focused approach for all patients</p>
              </div>
            </div>
            <div className="bg-[#F7D1D1]/20 rounded-[8px] p-6 flex items-center">
              <Shield className="h-8 w-8 text-[#B87333] mr-4" />
              <div>
                <h4 className="font-medium text-[#3C3C3C]">Modern Technology</h4>
                <p className="text-sm text-[#3C3C3C]/70">State-of-the-art equipment for better care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 bg-[#F7D1D1]/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C]">
                Our Location & Hours
            </h2>
              <p className="text-lg text-[#3C3C3C]/80 mb-8">
                Conveniently located in Brea with free parking for all our patients. We offer flexible appointment times to accommodate your busy schedule.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#B87333] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3C3C3C] mb-1">Office Location</h4>
                    <p className="text-[#3C3C3C]/80">255 W Central Ave, Suite 201</p>
                    <p className="text-[#3C3C3C]/80">Brea, CA 92821</p>
                    <a 
                      href="https://maps.google.com/?q=255+W+Central+Ave+Suite+201+Brea+CA+92821" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#B87333] hover:underline inline-flex items-center mt-1"
                    >
                      Get directions <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                    </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#B87333] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3C3C3C] mb-1">Office Hours</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      <div className="text-[#3C3C3C]/80">Mon - Fri:</div>
                      <div className="text-[#3C3C3C]/80">8am - 6pm</div>
                      <div className="text-[#3C3C3C]/80">Sat:</div>
                      <div className="text-[#3C3C3C]/80">9am - 2pm</div>
                      <div className="text-[#3C3C3C]/80">Sun:</div>
                      <div className="text-[#3C3C3C]/80">Closed</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#B87333] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#3C3C3C] mb-1">Contact Us</h4>
                    <p className="text-[#3C3C3C]/80">Phone: (714) 990-0204</p>
                    <p className="text-[#3C3C3C]/80">Email: breadentaloffice@gmail.com</p>
                  </div>
                </div>
              </div>
          </div>
          
            <div>
              <div className="h-[400px] rounded-[8px] overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.7790247825244!2d-117.9010532!3d33.9221456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5cc6d32e7bf%3A0xe5b43a5e17e89fe8!2s255%20W%20Central%20Ave%20%23201%2C%20Brea%2C%20CA%2092821!5e0!3m2!1sen!2sus!4v1652891234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[8px]"
                ></iframe>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-[8px] mt-6 border-t-4 border-[#D8A7B1]">
                <p className="text-[#3C3C3C]/80">
                  <span className="font-medium text-[#3C3C3C]">Free parking available.</span> Our office is located in the Oliak Center with convenient access from Central Avenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F7D1D1] to-[#D8A7B1]/70 rounded-[16px] p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-[#3C3C3C]">
                Ready to Schedule Your Visit?
          </h2>
              <p className="text-lg text-[#3C3C3C]/80 max-w-2xl mx-auto">
                We're committed to providing you with the highest quality dental care in a comfortable, welcoming environment. New patients are always welcome!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/contact">
                <Button 
                  className="bg-[#B87333] hover:bg-[#B87333]/90 text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Book Your Appointment
              </Button>
            </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white border-[#3C3C3C]/20 text-[#3C3C3C] hover:bg-white/80 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
              </Button>
            </a>
            </div>
            
            <div className="text-center">
              <p className="text-[#3C3C3C]/80 italic">
                "We promise to make your dental experience as comfortable and stress-free as possible."
              </p>
              <p className="font-medium text-[#3C3C3C] mt-2">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}