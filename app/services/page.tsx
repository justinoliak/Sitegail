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
        name: "Dental Cleanings & Clinical Exams",
        description: "Professional cleaning and comprehensive examination to assess your oral health",
        link: "/services/preventive/cleanings"
      },
      {
        name: "Digital X-Rays with Siroma Sensors",
        description: "Advanced digital imaging with no radiation, providing highly detailed images while ensuring patient safety",
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
        name: "Comfortable Sedation Dentistry",
        description: "Relaxing treatment with our state-of-the-art Accutron™ Digital Newport™ Flowmeter System for nitrous oxide",
        link: "/services/preventive/sedation"
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

      {/* Insurance & Technology Highlights */}
      <section className="py-32 bg-light-mint">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Our Commitment to You</h2>
            <p className="text-charcoal/80 text-lg">
              We believe in making quality dental care accessible and comfortable with flexible insurance options and advanced technology.
            </p>
          </div>
          
          <div className="bg-background/90 backdrop-blur-sm rounded-[24px] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-charcoal flex items-center">
                  <ShieldCheck className="h-6 w-6 text-accent-mint mr-3"/> Insurance Accepted
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                    <p className="text-charcoal/80">We accept all PPO insurance plans</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                    <p className="text-charcoal/80">In-Network Provider for Delta Dental</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                    <p className="text-charcoal/80">Flexible payment options available</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-charcoal flex items-center">
                  <Star className="h-6 w-6 text-accent-mint mr-3"/> Advanced Technology
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                    <p className="text-charcoal/80">Siroma Digital Sensors for safe, no-radiation x-rays</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                    <p className="text-charcoal/80">Accutron™ Digital Newport™ Flowmeter System for comfortable nitrous oxide sedation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent-mint mr-3 mt-1 flex-shrink-0" />
                    <p className="text-charcoal/80">State-of-the-art sterilization and safety protocols</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-32 bg-background">
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