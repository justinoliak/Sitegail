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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Zap className="w-4 h-4 text-accent-mint mr-2" />
                FDA-Cleared Technology • Non-Surgical Results
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6">
                Advanced Aesthetic Treatments
                <span className="text-accent-mint block">Transform Your Confidence</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Experience the latest in non-surgical facial rejuvenation with BTL's advanced technology. Dr. Krishnan offers cutting-edge treatments that lift, tighten, and rejuvenate your skin with zero downtime and natural-looking results.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Consultation
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
                  src="/images/EMFACE MACHINE/Emface_PIC_Model-3625_ENUS100.jpg"
                  alt="BTL Emface machine - advanced facial rejuvenation technology"
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

      {/* Before/After Results */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Real Patient Results</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              See the remarkable transformations our patients have achieved with BTL Emface treatments. These authentic before and after photos demonstrate the natural-looking lifting and rejuvenation possible with our advanced technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden border-0 shadow-soft">
              <div className="relative">
                <Image
                  src="/images/EMFACE before/after/Emface_PIC_Ba-card-female-face-048_ENUS101.png"
                  alt="Emface before and after results - facial lifting and wrinkle reduction"
                  width={400}
                  height={300}
                  className="w-full h-64 object-contain bg-slate-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-mint text-white text-xs font-semibold rounded-full">
                    4 TREATMENTS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">Facial Lifting & Contouring</h3>
                <p className="text-sm text-slate-600">Enhanced jawline definition and overall facial lifting achieved through targeted muscle stimulation.</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft">
              <div className="relative">
                <Image
                  src="/images/EMFACE before/after/Emface_PIC_Ba-card-female-face-083_ENUS100.png"
                  alt="Emface before and after results - wrinkle reduction and skin tightening"
                  width={400}
                  height={300}
                  className="w-full h-64 object-contain bg-slate-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-mint text-white text-xs font-semibold rounded-full">
                    4 TREATMENTS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">Wrinkle Reduction</h3>
                <p className="text-sm text-slate-600">Significant reduction in fine lines and wrinkles with improved skin texture and tone.</p>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft">
              <div className="relative">
                <Image
                  src="/images/EMFACE before/after/Emface_PIC_Ba-card-female-face-097_ENUS100.png"
                  alt="Emface before and after results - overall facial rejuvenation"
                  width={400}
                  height={300}
                  className="w-full h-64 object-contain bg-slate-50"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-mint text-white text-xs font-semibold rounded-full">
                    4 TREATMENTS
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">Complete Facial Rejuvenation</h3>
                <p className="text-sm text-slate-600">Comprehensive improvement in muscle tone, skin quality, and overall facial appearance.</p>
              </div>
            </Card>
          </div>

          <div className="bg-light-mint/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-charcoal mb-4">Clinical Study Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent-mint mb-2">37%</div>
                <p className="text-sm text-slate-600">Average wrinkle reduction after 4 treatments</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-mint mb-2">30%</div>
                <p className="text-sm text-slate-600">Increase in facial muscle tone</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-mint mb-2">95%</div>
                <p className="text-sm text-slate-600">Patient satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">State-of-the-Art Technology</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dr. Krishnan uses the most advanced BTL Emface system, featuring cutting-edge applicators and precise energy delivery for optimal patient comfort and results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Advanced Applicator Design</h3>
                <p className="text-slate-600 mb-6">
                  The BTL Emface system features specialized applicators that conform perfectly to facial contours, ensuring optimal energy delivery and patient comfort throughout the treatment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-charcoal mb-2">Facial Applicators</h4>
                    <p className="text-sm text-slate-600">Targeted muscle stimulation for lifting and toning</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-charcoal mb-2">Submental Option</h4>
                    <p className="text-sm text-slate-600">Specialized treatment for double chin reduction</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Precision Control System</h3>
                <p className="text-slate-600">
                  Our advanced control system allows Dr. Krishnan to customize treatment parameters for each patient, ensuring safe, effective, and comfortable treatments every time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/EMFACE MACHINE/Emface_PIC_Unit_9547_ENUS100.jpg"
                    alt="BTL Emface control unit - precision technology"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/EMFACE MACHINE/Emface_PIC_Model-Submentum-7513_ENUS100.png"
                    alt="Emface submental applicator for double chin treatment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/EMFACE MACHINE/Emface_PIC_Unit_9670_ENUS100.jpg"
                    alt="BTL Emface applicators and system components"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/EMFACE MACHINE/Emface_PIC_Model-3651_ENUS100.jpg"
                    alt="Patient receiving Emface treatment with facial applicators"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent-mint" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">HIFES™ Technology</h3>
                <p className="text-sm text-slate-600">High-Intensity Facial Electrical Stimulation targets all 43 facial muscles for comprehensive lifting and toning</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-mint" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Synchronized RF</h3>
                <p className="text-sm text-slate-600">Radiofrequency energy stimulates collagen production and improves skin texture simultaneously</p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-mint" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Dual-Energy Delivery</h3>
                <p className="text-sm text-slate-600">Unique combination of technologies works together for superior results in just 20 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">What to Expect During Your EmFace Experience</h2>
              <p className="text-lg text-slate-600 mb-8">
                EmFace treatments are designed to be comfortable and relaxing. Most patients describe the sensation as a gentle facial massage with a warming feeling.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-mint text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-semibold">1</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Consultation & Assessment</h3>
                    <p className="text-slate-600">Dr. Krishnan evaluates your facial structure, discusses your aesthetic goals, and creates a personalized treatment plan tailored to your unique needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-mint text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-semibold">2</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Comfortable Treatment</h3>
                    <p className="text-slate-600">You'll relax as specialized applicators are placed on your face. Feel gentle muscle contractions and warming sensations during the 20-minute session - many patients find it quite relaxing.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-mint text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-semibold">3</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Immediate Return to Activities</h3>
                    <p className="text-slate-600">No downtime required. Apply makeup, exercise, or return to work immediately. Some patients notice a subtle glow right after treatment.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-mint text-white flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-semibold">4</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Progressive Results</h3>
                    <p className="text-slate-600">Results develop gradually over 2-3 months as collagen production increases and muscle tone improves. Best results achieved after completing the full 4-treatment series.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-charcoal mb-6">Treatment Investment</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-charcoal">EmFace Package</h4>
                    <span className="text-2xl font-bold text-accent-mint">$3,500</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>4 Treatment Sessions</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultation Included</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follow-up Assessment</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Results Guarantee</span>
                      <span>✓</span>
                    </div>
                  </div>
                </div>

                <div className="bg-accent-mint/10 rounded-xl p-4">
                  <p className="text-sm text-charcoal text-center">
                    <strong>Payment Plans Available</strong><br/>
                    Starting at $292/month with 0% APR financing
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg w-full shadow-lg">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Free Consultation
                  </Button>
                </Link>
                <p className="text-xs text-slate-500 mt-2">No obligation • Expert assessment included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get answers to common questions about EmFace treatments and what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-3">Is EmFace painful?</h3>
              <p className="text-slate-600 text-sm">Not at all. Most patients find EmFace treatments comfortable and relaxing, describing the sensation as a gentle facial massage with mild warming. No numbing is required.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-3">How long do results last?</h3>
              <p className="text-slate-600 text-sm">Results can last 12-18 months. The longevity depends on individual factors like age, skin condition, and lifestyle. Maintenance treatments every 6-12 months can help extend results.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-3">Who is a good candidate?</h3>
              <p className="text-slate-600 text-sm">EmFace is ideal for adults experiencing mild to moderate facial aging, loss of muscle tone, or those seeking preventive care. A consultation will determine if you're a good candidate.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-3">Can I combine with other treatments?</h3>
              <p className="text-slate-600 text-sm">Yes\! EmFace pairs well with other aesthetic treatments. Dr. Krishnan can create a comprehensive treatment plan that may include other modalities for optimal results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-light-mint">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Discover Your Best Self?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule your complimentary consultation with Dr. Krishnan to create a personalized treatment plan that helps you look and feel your absolute best.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/contact">
              <Button className="btn btn-primary btn-lg shadow-lg">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:+17149900204">
              <Button className="btn btn-outline btn-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call (714) 990-0204
              </Button>
            </a>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20">
            <Star className="w-4 h-4 text-accent-mint mr-2" />
            <span className="text-sm font-medium text-slate-700">Complimentary consultations • FDA-cleared treatments only</span>
          </div>
        </div>
      </section>
    </div>
  );
}
EOF < /dev/null