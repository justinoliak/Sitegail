import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  image, 
  href, 
  className 
}: ServiceCardProps) {
  return (
    <Card className={cn(
      "border-none rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden group bg-background",
      className
    )}>
      <div className="h-56 relative bg-light-mint">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-4 text-charcoal group-hover:text-accent-mint transition-colors duration-300">
          {title}
        </h3>
        <p className="text-charcoal/70 mb-6 leading-relaxed">
          {description}
        </p>
        <Link 
          href={href} 
          className="inline-flex items-center text-accent-mint font-medium hover:underline transition-all duration-300"
        >
          Learn more <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}