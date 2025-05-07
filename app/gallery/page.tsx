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
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F7D1D1]/30 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-[#3C3C3C]">Smile Gallery</h1>
            <p className="text-lg md:text-xl text-[#3C3C3C]/80 leading-relaxed mb-8">
              View our collection of real smile transformations by Dr. Gail Ann Krishnan
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#B87333] fill-[#B87333]" />
                ))}
              </div>
              <p className="ml-3 text-[#3C3C3C]/70">
                <span className="font-medium">Real patient results</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {galleryItems.map((item) => (
              <Card key={item.id} className="border-none rounded-[8px] shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#3C3C3C] group-hover:text-[#B87333] transition-colors duration-300">{item.title}</h3>
                  <p className="text-[#3C3C3C]/70 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-md">
                      <Image
                        src={item.beforeImage}
                        alt={`Before ${item.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#3C3C3C]/70 text-white text-sm py-1">Before</div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-md">
                      <Image
                        src={item.afterImage}
                        alt={`After ${item.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-[#B87333]/70 text-white text-sm py-1">After</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#F7D1D1]/30 text-[#3C3C3C]/80 text-sm">
                      {item.category}
                    </span>
                    <Link 
                      href={item.category === "Cosmetic" || item.category === "Restorative" 
                        ? `/services/${item.category.toLowerCase()}`
                        : "/services"}
                      className="text-[#B87333] text-sm font-medium hover:underline"
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
      <section className="py-20 bg-[#F7D1D1]/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#3C3C3C]">About Our Smile Transformations</h2>
            <p className="text-lg text-[#3C3C3C]/80">
              Every smile transformation is customized to meet the unique needs and goals of each patient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-[16px] shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#3C3C3C]">Personalized Treatment</h3>
              <p className="text-[#3C3C3C]/80">
                Dr. Krishnan creates custom treatment plans for each patient, taking into account your unique facial features, smile goals, and dental health needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[16px] shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#3C3C3C]">Conservative Approach</h3>
              <p className="text-[#3C3C3C]/80">
                We prioritize preserving your natural tooth structure whenever possible, using minimally invasive techniques to achieve beautiful results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[16px] shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#3C3C3C]">Lasting Results</h3>
              <p className="text-[#3C3C3C]/80">
                Our focus is on creating smile transformations that not only look beautiful but are also functional and designed to last for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F7D1D1] to-[#D8A7B1]/70 rounded-[16px] p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#3C3C3C]">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg text-[#3C3C3C]/80 max-w-2xl mx-auto mb-8">
              Schedule a consultation with Dr. Krishnan to discuss your smile goals and create a personalized treatment plan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  className="bg-[#B87333] hover:bg-[#B87333]/90 text-white rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto shadow-sm"
                >
                  Book Your Consultation
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button 
                  variant="outline"
                  className="bg-white border-[#3C3C3C]/20 text-[#3C3C3C] hover:bg-white/80 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 