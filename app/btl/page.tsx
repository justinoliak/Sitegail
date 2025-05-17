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
      {/* 1. Hero Section - Update to match home page styling */}
      <section className="pt-40 pb-32 bg-gradient-to-b from-light-mint to-background relative">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold text-charcoal leading-tight mb-6">
                Reveal Your Most Radiant Self With Advanced Aesthetic Treatments
              </h1>
              <p className="text-charcoal/80 leading-relaxed mb-10 text-lg">
                Experience the transformative power of BTL Exion technology—the gold standard in non-invasive facial rejuvenation and skin treatments
              </p>
              <p className="text-charcoal/80 mb-10 text-lg">
                Natural-looking results • No downtime • Customized to your skin's needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact">
                  <Button className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#transformation-gallery">
                  <Button variant="outline" className="border-primary-mint text-charcoal hover:bg-primary-mint/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap">
                    See Transformation Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-full order-first lg:order-last">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-xl">
                <Image 
                  src="/images/gail-photos/gailwithpatient1.5.jpg" 
                  alt="Dr. Gail Ann Krishnan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border-l-4 border-primary-mint">
                <div className="flex items-center gap-2">
                  <span className="text-charcoal text-sm font-medium whitespace-nowrap">Expert Aesthetic Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem-Solution Bridge - Update to match home page style */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Problem Column */}
            <div>
              <h2 className="text-3xl font-semibold text-charcoal mb-8">Are You Noticing...</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">1</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Fine lines and wrinkles becoming more visible?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">2</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Skin losing its firmness and elasticity?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">3</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Uneven skin tone or texture concerns?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">4</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Sun damage or age spots?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">5</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Tired-looking skin despite your best efforts?</p>
                </li>
              </ul>
            </div>
            
            {/* Solution Column */}
            <div>
              <h2 className="text-3xl font-semibold text-charcoal mb-8">BTL Exion Can Help You...</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Smooth away fine lines and wrinkles naturally</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Restore youthful firmness and elasticity</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Achieve more even skin tone and refined texture</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Reduce visible sun damage and age spots</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-charcoal/80 text-lg">Revitalize your appearance without surgery or injections</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid - Update to match home page style */}
      <section className="py-32 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">
              Key Benefits of BTL Exion
            </h2>
            <p className="text-charcoal/80 text-lg">
              Experience the advantages of our state-of-the-art non-surgical aesthetic treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-background rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/1.png" 
                  alt="No Surgery, No Needles"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">No Surgery, No Needles</h3>
              <p className="text-charcoal/70">
                Experience advanced rejuvenation without incisions, injections, or extended recovery time.
              </p>
            </div>
            
            <div className="bg-background rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/2.png" 
                  alt="Clinically Validated Technology"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">Clinically Validated Technology</h3>
              <p className="text-charcoal/70">
                BTL Exion's FDA-cleared technology stimulates your body's natural collagen and elastin production.
              </p>
            </div>
            
            <div className="bg-background rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/3.png" 
                  alt="Fast, Comfortable Sessions"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">Fast, Comfortable Sessions</h3>
              <p className="text-charcoal/70">
                Most treatments take just 30 minutes, easily fitting into your busy schedule.
              </p>
            </div>
            
            <div className="bg-background rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/4.png" 
                  alt="Results That Look Like You"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal">Results That Look Like You</h3>
              <p className="text-charcoal/70">
                Achieve a refreshed, youthful appearance that enhances—rather than alters—your natural beauty.
              </p>
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

      {/* 9. Final CTA - Update to match home page style */}
      <section className="py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mint-gradient rounded-[24px] p-12 md:p-16 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                Ready to Transform Your Look?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto text-lg">
                Schedule your consultation with Dr. Krishnan today and discover how BTL Exion treatments can help you look and feel your best.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button 
                  className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Book Your Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white/90 border-charcoal/20 text-charcoal hover:bg-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-lg">
                "My goal is to help you achieve natural-looking rejuvenation that enhances your confidence."
              </p>
              <p className="font-medium text-white mt-3 text-lg">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 