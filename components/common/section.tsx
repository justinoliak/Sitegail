import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

const sectionVariants = {
  default: "bg-background",
  light: "bg-light-mint",
  gradient: "bg-gradient-to-b from-light-mint to-background"
};

const paddingVariants = {
  sm: "py-16",
  md: "py-24", 
  lg: "py-32"
};

export function Section({ 
  children, 
  className, 
  variant = 'default',
  padding = 'lg'
}: SectionProps) {
  return (
    <section className={cn(
      sectionVariants[variant],
      paddingVariants[padding],
      className
    )}>
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {children}
      </div>
    </section>
  );
}