import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-charcoal mb-6">
                Professional Dental Care in 
                <span className="text-accent-mint block">Brea, California</span>
              </h1>
              <p className="hero-subtitle mb-8">
                Comprehensive dental services including preventive care, cosmetic dentistry, and restorative treatments. Experienced team using modern technology.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+17149900204">
                  <Button className="btn btn-outline btn-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gail-photos/gailwithpatient1.jpg"
                  alt="Dr. Krishnan providing dental care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">Our Services</h2>
            <p className="text-large text-slate-600 max-w-2xl mx-auto">
              Complete dental care for patients and families.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preventive Care */}
            <Card className="card card-hover-lift overflow-hidden group bg-white">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/dental/stockimagetoothpaste.jpg"
                  alt="Preventive Dental Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Preventive Care</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Regular cleanings, exams, and preventive treatments to maintain oral health.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Comprehensive Exams
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Professional Cleanings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Digital X-Rays
                  </li>
                </ul>
              </div>
            </Card>

            {/* Cosmetic Dentistry */}
            <Card className="card card-hover-lift overflow-hidden group bg-white">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/dental/stockimageteeth.jpg"
                  alt="Cosmetic Dentistry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Cosmetic Dentistry</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Enhance your smile with professional cosmetic treatments.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Teeth Whitening
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Porcelain Veneers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Invisalign®
                  </li>
                </ul>
              </div>
            </Card>

            {/* Restorative Dentistry */}
            <Card className="card card-hover-lift overflow-hidden group bg-white">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/dental/stockimagechair.jpg"
                  alt="Restorative Dentistry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Restorative Dentistry</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Restore function and comfort to damaged or missing teeth.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Dental Implants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Crowns & Bridges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Root Canal Therapy
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mint-gradient rounded-2xl card-padding shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-white mb-6">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto text-large">
                Contact our office to schedule an appointment and discuss your dental needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button className="bg-white text-charcoal hover:bg-white/90 btn-lg shadow-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Appointment
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button className="border-2 border-white text-white hover:bg-white hover:text-charcoal btn-lg shadow-lg transition-all duration-300" variant="outline">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
