"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TransformationGallery() {
  const beforeAfterItems = [
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
  ];
  
  return (
    <section className="py-12 md:py-16 bg-light-mint">
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
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-medium text-charcoal">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.description}</p>
              </div>
              
              {/* Before/After Images side by side */}
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 text-xs font-medium rounded">Before</div>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.before}
                      alt={`Before ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-primary-mint/80 text-white px-2 py-1 text-xs font-medium rounded">After</div>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.after}
                      alt={`After ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
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
  );
} 