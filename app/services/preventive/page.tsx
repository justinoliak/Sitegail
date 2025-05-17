import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";

export default function PreventiveDentalPage() {
  // Services offered
  const preventiveServices = [
    {
      title: "Dental Cleanings & Exams",
      description: "Regular cleanings to remove plaque and tartar, coupled with comprehensive exams to identify potential issues early.",
      image: "/images/services/preventive/preventive-care.jpg",
      benefits: [
        "Remove plaque and tartar buildup",
        "Prevent cavities and gum disease",
        "Identify potential issues early",
        "Maintain fresh breath and a bright smile"
      ]
    },
    {
      title: "Digital X-Rays",
      description: "Low-radiation digital imaging that helps detect issues not visible during a regular exam.",
      image: "/images/services/preventive/preventive-care.jpg",
      benefits: [
        "80% less radiation than traditional X-rays",
        "Immediate results for faster diagnosis",
        "Detect cavities between teeth and below existing fillings",
        "Monitor bone health and development"
      ]
    },
    {
      title: "Fluoride Treatments",
      description: "Professional-strength fluoride applications that strengthen enamel and help prevent tooth decay.",
      image: "/images/services/preventive/preventive-care.jpg",
      benefits: [
        "Strengthen tooth enamel",
        "Reverse early signs of decay",
        "Protect against bacteria and acids",
        "Quick, painless application"
      ]
    },
    {
      title: "Dental Sealants",
      description: "Protective coating applied to the chewing surfaces of back teeth to prevent decay in hard-to-reach areas.",
      image: "/images/services/preventive/preventive-care.jpg",
      benefits: [
        "Seal deep grooves where decay often starts",
        "Particularly beneficial for children and teens",
        "Long-lasting protection for years",
        "Quick, painless application"
      ]
    },
    {
      title: "Oral Cancer Screenings",
      description: "Early detection examinations for signs of oral cancer, which is highly treatable when caught early.",
      image: "/images/services/preventive/preventive-care.jpg",
      benefits: [
        "Included in regular checkups",
        "Early detection greatly improves outcomes",
        "Quick, painless visual and tactile examination",
        "Peace of mind with regular screenings"
      ]
    },
    {
      title: "Custom Mouthguards",
      description: "Personalized protection for teeth during sports or from nighttime grinding (bruxism).",
      image: "/images/services/preventive/preventive-care.jpg",
      benefits: [
        "Custom-fitted for maximum protection and comfort",
        "Prevent sports injuries to teeth and jaw",
        "Reduce damage from teeth grinding",
        "Improve sleep quality for those with bruxism"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blush-pink/30 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-charcoal">Preventive Dental Care</h1>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8">
              Protect your smile with our comprehensive preventive services designed to maintain your oral health and prevent issues before they start.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-charcoal">The Foundation of Dental Health</h2>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                Preventive dentistry is the cornerstone of excellent oral health. By focusing on regular maintenance and early intervention, we help you avoid more complex and costly dental procedures down the road.
              </p>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                Dr. Krishnan's approach to preventive care combines thorough examinations, professional cleanings, and personalized guidance to help you maintain a healthy smile for life.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-copper mr-2" />
                  <span className="text-charcoal/80">Comprehensive exams</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-copper mr-2" />
                  <span className="text-charcoal/80">Professional cleanings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-copper mr-2" />
                  <span className="text-charcoal/80">Early intervention</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-copper mr-2" />
                  <span className="text-charcoal/80">Personalized care</span>
                </div>
              </div>
              <Link href="/contact">
                <Button 
                  className="bg-copper hover:bg-copper/90 text-white rounded-[24px] px-6 py-3 font-medium transition-all duration-300 shadow-sm"
                >
                  Schedule Your Checkup <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden shadow-xl">
                <Image
                  src="/images/services/preventive-main.jpg"
                  alt="Preventive Dental Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-blush-pink/20 h-16 w-16 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-copper" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-blush-pink/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">Our Preventive Services</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              We offer a comprehensive range of preventive services to help you maintain optimal oral health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preventiveServices.map((service, index) => (
              <Card key={index} className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-white">
                <div className="h-48 relative bg-blush-pink/20">
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
                  <h3 className="text-xl font-semibold mb-3 text-charcoal group-hover:text-copper transition-colors duration-300">{service.title}</h3>
                  <p className="text-charcoal/70 mb-4">
                    {service.description}
                  </p>
                  
                  <h4 className="text-sm font-medium mb-2 text-charcoal">Benefits:</h4>
                  <ul className="mb-6 space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-copper mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-charcoal">Frequently Asked Questions</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Get answers to common questions about preventive dental care.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-blush-pink/10 p-6 rounded-[8px] shadow-sm">
              <h3 className="text-lg font-medium text-charcoal mb-2">How often should I visit the dentist for preventive care?</h3>
              <p className="text-charcoal/80">
                Most patients benefit from visiting every six months for routine cleanings and checkups. However, Dr. Krishnan may recommend more frequent visits if you have specific oral health concerns or conditions that require closer monitoring.
              </p>
            </div>
            
            <div className="bg-blush-pink/10 p-6 rounded-[8px] shadow-sm">
              <h3 className="text-lg font-medium text-charcoal mb-2">Are dental X-rays safe?</h3>
              <p className="text-charcoal/80">
                Yes. We use digital X-rays which emit up to 80% less radiation than traditional film X-rays. Additionally, we take precautions such as using lead aprons and only taking X-rays when necessary for your care.
              </p>
            </div>
            
            <div className="bg-blush-pink/10 p-6 rounded-[8px] shadow-sm">
              <h3 className="text-lg font-medium text-charcoal mb-2">What is the best way to prevent cavities between dental visits?</h3>
              <p className="text-charcoal/80">
                Maintaining good oral hygiene is key: brush twice daily with fluoride toothpaste, floss daily, eat a balanced diet low in sugary foods and drinks, and consider using an antimicrobial mouthwash. We're happy to provide personalized recommendations during your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blush-pink/10">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blush-pink to-dusty-rose/70 rounded-[16px] p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">
              Protect Your Smile With Preventive Care
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-8">
              Schedule your preventive care appointment with Dr. Krishnan today. Investing in prevention now saves time, discomfort, and expense later.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-copper hover:bg-copper/90 text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto shadow-sm"
                >
                  Book Your Checkup
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="bg-white border-charcoal/20 text-charcoal hover:bg-white/80 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 