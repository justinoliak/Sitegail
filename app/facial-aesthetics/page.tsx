import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Phone, Zap, Clock, Shield } from "lucide-react";

export default function FacialAestheticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/office2.png"
          alt="Modern aesthetic treatment center"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center">
            <div className="max-w-2xl text-white px-4">
              <h1 className="text-5xl font-bold mb-6">Advanced Facial Aesthetics</h1>
              <p className="text-xl leading-relaxed">
                Experience the future of facial rejuvenation with Emface™ - the first FDA-cleared, needle-free treatment for natural-looking facial enhancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emface Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Introducing Emface™</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The revolutionary treatment that simultaneously lifts, tones, and smooths your face using synchronized radio-frequency and high-intensity facial electrical stimulation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">23%</h3>
                <p className="text-muted-foreground">More Lift</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">37%</h3>
                <p className="text-muted-foreground">Fewer Wrinkles</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">30%</h3>
                <p className="text-muted-foreground">Muscle Tone Gain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">How Emface Works</h2>
            <p className="text-xl text-muted-foreground">
              A dual-action approach to facial rejuvenation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Synchronized RF Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Warms the dermis to ~42°C, triggering:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    26% increase in collagen production
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    200% increase in elastin production
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  HIFES Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contracts facial muscles approximately 75,000 times per session:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Strengthens elevator muscles
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Creates structural lift
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Treatment Experience</h2>
            <p className="text-xl text-muted-foreground">
              Quick, comfortable sessions with no downtime
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {feature}
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Treatment Packages</h2>
            <p className="text-xl text-muted-foreground">
              Customized solutions for your aesthetic goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{package_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-4">{package_.description}</p>
                  <p className="text-muted-foreground mb-6">{package_.details}</p>
                  <Button className="w-full" variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Discover Your Potential</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Call today to schedule your complimentary consultation with Dr. Krishnan
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Flexible payment plans and CareCredit financing available
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Experience Emface?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your free consultation with Dr. Krishnan to learn if Emface is right for you. Discover how this revolutionary treatment can enhance your natural beauty without needles or surgery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Book Free Consultation
            </Button>
            <a href="tel:+17149900204">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}