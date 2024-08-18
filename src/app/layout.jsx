import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Layout/Header'));
const Footer = dynamic(() => import('@/components/Layout/Footer'));
import CookieBanner from '@/components/Layout/Cookies';
import Providers from './utils/providers';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Martin's Next.js Template",
    template: "%s | Martin's Next.js Template",
  },
  description: 'This is a common Next.js template',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='min-h-dvh flex flex-col bg-base-100 text-base-content'>
        <Providers>
          <Header />
          <main className='snap-mandatory snap-y'>
            {children}
            {/* <CookieBanner /> */}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
