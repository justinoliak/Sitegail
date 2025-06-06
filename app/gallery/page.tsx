import { Card, CardContent } from "@/components/ui/card"
import { Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  // Sample gallery case studies - in a real app, these would come from a database
  const galleryItems = [
    {
      id: 1,
      title: "Smile Makeover",
      description: "Comprehensive transformation with porcelain veneers and professional whitening",
      beforeImage: "/images/gallery/before-1.jpg",
      afterImage: "/images/gallery/after-1.jpg",
      category: "Cosmetic"
    },
    {
      id: 2,
      title: "Dental Implants",
      description: "Full function and aesthetics restored with dental implants",
      beforeImage: "/images/gallery/before-2.jpg",
      afterImage: "/images/gallery/after-2.jpg",
      category: "Restorative"
    },
    {
      id: 3,
      title: "Invisalign® Treatment",
      description: "Teeth straightening with clear aligners for a more confident smile",
      beforeImage: "/images/gallery/before-3.jpg",
      afterImage: "/images/gallery/after-3.jpg",
      category: "Orthodontic"
    },
    {
      id: 4,
      title: "Porcelain Veneers",
      description: "Dramatic smile enhancement with custom-crafted porcelain veneers",
      beforeImage: "/images/gallery/before-4.jpg",
      afterImage: "/images/gallery/after-4.jpg",
      category: "Cosmetic"
    },
    {
      id: 5,
      title: "Crown & Bridge",
      description: "Restoration of damaged teeth with natural-looking crowns",
      beforeImage: "/images/gallery/before-5.jpg",
      afterImage: "/images/gallery/after-5.jpg",
      category: "Restorative"
    },
    {
      id: 6,
      title: "Full Mouth Rehabilitation",
      description: "Comprehensive restoration of function and aesthetics",
      beforeImage: "/images/gallery/before-6.jpg",
      afterImage: "/images/gallery/after-6.jpg",
      category: "Comprehensive"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-charcoal mb-6">Smile Gallery</h1>
            <p className="hero-subtitle mb-8">
              Before and after photos of dental treatments performed by Dr. Krishnan.
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-mint fill-accent-mint" />
                ))}
              </div>
              <p className="ml-3 text-body">
                <span className="font-medium">Real patient results</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {galleryItems.map((item) => (
              <Card key={item.id} className="card card-hover-lift overflow-hidden group">
                <CardContent className="card-padding">
                  <h3 className="text-charcoal mb-3 text-hover-color">{item.title}</h3>
                  <p className="text-body mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-md mb-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
                      <Image
                        src={item.beforeImage}
                        alt={`Before ${item.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-charcoal/70 text-white text-sm py-1">Before</div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
                      <Image
                        src={item.afterImage}
                        alt={`After ${item.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-accent-mint/70 text-white text-sm py-1">After</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-light-mint text-charcoal/80 text-sm">
                      {item.category}
                    </span>
                    <Link 
                      href={item.category === "Cosmetic" || item.category === "Restorative" 
                        ? `/services/${item.category.toLowerCase()}`
                        : "/services"}
                      className="text-accent-mint text-sm font-medium hover:underline"
                    >
                      View Similar Treatments
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Information Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-charcoal mb-6">About Our Smile Transformations</h2>
            <p className="text-large">
              Every smile transformation is customized to meet the unique needs and goals of each patient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="card card-padding">
              <h3 className="text-charcoal mb-4">Personalized Treatment</h3>
              <p className="text-body">
                Dr. Krishnan creates custom treatment plans for each patient, taking into account your unique facial features, smile goals, and dental health needs.
              </p>
            </div>
            
            <div className="card card-padding">
              <h3 className="text-charcoal mb-4">Conservative Approach</h3>
              <p className="text-body">
                We prioritize preserving your natural tooth structure whenever possible, using minimally invasive techniques to achieve beautiful results.
              </p>
            </div>
            
            <div className="card card-padding">
              <h3 className="text-charcoal mb-4">Lasting Results</h3>
              <p className="text-body">
                Our focus is on creating smile transformations that not only look beautiful but are also functional and designed to last for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mint-gradient rounded-2xl card-padding shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-white mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto text-large">
                Schedule a consultation with Dr. Krishnan to discuss your smile goals and create a personalized treatment plan.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="/contact">
                <Button className="bg-accent-mint hover:bg-accent-mint-dark text-white btn-lg w-full sm:w-auto shadow-sm">
                  Book Your Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white border-charcoal/20 text-charcoal hover:bg-white/80 btn-lg w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-white/90 italic text-large">
                "Every smile tells a story - let us help you write your most confident chapter."
              </p>
              <p className="font-medium text-white mt-3 text-large">
                — Dr. Gail Ann Krishnan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 