import type { Metadata } from 'next';
import { Open_Sans, Bowlby_One_SC } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const openSans = Open_Sans({
   variable: '--font-open-sans',
   subsets: ['latin'],
});

const bowlbyOneSC = Bowlby_One_SC({
   variable: '--font-bowlby-one',
   subsets: ['latin'],
   weight: '400',
});

export const metadata: Metadata = {
   title: 'Phopet',
   description: 'Tienda de Mascotas',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${openSans.variable} ${bowlbyOneSC.variable} antialiased`}
         >
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
