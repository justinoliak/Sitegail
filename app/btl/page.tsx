import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowUpRight, ChevronDown, Star, Shield, Phone } from "lucide-react";
import FAQAccordion from "@/components/ui/faq-accordion";
import { ResponsiveImage } from "@/components/ui/responsive-image";

export default function BTLPage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section - Emotional Appeal */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative bg-light-mint/40">
        <div className="absolute inset-0 bg-gradient-to-b from-light-mint/70 to-transparent z-0"></div>
        
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

      {/* 5. Before & After Gallery - Using regular images instead of BeforeAfterSlider */}
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
                title: "Facial Contouring",
                description: "4 Sessions, 10 Weeks • Patient in her 30s",
                before: "/images/emface/emface2.jpg",
                after: "/images/emface/emface2.2.jpg"
              }
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-charcoal">{item.title}</h3>
                  <p className="text-sm text-charcoal/70">{item.description}</p>
                </div>
                
                {/* Before/After Images side by side */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 text-xs font-medium rounded">Before</div>
                    <ResponsiveImage
                      src={item.before}
                      alt={`Before ${item.title}`}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                      aspectRatio="3/4"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 right-2 bg-primary-mint/80 text-white px-2 py-1 text-xs font-medium rounded">After</div>
                    <ResponsiveImage
                      src={item.after}
                      alt={`After ${item.title}`}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                      aspectRatio="3/4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-charcoal/80 text-sm italic mb-4">Results may vary. Images show typical results after completing the recommended treatment protocol.</p>
            <Link href="/contact">
              <Button 
                className="bg-accent-mint text-white hover:bg-accent-mint/90 rounded-full px-6 py-3 inline-flex items-center"
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Treatment Options */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Customized Treatments for Your Specific Needs</h2>
            <p className="text-base md:text-lg text-charcoal/80">
              Dr. Krishnan will create a personalized treatment plan tailored to your unique concerns, goals, and skin condition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "EmFace",
                description: "Non-invasive facial treatment that lifts, tightens and tones facial muscles for a more youthful appearance",
                benefits: ["Reduces fine lines and wrinkles", "Lifts and tones facial muscles", "Zero downtime"],
                image: "/images/btl/Emface_PIC_Model-3625_ENUS100.jpg"
              },
              {
                title: "Skin Rejuvenation",
                description: "Advanced treatments to improve skin texture, tone and restore a healthy, vibrant glow to your complexion",
                benefits: ["Improves skin tone and texture", "Reduces sun damage", "Minimizes pore appearance"],
                image: "/images/btl/Emface_PIC_Model-3651_ENUS100.jpg"
              },
              {
                title: "Combination Therapy",
                description: "Customized protocol combining multiple modalities for enhanced results targeting your unique concerns",
                benefits: ["Comprehensive approach", "Enhanced results", "Personalized to your needs"],
                image: "/images/btl/Emface_PIC_Unit_9560_ENUS100.jpg"
              }
            ].map((treatment, index) => (
              <div key={index} className="group rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <ResponsiveImage
                    src={treatment.image}
                    alt={treatment.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">{treatment.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 border-t-4 border-primary-mint">
                  <p className="text-charcoal/80 mb-4">{treatment.description}</p>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-accent-mint mr-2 flex-shrink-0" />
                        <span className="text-sm text-charcoal/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pricing & Packages */}
      <section className="py-12 md:py-16 bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Investment in Your Confidence</h2>
              <p className="text-base md:text-lg text-charcoal/80">
                Our BTL Exion treatments are customized to your unique needs. Pricing varies based on treatment areas and your specific goals.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8 border-l-4 border-accent-mint">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Personalized Consultation</h3>
                  <p className="text-charcoal/80">
                    Start with a comprehensive assessment with Dr. Krishnan to create your customized treatment plan.
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-accent-mint font-medium text-xl">$150</p>
                  <p className="text-sm text-charcoal/70">(Applied to your treatment package)</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Single Session",
                  priceRange: "$400-750",
                  description: "Perfect for maintenance or trying a treatment",
                  features: [
                    "One full treatment session",
                    "Personalized settings",
                    "Post-treatment care instructions"
                  ]
                },
                {
                  title: "Package of 4",
                  priceRange: "$1,500-2,500",
                  description: "Our most popular option",
                  features: [
                    "Four treatment sessions",
                    "15% savings vs. single sessions",
                    "Complimentary skin analysis",
                    "Custom home care plan"
                  ],
                  isPopular: true
                },
                {
                  title: "Package of 6",
                  priceRange: "$2,200-3,600",
                  description: "Maximum results",
                  features: [
                    "Six treatment sessions",
                    "20% savings vs. single sessions",
                    "Complimentary skin analysis",
                    "Custom home care plan",
                    "Free follow-up visit"
                  ]
                }
              ].map((pkg, index) => (
                <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border ${pkg.isPopular ? 'border-accent-mint' : 'border-light-mint/50'} relative`}>
                  {pkg.isPopular && (
                    <div className="absolute top-4 right-4 bg-accent-mint text-white text-xs rounded-full px-3 py-1 font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${pkg.isPopular ? 'bg-primary-mint/10' : ''}`}>
                    <h3 className="text-xl font-semibold text-charcoal">{pkg.title}</h3>
                    <p className="text-2xl font-bold text-accent-mint mt-2">{pkg.priceRange}</p>
                    <p className="text-sm text-charcoal/70 mt-1">{pkg.description}</p>
                  </div>
                  <div className="p-6 border-t border-light-mint/30">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-charcoal/70 mb-4 italic">
                Financing options are available. We also accept HSA/FSA for qualified treatments.
              </p>
              <Link href="/contact">
                <Button 
                  className="bg-accent-mint text-white hover:bg-accent-mint/90 rounded-full px-6 py-3 inline-flex items-center"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Frequently Asked Questions</h2>
              <p className="text-base md:text-lg text-charcoal/80">
                We're here to address your concerns about BTL Exion treatments
              </p>
            </div>
            
            <FAQAccordion 
              faqs={[
                {
                  question: "How many treatments will I need?",
                  answer: "Most patients see optimal results after 4-6 treatments, spaced 1-2 weeks apart. However, Dr. Krishnan will create a personalized treatment plan based on your specific concerns and goals during your consultation."
                },
                {
                  question: "Is there any downtime after BTL Exion treatments?",
                  answer: "BTL Exion treatments are designed to be non-invasive with minimal to no downtime. Most patients return to their normal activities immediately after treatment. Some may experience mild redness that typically subsides within a few hours."
                },
                {
                  question: "When will I see results?",
                  answer: "Some patients notice improvements after their first session, but optimal results typically develop over 2-3 months as your body naturally produces new collagen and elastin. Results continue to improve with each treatment session."
                },
                {
                  question: "Are BTL Exion treatments painful?",
                  answer: "Most patients describe the treatments as comfortable with sensations of warmth and gentle muscle contractions. The BTL Exion system includes built-in cooling technology to maintain comfort throughout your session."
                },
                {
                  question: "How long do results last?",
                  answer: "Results can last 6-12 months or longer, depending on your age, skin condition, and lifestyle factors. Maintenance treatments every 3-6 months can help extend your results."
                },
                {
                  question: "Is BTL Exion safe for all skin types?",
                  answer: "Yes, BTL Exion treatments are safe and effective for all skin types and tones. During your consultation, Dr. Krishnan will assess your skin condition to ensure the treatment is appropriate for your specific situation."
                }
              ]} 
            />
            
            <div className="mt-8 text-center">
              <p className="mb-4 text-charcoal/80">Don't see your question answered here?</p>
              <Link href="/contact" className="text-accent-mint hover:underline font-medium inline-flex items-center">
                Contact us for more information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-mint to-accent-mint text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Ready to Transform Your Look?</h2>
            <p className="text-base md:text-lg mb-8 text-white/90">
              Schedule your consultation with Dr. Krishnan today and discover how BTL Exion treatments can help you look and feel your best.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-white text-accent-mint hover:bg-white/90 rounded-full px-6 py-3 text-base md:text-lg w-full sm:w-auto min-h-[54px] touch-manipulation"
                >
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-6 py-3 text-base md:text-lg w-full sm:w-auto min-h-[54px] touch-manipulation"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <p className="mt-8 text-white/80 italic">
              "My goal is to help you achieve natural-looking rejuvenation that enhances your confidence."<br />
              — Dr. Gail Ann Krishnan
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 