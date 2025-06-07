import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Phone } from "lucide-react";

export default function AestheticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-charcoal mb-6">
                BTL Aesthetic Treatments in
                <span className="text-accent-mint block">Brea, California</span>
              </h1>
              <p className="hero-subtitle mb-8">
                Non-surgical facial treatments using FDA-cleared BTL technology. EmFace, Exion RF, and Exion Plasma available.
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
                  src="/images/btl/hero-aesthetics.jpg"
                  alt="BTL Aesthetic treatments"
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
            <h2 className="text-charcoal mb-4">Available Treatments</h2>
            <p className="text-large text-slate-600 max-w-2xl mx-auto">
              FDA-cleared non-surgical treatments for facial rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Emface */}
            <Card className="card card-hover-lift overflow-hidden group bg-white">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/btl/hero-aesthetics.jpg"
                  alt="Emface Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Emface™ Treatment</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Non-surgical face lifting using electromagnetic technology.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    No needles or injections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Zero downtime
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Natural-looking results
                  </li>
                </ul>
              </div>
            </Card>

            {/* Exion RF */}
            <Card className="card card-hover-lift overflow-hidden group bg-white">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/btl/exion-rf.jpg"
                  alt="Exion RF Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Exion RF Treatment</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Radiofrequency technology for skin tightening and rejuvenation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Stimulates collagen production
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Improves skin texture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Reduces fine lines
                  </li>
                </ul>
              </div>
            </Card>

            {/* Exion Plasma */}
            <Card className="card card-hover-lift overflow-hidden group bg-white">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/btl/exion-plasma.jpg"
                  alt="Exion Plasma Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Exion Plasma</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Plasma technology for skin resurfacing and renewal.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Cellular-level resurfacing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Enhanced skin brightness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-2" />
                    Progressive improvement
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
                Ready to Learn More?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto text-large">
                Schedule a consultation to discuss which treatment is right for you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button className="bg-white text-charcoal hover:bg-white/90 btn-lg shadow-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Consultation
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
