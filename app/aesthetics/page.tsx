import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Phone, Shield, CheckCircle, Star } from "lucide-react";

export default function AestheticsPage() {
  // Sample aesthetic services
  const aestheticServices = [
    {
      title: "Emface™ Treatment",
      description: "The first FDA-cleared, needle-free treatment that lifts, tones, and smooths your face for natural enhancement.",
      image: "/images/office2.png",
      link: "/facial-aesthetics",
      features: [
        "No needles or injections",
        "Zero downtime",
        "Natural-looking results",
        "30-minute sessions"
      ]
    },
    {
      title: "Skin Treatments",
      description: "Advanced treatments to improve skin texture, tone, and overall appearance for a more youthful complexion.",
      image: "/images/office1.png",
      link: "/facial-aesthetics/skin",
      features: [
        "Improved skin texture",
        "Reduced fine lines",
        "Even skin tone",
        "Enhanced radiance"
      ]
    },
    {
      title: "Facial Aesthetics",
      description: "Non-surgical approaches to enhance facial contours and restore youthful definition to the face.",
      image: "/images/office2.png",
      link: "/facial-aesthetics/facial",
      features: [
        "Defined jawline",
        "Lifted cheeks",
        "Sculpted appearance",
        "Natural-looking results"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-light-mint/30 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">Facial Aesthetic Services</h1>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
              Non-surgical treatments to enhance your natural beauty and restore youthful appearance
            </p>
          </div>
        </div>
      </section>

      {/* Featured Treatment - Emface */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary-mint font-medium tracking-wider mb-5 uppercase text-sm">Featured Treatment</span>
              <h2 className="text-3xl font-semibold mb-6 text-charcoal">Introducing Emface™</h2>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                The revolutionary treatment that simultaneously lifts, tones, and smooths your face using synchronized radio-frequency and high-intensity facial electrical stimulation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-light-mint p-4 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-accent-mint">23%</h3>
                  <p className="text-sm text-charcoal/80">More Lift</p>
                </div>
                <div className="bg-light-mint p-4 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-accent-mint">37%</h3>
                  <p className="text-sm text-charcoal/80">Fewer Wrinkles</p>
                </div>
                <div className="bg-light-mint p-4 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-accent-mint">30%</h3>
                  <p className="text-sm text-charcoal/80">Muscle Tone Gain</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-2" />
                  <span className="text-charcoal/80">No Needles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-2" />
                  <span className="text-charcoal/80">Zero Downtime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-2" />
                  <span className="text-charcoal/80">FDA Cleared</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-mint mr-2" />
                  <span className="text-charcoal/80">Natural Results</span>
                </div>
              </div>
              
              <Link href="/facial-aesthetics">
                <Button 
                  className="bg-accent-mint hover:bg-accent-mint/90 text-white rounded-[24px] px-6 py-3 font-medium transition-all duration-300 shadow-sm"
                >
                  Learn More About Emface <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden shadow-xl">
                <Image
                  src="/images/office2.png"
                  alt="Emface facial treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
              </div>
              
              {/* FDA Badge */}
              <div className="absolute -right-4 -bottom-4 bg-white rounded-full p-4 shadow-lg">
                <div className="bg-light-mint h-16 w-16 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs font-bold text-accent-mint">FDA</p>
                    <p className="text-[10px] text-charcoal/80">CLEARED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">Our Aesthetic Services</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Explore our range of non-surgical aesthetic treatments designed to enhance your natural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aestheticServices.map((service, index) => (
              <Card key={index} className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-white">
                <div className="h-48 relative bg-light-mint">
                  <div className="absolute inset-0">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-charcoal group-hover:text-accent-mint transition-colors duration-300">{service.title}</h3>
                  <p className="text-charcoal/70 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start mb-2">
                        <Shield className="h-5 w-5 text-accent-mint mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-accent-mint font-medium group-hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Aesthetic Services */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">Why Choose Our Aesthetic Services</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Dr. Krishnan brings a unique blend of medical expertise and artistic vision to every aesthetic treatment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-light-mint p-6 rounded-[16px] text-center">
              <div className="w-16 h-16 rounded-full bg-primary-mint flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-mint" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Medical Expertise</h3>
              <p className="text-charcoal/80">
                Advanced training and deep understanding of facial anatomy for safe, effective treatments
              </p>
            </div>
            
            <div className="bg-light-mint p-6 rounded-[16px] text-center">
              <div className="w-16 h-16 rounded-full bg-primary-mint flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-accent-mint" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Natural Results</h3>
              <p className="text-charcoal/80">
                Focus on enhancing your natural beauty rather than creating an artificial appearance
              </p>
            </div>
            
            <div className="bg-light-mint p-6 rounded-[16px] text-center">
              <div className="w-16 h-16 rounded-full bg-primary-mint flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-mint" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Cutting-Edge Technology</h3>
              <p className="text-charcoal/80">
                Latest FDA-cleared treatments and technologies for optimal results with minimal discomfort
              </p>
            </div>
            
            <div className="bg-light-mint p-6 rounded-[16px] text-center">
              <div className="w-16 h-16 rounded-full bg-primary-mint flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent-mint" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">Personalized Care</h3>
              <p className="text-charcoal/80">
                Customized treatment plans tailored to your unique facial structure and aesthetic goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-mint">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="seafoam-gradient rounded-[16px] p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">
              Ready to Explore Aesthetic Treatments?
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-8">
              Schedule a complimentary consultation with Dr. Krishnan to discuss your aesthetic goals and create a personalized treatment plan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-accent-mint hover:bg-accent-mint/90 text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto shadow-sm"
                >
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white border-charcoal/20 text-charcoal hover:bg-white/80 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 