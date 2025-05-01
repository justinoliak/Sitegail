import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We're here to help with all your dental and aesthetic needs. Reach out to schedule an appointment or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">255 W Central Ave, Suite 201</p>
                      <p className="text-muted-foreground">Brea, CA 92821</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(714) 990-0204</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@breaaesthetics.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                      <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Insurance & Payment</h2>
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Accepted Insurance Plans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Delta Dental</li>
                      <li>• Most PPO plans</li>
                      <li>• CareCredit financing available</li>
                      <li>• Flexible payment plans</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Schedule a Visit</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      New patients welcome! Please have your insurance card and photo ID ready. We can review any recent X-rays (taken within 12 months) to avoid duplicate imaging.
                    </p>
                    <div className="space-y-4">
                      <Button size="lg" className="w-full text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        Book Appointment
                      </Button>
                      <a href="tel:+17149900204">
                        <Button size="lg" variant="outline" className="w-full text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Phone className="mr-2 h-5 w-5" /> Call (714) 990-0204
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">First Visit Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Complete medical history form</li>
                      <li>• Insurance card and photo ID</li>
                      <li>• List of current medications</li>
                      <li>• Recent dental X-rays (if available)</li>
                      <li>• Arrive 15 minutes early</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}