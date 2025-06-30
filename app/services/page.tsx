import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Phone, Star, Shield, Heart, Smile } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Star className="w-4 h-4 text-accent-mint mr-2" />
                15+ Years of Excellence • Welcoming New Patients
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6">
                Complete Dental Care That
                <span className="text-accent-mint block">Transforms Lives</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Dr. Gail Krishnan combines advanced dental technology with personalized care to restore your smile, boost your confidence, and improve your overall health.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Your Visit
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
                  src="/images/office1.png"
                  alt="Dr. Krishnan's modern dental office"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Comprehensive Dental Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From routine cleanings that prevent problems to smile makeovers that boost confidence, 
              we offer complete dental care using the latest technology and techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Card className="group bg-white border-0 rounded-2xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-mint to-accent-mint"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-accent-mint" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Preventive Care</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Prevention is the foundation of oral health. Our comprehensive preventive care helps you avoid dental problems before they start, saving you time, money, and discomfort.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Comprehensive Dental Exams</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Complete oral health assessment including digital X-rays, oral cancer screening, and bite analysis.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Professional Deep Cleanings</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Thorough plaque and tartar removal, followed by polishing and fluoride treatment for optimal protection.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Digital X-Rays & Diagnostics</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Advanced imaging technology for early detection of cavities, bone loss, and other oral health issues.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Gum Disease Prevention</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Periodontal screenings and treatments to prevent and manage gum disease before it affects your overall health.</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                  Schedule Your Cleaning <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>

            <Card className="group bg-white border-0 rounded-2xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-mint to-primary-mint"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smile className="w-6 h-6 text-accent-mint" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Cosmetic Dentistry</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transform your smile and boost your confidence with our advanced cosmetic treatments. We create natural-looking, beautiful results that enhance your unique features.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Professional Teeth Whitening</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Safe, effective whitening treatments that can brighten your smile by several shades in just one visit.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Custom Porcelain Veneers</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Ultra-thin shells that cover imperfections and create a perfect, Hollywood-worthy smile that looks completely natural.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Complete Smile Makeovers</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Comprehensive treatment plans combining multiple procedures to achieve your dream smile transformation.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Tooth-Colored Fillings</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Mercury-free composite fillings that blend seamlessly with your natural tooth color for invisible repairs.</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                  Book Smile Consultation <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>

            <Card className="group bg-white border-0 rounded-2xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-mint via-accent-mint to-primary-mint"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-accent-mint" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Restorative Dentistry</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Restore your smile's function, health, and beauty with our advanced restorative treatments. We use the latest technology to provide lasting solutions for damaged or missing teeth.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Dental Implants & All-on-4</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Permanent tooth replacement solutions that look, feel, and function like natural teeth, including full-mouth rehabilitation.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Custom Crowns & Bridges</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Precision-crafted restorations that restore strength and appearance to damaged or missing teeth with perfect fit and color match.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Root Canal Therapy</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Gentle, pain-free treatment to save infected teeth and eliminate pain while preserving your natural tooth structure.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                      <h4 className="font-semibold text-charcoal">Dentures & Partials</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">Comfortable, natural-looking removable solutions for multiple missing teeth with secure fit and confident function.</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                  Restore Your Smile <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-mint">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Experience Exceptional Dental Care?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover why families throughout Brea trust Dr. Krishnan for their dental health needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/contact">
              <Button className="btn btn-primary btn-lg shadow-lg">
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Appointment
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
            <span className="text-sm font-medium text-slate-700">New patients welcome • Most insurance accepted</span>
          </div>
        </div>
      </section>
    </div>
  );
}
