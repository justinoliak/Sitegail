import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogDescription 
} from "@/components/ui/dialog";
import { CheckCircle, ArrowRight, Calendar, Phone, Star, Shield, Heart, Smile, Users, Zap, Clock, Award, Info } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Star className="w-4 h-4 text-accent-mint mr-2" />
                23 Years of Excellence • Welcoming New Patients
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6">
                Complete Dental Care
                <span className="text-accent-mint block">You Can Trust</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Dr. Gail Krishnan combines advanced dental technology with personalized care to restore your smile, boost your confidence, and improve your overall health.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Your Visit
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+17149900204">
                  <Button className="btn btn-outline btn-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    (714) 990-0204
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/services-hero.jpg"
                  alt="Professional dental services at Dr. Krishnan's practice"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Introduction */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed">
              At our Brea practice, we believe exceptional dental care begins with understanding your unique needs and concerns. Dr. Krishnan and our compassionate team are committed to providing gentle, anxiety-free treatment that helps your entire family achieve optimal oral health and beautiful smiles.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Complete Care for Every Stage of Life</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you need preventive care to maintain healthy smiles or advanced treatments to restore confidence, 
              we're here to support your family's dental journey with personalized, gentle care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-20">
            {/* Preventive Family Care */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group bg-white border-0 rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src="/images/stock/stockimagechair.jpg"
                      alt="Modern dental chair and equipment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-7 h-7 text-accent-mint" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Preventive Family Care</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Keeping your family's smiles healthy for a lifetime. We partner with you to prevent problems before they start.
                    </p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Comprehensive Exams & Cleanings</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Dental Sealants & Fluoride Treatments</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Oral Cancer Screenings</span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                      View Details <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-8">
                <DialogHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center shadow-lg">
                      <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">Preventive Family Care</DialogTitle>
                  <DialogDescription className="text-lg sm:text-xl text-slate-600">Your Partner in Lifelong Oral Health</DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* What Is It */}
                  <div className="bg-gradient-to-r from-primary-mint/5 to-accent-mint/5 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                      <Info className="w-6 h-6 text-accent-mint mr-3" />
                      What Is Preventive Care?
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Preventive care is like having a health insurance policy for your smile. Instead of waiting for problems to develop, we work together to keep your teeth and gums healthy through regular checkups, cleanings, and early detection of potential issues.
                    </p>
                  </div>

                  {/* You Might Need This If */}
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Perfect For You If...</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <CheckCircle className="w-6 h-6 text-accent-mint mr-4 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">It's been 6+ months since your last cleaning</span>
                      </div>
                      <div className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <CheckCircle className="w-6 h-6 text-accent-mint mr-4 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">You want to prevent future dental problems</span>
                      </div>
                      <div className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <CheckCircle className="w-6 h-6 text-accent-mint mr-4 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">Your family needs routine dental care</span>
                      </div>
                      <div className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <CheckCircle className="w-6 h-6 text-accent-mint mr-4 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">You want to catch issues early and save money</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-primary-mint/10 to-accent-mint/10 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
                      <Award className="w-6 h-6 text-accent-mint mr-3" />
                      Benefits for You & Your Family
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Save money by preventing major problems</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Early detection of health issues</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Keep your smile bright and healthy</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">Peace of mind for your family's health</span>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className="pt-10">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-accent-mint to-primary-mint-dark hover:from-accent-mint-dark hover:to-accent-mint text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                        <Calendar className="mr-2 w-5 h-5" />
                        Schedule Family Cleaning
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <a href="tel:+17149900204" className="flex-1">
                      <Button className="w-full bg-white border-2 border-accent-mint text-accent-mint hover:bg-accent-mint hover:text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                        <Phone className="mr-2 w-5 h-5" />
                        Call Now: (714) 990-0204
                      </Button>
                    </a>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Restoring Your Smile's Health */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group bg-white border-0 rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src="/images/stock/stockimageteeth.jpg"
                      alt="Healthy white teeth and smile"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-7 h-7 text-accent-mint" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Restoring Your Smile's Health</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Relief from pain and restoration of function. We solve problems with gentle, effective treatments.
                    </p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Tooth-Colored Fillings & Dental Crowns</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Gentle Root Canals & Bridges</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Comfortable Dentures</span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                      View Details <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-mint to-primary-mint flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <DialogTitle className="text-3xl font-bold text-charcoal mb-2">Restoring Your Smile's Health</DialogTitle>
                  <DialogDescription className="text-xl text-slate-600">Relief from Pain, Restoration of Function</DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* What Is It */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Info className="w-5 h-5 text-accent-mint mr-2" />
                      What Is Restorative Dentistry?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Restorative dentistry is like having a skilled repair specialist for your smile. When teeth are damaged, decayed, or missing, we use advanced techniques to bring back their natural function, comfort, and appearance so you can eat, speak, and smile with confidence again.
                    </p>
                  </div>

                  {/* You Might Need This If */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">You Might Need This If...</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You have tooth pain or sensitivity</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You have visible cavities or damage</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You're missing one or more teeth</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You have difficulty chewing or eating</span>
                      </div>
                    </div>
                  </div>

                  {/* Services Included */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-6">Complete Restorative Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Tooth-Colored Fillings</h4>
                        <p className="text-sm text-slate-600">Mercury-free composite fillings that blend seamlessly with your natural tooth color for invisible, durable repairs.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Dental Crowns</h4>
                        <p className="text-sm text-slate-600">Custom-made caps that restore strength and beauty to damaged teeth, often completed in a single visit with CEREC® technology.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Gentle Root Canals</h4>
                        <p className="text-sm text-slate-600">Pain-free treatment to save infected teeth and eliminate discomfort while preserving your natural tooth structure.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Bridges & Dentures</h4>
                        <p className="text-sm text-slate-600">Natural-looking solutions for missing teeth that restore your ability to eat, speak, and smile with confidence.</p>
                      </div>
                    </div>
                  </div>

                  {/* Our Gentle Process */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-accent-mint mr-2" />
                      Our Comfortable Treatment Process
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Pain-Free Consultation</h4>
                          <p className="text-slate-600 text-sm">We'll gently examine the affected area and explain your treatment options in simple terms.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Comfortable Treatment</h4>
                          <p className="text-slate-600 text-sm">Using advanced techniques and gentle care to restore your tooth with minimal discomfort.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Follow-Up Care</h4>
                          <p className="text-slate-600 text-sm">We'll ensure your restoration fits perfectly and provide care instructions for lasting results.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-primary-mint/10 to-accent-mint/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Award className="w-5 h-5 text-accent-mint mr-2" />
                      Benefits of Restorative Treatment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Immediate pain relief and comfort</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Restore natural function and chewing ability</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Natural-looking, long-lasting results</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Prevent further damage and complications</span>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link href="/contact">
                      <Button className="btn btn-primary btn-lg w-full sm:w-auto">
                        <Calendar className="mr-2 w-5 h-5" />
                        Get Pain Relief Today
                      </Button>
                    </Link>
                    <a href="tel:+17149900204">
                      <Button className="btn btn-outline btn-lg w-full sm:w-auto">
                        <Phone className="mr-2 w-5 h-5" />
                        Emergency Call
                      </Button>
                    </a>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Creating Your Dream Smile */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group bg-white border-0 rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src="/images/stock/stockimagetoothpaste.jpg"
                      alt="Professional dental care products and toothbrush"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Smile className="w-7 h-7 text-accent-mint" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Creating Your Dream Smile</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Transform your confidence with beautiful, natural-looking cosmetic treatments tailored just for you.
                    </p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Professional Teeth Whitening</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Porcelain Veneers & Dental Bonding</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Complete Smile Makeovers</span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                      View Details <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-mint via-accent-mint to-primary-mint flex items-center justify-center">
                      <Smile className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <DialogTitle className="text-3xl font-bold text-charcoal mb-2">Creating Your Dream Smile</DialogTitle>
                  <DialogDescription className="text-xl text-slate-600">Transform Your Confidence</DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* What Is It */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Info className="w-5 h-5 text-accent-mint mr-2" />
                      What Is Cosmetic Dentistry?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Cosmetic dentistry is like having an artist sculpt your perfect smile. We combine advanced techniques with an artistic eye to enhance the natural beauty of your teeth, creating a smile that boosts your confidence and lights up every room you enter.
                    </p>
                  </div>

                  {/* You Might Need This If */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">You Might Need This If...</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You hide your smile in photos or social situations</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">Your teeth are stained, chipped, or discolored</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You want to improve your professional appearance</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You dream of having a Hollywood-worthy smile</span>
                      </div>
                    </div>
                  </div>

                  {/* Services Included */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-6">Beautiful Smile Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Professional Teeth Whitening</h4>
                        <p className="text-sm text-slate-600">Safe, effective whitening that can brighten your smile by several shades in just one comfortable visit.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Porcelain Veneers</h4>
                        <p className="text-sm text-slate-600">Ultra-thin, custom-made shells that cover imperfections and create a flawless, natural-looking smile.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Dental Bonding</h4>
                        <p className="text-sm text-slate-600">Quick, affordable solution to repair chips, close gaps, and reshape teeth for an instantly improved smile.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Complete Smile Makeovers</h4>
                        <p className="text-sm text-slate-600">Comprehensive treatment plans combining multiple procedures to achieve your ultimate smile transformation.</p>
                      </div>
                    </div>
                  </div>

                  {/* Our Artistic Process */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-accent-mint mr-2" />
                      Our Artistic Design Process
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Dream Consultation</h4>
                          <p className="text-slate-600 text-sm">We'll discuss your smile goals and show you what's possible with advanced imaging technology.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Custom Design</h4>
                          <p className="text-slate-600 text-sm">We create a personalized treatment plan that enhances your unique facial features and personality.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Beautiful Results</h4>
                          <p className="text-slate-600 text-sm">Experience the joy of unveiling your new smile that looks completely natural and stunningly beautiful.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-primary-mint/10 to-accent-mint/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Award className="w-5 h-5 text-accent-mint mr-2" />
                      Life-Changing Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Boost confidence in personal and professional life</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Natural-looking, beautiful results that last</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Make a memorable first impression</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Feel proud to show off your smile</span>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link href="/contact">
                      <Button className="btn btn-primary btn-lg w-full sm:w-auto">
                        <Calendar className="mr-2 w-5 h-5" />
                        Start Your Smile Journey
                      </Button>
                    </Link>
                    <a href="tel:+17149900204">
                      <Button className="btn btn-outline btn-lg w-full sm:w-auto">
                        <Phone className="mr-2 w-5 h-5" />
                        Free Consultation
                      </Button>
                    </a>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Advanced Solutions & Technology */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group bg-white border-0 rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src="/images/stock/stock.jpg"
                      alt="Advanced dental technology and equipment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-7 h-7 text-accent-mint" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-4">Advanced Solutions & Technology</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Cutting-edge treatments and specialized care for complex needs and optimal results.
                    </p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Dental Implants & All-on-4</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Invisalign® Clear Aligners</span>
                      </li>
                      <li className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span>Same-Day Emergency Dentistry</span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center text-accent-mint font-bold hover:gap-2 transition-all duration-300 group">
                      View Details <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-mint via-primary-mint to-accent-mint flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <DialogTitle className="text-3xl font-bold text-charcoal mb-2">Advanced Solutions & Technology</DialogTitle>
                  <DialogDescription className="text-xl text-slate-600">Cutting-Edge Care for Complex Needs</DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* What Is It */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Info className="w-5 h-5 text-accent-mint mr-2" />
                      What Are Advanced Dental Solutions?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Advanced dental solutions combine the latest technology with specialized expertise to solve complex problems that traditional treatments can't address. Think of it as having access to the most sophisticated tools and techniques in modern dentistry for superior, longer-lasting results.
                    </p>
                  </div>

                  {/* You Might Need This If */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">You Might Need This If...</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You have multiple missing teeth or complex dental needs</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You want straighter teeth without traditional braces</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You need emergency dental care immediately</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-mint mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">You want the most advanced treatment options available</span>
                      </div>
                    </div>
                  </div>

                  {/* Services Included */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-6">Specialized Treatment Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Dental Implants & All-on-4</h4>
                        <p className="text-sm text-slate-600">Permanent tooth replacement solutions that look, feel, and function like natural teeth, including full-mouth restoration options.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Invisalign® Clear Aligners</h4>
                        <p className="text-sm text-slate-600">Nearly invisible orthodontic treatment that straightens your teeth discreetly, with removable aligners for your convenience.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">CEREC® Same-Day Crowns</h4>
                        <p className="text-sm text-slate-600">Advanced CAD/CAM technology creates your permanent crown while you wait, eliminating multiple visits and temporary restorations.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h4 className="font-bold text-charcoal mb-2">Same-Day Emergency Care</h4>
                        <p className="text-sm text-slate-600">When dental emergencies strike, our advanced technology and flexible scheduling ensure you get the care you need immediately.</p>
                      </div>
                    </div>
                  </div>

                  {/* Our Technology Advantage */}
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-accent-mint mr-2" />
                      Our Technology Advantage
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Precise Planning</h4>
                          <p className="text-slate-600 text-sm">3D imaging and digital planning ensure predictable results and optimal treatment outcomes.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Faster Treatment</h4>
                          <p className="text-slate-600 text-sm">Advanced technology often means fewer visits and faster healing times compared to traditional methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-accent-mint text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Superior Comfort</h4>
                          <p className="text-slate-600 text-sm">Minimally invasive techniques and precise execution result in less discomfort and faster recovery.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-primary-mint/10 to-accent-mint/10 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                      <Award className="w-5 h-5 text-accent-mint mr-2" />
                      Advanced Treatment Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Precision results with cutting-edge technology</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Faster treatment times and fewer appointments</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Long-lasting, durable results</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">Comprehensive solutions for complex cases</span>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link href="/contact">
                      <Button className="btn btn-primary btn-lg w-full sm:w-auto">
                        <Calendar className="mr-2 w-5 h-5" />
                        Explore Advanced Options
                      </Button>
                    </Link>
                    <a href="tel:+17149900204">
                      <Button className="btn btn-outline btn-lg w-full sm:w-auto">
                        <Phone className="mr-2 w-5 h-5" />
                        Expert Consultation
                      </Button>
                    </a>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Trust-Building Testimonials */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">What Our Patients Say</h2>
            <p className="text-xl text-slate-600">Experience the difference of gentle, compassionate dental care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-slate-50 border-0 shadow-soft">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic leading-relaxed">
                "Dr. Krishnan and her staff are amazing. Professional, kind, and they do excellent work. I would recommend Dr. Krishnan to anyone who is looking for great results and a comfortable experience."
              </p>
              <div className="font-semibold text-charcoal text-sm">Randall Small</div>
              <div className="text-xs text-slate-500">Verified Patient</div>
            </Card>

            <Card className="p-6 bg-slate-50 border-0 shadow-soft">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic leading-relaxed">
                "So happy I found this office! Dr. Krishnan is such a perfectionist and truly cares about her patients. The staff is amazing and super helpful. I'm so happy with my results and will definitely come back for future treatments!"
              </p>
              <div className="font-semibold text-charcoal text-sm">Lucy Amador</div>
              <div className="text-xs text-slate-500">Verified Patient</div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-mint/20">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-mint text-accent-mint" />
                ))}
              </div>
              <span className="text-sm font-semibold text-charcoal ml-2">4.9/5 Average Rating</span>
              <span className="text-xs text-slate-600">• 23 Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology for Your Comfort */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Technology for Your Comfort</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We invest in advanced dental technology not just for precision, but to make your visits more comfortable, faster, and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Card className="p-6 sm:p-8 bg-white border-0 shadow-soft">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-accent-mint flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal">Digital X-Rays</h3>
                  <p className="text-slate-600">90% less radiation exposure</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Our advanced digital X-rays use a fraction of the radiation of traditional film and provide instant images, meaning shorter, safer appointments for your family.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                  <span>Instant results - no waiting</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                  <span>Enhanced image quality for better diagnosis</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                  <span>Environmentally friendly - no chemicals</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border-0 shadow-soft">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-accent-mint flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal">CEREC® Same-Day Crowns</h3>
                  <p className="text-slate-600">Complete in one visit</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                No more messy impressions or temporary crowns. Our CEREC® technology creates your permanent crown while you wait, so you leave with your new smile the same day.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                  <span>Single appointment completion</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                  <span>Perfect fit and color match</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-accent-mint mr-3 flex-shrink-0" />
                  <span>No temporary crowns needed</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-mint">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Ready to Experience a Different Kind of Dentistry?</h2>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Join the hundreds of families who have discovered gentle, compassionate dental care in Brea. Your comfort and confidence are our priority.
          </p>
          <p className="text-accent-mint font-semibold mb-8">
            ✨ Welcoming new patients • Same-day appointments • Anxiety-free environment
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8">
            <Link href="/contact">
              <Button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Your Family's Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+17149900204">
              <Button className="btn btn-outline btn-lg hover:bg-white hover:text-accent-mint transition-all">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (714) 990-0204
              </Button>
            </a>
          </div>
          
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-primary-mint/20">
            <Star className="w-4 h-4 text-accent-mint mr-2" />
            <span className="text-sm font-medium text-slate-700">New patients welcome • Most insurance accepted • Family-friendly practice</span>
          </div>
        </div>
      </section>
    </div>
  );
}
