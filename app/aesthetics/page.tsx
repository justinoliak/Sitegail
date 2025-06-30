"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Star, CheckCircle, Zap, Target, Award } from "lucide-react";

export default function BTLPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Award className="w-4 h-4 text-accent-mint mr-2" />
                FDA-Cleared • Over 1 Million Treatments Worldwide
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6">
                BTL Emface
                <span className="text-accent-mint block">Revolutionary Facial Rejuvenation</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                The world's first needle-free treatment that simultaneously lifts facial muscles and tightens skin using advanced HIFES™ and radiofrequency technology.
              </p>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8 border border-primary-mint/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-mint">37%</div>
                    <div className="text-sm text-slate-600">Wrinkle Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-mint">30%</div>
                    <div className="text-sm text-slate-600">Muscle Tone Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-mint">23%</div>
                    <div className="text-sm text-slate-600">Lifting Effect</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    <CheckCircle className="mr-2 w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+17149900204">
                  <Button className="btn btn-outline btn-lg">
                    Call (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative h-full order-first lg:order-last">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/images/office1.png" 
                  alt="BTL Emface Treatment at Dr. Krishnan's Office"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="glass-effect p-4 rounded-xl shadow-soft border-l-4 border-primary-mint absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent-mint" />
                  <span className="text-charcoal text-sm font-medium whitespace-nowrap">95% Patient Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-mint to-accent-mint rounded-2xl p-12 shadow-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Emface Difference?
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto text-lg mb-8">
              Join over 1 million people worldwide who have experienced the revolutionary benefits of Emface. Schedule your consultation with Dr. Krishnan today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Link href="/contact">
                <Button className="bg-white text-accent-mint hover:bg-white/90 btn-lg shadow-lg font-semibold">
                  <CheckCircle className="mr-2 w-5 h-5" />
                  Book Your Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 btn-lg backdrop-blur-sm"
                >
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-white/90 italic text-lg mb-3">
                "Emface represents the future of non-invasive facial rejuvenation. I'm excited to offer this breakthrough technology to help my patients achieve natural, lasting results."
              </p>
              <p className="font-semibold text-white">
                — Dr. Gail Ann Krishnan, DDS, MS
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
