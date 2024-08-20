import { Inter, Archivo, Lexend } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Layout/Header'));
const Footer = dynamic(() => import('@/components/Layout/Footer'));
import CookieBanner from '@/components/Layout/Cookies';
import Providers from './utils/providers';
import { Metadata } from 'next';

const archivo = Archivo({ subsets: ['latin'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    default: "Martin's Next.js Template",
    template: "%s | Martin's Next.js Template",
  },
  description: 'This is a common Next.js template',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${archivo.className} ${lexend.className} scroll-smooth`}>
      <body className='min-h-dvh flex flex-col'>
        <Providers>
          {/* <Header /> */}

          <main className='animate-fade-in'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
