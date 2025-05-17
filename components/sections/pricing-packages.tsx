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
    <section className="py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Investment in Your Confidence</h2>
            <p className="text-charcoal/80 text-lg">
              Our BTL Exion treatments are customized to your unique needs. Pricing varies based on treatment areas and your specific goals.
            </p>
          </div>
          
          <div className="bg-background rounded-[12px] p-8 shadow-lg mb-12 border-l-4 border-accent-mint">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Personalized Consultation</h3>
                <p className="text-charcoal/70">
                  Start with a comprehensive assessment with Dr. Krishnan to create your customized treatment plan.
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-accent-mint font-medium text-xl">$150</p>
                <p className="text-sm text-charcoal/70">(Applied to your treatment package)</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-background rounded-[12px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${pkg.isPopular ? 'border-accent-mint' : 'border-light-mint/50'} relative`}>
                {pkg.isPopular && (
                  <div className="absolute top-4 right-4 bg-accent-mint text-white text-sm rounded-full px-3 py-1 font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${pkg.isPopular ? 'bg-primary-mint/10' : ''}`}>
                  <h3 className="text-xl font-semibold text-charcoal">{pkg.title}</h3>
                  <p className="text-2xl font-bold text-accent-mint mt-3">{pkg.priceRange}</p>
                  <p className="text-charcoal/70 mt-2">{pkg.description}</p>
                </div>
                <div className="p-8 border-t border-light-mint/30">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                        <span className="text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-charcoal/80 text-lg italic mb-8">
              Financing options are available. We also accept HSA/FSA for qualified treatments.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap"
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