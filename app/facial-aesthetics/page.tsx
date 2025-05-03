import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Phone, Zap, Clock, Shield, CheckCircle, Star } from "lucide-react";

export default function FacialAestheticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simplified Hero Section */}
      <section className="pt-40 pb-28 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left column - Text content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.1] tracking-tight text-foreground">
                Transform With <span className="text-primary relative">Emface™ <span className="absolute -top-1 -right-4 text-secondary text-xl">®</span></span>
              </h1>
              
              <p className="text-xl text-foreground/80 mb-10 leading-relaxed font-light max-w-lg">
                The first FDA-cleared, needle-free treatment that lifts, tones, and smooths your face for natural enhancement.
              </p>
              
              <div className="flex flex-wrap gap-5 mb-12">
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">No Needles</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Zero Downtime</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-3 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">30-Minute Sessions</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="transition-transform hover:-translate-y-1">
                  <Button size="lg" className="book-btn book-btn-lg font-bold shadow-md w-full sm:w-auto px-8 py-6 text-base">
                    Free Consultation
                  </Button>
                </Link>
                <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
                  <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto px-6 py-6 text-base">
                    <Phone className="mr-3 h-5 w-5" /> (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Right column - Hero Image with Floating Elements */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/office2.png"
                  alt="Emface facial treatment"
                  fill
                  className="object-cover object-center hover:scale-105 transition-all duration-[3s]"
                  priority
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -right-6 top-12 md:right-4 md:top-12 bg-white rounded-2xl p-4 shadow-lg w-32 md:w-40 animate-float">
                  <p className="text-3xl font-bold text-primary mb-1">23%</p>
                  <p className="text-xs text-foreground/70">More Lift</p>
                </div>
                
                <div className="absolute left-4 top-1/2 bg-white rounded-2xl p-4 shadow-lg w-32 md:w-40 animate-float animation-delay-500">
                  <p className="text-3xl font-bold text-primary mb-1">37%</p>
                  <p className="text-xs text-foreground/70">Fewer Wrinkles</p>
                </div>
                
                <div className="absolute -left-6 bottom-12 md:left-4 md:bottom-12 bg-white rounded-2xl p-4 shadow-lg w-32 md:w-40 animate-float animation-delay-1000">
                  <p className="text-3xl font-bold text-primary mb-1">30%</p>
                  <p className="text-xs text-foreground/70">Muscle Tone Gain</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-8 bottom-32 w-16 h-16 rounded-full bg-secondary/20 animate-pulse"></div>
                <div className="absolute -left-8 top-32 w-12 h-12 rounded-full bg-primary/20 animate-pulse"></div>
              </div>
              
              {/* FDA Approval Badge */}
              <div className="absolute -right-4 -bottom-4 bg-white rounded-full p-4 shadow-lg animate-pulse">
                <div className="bg-secondary/10 h-16 w-16 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs font-bold text-secondary">FDA</p>
                    <p className="text-[10px] text-secondary/80">CLEARED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emface Introduction */}
      <section className="py-28 bg-white">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Revolutionary Treatment</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Introducing Emface™</h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              The revolutionary treatment that simultaneously lifts, tones, and smooths your face using synchronized radio-frequency and high-intensity facial electrical stimulation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <h3 className="text-3xl font-semibold mb-3 text-primary">23%</h3>
              <p className="text-lg text-foreground/80">More Lift</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <h3 className="text-3xl font-semibold mb-3 text-primary">37%</h3>
              <p className="text-lg text-foreground/80">Fewer Wrinkles</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <h3 className="text-3xl font-semibold mb-3 text-primary">30%</h3>
              <p className="text-lg text-foreground/80">Muscle Tone Gain</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-muted">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">The Technology</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">How Emface Works</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A dual-action approach to facial rejuvenation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-primary" />
                  Synchronized RF Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">
                  Warms the dermis to ~42°C, triggering:
                </p>
                <ul className="mt-4 space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>26% increase in collagen production</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>200% increase in elastin production</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Sparkles className="h-6 w-6 mr-3 text-primary" />
                  HIFES Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-foreground/80 mb-6">
                  Contracts facial muscles approximately 75,000 times per session:
                </p>
                <ul className="mt-4 space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Strengthens elevator muscles</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <span>Creates structural lift</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-28 bg-white">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Your Experience</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Treatment Experience</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Quick, comfortable sessions with no downtime
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Treatment Protocol",
                description: "Four 20-minute sessions spaced one week apart",
                features: [
                  "No anesthesia needed",
                  "Zero downtime",
                  "Immediate return to activities",
                  "Make-up can be reapplied right away"
                ]
              },
              {
                title: "What to Expect",
                description: "Comfortable, spa-like experience",
                features: [
                  "Warm, relaxing sensation",
                  "Gentle muscle contractions",
                  "No pain or discomfort",
                  "Brief treatment time"
                ]
              },
              {
                title: "Results & Maintenance",
                description: "Progressive improvement over time",
                features: [
                  "Visible results after first session",
                  "Peak results at 90 days",
                  "6-12 month longevity",
                  "Simple maintenance plan"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
                <CardHeader className="pb-2 pt-6">
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-foreground/80 mb-6">{service.description}</p>
                  <ul className="space-y-3 text-foreground/80">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-28 bg-muted">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Personalized Options</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Treatment Packages</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Customized solutions for your aesthetic goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "The Perfect Pout Package",
                description: "4 HA Lip Treatments",
                details: "Stimulates hyaluronic acid production in the lips to naturally enhance volume, hydration, and definition—without needles."
              },
              {
                title: "The Snatched & Smooth Duo",
                description: "2 Emface Submentum (Chin) + 4 HA Neck Treatments",
                details: "This dynamic duo tightens under the chin and smooths neck lines—perfect for achieving that sleek, lifted look."
              },
              {
                title: "Precision Lift Package",
                description: "1 Area Emface · 4 Sessions",
                details: "Great for maintenance or first-timers. Enhance one area with precision—for a refreshed, naturally lifted look."
              },
              {
                title: "The Define & Lift Package",
                description: "2 Areas Emface · 4 Sessions",
                details: "This dual-zone treatment uses synchronized RF and HIFES™ technology to sculpt and tone key facial areas—like the cheeks, brows, or jawline—enhancing natural contours and restoring facial harmony."
              },
              {
                title: "Luxe Rejuvenation Package ✨",
                description: "3 Areas Emface · 4 Sessions",
                details: "Erase fine lines and restore youthful structure with targeted muscle stimulation for a radiant boost."
              },
              {
                title: "The Radiance Revival Package",
                description: "4 Areas Emface · 4 Sessions",
                details: "Reveal your most radiant self with full-face lifting, contouring, and muscle toning. This package gives your skin a refresh."
              }
            ].map((package_, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
                <CardHeader className="pb-2 pt-6">
                  <CardTitle className="text-2xl text-foreground">{package_.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="font-semibold text-primary mb-4">{package_.description}</p>
                  <p className="text-foreground/80 mb-6">{package_.details}</p>
                  <Button className="w-full font-bold rounded-full px-6 py-3" variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium tracking-wider mb-5 uppercase text-sm">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">Discover Your Potential</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Call today to schedule your complimentary consultation with Dr. Krishnan
            </p>
            <p className="text-lg text-foreground/80 mb-12">
              Flexible payment plans and CareCredit financing available
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-muted">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              Ready to Experience Emface?
            </h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Schedule your free consultation with Dr. Krishnan to learn if Emface is right for you. Discover how this revolutionary treatment can enhance your natural beauty without needles or surgery.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="transition-transform hover:-translate-y-1">
                <Button size="lg" className="book-btn book-btn-lg font-bold shadow-md px-8 py-6 text-base">
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold">
                  <Phone className="mr-3 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}