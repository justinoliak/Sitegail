import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brea Dental & Aesthetics Clinic | Expert Dental Care in Brea, CA',
  description: 'Premier dental and aesthetic care in Brea, California. Offering comprehensive dental services, cosmetic dentistry, and aesthetic treatments in a modern, comfortable environment.',
  keywords: 'Brea dentist, dental clinic Brea, cosmetic dentistry, aesthetic dentistry, dental care California',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}