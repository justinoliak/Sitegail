import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Award, Heart, CalendarClock, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-charcoal mb-6">Meet Dr. Gail Krishnan</h1>
            <p className="hero-subtitle mx-auto">
              Dr. Gail Ann Krishnan, DDS, MS. General dentistry practice serving Brea and surrounding communities since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & Bio Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src="/images/Gail/1.png"
                  alt="Dr. Gail Krishnan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="glass-effect p-6 rounded-2xl shadow-lg max-w-sm mt-8">
                <p className="text-slate-600 italic">
                  "My goal is to provide comprehensive dental care that not only improves your oral health but enhances your overall wellbeing and confidence."
                </p>
                <p className="font-semibold text-charcoal mt-3">— Dr. Krishnan</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-charcoal mb-8">Education and Experience</h2>
              <div className="space-y-6">
                <p className="text-large">
                  Dr. Gail Krishnan brings over 15 years of experience to her dental practice in Brea, California. After earning her Doctor of Dental Surgery (DDS) degree and Master of Science (MS) in Dental Sciences, she provides exceptional comprehensive care to her patients.
                </p>
                <p className="text-large">
                  Her approach to dentistry combines technical precision with genuine compassion. Dr. Krishnan believes in creating partnerships with her patients, educating them about their oral health, and developing personalized treatment plans.
                </p>
                <p className="text-large">
                  As a board-licensed general dentist, Dr. Krishnan offers a wide range of services from preventive care to cosmetic and restorative procedures. Her commitment to continuing education ensures she stays at the forefront of dental advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-charcoal mb-6">Education & Credentials</h2>
            <p className="text-large">
              Dr. Krishnan's extensive training and credentials reflect her dedication to providing the highest standard of dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-white rounded-3xl p-8 shadow-soft card-hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-charcoal">Education</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Doctor of Dental Surgery</p>
                    <p className="text-slate-600 text-sm">Comprehensive dental education</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Master of Science</p>
                    <p className="text-slate-600 text-sm">Advanced dental sciences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Postgraduate Training</p>
                    <p className="text-slate-600 text-sm">General dentistry residency</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white rounded-3xl p-8 shadow-soft card-hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-charcoal">Memberships</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">American Dental Association</p>
                    <p className="text-slate-600 text-sm">Active member</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">California Dental Association</p>
                    <p className="text-slate-600 text-sm">State organization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Academy of General Dentistry</p>
                    <p className="text-slate-600 text-sm">Continuing education focus</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications & Training */}
            <div className="bg-white rounded-3xl p-8 shadow-soft card-hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mr-4">
                  <CalendarClock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-charcoal">Specializations</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Invisalign® Provider</p>
                    <p className="text-slate-600 text-sm">Clear aligner treatment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Facial Aesthetics</p>
                    <p className="text-slate-600 text-sm">BTL aesthetic treatments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Cosmetic Dentistry</p>
                    <p className="text-slate-600 text-sm">Smile makeover expertise</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg">
                <Image
                  src="/images/philosophy-approach.jpg"
                  alt="Dr. Krishnan professional portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg md:mt-12">
                <Image
                  src="/images/Gail/Photo May 19 2025, 12 12 41 PM.jpg"
                  alt="Dr. Krishnan in her practice"
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
            src="/images/Gail/1.png"
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
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Community Involvement</h3>
              <p className="text-charcoal/80 text-lg">
                Active participation in local community service and dental health education programs.
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm rounded-[24px] p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-5xl mb-6">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Family Life</h3>
              <p className="text-charcoal/80 text-lg">
                Cherishing time with family and enjoying the beautiful Southern California outdoors.
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm rounded-[24px] p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Personal Interests</h3>
              <p className="text-charcoal/80 text-lg">
                Passionate about cooking, reading, and staying active through hiking and yoga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mint-gradient rounded-2xl card-padding shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-white mb-6">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto text-large">
                I look forward to meeting you and helping you achieve your best smile. New patients are always welcome at our practice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button className="bg-accent-mint hover:bg-accent-mint-dark text-white btn-lg w-full sm:w-auto shadow-sm">
                  <Calendar className="mr-2 h-5 w-5" /> Schedule an Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="bg-white/90 border-charcoal/20 text-charcoal hover:bg-white btn-lg w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-large">
                "We promise to make your dental experience as comfortable and stress-free as possible."
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