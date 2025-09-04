import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Phone, Star, Zap, Clock, Users } from "lucide-react";

export default function AestheticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Zap className="w-4 h-4 text-accent-mint mr-2" />
                FDA-Cleared Technology • Non-Surgical Results
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6">
                Advanced Facial Aesthetics
                <span className="text-accent-mint block">Non-Surgical Rejuvenation</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Experience the latest in non-invasive facial treatments with Emface and Exion. Lift, tighten, and rejuvenate your skin with zero downtime and natural-looking results.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group shadow-lg hover:shadow-xl transition-all">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book FREE Consultation
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
                  src="/images/dr-krishnan-emface-hero.png"
                  alt="Dr. Krishnan with BTL Emface machine - advanced non-surgical facial rejuvenation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-primary-mint/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">FDA Cleared</p>
                    <p className="text-sm text-charcoal/70">BTL Emface Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Two Advanced Technologies, One Beautiful Result</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dr. Krishnan offers the latest FDA-cleared facial rejuvenation treatments designed to restore your natural beauty with no downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Emface Section */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Emface®: The 20-Minute Lift</h2>
              <p className="text-lg text-slate-600 mb-6">
                Non-surgical facial lifting and muscle toning in just 20 minutes. Emface simultaneously tightens skin and strengthens facial muscles for a natural lift.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">Lifts and contours face</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">Reduces wrinkles and fine lines</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">No downtime required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">4 sessions for optimal results</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-accent-mint mb-1">23%</div>
                <p className="text-sm text-slate-600">Average lifting effect</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/emface-machine/Emface_PIC_Model-3625_ENUS100.jpg"
                alt="BTL Emface machine providing non-surgical facial lifting treatment"
                width={500}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exion Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Exion™: Skin Rejuvenation</h2>
              <p className="text-lg text-slate-600 mb-6">
                Advanced skin hydration and texture improvement without injections. Exion naturally boosts your skin's hyaluronic acid production for youthful, glowing skin.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">Improves skin hydration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">Smooths texture and tone</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">Reduces acne scars</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-mint" />
                  <span className="text-slate-600">Multiple treatment options</span>
                </div>
              </div>
              <div className="bg-light-mint/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent-mint mb-1">224%</div>
                <p className="text-sm text-slate-600">Increase in natural hyaluronic acid</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <Card className="p-8 text-center bg-gradient-to-br from-light-mint to-primary-mint/30 border-0 shadow-soft">
                <div className="w-16 h-16 rounded-full bg-accent-mint flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">Multiple Treatment Types</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>Face hydration & volume</p>
                  <p>Skin resurfacing & texture</p>
                  <p>Body contouring</p>
                  <p>Pigmentation correction</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Comparison */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Which Treatment is Right for You?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <Card className="p-6 sm:p-8 bg-white shadow-soft border-0 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Choose Emface If You Want:</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Facial lifting and contouring</li>
                <li>• Reduced sagging and jowls</li>
                <li>• Stronger facial muscles</li>
                <li>• 20-minute sessions</li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8 bg-white shadow-soft border-0 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Choose Exion If You Want:</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Better skin texture and hydration</li>
                <li>• Reduced fine lines and scars</li>
                <li>• Natural volume restoration</li>
                <li>• Multiple treatment options</li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-8 border border-primary-mint/20">
              <p className="text-sm sm:text-base text-slate-600 mb-4">Not sure which is right for you? Many patients benefit from combining both treatments.</p>
              <p className="text-accent-mint font-semibold text-sm mb-6">⚡ Limited time: Complimentary consultation includes treatment planning</p>
              <Link href="/contact">
                <Button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all">
                  <Calendar className="mr-2 w-5 h-5" />
                  Get Your FREE Treatment Plan
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section-padding bg-gradient-to-br from-light-mint to-primary-mint/30">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">What Our Patients Say</h2>
            <p className="text-lg text-slate-600">Real experiences from satisfied patients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-soft border-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">
                "Dr. Krishnan and her staff are amazing. Professional, kind, and they do excellent work. I would recommend Dr. Krishnan to anyone who is looking for great results and a comfortable experience."
              </p>
              <div className="font-semibold text-charcoal text-sm">Randall Small</div>
              <div className="text-xs text-slate-500">Verified Patient</div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-soft border-0">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">
                "So happy I found this office! Dr. Krishnan is such a perfectionist and truly cares about her patients. The staff is amazing and super helpful. I'm so happy with my results and will definitely come back for future treatments!"
              </p>
              <div className="font-semibold text-charcoal text-sm">Lucy Amador</div>
              <div className="text-xs text-slate-500">Verified Patient</div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <span className="text-sm font-semibold text-charcoal ml-2">4.9/5 Average Rating</span>
              <span className="text-xs text-slate-500">• 200+ Happy Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Common Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="font-semibold text-charcoal mb-3">Do the treatments hurt?</h3>
              <p className="text-slate-600 text-sm">Most patients find both treatments comfortable. Emface feels like muscle contractions with gentle warmth. Exion feels like a relaxing warm massage.</p>
            </Card>

            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="font-semibold text-charcoal mb-3">How many sessions do I need?</h3>
              <p className="text-slate-600 text-sm">Typically 4 sessions for optimal results. Emface sessions are spaced 5-14 days apart, while Exion sessions are spaced 7-14 days apart.</p>
            </Card>

            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="font-semibold text-charcoal mb-3">How long do results last?</h3>
              <p className="text-slate-600 text-sm">Results typically last 12-18 months since they're based on your body's natural collagen and muscle building. Maintenance treatments help extend results.</p>
            </Card>

            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="font-semibold text-charcoal mb-3">Can I combine with Botox or fillers?</h3>
              <p className="text-slate-600 text-sm">Yes! These treatments work well with injectables and can actually enhance their effects. We recommend waiting a few weeks between treatments.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">See the Amazing Results</h2>
            <p className="text-lg text-slate-600">Real patients, real transformations with FDA-cleared treatments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Featured Before/After */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/images/emface-before-after/Emface_PIC_Ba-card-female-face-048_ENUS101.png"
                  alt="Emface before and after results - Facial lifting and contouring"
                  width={500}
                  height={350}
                  className="w-full h-64 object-contain bg-gradient-to-br from-white to-slate-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-accent-mint text-white text-sm font-semibold rounded-full shadow-lg">
                    ✨ Featured Result
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold rounded-full">
                    4 Emface Sessions
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-charcoal text-lg mb-2">Facial Lifting & Contouring</h4>
                <p className="text-slate-600 text-sm">Dramatic lifting effect with natural muscle toning</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/images/emface-before-after/Emface_PIC_Ba-card-female-face-083_ENUS100.png"
                  alt="Emface before and after results - Wrinkle reduction"
                  width={500}
                  height={350}
                  className="w-full h-64 object-contain bg-gradient-to-br from-white to-slate-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-accent-mint text-white text-sm font-semibold rounded-full shadow-lg">
                    🌟 Amazing Results
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold rounded-full">
                    4 Emface Sessions
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-charcoal text-lg mb-2">Wrinkle Reduction</h4>
                <p className="text-slate-600 text-sm">Significant improvement in fine lines and skin texture</p>
              </div>
            </Card>
          </div>

          {/* Additional Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/images/emface-before-after/Emface_PIC_Ba-card-female-face-097_ENUS100.png"
                  alt="Emface before and after results - Complete rejuvenation"
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain bg-white"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-accent-mint text-white text-xs font-semibold rounded-full">
                    4 SESSIONS
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-charcoal text-sm mb-1">Complete Rejuvenation</h4>
                <p className="text-slate-500 text-xs">Full face transformation</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/images/emface-before-after/Emface_PIC_Ba-card-female-face-098_ENUS100.png"
                  alt="Emface before and after results - Skin texture improvement"
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain bg-white"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-accent-mint text-white text-xs font-semibold rounded-full">
                    4 SESSIONS
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-charcoal text-sm mb-1">Texture Enhancement</h4>
                <p className="text-slate-500 text-xs">Improved skin quality and tone</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft bg-gradient-to-br from-primary-mint/10 to-accent-mint/10">
              <div className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent-mint flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">200+</div>
                <p className="text-sm text-slate-600 mb-2">Happy Patients</p>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                  ))}
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft bg-gradient-to-br from-light-mint to-primary-mint/20">
              <div className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent-mint flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">20 Min</div>
                <p className="text-sm text-slate-600 mb-2">Treatment Time</p>
                <p className="text-xs text-slate-500">No downtime required</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">
              *Individual results may vary. Images courtesy of BTL Aesthetics.
            </p>
            <Link href="/contact">
              <Button className="btn btn-primary hover:shadow-lg transition-all">
                <Calendar className="mr-2 w-4 h-4" />
                See Your Potential Results - Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-light-mint">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Transform Your Look?</h2>
          <p className="text-lg text-slate-600 mb-4 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who chose natural, non-surgical rejuvenation.
          </p>
          <p className="text-accent-mint font-semibold mb-8">
            💎 Complimentary consultation • No pressure • Expert guidance
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8">
            <Link href="/contact">
              <Button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Calendar className="mr-2 w-5 h-5" />
                Book Your FREE Consultation Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+17149900204">
              <Button className="btn btn-outline btn-lg hover:bg-white hover:text-accent-mint transition-all">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (714) 990-0204
              </Button>
            </a>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20">
            <Star className="w-4 h-4 text-accent-mint mr-2" />
            <span className="text-sm font-medium text-slate-700">Complimentary consultations • FDA-cleared treatments only • Same-week appointments available</span>
          </div>
        </div>
      </section>
    </div>
  );
}
