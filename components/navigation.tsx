"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navigation() {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/3.png"
            alt="Gail Ann Krishnan DDS MS"
            width={180}
            height={180}
            className="h-20 w-auto"
          />
        </Link>
        
        <div className="hidden space-x-8 md:flex">
          <Link href="/dental" className="text-foreground/80 hover:text-primary">Dental</Link>
          <Link href="/facial-aesthetics" className="text-foreground/80 hover:text-primary">Facial Aesthetics</Link>
          <Link href="/reviews" className="text-foreground/80 hover:text-primary">Reviews</Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <a href="tel:+17149900204" className="flex items-center text-foreground/80 hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              (714) 990-0204
            </a>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
}