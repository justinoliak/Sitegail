import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Smile, ShieldCheck, Hammer, Star, ArrowRight } from "lucide-react";

// Define service categories and their items
const serviceCategories = [
  {
    id: "preventive",
    title: "Preventive Dentistry",
    description: "Maintain your oral health and prevent issues before they start",
    icon: <ShieldCheck className="h-6 w-6 text-copper" />,
    image: "/images/services/preventive-main.jpg",
    services: [
      {
        name: "Dental Cleanings & Exams",
        description: "Professional cleaning and comprehensive examination to assess your oral health",
        link: "/services/preventive/cleanings"
      },
      {
        name: "Digital X-Rays",
        description: "Low-radiation imaging to detect issues that aren't visible during an exam",
        link: "/services/preventive/xrays"
      },
      {
        name: "Fluoride Treatments",
        description: "Strengthen enamel and prevent tooth decay with professional fluoride application",
        link: "/services/preventive/fluoride"
      },
      {
        name: "Dental Sealants",
        description: "Protective coating applied to prevent decay in hard-to-reach areas",
        link: "/services/preventive/sealants"
      },
      {
        name: "Oral Cancer Screenings",
        description: "Early detection examination for signs of oral cancer",
        link: "/services/preventive/cancer-screening"
      },
      {
        name: "Custom Mouthguards",
        description: "Protection for teeth during sports or from nighttime grinding",
        link: "/services/preventive/mouthguards"
      }
    ]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Enhance your smile's appearance with our aesthetic treatments",
    icon: <Smile className="h-6 w-6 text-copper" />,
    image: "/images/services/cosmetic-main.jpg",
    services: [
      {
        name: "Teeth Whitening",
        description: "Professional-grade whitening for a brighter, more radiant smile",
        link: "/services/cosmetic/whitening"
      },
      {
        name: "Porcelain Veneers",
        description: "Custom-made shells to cover front surface of teeth, improving appearance",
        link: "/services/cosmetic/veneers"
      },
      {
        name: "Dental Bonding",
        description: "Tooth-colored resin to repair chips, cracks, or gaps between teeth",
        link: "/services/cosmetic/bonding"
      },
      {
        name: "Smile Makeovers",
        description: "Comprehensive treatment plan combining multiple procedures for total transformation",
        link: "/services/cosmetic/smile-makeovers"
      },
      {
        name: "Gum Contouring",
        description: "Reshaping of the gum line to create a more balanced smile",
        link: "/services/cosmetic/gum-contouring"
      },
      {
        name: "Invisalign®",
        description: "Clear aligners to straighten teeth discreetly and comfortably",
        link: "/services/cosmetic/invisalign"
      }
    ]
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    description: "Repair damaged teeth and restore both function and appearance",
    icon: <Hammer className="h-6 w-6 text-copper" />,
    image: "/images/services/restorative-main.jpg",
    services: [
      {
        name: "Tooth-Colored Fillings",
        description: "Natural-looking composite resin to repair cavities",
        link: "/services/restorative/fillings"
      },
      {
        name: "Dental Crowns",
        description: "Custom caps to cover and protect damaged or weakened teeth",
        link: "/services/restorative/crowns"
      },
      {
        name: "Dental Bridges",
        description: "Fixed appliances to replace one or more missing teeth",
        link: "/services/restorative/bridges"
      },
      {
        name: "Dental Implants",
        description: "Permanent tooth replacement option that looks and functions like natural teeth",
        link: "/services/restorative/implants"
      },
      {
        name: "Root Canal Therapy",
        description: "Treatment to save infected teeth and relieve pain",
        link: "/services/restorative/root-canal"
      },
      {
        name: "Dentures & Partials",
        description: "Removable appliances to replace multiple missing teeth",
        link: "/services/restorative/dentures"
      }
    ]
  }
];

// Featured services to highlight at the top
const featuredServices = [
  {
    title: "Smile Makeovers",
    description: "Comprehensive treatment plan combining multiple cosmetic procedures to transform your smile.",
    image: "/images/services/cosmetic/smile-makeover.jpg",
    link: "/services/cosmetic/smile-makeovers"
  },
  {
    title: "Dental Implants",
    description: "The most advanced solution for missing teeth that look, feel, and function like natural teeth.",
    image: "/images/services/restorative/restorative-care.jpg",
    link: "/services/restorative/implants"
  },
  {
    title: "Invisalign®",
    description: "Straighten your teeth discreetly with clear aligners.",
    image: "/images/services/cosmetic/invisalign.jpg",
    link: "/services/cosmetic/invisalign"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-b from-light-mint to-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">Our Dental Services</h1>
            <p className="text-charcoal/70 mb-6">
              Comprehensive dental care with a focus on comfort, quality, and long-term results for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Featured Services</h2>
            <p className="text-charcoal/80 text-lg">
              Our most popular treatments delivering exceptional results for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredServices.map((service, index) => (
              <Card key={index} className="border-none rounded-[12px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background">
                <div className="h-56 relative bg-light-mint">
                  <div className="absolute inset-0">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-accent-mint text-white rounded-full p-2">
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-charcoal group-hover:text-accent-mint transition-colors duration-300">{service.title}</h3>
                  <p className="text-charcoal/70 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-accent-mint font-medium group-hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Sections */}
      {serviceCategories.map((category, index) => (
        <section 
          key={category.id}
          id={category.id} 
          className={`py-32 ${index % 2 === 0 ? 'bg-light-mint' : 'bg-background'}`}
        >
          <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 !== 0 ? 'order-2' : ''}`}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center mr-5">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-semibold text-charcoal">{category.title}</h2>
                </div>
                <p className="text-lg text-charcoal/80 mb-10 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-mint mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <Link href={service.link}>
                          <h3 className="text-lg font-medium text-charcoal mb-2 hover:text-accent-mint transition-colors">
                            {service.name}
                          </h3>
                        </Link>
                        <p className="text-charcoal/70">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`${index % 2 !== 0 ? 'order-1' : ''}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-xl">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-semibold text-white mb-3">{category.title}</h3>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent-mint fill-accent-mint" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Before & After Gallery Preview */}
      <section className="py-32 bg-background">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Smile Transformations</h2>
            <p className="text-charcoal/80 text-lg">
              See the real results our patients have experienced with our dental services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-light-mint/30 p-8 rounded-[16px] text-center">
              <h3 className="text-xl font-semibold mb-6 text-charcoal">Smile Makeover</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] shadow-md">
                  <Image
                    src="/images/services/gallery/before-1.jpg"
                    alt="Before Smile Makeover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-charcoal/70 text-white text-sm py-2">Before</div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] shadow-md">
                  <Image
                    src="/images/services/gallery/after-1.jpg"
                    alt="After Smile Makeover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-accent-mint/70 text-white text-sm py-2">After</div>
                </div>
              </div>
              <p className="text-charcoal/70 mb-4">
                Transformation achieved with porcelain veneers and teeth whitening.
              </p>
            </div>
            
            <div className="bg-light-mint/30 p-8 rounded-[16px] text-center">
              <h3 className="text-xl font-semibold mb-6 text-charcoal">Dental Implants</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] shadow-md">
                  <Image
                    src="/images/services/gallery/before-2.jpg"
                    alt="Before Dental Implants"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-charcoal/70 text-white text-sm py-2">Before</div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] shadow-md">
                  <Image
                    src="/images/services/gallery/after-2.jpg"
                    alt="After Dental Implants"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-accent-mint/70 text-white text-sm py-2">After</div>
                </div>
              </div>
              <p className="text-charcoal/70 mb-4">
                Full function and aesthetics restored with dental implants.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/gallery">
              <Button 
                className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 shadow-sm"
              >
                View Complete Smile Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-32 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Frequently Asked Questions</h2>
            <p className="text-charcoal/80 text-lg">
              Answers to some of the most common questions about our dental services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-8 rounded-[12px] shadow-lg">
              <h3 className="text-xl font-semibold text-charcoal mb-3">How often should I visit the dentist?</h3>
              <p className="text-charcoal/80 text-lg">
                Most patients benefit from visiting the dentist every six months for routine cleanings and checkups. However, Dr. Krishnan may recommend more frequent visits based on your specific oral health needs.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-[12px] shadow-lg">
              <h3 className="text-xl font-semibold text-charcoal mb-3">Does teeth whitening damage enamel?</h3>
              <p className="text-charcoal/80 text-lg">
                When performed under professional supervision, teeth whitening is safe and doesn't damage enamel. Dr. Krishnan uses high-quality whitening systems that effectively brighten teeth while protecting your enamel.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-[12px] shadow-lg">
              <h3 className="text-xl font-semibold text-charcoal mb-3">How long do dental implants last?</h3>
              <p className="text-charcoal/80 text-lg">
                With proper care and maintenance, dental implants can last a lifetime. The crown attached to the implant typically lasts 10-15 years before needing replacement due to normal wear and tear.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/faq">
              <Button 
                variant="outline" 
                className="border-primary-mint text-charcoal hover:bg-primary-mint/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mint-gradient rounded-[24px] p-12 md:p-16 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto text-lg">
                Schedule a consultation with Dr. Krishnan to discuss which dental services are right for your unique needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button 
                  className="bg-accent-mint hover:bg-accent-mint-dark text-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto shadow-sm"
                >
                  Book Your Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white/90 border-charcoal/20 text-charcoal hover:bg-white rounded-[24px] px-10 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-lg">
                "We promise to make your dental experience as comfortable and stress-free as possible."
              </p>
              <p className="font-medium text-white mt-3 text-lg">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 