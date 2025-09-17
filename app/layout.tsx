import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ideall Solutions - Global Procurement Partner',
  description: 'Your Global Procurement Partner for Premium Interior Solutions. Specializing in international trade and procurement solutions for Flooring, Furniture, Fabrics, and Fashion Walls.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/IDEALLS LOGO.png" />
      </head>
      {/* <body className={inter.className}> */}
      
      <body className={inter.className}  style={{fontFamily:"Inter", color:"#170e2cff"}} >

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}