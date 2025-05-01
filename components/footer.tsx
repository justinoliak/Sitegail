import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Dr. Gail Ann Krishnan</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                255 W Central Ave, Suite 201
              </p>
              <p className="text-muted-foreground pl-6">Brea, CA 92821</p>
              <p className="text-muted-foreground flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (714) 990-0204
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Hours</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Mon - Fri: 8am - 6pm
              </p>
              <p className="text-muted-foreground pl-6">Sat: 9am - 2pm</p>
              <p className="text-muted-foreground pl-6">Sun: Closed</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/dental" className="block text-muted-foreground hover:text-primary">Dental</Link>
              <Link href="/facial-aesthetics" className="block text-muted-foreground hover:text-primary">Facial Aesthetics</Link>
              <Link href="/reviews" className="block text-muted-foreground hover:text-primary">Reviews</Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Most PPO plans accepted including Delta Dental
            </p>
            <p className="text-sm text-muted-foreground">
              CareCredit financing available
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Gail Ann Krishnan DDS MS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}