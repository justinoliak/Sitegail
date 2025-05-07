import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Award, Heart, CalendarClock, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F7D1D1]/30 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-[#3C3C3C]">Meet Dr. Gail Ann Krishnan</h1>
            <p className="text-lg md:text-xl text-[#3C3C3C]/80 leading-relaxed mb-8">
              Dedicated to providing exceptional dental care with a personal touch and creating beautiful smiles that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & Bio Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-[24px] shadow-xl">
                <Image
                  src="/images/dr-krishnan-portrait.jpg"
                  alt="Dr. Gail Ann Krishnan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[16px] shadow-lg border-t-4 border-[#D8A7B1] max-w-xs">
                <p className="text-[#3C3C3C]/80 italic">
                  "My goal is to provide comprehensive dental care that not only improves your oral health but enhances your overall wellbeing and confidence."
                </p>
                <p className="font-medium text-[#3C3C3C] mt-2">— Dr. Krishnan</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C]">A Passion for Excellence in Dentistry</h2>
              <div className="space-y-6 text-[#3C3C3C]/80">
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
      <section className="py-20 bg-[#F7D1D1]/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#3C3C3C]">Education & Credentials</h2>
            <p className="text-lg text-[#3C3C3C]/80">
              Dr. Krishnan's extensive training and credentials reflect her dedication to providing the highest standard of dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="border-none rounded-[8px] shadow-lg bg-white p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F7D1D1] flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-[#B87333]" />
                </div>
                <h3 className="text-xl font-semibold text-[#3C3C3C]">Education</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Doctor of Dental Surgery (DDS)</p>
                    <p className="text-[#3C3C3C]/70">University of California</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Master of Science in Dental Sciences</p>
                    <p className="text-[#3C3C3C]/70">Specialized research in advanced dental techniques</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Advanced Education in General Dentistry</p>
                    <p className="text-[#3C3C3C]/70">Comprehensive postgraduate training program</p>
                  </div>
                </li>
              </ul>
            </Card>

            {/* Professional Memberships */}
            <Card className="border-none rounded-[8px] shadow-lg bg-white p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F7D1D1] flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-[#B87333]" />
                </div>
                <h3 className="text-xl font-semibold text-[#3C3C3C]">Professional Memberships</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">American Dental Association</p>
                    <p className="text-[#3C3C3C]/70">Active member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">California Dental Association</p>
                    <p className="text-[#3C3C3C]/70">Active member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Academy of General Dentistry</p>
                    <p className="text-[#3C3C3C]/70">Commitment to continuing education</p>
                  </div>
                </li>
              </ul>
            </Card>

            {/* Certifications & Training */}
            <Card className="border-none rounded-[8px] shadow-lg bg-white p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F7D1D1] flex items-center justify-center mr-4">
                  <CalendarClock className="h-6 w-6 text-[#B87333]" />
                </div>
                <h3 className="text-xl font-semibold text-[#3C3C3C]">Specialized Training</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Invisalign® Certified Provider</p>
                    <p className="text-[#3C3C3C]/70">Clear aligner orthodontic treatment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Advanced Facial Aesthetics</p>
                    <p className="text-[#3C3C3C]/70">Non-invasive facial rejuvenation treatments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#B87333] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#3C3C3C]">Advanced Cosmetic Dentistry</p>
                    <p className="text-[#3C3C3C]/70">Comprehensive smile makeover techniques</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C]">My Philosophy & Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F7D1D1] flex items-center justify-center mr-4 mt-1">
                    <Heart className="h-5 w-5 text-[#B87333]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#3C3C3C] mb-2">Patient-Centered Care</h3>
                    <p className="text-[#3C3C3C]/80 leading-relaxed">
                      I believe in treating the person, not just their teeth. Every treatment plan is tailored to your unique needs, preferences, and goals. My team and I take the time to listen, understand your concerns, and address any anxiety you might have about dental procedures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F7D1D1] flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#B87333]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#3C3C3C] mb-2">Preventive Focus</h3>
                    <p className="text-[#3C3C3C]/80 leading-relaxed">
                      The best dental treatment is prevention. I emphasize patient education and preventive care to help you maintain optimal oral health and avoid costly procedures down the road. Regular checkups, cleanings, and early intervention are the foundation of my practice.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F7D1D1] flex items-center justify-center mr-4 mt-1">
                    <GraduationCap className="h-5 w-5 text-[#B87333]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#3C3C3C] mb-2">Lifelong Learning</h3>
                    <p className="text-[#3C3C3C]/80 leading-relaxed">
                      Dentistry is constantly evolving, and I'm committed to staying at the forefront of new techniques and technologies. I regularly attend continuing education courses to ensure that my patients receive the most advanced and effective treatments available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] rounded-[16px] overflow-hidden shadow-md">
                <Image
                  src="/images/dr-krishnan-with-patient.jpg"
                  alt="Dr. Krishnan with a patient"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[16px] overflow-hidden shadow-md mt-12">
                <Image
                  src="/images/dr-krishnan-working.jpg"
                  alt="Dr. Krishnan working"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[16px] overflow-hidden shadow-md">
                <Image
                  src="/images/dr-krishnan-consultation.jpg"
                  alt="Dr. Krishnan in consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[16px] overflow-hidden shadow-md mt-12">
                <Image
                  src="/images/dr-krishnan-office.jpg"
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
      <section className="py-20 bg-[#F7D1D1]/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C] text-center">Beyond the Dental Chair</h2>
            <p className="text-lg text-[#3C3C3C]/80 leading-relaxed mb-12 text-center">
              When I'm not at the office, I enjoy spending time with my family, staying active in the Brea community, and pursuing various interests that keep me balanced and energized.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#F7D1D1] flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icon-community.png"
                    alt="Community icon"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-medium text-[#3C3C3C] mb-2">Community Involvement</h3>
                <p className="text-[#3C3C3C]/80">
                  Active participation in local community service and dental health education programs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#F7D1D1] flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icon-family.png"
                    alt="Family icon"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-medium text-[#3C3C3C] mb-2">Family Life</h3>
                <p className="text-[#3C3C3C]/80">
                  Cherishing time with family and enjoying the beautiful Southern California outdoors.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#F7D1D1] flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/icon-interests.png"
                    alt="Interests icon"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-medium text-[#3C3C3C] mb-2">Personal Interests</h3>
                <p className="text-[#3C3C3C]/80">
                  Passionate about cooking, reading, and staying active through hiking and yoga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F7D1D1] to-[#D8A7B1]/70 rounded-[16px] p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C]">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-lg text-[#3C3C3C]/80 max-w-2xl mx-auto mb-8">
              I look forward to meeting you and helping you achieve your best smile. New patients are always welcome at our practice.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-[#B87333] hover:bg-[#B87333]/90 text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto shadow-sm"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Schedule an Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="bg-white border-[#3C3C3C]/20 text-[#3C3C3C] hover:bg-white/80 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 