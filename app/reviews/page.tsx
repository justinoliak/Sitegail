import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  // Sample reviews data - in a real app, this would come from a database
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      content: "Exceptional dental care! The staff was professional and made me feel at ease throughout my entire visit.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "2024-01-10",
      content: "Dr. Smith is amazing! Very thorough and takes time to explain everything. The new facility is state-of-the-art.",
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 4,
      date: "2024-01-05",
      content: "Great experience overall. The team is friendly and the procedures were painless. Highly recommend!",
    }
  ]

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Patient Reviews</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{review.name}</CardTitle>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <CardDescription>
                {new Date(review.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}