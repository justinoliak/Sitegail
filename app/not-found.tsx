import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blush-light">
      <div className="max-w-md w-full p-8 bg-background rounded shadow-lg">
        <h1 className="text-2xl font-bold text-foreground mb-6">Page Not Found</h1>
        
        <div className="mb-8">
          <p className="text-foreground/80">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="bg-primary/10 p-4 rounded">
          <p className="text-sm text-foreground/70">
            Need help finding something? Feel free to contact us:
          </p>
          <a href="tel:+17149900204" className="text-primary font-medium block mt-2">
            (714) 990-0204
          </a>
        </div>
        
        <div className="mt-8">
          <Link href="/">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 