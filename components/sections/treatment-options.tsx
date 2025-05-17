"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function TreatmentOptions() {
  const treatments = [
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
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Customized Treatments for Your Specific Needs</h2>
          <p className="text-base md:text-lg text-charcoal/80">
            Dr. Krishnan will create a personalized treatment plan tailored to your unique concerns, goals, and skin condition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
  );
} 