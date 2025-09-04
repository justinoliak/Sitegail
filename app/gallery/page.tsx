import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Clock, Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Smile Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              See the amazing transformations and beautiful results from our dental treatments
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="flex-1 flex items-center justify-center py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12 shadow-soft border-0 bg-white">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-8">
              <Clock className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We're putting together an amazing collection of before and after photos showcasing our patients' beautiful smile transformations. Check back soon to see the incredible results!
            </p>

            <div className="bg-light-mint/50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                What to Expect in Our Gallery:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div>• Smile Makeovers</div>
                <div>• Dental Implants</div>
                <div>• Invisalign® Results</div>
                <div>• Porcelain Veneers</div>
                <div>• Crown & Bridge Work</div>
                <div>• Professional Whitening</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn btn-primary btn-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Your Consultation
                </Button>
              </Link>
              <Link href="tel:+17149900204">
                <Button className="btn btn-outline btn-lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (714) 990-0204
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}