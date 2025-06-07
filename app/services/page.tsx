import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Phone, Star, Shield, Heart, Smile } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Star className="w-4 h-4 text-accent-mint mr-2" />
                15+ Years of Excellence • Welcoming New Patients
              </div>
              <h1 className="text-charcoal mb-6">
                Complete Dental Care That
                <span className="text-accent-mint block">Transforms Lives</span>
              </h1>
              <p className="hero-subtitle mb-8">
                Dr. Gail Krishnan combines advanced dental technology with personalized care to restore your smile, boost your confidence, and improve your overall health. Experience exceptional dentistry in a comfortable, welcoming environment.
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
                  src="/images/gail-photos/gailwithpatient1.jpg"
                  alt="Dr. Krishnan providing gentle dental care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-primary-mint/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Patient-Centered Care</p>
                    <p className="text-sm text-charcoal/70">Your comfort is our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-4">Comprehensive Dental Services</h2>
            <p className="text-large text-slate-600 max-w-3xl mx-auto">
              From routine cleanings that prevent problems to smile makeovers that boost confidence, 
              we offer complete dental care using the latest technology and techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Preventive Care */}
            <Card className="group bg-white border-0 rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/dental/stockimagetoothpaste.jpg"
                  alt="Preventive dental care and cleanings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-mint" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Preventive Care</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Stay ahead of dental problems with comprehensive exams, professional cleanings, and early detection that saves you time, money, and discomfort.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Comprehensive oral health exams</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Professional deep cleanings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Digital X-rays & advanced diagnostics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Oral cancer screenings</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-accent-mint font-semibold hover:gap-2 transition-all duration-300">
                  Schedule Cleaning <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>

            {/* Cosmetic Dentistry */}
            <Card className="group bg-white border-0 rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/dental/stockimageteeth.jpg"
                  alt="Cosmetic dentistry and smile makeovers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Smile className="w-6 h-6 text-accent-mint" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Cosmetic Dentistry</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transform your smile and boost your confidence with treatments that create beautiful, natural-looking results you'll love to show off.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Professional teeth whitening</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Custom porcelain veneers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Invisalign® clear aligners</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Complete smile makeovers</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-accent-mint font-semibold hover:gap-2 transition-all duration-300">
                  Smile Consultation <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>

            {/* Restorative Dentistry */}
            <Card className="group bg-white border-0 rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/dental/stockimagechair.jpg"
                  alt="Restorative dentistry and dental implants"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-mint" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Restorative Dentistry</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Restore your ability to eat, speak, and smile with confidence using advanced treatments that feel and function like your natural teeth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Dental implants & All-on-4</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Custom crowns & bridges</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Root canal therapy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Tooth-colored fillings</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-accent-mint font-semibold hover:gap-2 transition-all duration-300">
                  Restore Your Smile <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-charcoal mb-6">Why Families Trust Dr. Krishnan</h2>
              <p className="text-large text-slate-600 mb-8">
                With over 15 years of experience and advanced training, Dr. Krishnan helps patients achieve healthier, more confident smiles using the latest technology and gentle techniques.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-light-mint flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent-mint" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Advanced Technology</h4>
                    <p className="text-sm text-slate-600">Digital X-rays, intraoral cameras, and precision tools for superior care</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-light-mint flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent-mint" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Gentle Approach</h4>
                    <p className="text-sm text-slate-600">Comfort-focused techniques that minimize discomfort and anxiety</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-light-mint flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-mint" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Insurance Friendly</h4>
                    <p className="text-sm text-slate-600">We work with most major insurance plans and offer flexible payment options</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-light-mint flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-accent-mint" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">5-Star Reviews</h4>
                    <p className="text-sm text-slate-600">Consistently rated excellent by patients for care and service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/@2.png"
                  alt="Dr. Gail Ann Krishnan providing exceptional dental care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-light-mint">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-charcoal mb-6">Ready to Experience Exceptional Dental Care?</h2>
          <p className="text-large text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover why families throughout Brea trust Dr. Krishnan for their dental health.
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
ENDFILE < /dev/null