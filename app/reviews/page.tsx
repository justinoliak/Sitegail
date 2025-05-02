import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ReviewsPage() {
  // Sample reviews data - in a real app, this would come from a database
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      location: "Brea, CA",
      rating: 5,
      date: "February 15, 2024",
      content: "Dr. Krishnan is incredible! Her attention to detail and gentle approach made my dental visit actually enjoyable. The new office is beautiful and the staff is so welcoming. I'm actually looking forward to my next cleaning!",
      image: "/images/avatar1.png",
    },
    {
      id: 2,
      name: "Michael C.",
      location: "Fullerton, CA",
      rating: 5,
      date: "January 22, 2024",
      content: "I've been to many dentists over the years, but Dr. Krishnan is by far the best. She takes time to explain everything and makes sure you're comfortable. The technology they use is impressive and the office is stunning.",
      image: "/images/avatar2.png",
    },
    {
      id: 3,
      name: "Emma W.",
      location: "Brea, CA",
      rating: 5,
      date: "January 5, 2024",
      content: "Great experience overall. The team is friendly and the procedures were painless. Dr. Krishnan has a wonderful bedside manner and really cares about her patients. Highly recommend!",
      image: "/images/avatar3.png",
    },
    {
      id: 4,
      name: "David L.",
      location: "Yorba Linda, CA",
      rating: 5,
      date: "December 18, 2023",
      content: "After years of dental anxiety, I finally found a dentist I trust. Dr. Krishnan and her team made me feel at ease from the moment I walked in. The office environment is calming and the care is top-notch.",
      image: "/images/avatar4.png",
    },
    {
      id: 5,
      name: "Jennifer R.",
      location: "La Habra, CA",
      rating: 5,
      date: "November 30, 2023",
      content: "I came in for Botox and was amazed at Dr. Krishnan's expertise. The results are natural and exactly what I wanted. I'll definitely be back for more treatments!",
      image: "/images/avatar5.png",
    },
    {
      id: 6,
      name: "Robert T.",
      location: "Brea, CA",
      rating: 5,
      date: "November 15, 2023",
      content: "The level of care at Dr. Krishnan's practice is exceptional. From the front desk to the dental chair, everyone is professional and kind. My entire family now comes here for our dental care.",
      image: "/images/avatar6.png",
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">Patient Reviews</h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-4xl mx-auto">
              Discover what our patients are saying about their experience with Dr. Gail Ann Krishnan and our team
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>
              <p className="ml-3 text-foreground/70">
                <span className="font-medium">+100</span> 5-star reviews
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-[24px]">
                <CardContent className="pt-8 pb-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6">"{review.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-foreground">{review.name}</p>
                      <div className="flex items-center">
                        <p className="text-sm text-foreground/70">{review.location}</p>
                        <p className="text-sm text-foreground/50 ml-2">• {review.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 max-w-2xl mx-auto leading-tight">
            Ready to experience our exceptional care?
          </h2>
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join our growing family of satisfied patients. Schedule your appointment today and discover the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="transition-transform hover:-translate-y-1">
              <Button size="lg" className="book-btn book-btn-lg font-medium shadow-md w-full sm:w-auto">
                Book Your Appointment
              </Button>
            </Link>
            <a href="tel:+17149900204" className="transition-transform hover:-translate-y-1">
              <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}