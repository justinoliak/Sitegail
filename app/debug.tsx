"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DebugPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FFF5F0]">
      <div className="max-w-md w-full p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-[#001011] mb-6">Debug Page</h1>
        
        <div className="space-y-4">
          <p className="text-[#001011]/80">
            This is a simple debug page to help diagnose issues with the main site.
          </p>
          
          <div className="bg-[#A6D8D4]/10 p-4 rounded">
            <h2 className="font-medium text-[#001011] mb-2">System Status</h2>
            <p className="text-sm text-[#001011]/70">
              Next.js is working correctly if you can see this page.
            </p>
          </div>
          
          <div className="mt-6">
            <Link href="/">
              <Button className="w-full bg-[#A6D8D4] text-[#001011] hover:bg-[#A6D8D4]/90">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 