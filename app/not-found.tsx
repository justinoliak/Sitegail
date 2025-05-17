import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-muted">
      <div className="max-w-md w-full p-8 bg-background rounded shadow-lg">
        <h1 className="text-2xl font-bold text-foreground mb-6">Page Not Found</h1>
        
        <div className="space-y-4">
          <p className="text-foreground/80">
            Sorry, we couldn't find the page you were looking for.
          </p>
          
          <div className="bg-primary/10 p-4 rounded">
            <p className="text-sm text-foreground/70">
              The page may have been moved, deleted, or it might never have existed.
            </p>
          </div>
          
          <div className="mt-6">
            <Link href="/">
              <Button className="w-full bg-primary text-foreground hover:bg-primary/90">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 