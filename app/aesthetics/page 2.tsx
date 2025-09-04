import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Phone, Star, Zap, Clock, Users } from "lucide-react";

export default function AestheticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-padding-lg hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20 text-sm font-medium text-slate-700 mb-6">
                <Zap className="w-4 h-4 text-accent-mint mr-2" />
                FDA-Cleared Technology • Non-Surgical Results
              </div>
              <h1 className="text-4xl font-bold text-charcoal mb-6">
                Your Smile is Our Masterpiece.
                <span className="text-accent-mint block">Now, Let's Frame It Beautifully.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                For years, our practice has been dedicated to the art and science of creating beautiful, healthy smiles. We believe that a true masterpiece deserves the perfect frame—the harmony of your entire face completes the picture of wellness and youthfulness.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact">
                  <Button className="btn btn-primary btn-lg group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Consultation
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
                  src="/images/emface-machine/Emface_PIC_Model-3625_ENUS100.jpg"
                  alt="BTL Emface machine - advanced facial rejuvenation technology"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-primary-mint/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">FDA Cleared</p>
                    <p className="text-sm text-charcoal/70">BTL Emface Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Introduction */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
            <p className="mb-8">
              A radiant smile is a powerful expression of confidence and vitality, and it remains the centerpiece of our commitment to you. We believe, however, that a true masterpiece deserves the perfect frame. The harmony of your entire face—the quality of your skin, the definition of your contours, and the natural lift of your features—completes the picture of wellness and youthfulness.
            </p>
            
            <p className="mb-8">
              Embracing this philosophy of total facial aesthetics, we are proud to extend our clinical expertise beyond dentistry. We have invested in the most advanced, scientifically-proven technologies to offer our patients a new level of care. This is not about altering who you are; it is about restoring and revitalizing your natural beauty. Our approach is rooted in regenerative aesthetics, a sophisticated field focused on stimulating your body's own powerful healing and rebuilding mechanisms. We work with your biology to achieve results that are not only noticeable but authentically yours.
            </p>
            
            <p className="mb-8">
              At the forefront of this new chapter are two groundbreaking platforms from BTL Aesthetics: <strong className="text-accent-mint">Emface®</strong> and <strong className="text-accent-mint">Exion™</strong>. These state-of-the-art, FDA-cleared devices represent the pinnacle of non-invasive facial rejuvenation. They offer a scientifically validated path to turning back the clock on facial aging, addressing everything from skin laxity and wrinkles to loss of volume and muscle tone—all without a single needle, incision, or moment of downtime. This is the future of aesthetic medicine: intelligent, effective, and seamlessly integrated into your life.
            </p>
          </div>
        </div>
      </section>

      {/* Emface Section */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Emface®: The 20-Minute Non-Surgical Lift</h2>
            <h3 className="text-2xl font-semibold text-accent-mint mb-8">The Emface Revolution</h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Imagine a treatment that could provide a significant facial lift, smooth deep-set wrinkles, and restore youthful contours, all during a 20-minute session you could schedule on your lunch break. This is the reality of Emface®, a revolutionary procedure that is redefining the possibilities of non-invasive facial rejuvenation. Emface is the first and only device on the market that simultaneously treats both the facial skin and the underlying muscles—the two primary structures responsible for the visible signs of aging.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-charcoal text-center mb-12">How It Works: The Patented Power of Synergy</h3>
            <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              The remarkable efficacy of Emface lies in its patented, simultaneous delivery of two powerful energies. This dual-action approach ensures that both the surface and the structural support of your face are treated in a single, comfortable session.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 h-full bg-white shadow-soft border-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-charcoal text-center mb-6">Synchronized Radiofrequency (RF)</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Think of the Synchronized RF energy as a gentle, deep warmth that penetrates the dermal layers of your skin. This precisely controlled thermal energy creates an optimal environment for skin remodeling. Within minutes of starting the treatment, the tissue is heated to a temperature between 40-42 degrees Celsius.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This is the scientifically-proven temperature required to signal your fibroblast cells—the tiny factories in your skin—to awaken and ramp up the production of new collagen and elastin fibers. The heating is so precise that it remodels the skin without affecting the delicate facial fat pads.
                </p>
              </Card>

              <Card className="p-8 h-full bg-white shadow-soft border-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-charcoal text-center mb-6">High-Intensity Facial Electrical Stimulation (HIFES™)</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  While the RF energy is perfecting the skin's surface, HIFES™ technology is performing a revolutionary task below: rebuilding the foundational support of your face. HIFES™ acts as a high-intensity workout for the specific "elevator" muscles that are responsible for lifting your facial features.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  During a single 20-minute Emface session, HIFES™ technology induces an astonishing <strong className="text-accent-mint">75,000 supramaximal muscle contractions</strong>—an intensity that is impossible to achieve voluntarily. This extreme stress forces the muscles to adapt by increasing their density, quality, and resting tone.
                </p>
              </Card>
            </div>
          </div>

          {/* Treatment Areas */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-charcoal text-center mb-12">What Can Emface Treat? Targeted Results from Forehead to Jawline</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                </div>
                <h4 className="font-semibold text-charcoal mb-3">Forehead & Brows</h4>
                <p className="text-sm text-slate-600">Produces a noticeable brow lift, opening up the eye area and smoothing horizontal forehead lines.</p>
              </Card>

              <Card className="p-6 text-center bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                </div>
                <h4 className="font-semibold text-charcoal mb-3">Cheeks & Mid-Face</h4>
                <p className="text-sm text-slate-600">Restores youthful volume to the cheeks and softens the appearance of nasolabial folds (smile lines).</p>
              </Card>

              <Card className="p-6 text-center bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                </div>
                <h4 className="font-semibold text-charcoal mb-3">Jawline & Jowls</h4>
                <p className="text-sm text-slate-600">Creates an upward pull on the lower face, resulting in a more defined jawline and reduced jowls.</p>
              </Card>

              <Card className="p-6 text-center bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-accent-mint/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-mint" />
                </div>
                <h4 className="font-semibold text-charcoal mb-3">Double Chin</h4>
                <p className="text-sm text-slate-600">Dedicated submentum applicator targets every layer under the chin for a dramatically improved profile.</p>
              </Card>
            </div>
          </div>

          {/* Clinical Results */}
          <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
            <h3 className="text-3xl font-bold text-charcoal mb-4">The Proof is in the Science: Clinically-Proven Results</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              The claims behind Emface are not merely anecdotal; they are backed by extensive clinical research published in peer-reviewed journals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div>
                <div className="text-4xl font-bold text-accent-mint mb-2">37%</div>
                <p className="text-sm text-slate-600 font-medium">Average Wrinkle Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-mint mb-2">23%</div>
                <p className="text-sm text-slate-600 font-medium">Average Lifting Effect</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-mint mb-2">30%</div>
                <p className="text-sm text-slate-600 font-medium">Increase in Muscle Tone</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-mint mb-2">26%</div>
                <p className="text-sm text-slate-600 font-medium">Increase in Collagen</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-mint mb-2">100%+</div>
                <p className="text-sm text-slate-600 font-medium">Increase in Elastin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exion Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Exion™: The Ultimate Solution for Skin Health and Vitality</h2>
            <h3 className="text-2xl font-semibold text-accent-mint mb-8">Introducing Exion</h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              While Emface masterfully rebuilds the architectural framework of the face, Exion™ focuses on perfecting the quality, health, and vitality of the skin itself. Exion is a revolutionary, multi-platform device that offers a comprehensive suite of treatments to address an extensive range of skin concerns on the face and body. Its most significant innovation is its unique, patented ability to stimulate the body's natural production of hyaluronic acid (HA)—the essential molecule responsible for deep skin hydration, volume, and plumpness—without the use of needles.
            </p>
          </div>

          {/* Science Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-charcoal text-center mb-12">The Science of Deep Rejuvenation: A Symphony of Energies</h3>
            <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              Exion's versatility is powered by a sophisticated combination of core technologies that can be adapted to treat specific concerns with unparalleled precision.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 h-full bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-charcoal text-center mb-6">Monopolar RF & Targeted Ultrasound</h4>
                <p className="text-slate-600 leading-relaxed">
                  The cornerstone of Exion's needle-free applicators is the patented synergy of monopolar RF and targeted ultrasound. The RF energy delivers controlled, uniform heat deep into the dermis, while the targeted ultrasound provides a mechanical stimulus to the fibroblast cells. This unique combination of thermal and mechanical stress unlocks the skin's ability to dramatically increase its own production of hyaluronic acid.
                </p>
              </Card>

              <Card className="p-8 h-full bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-charcoal text-center mb-6">AI-Powered Fractional RF Microneedling</h4>
                <p className="text-slate-600 leading-relaxed">
                  For advanced skin resurfacing, Exion employs the most intelligent microneedling technology available. A sophisticated Artificial Intelligence (AI) control system analyzes the skin's impedance in real-time during treatment, precisely calculating and delivering the optimal amount of RF energy to the exact depth required for maximum effect.
                </p>
              </Card>
            </div>

            <div className="bg-accent-mint/5 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-charcoal mb-4">Key Breakthrough</h4>
              <div className="text-5xl font-bold text-accent-mint mb-4">224%</div>
              <p className="text-lg text-slate-600 font-medium">Increase in Natural Hyaluronic Acid Production</p>
              <p className="text-slate-600 mt-2">Clinical studies have shown that Exion Face treatments can boost the skin's natural HA production by an incredible 224%.</p>
            </div>
          </div>

          {/* 4 Applicators */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-charcoal text-center mb-12">Personalized Treatments for Your Unique Needs</h3>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
              The Exion platform features four distinct applicators, each designed to provide a targeted solution for specific aesthetic goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-4">Exion™ Face: For Natural Volume & Hydration</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This is the applicator responsible for Exion's most celebrated breakthrough. Using the combined power of RF and targeted ultrasound, it provides a needle-free solution for restoring youthful plumpness and deep hydration to the skin.
                </p>
                <p className="text-sm text-slate-500 italic">
                  <strong>Primary Benefit:</strong> Achieve the plumping, smoothing, and hydrating effects of hyaluronic acid without a single injection.
                </p>
              </Card>

              <Card className="p-8 bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-4">Exion™ Fractional RF: For Total Skin Resurfacing</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This applicator represents a new era in microneedling technology, designed to dramatically improve skin texture and address more significant concerns like deep wrinkles, acne scars, and stretch marks.
                </p>
                <p className="text-sm text-slate-500 italic">
                  <strong>Primary Benefit:</strong> The most advanced and comfortable microneedling treatment available for transformative improvements in skin texture.
                </p>
              </Card>

              <Card className="p-8 bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-4">Exion™ Body: For Skin Tightening & Fat Reduction</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Using the same RF and ultrasound synergy with a larger handpiece and integrated active skin cooling, this allows for deeper energy penetration to effectively treat skin laxity and localized pockets of fat.
                </p>
                <p className="text-sm text-slate-500 italic">
                  <strong>Key Statistics:</strong> 85% improvement in skin laxity and 22% reduction in localized fat.
                </p>
              </Card>

              <Card className="p-8 bg-white shadow-soft border-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-mint to-accent-mint flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-4">Exion™ Clear RF: Smart Microablation</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This applicator provides a "laser-like" procedure using smart microablation technology with an intelligent system that ensures consistent and uniform energy delivery.
                </p>
                <p className="text-sm text-slate-500 italic">
                  <strong>Primary Benefit:</strong> Excellent for improving skin tone, correcting pigmentation issues, and achieving a flawless complexion with minimal downtime.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emface vs Exion Comparison */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Emface vs. Exion: Your Personalized Path to Radiance</h2>
            <h3 className="text-2xl font-semibold text-accent-mint mb-8">The Right Treatment for the Right Reason: Which Path is Yours?</h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Understanding the difference between Emface and Exion is the key to unlocking your ideal treatment plan. While both platforms represent the pinnacle of non-invasive aesthetic technology, they are engineered to achieve distinct, complementary goals. In the simplest terms, <strong className="text-accent-mint">Emface is about rebuilding the structure of the face</strong>—the muscles and the foundational lift. <strong className="text-accent-mint">Exion is about perfecting the surface</strong>—the skin's quality, texture, hydration, and overall health.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-mint to-accent-mint text-white">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">Emface®</th>
                    <th className="px-6 py-4 text-left font-semibold">Exion™</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-charcoal">Primary Goal</td>
                    <td className="px-6 py-4 text-slate-600">
                      <strong className="text-accent-mint">LIFT & TONE:</strong> Rebuilds facial structure by toning muscles and tightening skin.
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      <strong className="text-accent-mint">REJUVENATE & REFINE:</strong> Improves skin quality, texture, hydration, and plumpness.
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-charcoal">Core Technology</td>
                    <td className="px-6 py-4 text-slate-600">Synchronized RF + HIFES™ (Muscle Stimulation)</td>
                    <td className="px-6 py-4 text-slate-600">Monopolar RF + Targeted Ultrasound (HA Boost) & AI Microneedling</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-charcoal">Analogy</td>
                    <td className="px-6 py-4 text-slate-600">A "Workout for Your Face" + Skin Tightening</td>
                    <td className="px-6 py-4 text-slate-600">A "Deep Hydration & Skin Rebuilding" Treatment</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-charcoal">Best For</td>
                    <td className="px-6 py-4 text-slate-600">Sagging skin, loss of facial definition, drooping brows, jowls.</td>
                    <td className="px-6 py-4 text-slate-600">Fine lines, wrinkles, acne scars, poor texture, dullness, thin skin.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-charcoal">Key Statistic</td>
                    <td className="px-6 py-4">
                      <div className="text-2xl font-bold text-accent-mint">23%</div>
                      <div className="text-sm text-slate-600">Average Lifting Effect</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-2xl font-bold text-accent-mint">224%</div>
                      <div className="text-sm text-slate-600">Increase in Natural Hyaluronic Acid</div>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-charcoal">Treatment Time</td>
                    <td className="px-6 py-4 text-slate-600">20 minutes</td>
                    <td className="px-6 py-4 text-slate-600">10-60 minutes (depending on applicator)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-charcoal">Sensation</td>
                    <td className="px-6 py-4 text-slate-600">Intense muscle contractions & gentle warmth.</td>
                    <td className="px-6 py-4 text-slate-600">Deep warmth (Face/Body) or a warm, prickly sensation (Fractional RF).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* The Ultimate Combination */}
          <div className="bg-gradient-to-br from-light-mint to-primary-mint/20 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-charcoal mb-6">The Ultimate Combination: The Non-Surgical Facelift 2.0</h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The true magic of having both Emface and Exion platforms in our practice is the ability to combine them for a "total face" rejuvenation that is more comprehensive and natural than either treatment could achieve alone. Think of it like building a house. <strong className="text-accent-mint">Emface acts as the architect and builder</strong>, restoring the strong foundation and framework (the muscles and deep connective tissues) to give your face its essential lift and structure. Once the foundation is solid, <strong className="text-accent-mint">Exion comes in as the master finisher</strong>, perfecting the walls and surfaces (the skin). Together, they create a harmonious, long-lasting result that truly revitalizes your entire appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Your Journey Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Your Journey with Us: What to Expect</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Embarking on a new aesthetic journey can be exciting, but it can also come with questions. We believe in complete transparency and are committed to ensuring you feel comfortable, informed, and confident every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <Card className="p-6 text-center bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent-mint text-white flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-semibold text-charcoal mb-3">Personal Consultation</h3>
              <p className="text-sm text-slate-600">Thorough assessment of your facial anatomy, skin quality, and aesthetic goals.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent-mint text-white flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-semibold text-charcoal mb-3">Pre-Care Preparation</h3>
              <p className="text-sm text-slate-600">Simple preparation including hydration and avoiding sun exposure.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent-mint text-white flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-semibold text-charcoal mb-3">Treatment Experience</h3>
              <p className="text-sm text-slate-600">Comfortable sessions lasting 20-60 minutes depending on the treatment.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent-mint text-white flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-semibold text-charcoal mb-3">Post-Care & Downtime</h3>
              <p className="text-sm text-slate-600">Minimal to zero downtime with simple aftercare instructions.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-slate-50 to-light-mint/30 border-0 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent-mint text-white flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">5</span>
              </div>
              <h3 className="font-semibold text-charcoal mb-3">Results Evolution</h3>
              <p className="text-sm text-slate-600">Progressive improvements over 4-12 weeks with continued regenerative benefits.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get comprehensive answers to common questions about Emface and Exion treatments and what to expect during your aesthetic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 bg-white shadow-soft border-0">
              <h3 className="font-semibold text-charcoal mb-3">Am I a good candidate for Emface or Exion?</h3>
              <p className="text-slate-600 text-sm">Generally, any adult who is beginning to see the signs of aging—such as mild to moderate skin laxity, fine lines, wrinkles, or loss of facial definition—is an excellent candidate. These treatments are safe and effective for all skin types and tones. They are also a fantastic preventative measure for younger patients who want to maintain their skin health and muscle tone to slow the aging process. The best way to determine your candidacy is through a personal consultation.</p>
            </Card>

            <Card className="p-6 bg-white shadow-soft border-0">
              <h3 className="font-semibold text-charcoal mb-3">How many sessions will I need?</h3>
              <p className="text-slate-600 text-sm">Optimal results are achieved through a series of treatments. While your personalized plan will be determined during your consultation, the typical protocols are: <strong>Emface:</strong> A series of 4 sessions, spaced 5 to 14 days apart. <strong>Exion Face & Body:</strong> A series of 4 sessions, spaced 7 to 14 days apart. <strong>Exion Fractional RF:</strong> A series of 2 to 6 sessions, spaced 1 to 6 weeks apart, depending on the condition being treated.</p>
            </Card>

            <Card className="p-6 bg-white shadow-soft border-0">
              <h3 className="font-semibold text-charcoal mb-3">Does it hurt?</h3>
              <p className="text-slate-600 text-sm">These treatments are designed with patient comfort in mind. Emface creates a sensation of intense muscle contractions and warmth, which is unusual but not considered painful. Exion Face and Body treatments feel like a relaxing, warm massage. For Exion Fractional RF, a topical numbing cream is applied beforehand to ensure a comfortable experience; patients typically report only a mild, warm, prickly sensation. In clinical studies, 82% of patients found the Exion Fractional RF treatment to be comfortable.</p>
            </Card>

            <Card className="p-6 bg-white shadow-soft border-0">
              <h3 className="font-semibold text-charcoal mb-3">How long do the results last?</h3>
              <p className="text-slate-600 text-sm">The results from Emface and Exion are long-lasting because they are the result of your body's own regenerative processes. The new collagen, elastin, and muscle tone you build are yours to keep. Results can last for a year or even longer. The natural aging process will, of course, continue. We recommend periodic maintenance sessions (e.g., once or twice a year) to help preserve and enhance your results over the long term.</p>
            </Card>

            <Card className="p-6 bg-white shadow-soft border-0">
              <h3 className="font-semibold text-charcoal mb-3">Can I get Emface or Exion if I have Botox or fillers?</h3>
              <p className="text-slate-600 text-sm">Yes, absolutely. Not only are these treatments compatible with injectables, but they can also work synergistically to produce superior, more natural-looking results. Emface can create a better foundational lift, potentially reducing the amount of filler needed to achieve a desired outcome and helping to avoid an "overfilled" look. By toning the elevator muscles of the face, it complements the action of neuromodulators like Botox, which relax the depressor muscles, leading to a more balanced and harmonious result. It is generally recommended to wait a few weeks after injectable treatments before starting an Emface or Exion series.</p>
            </Card>

            <Card className="p-6 bg-white shadow-soft border-0">
              <h3 className="font-semibold text-charcoal mb-3">Who should NOT get these treatments?</h3>
              <p className="text-slate-600 text-sm">Patient safety is our absolute priority. While Emface and Exion are very safe, there are certain conditions that are contraindications for treatment. You should not undergo these procedures if you have: a pacemaker, internal defibrillator, or any active electronic implant; metal implants, plates, or piercings in the treatment area; are pregnant or nursing; have a current or history of skin cancer; have an active skin condition in the treatment area; have an active collagen or autoimmune disease; have a neurological disorder such as multiple sclerosis or epilepsy; or have used Isotretinoin (Accutane) within the past 12 months.</p>
            </Card>
          </div>

          {/* Treatment Packages Preview */}
          <div className="bg-gradient-to-br from-light-mint to-primary-mint/20 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-charcoal mb-6">Investment in Your Confidence</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              We believe that investing in your appearance is an investment in your confidence and well-being. Because both Emface and Exion deliver their optimal, long-lasting results through a series of treatments, we have designed comprehensive packages that provide the best possible value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-charcoal mb-2">Emface Foundation Package</h4>
                <p className="text-sm text-slate-600">Complete series of 4 Emface sessions for natural lift.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-charcoal mb-2">Exion Skin Health Package</h4>
                <p className="text-sm text-slate-600">4 Exion Face sessions for dramatic hydration boost.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-charcoal mb-2">Advanced Resurfacing Package</h4>
                <p className="text-sm text-slate-600">3 Exion Fractional RF sessions for texture transformation.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-charcoal mb-2">Ultimate Non-Surgical Lift</h4>
                <p className="text-sm text-slate-600">Combined Emface and Exion for total facial rejuvenation.</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent-mint text-white font-semibold">
                <span className="text-lg mr-2">🎁</span>
                Complimentary Consultation + $250 OFF Your First Package
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-light-mint">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Discover Your Best Self?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule your complimentary consultation with Dr. Krishnan to create a personalized treatment plan that helps you look and feel your absolute best.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/contact">
              <Button className="btn btn-primary btn-lg shadow-lg">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:+17149900204">
              <Button className="btn btn-outline btn-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call (714) 990-0204
              </Button>
            </a>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary-mint/20">
            <Star className="w-4 h-4 text-accent-mint mr-2" />
            <span className="text-sm font-medium text-slate-700">Complimentary consultations • FDA-cleared treatments only</span>
          </div>
        </div>
      </section>
    </div>
  );
}
