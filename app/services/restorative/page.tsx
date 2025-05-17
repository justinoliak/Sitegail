import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Restorative Dentistry | Dr. Gail Ann Krishnan DDS MS",
  description: "Restore your smile's health and function with our comprehensive restorative dentistry services. Dr. Krishnan offers crowns, bridges, implants, and more.",
};

export default function RestorativeDentistry() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-blush-pink/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-charcoal leading-tight">
                Restorative <span className="text-dusty-rose">Dentistry</span>
              </h1>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                We offer state-of-the-art restorative dental treatments to help repair damaged 
                teeth and restore your smile's function and appearance. Dr. Krishnan combines 
                advanced techniques with gentle care to deliver exceptional results.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-copper text-white hover:bg-copper/90 rounded-full px-6 py-2.5">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" className="border-dusty-rose text-charcoal hover:bg-blush-pink/10 rounded-full px-6 py-2.5">
                    View Smile Gallery
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/restorative-dentistry.jpg"
                  alt="Restorative Dentistry"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-lg font-medium mb-2">Restore Function & Aesthetics</p>
                  <p className="text-sm opacity-90">Advanced treatments for damaged teeth</p>
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
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Our Restorative Dental Services
            </h2>
            <p className="text-charcoal/80 text-lg">
              Whether you're dealing with a broken tooth, missing teeth, or worn-down dental work,
              our comprehensive restorative services can help you regain a fully functional and 
              beautiful smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dental Crowns */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-blush-pink/20 hover:border-dusty-rose/40">
              <div className="h-48 relative">
                <Image
                  src="/images/dental-crowns.jpg"
                  alt="Dental Crowns"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Dental Crowns
                </h3>
                <p className="text-charcoal/80 mb-4">
                  Custom-made caps that cover damaged or weakened teeth to restore 
                  their shape, size, strength, and appearance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Protect weak teeth from fracturing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Restore broken or worn teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Cover teeth with large fillings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dental Bridges */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-blush-pink/20 hover:border-dusty-rose/40">
              <div className="h-48 relative">
                <Image
                  src="/images/dental-bridges.jpg"
                  alt="Dental Bridges"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Dental Bridges
                </h3>
                <p className="text-charcoal/80 mb-4">
                  Fixed appliances that literally "bridge" the gap created by one or more
                  missing teeth, restoring your smile's appearance and function.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Replace one or more missing teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Prevent remaining teeth from shifting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Restore ability to speak and chew properly</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dental Implants */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-blush-pink/20 hover:border-dusty-rose/40">
              <div className="h-48 relative">
                <Image
                  src="/images/dental-implants.jpg"
                  alt="Dental Implants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Dental Implants
                </h3>
                <p className="text-charcoal/80 mb-4">
                  The gold standard for replacing missing teeth, dental implants provide 
                  a permanent solution that looks, feels, and functions like natural teeth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Replace single or multiple teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Preserve jaw bone structure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Provide superior stability and comfort</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Root Canal Therapy */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-blush-pink/20 hover:border-dusty-rose/40">
              <div className="h-48 relative">
                <Image
                  src="/images/root-canal.jpg"
                  alt="Root Canal Therapy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Root Canal Therapy
                </h3>
                <p className="text-charcoal/80 mb-4">
                  A procedure to save and repair a severely infected or damaged tooth 
                  instead of removing it, alleviating pain and eliminating infection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Save teeth with deep decay or infection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Relieve severe toothache pain</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Comfortable procedure with modern techniques</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dentures & Partials */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-blush-pink/20 hover:border-dusty-rose/40">
              <div className="h-48 relative">
                <Image
                  src="/images/dentures.jpg"
                  alt="Dentures & Partials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Dentures & Partials
                </h3>
                <p className="text-charcoal/80 mb-4">
                  Removable appliances to replace missing teeth and surrounding tissues, 
                  restoring your ability to eat and speak while enhancing your smile.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Full dentures for complete tooth loss</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Partial dentures for some natural teeth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Custom-fit for comfort and natural appearance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inlays & Onlays */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-blush-pink/20 hover:border-dusty-rose/40">
              <div className="h-48 relative">
                <Image
                  src="/images/inlays-onlays.jpg"
                  alt="Inlays & Onlays"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Inlays & Onlays
                </h3>
                <p className="text-charcoal/80 mb-4">
                  Custom-made fillings that fit precisely into or onto a prepared tooth cavity, 
                  providing an alternative to crowns when your tooth needs more than a filling.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Preserve more natural tooth structure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Strengthen teeth and prevent further decay</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-copper mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">More durable than traditional fillings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Showcase */}
      <section className="py-16 bg-blush-pink/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Restorative Transformations
            </h2>
            <p className="text-charcoal/80 text-lg">
              See the difference our restorative dentistry services can make. Browse through 
              our before and after gallery to view real patient results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Case 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <Image 
                    src="/images/before-4.jpg" 
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-charcoal/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image 
                    src="/images/after-4.jpg" 
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-dusty-rose/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-charcoal">Dental Implants</h3>
                <p className="text-sm text-charcoal/70">Replacement of multiple missing teeth with implants</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <Image 
                    src="/images/before-5.jpg" 
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-charcoal/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image 
                    src="/images/after-5.jpg" 
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-dusty-rose/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-charcoal">Dental Crowns</h3>
                <p className="text-sm text-charcoal/70">Restoration of severely damaged teeth</p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2">
                <div className="relative h-48">
                  <Image 
                    src="/images/before-6.jpg" 
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-charcoal/70 text-white text-xs py-1 px-3 rounded-tr-lg">
                    Before
                  </div>
                </div>
                <div className="relative h-48">
                  <Image 
                    src="/images/after-6.jpg" 
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-dusty-rose/70 text-white text-xs py-1 px-3 rounded-tl-lg">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-charcoal">Dental Bridge</h3>
                <p className="text-sm text-charcoal/70">Front teeth restoration with porcelain bridge</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-dusty-rose text-charcoal hover:bg-blush-pink/10 rounded-full px-6 py-2.5">
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
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal/80 text-lg">
              Get answers to common questions about our restorative dentistry services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blush-pink/20">
              <h3 className="text-lg font-medium text-charcoal mb-3">How long do dental implants last?</h3>
              <p className="text-charcoal/80">
                With proper care and maintenance, dental implants can last a lifetime. The crown attached 
                to the implant typically lasts 10-15 years before needing replacement due to normal wear 
                and tear, but the implant post itself can last much longer.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-blush-pink/20">
              <h3 className="text-lg font-medium text-charcoal mb-3">Is a root canal painful?</h3>
              <p className="text-charcoal/80">
                With modern techniques and anesthesia, root canal therapy is no more uncomfortable than 
                having a filling placed. Most patients report that they are comfortable during the procedure, 
                and experience relief from the pain caused by the infected tooth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-blush-pink/20">
              <h3 className="text-lg font-medium text-charcoal mb-3">How do I know if I need a crown or a filling?</h3>
              <p className="text-charcoal/80">
                Dr. Krishnan will evaluate the extent of damage to your tooth to determine the best 
                treatment. Generally, if a tooth has a small area of decay, a filling is sufficient. 
                If the tooth is severely damaged, has had a root canal, or has a large filling that's 
                failing, a crown is typically recommended to provide better protection and strength.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-blush-pink/20">
              <h3 className="text-lg font-medium text-charcoal mb-3">Does insurance cover restorative dental work?</h3>
              <p className="text-charcoal/80">
                Most dental insurance plans provide some coverage for restorative procedures, as they 
                are considered necessary for oral health. Coverage varies by plan and procedure, with 
                basic restorative work like fillings typically receiving higher coverage than major 
                procedures like crowns or implants. Our office staff can help you understand your 
                insurance benefits and explore payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dusty-rose/20 to-blush-pink/20 rounded-3xl mx-4 md:mx-8 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Ready to Restore Your Smile?
            </h2>
            <p className="text-charcoal/80 text-lg mb-8">
              Schedule a consultation with Dr. Krishnan to discuss your restorative needs and 
              discover the best solutions for your dental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-copper text-white hover:bg-copper/90 rounded-full px-8 py-3 text-lg">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+17149900204">
                <Button variant="outline" className="border-dusty-rose text-charcoal hover:bg-blush-pink/10 rounded-full px-8 py-3 text-lg">
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