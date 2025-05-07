import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowUpRight, ChevronDown, Star, Shield } from "lucide-react";
import FAQAccordion from "@/components/ui/faq-accordion";

export default function BTLPage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section - Emotional Appeal */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7D1D1]/70 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('/images/btl-hero.jpg')" }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#3C3C3C] leading-tight mb-6">
              Reveal Your Most Radiant Self With Advanced Aesthetic Treatments
            </h1>
            <p className="text-xl text-[#3C3C3C]/90 leading-relaxed mb-6">
              Experience the transformative power of BTL Exion technology—the gold standard in non-invasive facial rejuvenation and skin treatments
            </p>
            <p className="text-lg text-[#3C3C3C]/80 mb-8">
              Natural-looking results • No downtime • Customized to your skin's needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#B87333] text-white hover:bg-[#B87333]/90 rounded-full px-6 py-3 text-lg">
                  Schedule Your Complimentary Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#transformation-gallery">
                <Button variant="link" className="text-[#3C3C3C] hover:text-[#D8A7B1]">
                  See Transformation Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/images/dr-krishnan.jpg" 
                alt="Dr. Gail Ann Krishnan"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem-Solution Bridge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Problem Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3C3C3C] mb-8">Are You Noticing...</h2>
              <ul className="space-y-4">
                {[
                  "Fine lines and wrinkles becoming more visible?",
                  "Skin losing its firmness and elasticity?",
                  "Uneven skin tone or texture concerns?",
                  "Sun damage or age spots?",
                  "Tired-looking skin despite your best efforts?"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#D8A7B1]/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-[#D8A7B1] font-medium">{index + 1}</span>
                    </div>
                    <p className="text-[#3C3C3C]/80 text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solution Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3C3C3C] mb-8">BTL Exion Can Help You...</h2>
              <ul className="space-y-4">
                {[
                  "Smooth away fine lines and wrinkles naturally",
                  "Restore youthful firmness and elasticity",
                  "Achieve more even skin tone and refined texture",
                  "Reduce visible sun damage and age spots",
                  "Revitalize your appearance without surgery or injections"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#D8A7B1]/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-[#D8A7B1]" />
                    </div>
                    <p className="text-[#3C3C3C]/80 text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="py-16 bg-[#F7D1D1]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#3C3C3C] text-center mb-12">Key Benefits of BTL Exion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "No Surgery, No Needles",
                description: "Experience advanced rejuvenation without incisions, injections, or extended recovery time.",
                icon: "non-invasive"
              },
              {
                title: "Clinically Validated Technology",
                description: "BTL Exion's FDA-cleared technology stimulates your body's natural collagen and elastin production.",
                icon: "science"
              },
              {
                title: "Fast, Comfortable Sessions",
                description: "Most treatments take just 30 minutes, easily fitting into your busy schedule.",
                icon: "time"
              },
              {
                title: "Results That Look Like You",
                description: "Achieve a refreshed, youthful appearance that enhances—rather than alters—your natural beauty.",
                icon: "natural"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-[#F7D1D1]/20">
                <div className="w-16 h-16 rounded-full bg-[#F7D1D1]/30 flex items-center justify-center mb-6">
                  <Image 
                    src={`/images/icon-${benefit.icon}.svg`} 
                    alt={benefit.title}
                    width={32} 
                    height={32}
                    className="text-[#B87333]"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">{benefit.title}</h3>
                <p className="text-[#3C3C3C]/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/exion-machine.jpg"
                  alt="BTL Exion Technology"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3C3C]/60 to-transparent"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-semibold text-[#3C3C3C]">
                The Science Behind Your Transformation
              </h2>
              <p className="text-lg text-[#3C3C3C]/80 leading-relaxed">
                The revolutionary BTL Exion platform combines multiple cutting-edge technologies to deliver personalized treatments for your unique skin concerns. This advanced system represents the pinnacle of aesthetic innovation, offering treatments that were once only possible with invasive procedures.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Monopolar Radiofrequency",
                    description: "Precisely delivers energy to deeper skin layers, stimulating collagen production"
                  },
                  {
                    title: "Targeted Ultrasound",
                    description: "Enhances circulation and cellular renewal for improved skin quality"
                  },
                  {
                    title: "AI-Controlled Delivery",
                    description: "Ensures optimal treatment parameters tailored to your specific needs"
                  },
                  {
                    title: "Multi-Applicator System",
                    description: "Allows customized treatments for different areas and concerns"
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#F7D1D1]/30 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-[#B87333] font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#3C3C3C]">{tech.title}</h4>
                      <p className="text-sm text-[#3C3C3C]/80">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-[#3C3C3C]/90 italic border-l-4 border-[#D8A7B1] pl-4 mt-6">
                Dr. Krishnan has undergone extensive training in the BTL Exion technology, ensuring you receive the safest, most effective treatments possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Before & After Gallery */}
      <section id="transformation-gallery" className="py-16 bg-[#F7D1D1]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C] mb-6">
              Real Results from Dr. Krishnan's Patients
            </h2>
            <p className="text-[#3C3C3C]/80 text-lg">
              See the transformative potential of BTL Exion treatments. These results represent typical outcomes, though individual experiences may vary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-2">
                  <div className="relative h-48">
                    <Image 
                      src={`/images/exion-before-${num}.jpg`}
                      alt="Before Treatment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#3C3C3C]/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                      Before
                    </div>
                  </div>
                  <div className="relative h-48">
                    <Image 
                      src={`/images/exion-after-${num}.jpg`}
                      alt="After Treatment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#D8A7B1]/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#3C3C3C]">
                    {num === 1 ? "Facial Rejuvenation" : num === 2 ? "Skin Tightening" : "Full Face Rejuvenation"}
                  </h3>
                  <p className="text-sm text-[#3C3C3C]/70">
                    {num === 1 ? "4 Sessions, 8 Weeks • Patient in her 50s" : 
                     num === 2 ? "3 Sessions, 6 Weeks • Patient in his 40s" : 
                     "4 Sessions, 8 Weeks • Patient in her 60s"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#B87333] text-white hover:bg-[#B87333]/90 rounded-full px-6 py-3">
                See Which Treatment Is Right For You
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Treatment Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C] mb-6">
              Customized Treatments For Your Unique Needs
            </h2>
            <p className="text-lg text-[#3C3C3C]/80">
              Our BTL Exion platform offers versatile treatment options that can be personalized to address your specific concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Facial Rejuvenation",
                headline: "Turn Back the Clock Naturally",
                description: "Restore youthful firmness and reduce fine lines with our signature facial rejuvenation treatments.",
                bestFor: "Fine lines, wrinkles, skin laxity, and overall facial aging",
                results: "Smoother, firmer skin with visible reduction in fine lines and improved contours",
                sessions: "4 weekly sessions recommended for optimal results"
              },
              {
                title: "RF Microneedling",
                headline: "Advanced Skin Resurfacing",
                description: "Experience the power of RF microneedling with minimal discomfort and exceptional results.",
                bestFor: "Acne scars, skin texture concerns, enlarged pores, and early signs of aging",
                results: "Improved skin texture, reduced scarring, and refined pore appearance",
                sessions: "3-4 sessions spaced 4-6 weeks apart for optimal results"
              },
              {
                title: "Skin Tightening",
                headline: "Restore Firmness and Definition",
                description: "Non-surgical skin tightening that delivers visible lifting and contouring effects.",
                bestFor: "Jawline definition, neck laxity, and mild to moderate skin sagging",
                results: "More defined contours, firmer skin, and a more youthful profile",
                sessions: "4 weekly sessions recommended for optimal results"
              }
            ].map((treatment, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#F7D1D1]/10 rounded-xl shadow-md overflow-hidden border border-[#F7D1D1]/20">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3C3C3C] mb-2">{treatment.headline}</h3>
                  <p className="text-[#3C3C3C]/80 mb-6">{treatment.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-[#B87333] uppercase tracking-wider">Best For</h4>
                      <p className="text-[#3C3C3C]/80 text-sm">{treatment.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#B87333] uppercase tracking-wider">Typical Results</h4>
                      <p className="text-[#3C3C3C]/80 text-sm">{treatment.results}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#B87333] uppercase tracking-wider">Session Information</h4>
                      <p className="text-[#3C3C3C]/80 text-sm">{treatment.sessions}</p>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-[#B87333] hover:text-[#B87333]/80 font-medium">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-16 bg-[#F7D1D1]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl">
            <div className="lg:w-1/2 bg-[#F7D1D1] p-8 md:p-12">
              <h2 className="text-3xl font-semibold text-[#3C3C3C] mb-8">
                Why Choose Dr. Gail Ann for Your Aesthetic Treatments?
              </h2>
              
              <ul className="space-y-6">
                {[
                  {
                    title: "Advanced Certification",
                    description: "Dr. Krishnan has completed specialized training in BTL Exion technology and advanced aesthetic treatments."
                  },
                  {
                    title: "Personalized Approach",
                    description: "Your treatment plan is customized to your unique needs, goals, and skin characteristics."
                  },
                  {
                    title: "Dental + Aesthetic Expertise",
                    description: "Experience the unique advantage of comprehensive facial analysis from both dental and aesthetic perspectives."
                  },
                  {
                    title: "Comfortable Environment",
                    description: "Enjoy your treatments in our luxurious, private setting designed for your comfort."
                  },
                  {
                    title: "Honest Recommendations",
                    description: "Receive candid guidance about which treatments will truly benefit you—and which ones won't."
                  }
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <Check className="h-5 w-5 text-[#B87333]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#3C3C3C]">{point.title}</h3>
                      <p className="text-[#3C3C3C]/80 text-sm">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/80 py-2 px-4 rounded-full text-xs font-medium text-[#3C3C3C]">
                  BTL Certified Provider
                </div>
                <div className="bg-white/80 py-2 px-4 rounded-full text-xs font-medium text-[#3C3C3C]">
                  American Academy of Facial Esthetics Member
                </div>
                <div className="bg-white/80 py-2 px-4 rounded-full text-xs font-medium text-[#3C3C3C]">
                  Advanced Aesthetic Training
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-[#B87333] text-white hover:bg-[#B87333]/90 rounded-full">
                    Meet Dr. Krishnan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <Image
                src="/images/dr-consultation.jpg"
                alt="Dr. Krishnan consulting with a patient"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#3C3C3C] text-center mb-12">
              Common Questions About BTL Exion Treatments
            </h2>
            
            <FAQAccordion 
              faqs={[
                {
                  question: "How many sessions will I need to see results?",
                  answer: "Most patients begin seeing improvement after their first or second treatment, with optimal results typically visible after completing a series of 3-4 sessions. The exact number of sessions will be determined during your consultation based on your specific concerns and goals."
                },
                {
                  question: "Is there any downtime after treatments?",
                  answer: "BTL Exion treatments require minimal to no downtime. You may experience mild redness for a few hours after treatment, but most patients return to their normal activities immediately. This makes it perfect for those with busy lifestyles."
                },
                {
                  question: "Are BTL Exion treatments painful?",
                  answer: "Most patients describe BTL Exion treatments as comfortable and even relaxing. You may feel a warming sensation and mild tingling during the procedure. Our technicians will ensure your comfort throughout the treatment."
                },
                {
                  question: "How long do results last?",
                  answer: "Results can last 1-2 years or longer, depending on your age, skin condition, and lifestyle factors. We recommend maintenance sessions every 6-12 months to preserve and enhance your results."
                },
                {
                  question: "Who is an ideal candidate for these treatments?",
                  answer: "BTL Exion treatments are suitable for adults of all ages who want to improve skin texture, reduce fine lines, or address mild to moderate skin laxity without surgery. The treatments work well on all skin types, though certain medical conditions may affect candidacy, which we'll discuss during your consultation."
                },
                {
                  question: "How soon will I see results?",
                  answer: "Some patients notice improvement immediately after the first treatment, while others see gradual changes over the course of their treatment series. Collagen remodeling continues for 2-3 months after your final session, with improvements continuing to develop during this time."
                },
                {
                  question: "Can I combine BTL Exion with other treatments?",
                  answer: "Yes, BTL Exion treatments can be complemented by other aesthetic procedures for enhanced results. Dr. Krishnan will create a comprehensive treatment plan that may include combinations with other treatments for optimal outcomes."
                },
                {
                  question: "What makes BTL Exion different from other technologies?",
                  answer: "BTL Exion's unique combination of monopolar radiofrequency, targeted ultrasound, and AI-controlled delivery provides more consistent, effective results than single-technology treatments. The system's advanced applicators allow for customized treatments that precisely target your specific concerns."
                }
              ]}
            />
            
            <div className="text-center mt-8">
              <Link href="/contact" className="text-[#B87333] hover:text-[#B87333]/80 font-medium">
                Have another question? Contact us for answers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      <section className="py-12 bg-[#B87333]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Begin Your Transformation Journey Today
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule your complimentary consultation to discover how BTL Exion treatments can help you achieve your aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-[#B87333] hover:bg-white/90 rounded-full px-8 py-3 text-lg font-medium">
                  Book Your Consultation Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="text-white text-lg flex items-center justify-center">
                Or call us directly at (714) 990-0204
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials & Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#3C3C3C] text-center mb-12">
            What Our Patients Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "I was skeptical about non-surgical treatments, but after my BTL Exion sessions with Dr. Krishnan, I'm a believer. My skin looks years younger, and the compliments haven't stopped coming!",
                name: "Jennifer S.",
                age: 52
              },
              {
                quote: "Dr. Krishnan took the time to understand my concerns and created a personalized treatment plan. The results exceeded my expectations—natural-looking but definitely noticeable!",
                name: "Michael T.",
                age: 47
              },
              {
                quote: "The comfort of the treatments and the lack of downtime were game-changers for me. I could literally go back to work after my sessions with no one knowing I'd had anything done.",
                name: "Sarah K.",
                age: 38
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#F7D1D1]/20 relative">
                <div className="absolute top-4 right-4 text-[#F7D1D1] opacity-20 text-4xl font-serif">❝</div>
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-[#3C3C3C]/80 relative z-10 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-6">
                    <p className="font-medium text-[#3C3C3C]">- {testimonial.name}, Age {testimonial.age}</p>
                    <div className="flex mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-[#B87333] fill-[#B87333]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <p className="text-3xl font-semibold text-[#B87333]">100+</p>
              <p className="text-[#3C3C3C]/80">Successful Treatments Performed</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#B87333]">95%</p>
              <p className="text-[#3C3C3C]/80">Patient Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#B87333]">4.9/5</p>
              <p className="text-[#3C3C3C]/80">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Financing & Pricing Information */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#3C3C3C] text-center mb-6">
              Transparent Pricing & Flexible Payment Options
            </h2>
            <p className="text-[#3C3C3C]/80 text-center mb-12">
              We believe in transparent pricing and making advanced aesthetic treatments accessible. Your exact treatment cost will be provided during your consultation, based on your specific needs and goals.
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-[#3C3C3C] mb-6">Treatment Starting Prices</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#F7D1D1]/30">
                  <span className="text-[#3C3C3C]">Facial Rejuvenation</span>
                  <span className="font-medium text-[#B87333]">From $X per session</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F7D1D1]/30">
                  <span className="text-[#3C3C3C]">RF Microneedling</span>
                  <span className="font-medium text-[#B87333]">From $X per session</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F7D1D1]/30">
                  <span className="text-[#3C3C3C]">Skin Tightening</span>
                  <span className="font-medium text-[#B87333]">From $X per session</span>
                </div>
              </div>
              
              <div className="mt-8 bg-[#F7D1D1]/10 p-4 rounded-lg">
                <p className="text-[#3C3C3C] font-medium">Package Information</p>
                <p className="text-[#3C3C3C]/80 text-sm">Save up to 20% with our treatment packages. Ask about our current specials during your consultation.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-[#3C3C3C] mb-6">Payment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-[#F7D1D1]/30 rounded-lg text-center">
                  <p className="font-medium text-[#3C3C3C]">Major Credit Cards</p>
                  <p className="text-sm text-[#3C3C3C]/70">All major cards accepted</p>
                </div>
                <div className="p-4 border border-[#F7D1D1]/30 rounded-lg text-center">
                  <p className="font-medium text-[#3C3C3C]">CareCredit</p>
                  <p className="text-sm text-[#3C3C3C]/70">Financing available</p>
                </div>
                <div className="p-4 border border-[#F7D1D1]/30 rounded-lg text-center">
                  <p className="font-medium text-[#3C3C3C]">Monthly Plans</p>
                  <p className="text-sm text-[#3C3C3C]/70">Starting at $X/month</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-[#3C3C3C]/70 text-sm">
                  While aesthetic treatments are typically not covered by insurance, we offer HSA/FSA payment options for eligible services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#D8A7B1] to-[#F7D1D1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Take the First Step Toward Radiant, Youthful Skin
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule your complimentary consultation with Dr. Krishnan today and receive a personalized skin analysis with our advanced imaging technology.
            </p>
            
            <div className="bg-white/20 inline-block px-6 py-3 rounded-lg mb-8">
              <p className="text-white font-medium">First-time clients: Mention this website to receive 15% off your first treatment package.</p>
            </div>
            
            <div>
              <Link href="/contact">
                <Button className="bg-[#B87333] text-white hover:bg-[#B87333]/90 rounded-full px-8 py-3 text-lg shadow-lg">
                  Book Your Complimentary Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-white mt-4">Limited appointments available this month</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 