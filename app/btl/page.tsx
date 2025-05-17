import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowUpRight, ChevronDown, Star, Shield, Phone } from "lucide-react";
import FAQAccordion from "@/components/ui/faq-accordion";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

export default function BTLPage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section - Emotional Appeal */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-light-mint/70 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('/images/btl/BTL-Aesthetics_PIC_All-App_Blue-Transparent_ENUS100.png')" }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold text-charcoal leading-tight mb-4 md:mb-6">
              Reveal Your Most Radiant Self With Advanced Aesthetic Treatments
            </h1>
            <p className="text-lg md:text-xl text-charcoal/90 leading-relaxed mb-4 md:mb-6">
              Experience the transformative power of BTL Exion technology—the gold standard in non-invasive facial rejuvenation and skin treatments
            </p>
            <p className="text-base md:text-lg text-charcoal/80 mb-6 md:mb-8">
              Natural-looking results • No downtime • Customized to your skin's needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="bg-accent-mint text-white hover:bg-accent-mint/90 rounded-full px-6 py-3 text-base md:text-lg w-full sm:w-auto min-h-[54px] touch-manipulation">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#transformation-gallery" className="w-full sm:w-auto">
                <Button variant="link" className="text-charcoal hover:text-primary-mint min-h-[44px] w-full sm:w-auto">
                  See Transformation Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <ResponsiveImage 
                src="/images/gail-photos/gailwithpatient1.5.jpg" 
                alt="Dr. Gail Ann Krishnan"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                isLCP={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem-Solution Bridge */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Problem Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6 md:mb-8">Are You Noticing...</h2>
              <ul className="space-y-4">
                {[
                  "Fine lines and wrinkles becoming more visible?",
                  "Skin losing its firmness and elasticity?",
                  "Uneven skin tone or texture concerns?",
                  "Sun damage or age spots?",
                  "Tired-looking skin despite your best efforts?"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-primary-mint font-medium">{index + 1}</span>
                    </div>
                    <p className="text-charcoal/80 text-base md:text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solution Column */}
            <div className="mt-8 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6 md:mb-8">BTL Exion Can Help You...</h2>
              <ul className="space-y-4">
                {[
                  "Smooth away fine lines and wrinkles naturally",
                  "Restore youthful firmness and elasticity",
                  "Achieve more even skin tone and refined texture",
                  "Reduce visible sun damage and age spots",
                  "Revitalize your appearance without surgery or injections"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-primary-mint" />
                    </div>
                    <p className="text-charcoal/80 text-base md:text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="py-12 md:py-16 bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal text-center mb-8 md:mb-12">Key Benefits of BTL Exion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-light-mint touch-manipulation">
                <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-4 md:mb-6">
                  <Image 
                    src={`/images/btl/${index + 1}.png`} 
                    alt={benefit.title}
                    width={32} 
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-charcoal/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Showcase */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ResponsiveImage
                  src="/images/btl/Emface_PIC_Unit_9670_ENUS100.jpg"
                  alt="BTL Exion Technology"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  aspectRatio="3/2"
                  containerClassName="w-full h-auto"
                  enableBlur={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal">
                The Science Behind Your Transformation
              </h2>
              <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
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
                    <div className="min-w-[40px] h-10 rounded-full bg-light-mint flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-accent-mint font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal">{tech.title}</h4>
                      <p className="text-sm text-charcoal/80">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-charcoal/90 italic border-l-4 border-primary-mint pl-4 mt-6">
                Dr. Krishnan has undergone extensive training in the BTL Exion technology, ensuring you receive the safest, most effective treatments possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Before & After Gallery with new BeforeAfterSlider */}
      <section id="transformation-gallery" className="py-12 md:py-16 bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-charcoal mb-4 md:mb-6">
              Real Results from Dr. Krishnan's Patients
            </h2>
            <p className="text-base md:text-lg text-charcoal/80">
              See the transformative potential of BTL Exion treatments. These results represent typical outcomes, though individual experiences may vary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                id: 1,
                title: "Facial Rejuvenation",
                description: "4 Sessions, 8 Weeks • Patient in her 50s",
                before: "/images/emface/emface1.jpg",
                after: "/images/emface/emface1.2.jpg"
              },
              {
                id: 2,
                title: "Skin Tightening",
                description: "3 Sessions, 6 Weeks • Patient in his 40s",
                before: "/images/emface/gailemface1.jpg",
                after: "/images/emface/gailemface1.2.jpg"
              },
              {
                id: 3,
                title: "Full Face Rejuvenation",
                description: "4 Sessions, 8 Weeks • Patient in her 60s",
                before: "/images/emface/gailemface2.jpg",
                after: "/images/emface/gailemface2.2.jpg"
              }
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                  beforeAlt={`Before ${item.title} Treatment`}
                  afterAlt={`After ${item.title} Treatment`}
                  width={400}
                  height={300}
                  className="h-64 md:h-60"
                />
                
                <div className="p-4">
                  <h3 className="font-medium text-charcoal">{item.title}</h3>
                  <p className="text-sm text-charcoal/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-accent-mint text-white hover:bg-accent-mint/90 rounded-full px-6 py-3 min-h-[54px] touch-manipulation">
                See Which Treatment Is Right For You
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Treatment Options - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-charcoal mb-4 md:mb-6">
              Customized Treatments For Your Unique Needs
            </h2>
            <p className="text-base md:text-lg text-charcoal/80">
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
              <div key={index} className="bg-gradient-to-br from-white to-light-mint/10 rounded-xl shadow-md overflow-hidden border border-light-mint touch-manipulation">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{treatment.headline}</h3>
                  <p className="text-charcoal/80 mb-6">{treatment.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-accent-mint uppercase tracking-wider">Best For</h4>
                      <p className="text-charcoal/80 text-sm">{treatment.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-accent-mint uppercase tracking-wider">Typical Results</h4>
                      <p className="text-charcoal/80 text-sm">{treatment.results}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-accent-mint uppercase tracking-wider">Session Information</h4>
                      <p className="text-charcoal/80 text-sm">{treatment.sessions}</p>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-accent-mint hover:text-accent-mint/80 font-medium min-h-[44px] py-2">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Tap-to-Call Action */}
      <div className="md:hidden bg-primary-mint py-4 px-4">
        <a href="tel:+17149900204" className="flex items-center justify-center gap-3 min-h-[54px] touch-manipulation">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Phone className="h-5 w-5 text-primary-mint" />
          </div>
          <div>
            <p className="text-sm text-charcoal/80">Questions? Call us now</p>
            <p className="text-lg font-medium text-charcoal">(714) 990-0204</p>
          </div>
        </a>
      </div>

      {/* 7. Why Choose Us */}
      <section className="py-12 md:py-16 bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl">
            <div className="lg:w-1/2 bg-primary-mint p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-8">
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
                      <Check className="h-5 w-5 text-accent-mint" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal">{point.title}</h3>
                      <p className="text-charcoal/80 text-sm">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/80 py-2 px-4 rounded-full text-xs font-medium text-charcoal">
                  BTL Certified Provider
                </div>
                <div className="bg-white/80 py-2 px-4 rounded-full text-xs font-medium text-charcoal">
                  American Academy of Facial Esthetics Member
                </div>
                <div className="bg-white/80 py-2 px-4 rounded-full text-xs font-medium text-charcoal">
                  Advanced Aesthetic Training
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-accent-mint text-white hover:bg-accent-mint/90 rounded-full min-h-[54px] touch-manipulation">
                    Meet Dr. Krishnan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <ResponsiveImage
                src="/images/gail-photos/gailwithpatient1.3.jpg"
                alt="Dr. Krishnan consulting with a patient"
                width={800}
                height={600}
                containerClassName="h-64 md:h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal text-center mb-8 md:mb-12">
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
              <Link href="/contact" className="text-accent-mint hover:text-accent-mint/80 font-medium inline-block min-h-[44px] py-2">
                Have another question? Contact us for answers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      <section className="py-12 bg-accent-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Ready to Discover Your Skin's True Potential?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book your consultation today to learn how BTL Exion treatments can help you achieve your aesthetic goals.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-accent-mint hover:bg-white/90 rounded-full px-8 py-3 text-base md:text-lg font-medium w-full sm:w-auto min-h-[54px] touch-manipulation">
                Schedule Your Consultation Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 