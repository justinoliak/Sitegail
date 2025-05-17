"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPackages() {
  const packages = [
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
  ];

  return (
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
            {packages.map((pkg, index) => (
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
  );
} 