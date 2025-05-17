'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-primary/10">
      <div className="max-w-md w-full p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-foreground mb-6">Something went wrong</h1>
        
        <div className="space-y-4">
          <p className="text-foreground/80">
            An error occurred while loading this page. This has been logged and we're working on it.
          </p>
          
          <div className="bg-red-50 p-4 rounded">
            <p className="text-sm text-red-800 font-mono break-words">
              {error.message || "Unknown error occurred"}
            </p>
          </div>
          
          <div className="mt-6 space-y-4">
            <Button 
              onClick={reset}
              className="w-full bg-primary text-foreground hover:bg-primary/90"
            >
              Try again
            </Button>
            
            <Link href="/">
              <Button 
                variant="outline" 
                className="w-full mt-2 border-primary text-primary hover:bg-primary/10"
              >
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 