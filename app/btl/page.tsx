"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TransformationGallery from "@/components/sections/transformation-gallery";
import TreatmentOptions from "@/components/sections/treatment-options";
import FAQAccordionSection from "@/components/sections/faq-accordion-section";

// Next.js configuration for server-side rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BTLPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <h1 className="text-charcoal mb-6">
                BTL Exion Treatments
              </h1>
              <p className="hero-subtitle mb-6">
                FDA-cleared non-surgical facial treatments using radiofrequency and plasma technology.
              </p>
              <p className="text-large mb-8">
                Treatments available: Emface, Exion RF, Exion Plasma.
              </p>
              
              <div className="flex flex-col gap-6">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#transformation-gallery">
                  <Button className="btn btn-outline btn-lg w-full sm:w-auto">
                    See Transformation Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-full order-first lg:order-last">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <Image 
                  src="/images/btl/hero-aesthetics.jpg" 
                  alt="BTL Exion Aesthetic Treatments"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="glass-effect p-4 rounded-xl shadow-soft border-l-4 border-primary-mint absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                <div className="flex items-center gap-2">
                  <span className="text-charcoal text-sm font-medium whitespace-nowrap">Expert Aesthetic Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Bridge */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Problem Column */}
            <div>
              <h2 className="text-charcoal mb-8">Are You Noticing...</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">1</span>
                  </div>
                  <p className="text-large">Fine lines and wrinkles becoming more visible?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">2</span>
                  </div>
                  <p className="text-large">Skin losing its firmness and elasticity?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">3</span>
                  </div>
                  <p className="text-large">Uneven skin tone or texture concerns?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">4</span>
                  </div>
                  <p className="text-large">Sun damage or age spots?</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">5</span>
                  </div>
                  <p className="text-large">Tired-looking skin despite your best efforts?</p>
                </li>
              </ul>
            </div>
            
            {/* Solution Column */}
            <div>
              <h2 className="text-charcoal mb-8">BTL Exion Can Help You...</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-large">Smooth away fine lines and wrinkles naturally</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-large">Restore youthful firmness and elasticity</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-large">Achieve more even skin tone and refined texture</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-large">Reduce visible sun damage and age spots</p>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-mint/20 flex items-center justify-center mr-5 mt-0.5 flex-shrink-0">
                    <span className="text-primary-mint font-medium">✓</span>
                  </div>
                  <p className="text-large">Revitalize your appearance without surgery or injections</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-charcoal mb-6">
              Key Benefits of BTL Exion
            </h2>
            <p className="text-large">
              Experience the advantages of our state-of-the-art non-surgical aesthetic treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            <div className="card card-hover-lift card-padding border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/1.png" 
                  alt="No Surgery, No Needles"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-charcoal mb-4">No Surgery, No Needles</h3>
              <p className="text-body">
                Experience advanced rejuvenation without incisions, injections, or extended recovery time.
              </p>
            </div>
            
            <div className="card card-hover-lift card-padding border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/2.png" 
                  alt="Clinically Validated Technology"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-charcoal mb-4">Clinically Validated Technology</h3>
              <p className="text-body">
                BTL Exion's FDA-cleared technology stimulates your body's natural collagen and elastin production.
              </p>
            </div>
            
            <div className="card card-hover-lift card-padding border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/3.png" 
                  alt="Fast, Comfortable Sessions"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-charcoal mb-4">Fast, Comfortable Sessions</h3>
              <p className="text-body">
                Most treatments take just 30 minutes, easily fitting into your busy schedule.
              </p>
            </div>
            
            <div className="card card-hover-lift card-padding border border-light-mint">
              <div className="w-16 h-16 rounded-full bg-light-mint flex items-center justify-center mb-6">
                <Image 
                  src="/images/btl/4.png" 
                  alt="Results That Look Like You"
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-charcoal mb-4">Results That Look Like You</h3>
              <p className="text-body">
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
        <FAQAccordionSection />
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mint-gradient rounded-2xl card-padding shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-white mb-6">
                Ready to Transform Your Look?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto text-large">
                Schedule your consultation with Dr. Krishnan today and discover how BTL Exion treatments can help you look and feel your best.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button className="bg-accent-mint hover:bg-accent-mint-dark text-white btn-lg w-full sm:w-auto shadow-sm">
                  Book Your Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white/90 border-charcoal/20 text-charcoal hover:text-charcoal hover:bg-white btn-lg w-full sm:w-auto"
                >
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-large">
                "My goal is to help you achieve natural-looking rejuvenation that enhances your confidence."
              </p>
              <p className="font-medium text-white mt-3 text-large">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 