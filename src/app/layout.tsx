
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/layout/footer';
import BottomNavbar from '@/components/layout/bottom-navbar'; // Mobile bottom navbar
import DesktopNavbar from '@/components/layout/DesktopNavbar'; // New desktop navbar

export const metadata: Metadata = {
  title: 'ReboxIt - Surplus Food Rescue',
  description: 'Discover surplus food deals from local stores and restaurants.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <DesktopNavbar /> {/* Added new desktop navbar */}
        <main className="flex-grow container mx-auto px-4 py-6 pb-20 md:pb-8"> {/* Added pb-20 for bottom nav space on mobile */}
          {children}
        </main>
        <BottomNavbar /> {/* Existing bottom navbar for mobile */}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
