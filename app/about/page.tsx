import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Award, Heart, CalendarClock, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-b from-light-mint to-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">Meet Dr. Gail Ann Krishnan</h1>
            <p className="text-charcoal/70 mb-6">
              Dedicated to providing exceptional dental care with a personal touch and creating beautiful smiles that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & Bio Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-xl">
                <Image
                  src="/images/about/dr-krishnan-portrait.jpg"
                  alt="Dr. Gail Ann Krishnan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[16px] shadow-lg border-t-4 border-primary-mint max-w-xs">
                <p className="text-charcoal/80 italic text-lg">
                  "My goal is to provide comprehensive dental care that not only improves your oral health but enhances your overall wellbeing and confidence."
                </p>
                <p className="font-medium text-charcoal mt-3">— Dr. Krishnan</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold mb-8 text-charcoal">A Passion for Excellence in Dentistry</h2>
              <div className="space-y-6 text-charcoal/80">
                <p className="text-lg leading-relaxed">
                  Dr. Gail Ann Krishnan brings over 15 years of experience to her dental practice in Brea, California. After earning her Doctor of Dental Surgery (DDS) degree from the University of California, she pursued advanced education, obtaining a Master of Science (MS) in Dental Sciences, allowing her to provide exceptional comprehensive care to her patients.
                </p>
                <p className="text-lg leading-relaxed">
                  Her approach to dentistry combines technical precision with genuine compassion. Dr. Krishnan believes in creating partnerships with her patients, educating them about their oral health, and developing personalized treatment plans that address both immediate concerns and long-term well-being.
                </p>
                <p className="text-lg leading-relaxed">
                  As a board-licensed general dentist, Dr. Krishnan offers a wide range of services from preventive care to cosmetic and restorative procedures. Her commitment to continuing education ensures that she stays at the forefront of dental advancements, bringing the latest techniques and technologies to benefit her patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section className="py-32 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Education & Credentials</h2>
            <p className="text-charcoal/80 text-lg">
              Dr. Krishnan's extensive training and credentials reflect her dedication to providing the highest standard of dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Education */}
            <div className="bg-background rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-none">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mr-5">
                  <GraduationCap className="h-6 w-6 text-accent-mint" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Education</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Doctor of Dental Surgery (DDS)</p>
                    <p className="text-charcoal/70">University of California</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Master of Science in Dental Sciences</p>
                    <p className="text-charcoal/70">Specialized research in advanced dental techniques</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Advanced Education in General Dentistry</p>
                    <p className="text-charcoal/70">Comprehensive postgraduate training program</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Memberships */}
            <div className="bg-background rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-none">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mr-5">
                  <Award className="h-6 w-6 text-accent-mint" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Professional Memberships</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">American Dental Association</p>
                    <p className="text-charcoal/70">Active member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">California Dental Association</p>
                    <p className="text-charcoal/70">Active member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Academy of General Dentistry</p>
                    <p className="text-charcoal/70">Commitment to continuing education</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications & Training */}
            <div className="bg-background rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-none">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mr-5">
                  <CalendarClock className="h-6 w-6 text-accent-mint" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">Specialized Training</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Invisalign® Certified Provider</p>
                    <p className="text-charcoal/70">Clear aligner orthodontic treatment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Advanced Facial Aesthetics</p>
                    <p className="text-charcoal/70">Non-invasive facial rejuvenation treatments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Advanced Cosmetic Dentistry</p>
                    <p className="text-charcoal/70">Comprehensive smile makeover techniques</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-charcoal">My Philosophy & Approach</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mr-5 mt-1">
                    <Heart className="h-6 w-6 text-accent-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Patient-Centered Care</h3>
                    <p className="text-charcoal/80 leading-relaxed text-lg">
                      I believe in treating the person, not just their teeth. Every treatment plan is tailored to your unique needs, preferences, and goals. My team and I take the time to listen, understand your concerns, and address any anxiety you might have about dental procedures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-accent-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Preventive Focus</h3>
                    <p className="text-charcoal/80 leading-relaxed text-lg">
                      The best dental treatment is prevention. I emphasize patient education and preventive care to help you maintain optimal oral health and avoid costly procedures down the road. Regular checkups, cleanings, and early intervention are the foundation of my practice.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mr-5 mt-1">
                    <GraduationCap className="h-6 w-6 text-accent-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">Lifelong Learning</h3>
                    <p className="text-charcoal/80 leading-relaxed text-lg">
                      Dentistry is constantly evolving, and I'm committed to staying at the forefront of new techniques and technologies. I regularly attend continuing education courses to ensure that my patients receive the most advanced and effective treatments available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src="/images/about/dr-krishnan-with-patient.jpg"
                  alt="Dr. Krishnan with a patient"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg mt-12">
                <Image
                  src="/images/about/dr-krishnan-working.jpg"
                  alt="Dr. Krishnan working"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src="/images/about/dr-krishnan-consultation.jpg"
                  alt="Dr. Krishnan in consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg mt-12">
                <Image
                  src="/images/about/dr-krishnan-office.jpg"
                  alt="Dr. Krishnan in her office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life Section (Optional) */}
      <section className="py-32 bg-light-mint relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/about/dr-krishnan-office.jpg"
            alt="Office Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Beyond the Dental Chair</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              When I'm not at the office, I enjoy spending time with my family, staying active in the Brea community, and pursuing various interests that keep me balanced and energized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-background/90 backdrop-blur-sm rounded-[24px] p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-20 h-20 rounded-full bg-accent-mint flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/icons/icon-community.png"
                  alt="Community icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Community Involvement</h3>
              <p className="text-charcoal/80 text-lg">
                Active participation in local community service and dental health education programs.
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm rounded-[24px] p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-20 h-20 rounded-full bg-accent-mint flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/icons/icon-family.png"
                  alt="Family icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Family Life</h3>
              <p className="text-charcoal/80 text-lg">
                Cherishing time with family and enjoying the beautiful Southern California outdoors.
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm rounded-[24px] p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-20 h-20 rounded-full bg-accent-mint flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/images/icons/icon-interests.png"
                  alt="Interests icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Personal Interests</h3>
              <p className="text-charcoal/80 text-lg">
                Passionate about cooking, reading, and staying active through hiking and yoga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mint-gradient rounded-[24px] p-12 md:p-16 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto text-lg">
                I look forward to meeting you and helping you achieve your best smile. New patients are always welcome at our practice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button 
                  className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto shadow-sm"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Schedule an Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="bg-white/90 border-charcoal/20 text-charcoal hover:bg-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
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