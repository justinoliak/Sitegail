import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | Dr. Gail Ann Krishnan DDS MS",
  description: "Transform your smile with our comprehensive cosmetic dentistry services. Dr. Krishnan offers teeth whitening, veneers, bonding, and more.",
};

export default function CosmeticDentistry() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#F7D1D1]/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-[#3C3C3C] leading-tight">
                Cosmetic <span className="text-[#D8A7B1]">Dentistry</span>
              </h1>
              <p className="text-lg text-[#3C3C3C]/80 leading-relaxed">
                Transform your smile with our comprehensive cosmetic dentistry services. 
                Dr. Krishnan combines artistic vision with advanced techniques to create 
                beautiful, natural-looking smiles that enhance your overall appearance and confidence.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-[#B87333] text-white hover:bg-[#B87333]/90 rounded-full px-6 py-2.5">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" className="border-[#D8A7B1] text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-full px-6 py-2.5">
                    View Smile Gallery
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/cosmetic-dentistry.jpg"
                  alt="Cosmetic Dentistry"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3C3C]/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-lg font-medium mb-2">Beautiful, Natural Results</p>
                  <p className="text-sm opacity-90">Customized treatments to enhance your smile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C] mb-6">
              Our Cosmetic Dental Services
            </h2>
            <p className="text-[#3C3C3C]/80 text-lg">
              We offer a wide range of cosmetic dental treatments to help you achieve 
              the smile you've always wanted. From subtle changes to major repairs, 
              Dr. Krishnan can perform a variety of procedures to improve your smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Teeth Whitening */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#F7D1D1]/20 hover:border-[#D8A7B1]/40">
              <div className="h-48 relative">
                <Image
                  src="/images/teeth-whitening.jpg"
                  alt="Teeth Whitening"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">
                  Teeth Whitening
                </h3>
                <p className="text-[#3C3C3C]/80 mb-4">
                  Brighten your smile with our professional teeth whitening services. 
                  Our treatments are safe, effective, and provide noticeably whiter teeth 
                  in just one visit.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">In-office professional whitening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Take-home custom whitening trays</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Stain removal and polishing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Porcelain Veneers */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#F7D1D1]/20 hover:border-[#D8A7B1]/40">
              <div className="h-48 relative">
                <Image
                  src="/images/veneers.jpg"
                  alt="Porcelain Veneers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">
                  Porcelain Veneers
                </h3>
                <p className="text-[#3C3C3C]/80 mb-4">
                  Veneers are thin shells of porcelain custom-crafted to cover the front 
                  surface of teeth, dramatically improving their appearance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Correct discoloration and stains</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Fix chipped, worn, or misaligned teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Close gaps between teeth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dental Bonding */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#F7D1D1]/20 hover:border-[#D8A7B1]/40">
              <div className="h-48 relative">
                <Image
                  src="/images/bonding.jpg"
                  alt="Dental Bonding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">
                  Dental Bonding
                </h3>
                <p className="text-[#3C3C3C]/80 mb-4">
                  A conservative and cost-effective way to repair minor imperfections. 
                  Tooth-colored resin is applied to improve the appearance of your teeth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Repair chipped or cracked teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Change tooth shape or lengthen teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Quick, minimally invasive procedure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Smile Makeover */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#F7D1D1]/20 hover:border-[#D8A7B1]/40">
              <div className="h-48 relative">
                <Image
                  src="/images/smile-makeover.jpg"
                  alt="Smile Makeover"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">
                  Smile Makeover
                </h3>
                <p className="text-[#3C3C3C]/80 mb-4">
                  A comprehensive approach that combines multiple cosmetic treatments 
                  to achieve your ideal smile, addressing all aspects of your smile's appearance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Customized treatment plan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Combines multiple procedures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Dramatic transformation results</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tooth-Colored Fillings */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#F7D1D1]/20 hover:border-[#D8A7B1]/40">
              <div className="h-48 relative">
                <Image
                  src="/images/tooth-colored-fillings.jpg"
                  alt="Tooth-Colored Fillings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">
                  Tooth-Colored Fillings
                </h3>
                <p className="text-[#3C3C3C]/80 mb-4">
                  Natural-looking composite resin fillings that blend seamlessly with your 
                  teeth, providing both functional and aesthetic benefits.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Replace unsightly metal fillings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Match your natural tooth color</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Preserve more natural tooth structure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gum Contouring */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#F7D1D1]/20 hover:border-[#D8A7B1]/40">
              <div className="h-48 relative">
                <Image
                  src="/images/gum-contouring.jpg"
                  alt="Gum Contouring"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">
                  Gum Contouring
                </h3>
                <p className="text-[#3C3C3C]/80 mb-4">
                  Reshape and sculpt the gum line to create a more balanced and aesthetically 
                  pleasing smile, especially for those with a "gummy smile."
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Correct uneven gum lines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Reduce excessive gum display</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B87333] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3C3C3C]/80">Gentle laser technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Showcase */}
      <section className="py-16 bg-[#F7D1D1]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C] mb-6">
              Smile Transformations
            </h2>
            <p className="text-[#3C3C3C]/80 text-lg">
              See the difference our cosmetic dentistry services can make. Browse through our 
              before and after gallery to view real patient results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Case 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <Image 
                    src="/images/before-1.jpg" 
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#3C3C3C]/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image 
                    src="/images/after-1.jpg" 
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#D8A7B1]/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#3C3C3C]">Porcelain Veneers</h3>
                <p className="text-sm text-[#3C3C3C]/70">Complete smile makeover with 8 porcelain veneers</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <Image 
                    src="/images/before-2.jpg" 
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#3C3C3C]/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image 
                    src="/images/after-2.jpg" 
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#D8A7B1]/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#3C3C3C]">Teeth Whitening</h3>
                <p className="text-sm text-[#3C3C3C]/70">Professional in-office whitening treatment</p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <Image 
                    src="/images/before-3.jpg" 
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#3C3C3C]/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image 
                    src="/images/after-3.jpg" 
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#D8A7B1]/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#3C3C3C]">Dental Bonding</h3>
                <p className="text-sm text-[#3C3C3C]/70">Correction of chipped front teeth</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-[#D8A7B1] text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-full px-6 py-2.5">
                View Full Smile Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[#3C3C3C]/80 text-lg">
              Get answers to common questions about our cosmetic dentistry services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F7D1D1]/20">
              <h3 className="text-lg font-medium text-[#3C3C3C] mb-3">How long do porcelain veneers last?</h3>
              <p className="text-[#3C3C3C]/80">
                With proper care, porcelain veneers typically last 10-15 years or longer. 
                Regular dental check-ups and good oral hygiene practices will help extend their lifespan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F7D1D1]/20">
              <h3 className="text-lg font-medium text-[#3C3C3C] mb-3">Is teeth whitening safe?</h3>
              <p className="text-[#3C3C3C]/80">
                Yes, professional teeth whitening performed by a dentist is safe and effective. 
                Dr. Krishnan will evaluate your oral health before recommending the most appropriate 
                whitening treatment for your needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F7D1D1]/20">
              <h3 className="text-lg font-medium text-[#3C3C3C] mb-3">How much does cosmetic dentistry cost?</h3>
              <p className="text-[#3C3C3C]/80">
                The cost varies depending on the specific treatments needed. We offer a range of options 
                to fit different budgets. During your consultation, we will provide a detailed treatment 
                plan with associated costs, and we offer financing options to help make cosmetic dentistry 
                more affordable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F7D1D1]/20">
              <h3 className="text-lg font-medium text-[#3C3C3C] mb-3">Is cosmetic dentistry covered by insurance?</h3>
              <p className="text-[#3C3C3C]/80">
                While purely cosmetic procedures are typically not covered by dental insurance, 
                some treatments that also provide functional benefits may receive partial coverage. 
                Our office staff can help you understand your insurance benefits and explore payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#D8A7B1]/20 to-[#F7D1D1]/20 rounded-3xl mx-4 md:mx-8 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C] mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-[#3C3C3C]/80 text-lg mb-8">
              Schedule a cosmetic consultation with Dr. Krishnan to discuss your goals and 
              discover the possibilities for your smile makeover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#B87333] text-white hover:bg-[#B87333]/90 rounded-full px-8 py-3 text-lg">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button variant="outline" className="border-[#D8A7B1] text-[#3C3C3C] hover:bg-[#F7D1D1]/10 rounded-full px-8 py-3 text-lg">
                  Call (714) 990-0204
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 