"use client";
export const dynamic = "force-dynamic";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Changed imports to fix React Server Components bundler error
import dynamicImport from "next/dynamic";

// Use explicit import() function syntax and ensure ssr options are clearly set
const FAQAccordionSection = dynamicImport(
  () => import("@/components/sections/faq-accordion-section"), 
  { ssr: false }
);

const TransformationGallery = dynamicImport(
  () => import("@/components/sections/transformation-gallery"), 
  { ssr: false }
);

const TreatmentOptions = dynamicImport(
  () => import("@/components/sections/treatment-options"), 
  { ssr: false }
);

const PricingPackages = dynamicImport(
  () => import("@/components/sections/pricing-packages"), 
  { ssr: false }
);

export default function BTLPage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section - Simplified */}
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
                <Button className="bg-accent-mint text-white hover:bg-accent-mint/90 rounded-full px-6 py-3 text-base md:text-lg w-full sm:w-auto min-h-[54px]">
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
              <Image 
                src="/images/gail-photos/gailwithpatient1.5.jpg" 
                alt="Dr. Gail Ann Krishnan"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem-Solution Bridge - Simple Static Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Problem Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6 md:mb-8">Are You Noticing...</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">1</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Fine lines and wrinkles becoming more visible?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">2</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Skin losing its firmness and elasticity?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">3</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Uneven skin tone or texture concerns?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">4</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Sun damage or age spots?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">5</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Tired-looking skin despite your best efforts?</p>
                </li>
              </ul>
            </div>
            
            {/* Solution Column - Simplified with static content */}
            <div className="mt-8 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6 md:mb-8">BTL Exion Can Help You...</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Smooth away fine lines and wrinkles naturally</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Restore youthful firmness and elasticity</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Achieve more even skin tone and refined texture</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Reduce visible sun damage and age spots</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary-mint/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-base md:text-lg">Revitalize your appearance without surgery or injections</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid - Simple Static Implementation */}
      <section className="py-12 md:py-16 bg-light-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal text-center mb-8 md:mb-12">Key Benefits of BTL Exion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-4 md:mb-6">
                <Image 
                  src="/images/btl/1.png" 
                  alt="No Surgery, No Needles"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-2 md:mb-3">No Surgery, No Needles</h3>
              <p className="text-sm md:text-base text-charcoal/70">Experience advanced rejuvenation without incisions, injections, or extended recovery time.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-4 md:mb-6">
                <Image 
                  src="/images/btl/2.png" 
                  alt="Clinically Validated Technology"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-2 md:mb-3">Clinically Validated Technology</h3>
              <p className="text-sm md:text-base text-charcoal/70">BTL Exion's FDA-cleared technology stimulates your body's natural collagen and elastin production.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-4 md:mb-6">
                <Image 
                  src="/images/btl/3.png" 
                  alt="Fast, Comfortable Sessions"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-2 md:mb-3">Fast, Comfortable Sessions</h3>
              <p className="text-sm md:text-base text-charcoal/70">Most treatments take just 30 minutes, easily fitting into your busy schedule.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-4 md:mb-6">
                <Image 
                  src="/images/btl/4.png" 
                  alt="Results That Look Like You"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-2 md:mb-3">Results That Look Like You</h3>
              <p className="text-sm md:text-base text-charcoal/70">Achieve a refreshed, youthful appearance that enhances—rather than alters—your natural beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Use client components for more complex sections */}
      <section id="transformation-gallery">
        <TransformationGallery />
      </section>

      <section>
        <TreatmentOptions />
      </section>

      <section>
        <PricingPackages />
      </section>

      <section>
        <FAQAccordionSection />
      </section>

      {/* 9. Final CTA - Simple Static Content */}
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
                  className="bg-white text-accent-mint hover:bg-white/90 rounded-full px-6 py-3 text-base md:text-lg w-full sm:w-auto min-h-[54px]"
                >
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-6 py-3 text-base md:text-lg w-full sm:w-auto min-h-[54px]"
                >
                  Call (714) 990-0204
                </Button>
              </Link>
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