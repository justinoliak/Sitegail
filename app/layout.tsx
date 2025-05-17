import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Dr. Gail Ann Krishnan DDS MS | Exceptional Dental Care in Brea, CA",
  description: "Experience exceptional dental care with Dr. Gail Ann Krishnan in Brea, CA. Offering comprehensive dental services including preventive, cosmetic, and restorative dentistry in a warm, comfortable environment.",
  keywords: "dentist Brea, Dr. Gail Ann Krishnan, dental care, cosmetic dentistry, preventive dentistry, restorative dentistry, Brea dentist",
  openGraph: {
    title: "Dr. Gail Ann Krishnan DDS MS | Exceptional Dental Care in Brea, CA",
    description: "Experience exceptional dental care with Dr. Gail Ann Krishnan in Brea, CA. Offering comprehensive dental services in a warm, comfortable environment.",
    url: "https://www.breaaesthetics.com",
    siteName: "Dr. Gail Ann Krishnan DDS MS",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Gail Ann Krishnan's Dental Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" 
          as="style" 
        />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BackToTop />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}