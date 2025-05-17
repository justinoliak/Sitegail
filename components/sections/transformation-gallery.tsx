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
      before: "/images/emface/gailemface2.jpg",
      after: "/images/emface/gailemface2.2.jpg"
    }
  ];
  
  return (
    <section className="py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-charcoal">
            Real Results from Dr. Krishnan's Patients
          </h2>
          <p className="text-charcoal/80 text-lg">
            See the transformative potential of BTL Exion treatments. These results represent typical outcomes, though individual experiences may vary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="bg-background rounded-[12px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70 mb-4">{item.description}</p>
              </div>
              
              {/* Before/After Images side by side */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium rounded-md shadow-sm">Before</div>
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
                  <div className="absolute top-3 right-3 bg-accent-mint/90 text-white px-3 py-1 text-sm font-medium rounded-md shadow-sm">After</div>
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
          <p className="text-charcoal/80 text-lg italic mb-8">Results may vary. Images show typical results after completing the recommended treatment protocol.</p>
          <Link href="/contact">
            <Button 
              className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 whitespace-nowrap"
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