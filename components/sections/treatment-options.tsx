"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function TreatmentOptions() {
  const treatments = [
    {
      id: "exion-rf",
      name: "BTL Exion RF",
      description: "Non-invasive solution for skin tightening and wrinkle reduction using radiofrequency energy",
      benefits: [
        "Stimulates collagen and elastin production",
        "Reduces appearance of fine lines and wrinkles",
        "Improves skin texture and tone",
        "No downtime, return to activities immediately"
      ],
      image: "/images/btl/exion-rf.jpg"
    },
    {
      id: "exion-plasma",
      name: "BTL Exion Plasma",
      description: "Advanced plasma technology that rejuvenates skin with microbeams of plasma energy",
      benefits: [
        "Targeted treatment for stubborn skin concerns",
        "Addresses age spots and sun damage",
        "Enhances skin luminosity",
        "Promotes natural healing responses"
      ],
      image: "/images/btl/exion-plasma.jpg"
    }
  ];
  
  return (
    <section className="py-32 bg-light-mint">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-charcoal">BTL Exion Treatment Options</h2>
          <p className="text-charcoal/80 text-lg">
            Discover our range of non-invasive aesthetic treatments customized to address your specific skin concerns
          </p>
        </div>

        <div className="space-y-16">
          {treatments.map((treatment, index) => (
            <div key={treatment.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{treatment.name}</h3>
                <p className="text-charcoal/70 mb-8">{treatment.description}</p>
                
                <div className="space-y-4 mb-8">
                  {treatment.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                      <p className="text-charcoal/80">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <Button 
                    className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 