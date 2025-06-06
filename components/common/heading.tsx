import { cn } from "@/lib/utils";

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const headingStyles = {
  1: "text-4xl md:text-5xl font-semibold leading-tight",
  2: "text-3xl md:text-4xl font-semibold leading-tight", 
  3: "text-2xl md:text-3xl font-semibold leading-snug",
  4: "text-xl md:text-2xl font-semibold leading-snug"
};

export function Heading({ 
  level, 
  children, 
  className, 
  centered = false 
}: HeadingProps) {
  const baseStyles = cn(
    "text-charcoal tracking-tight",
    headingStyles[level],
    centered && "text-center",
    className
  );

  if (level === 1) {
    return <h1 className={baseStyles}>{children}</h1>;
  }
  if (level === 2) {
    return <h2 className={baseStyles}>{children}</h2>;
  }
  if (level === 3) {
    return <h3 className={baseStyles}>{children}</h3>;
  }
  if (level === 4) {
    return <h4 className={baseStyles}>{children}</h4>;
  }
  
  return <h1 className={baseStyles}>{children}</h1>;
}