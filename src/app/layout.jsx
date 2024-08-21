import { Inter, Archivo, Lexend } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Providers from './utils/providers';
import Footer from '@/components/Layout/Footer';

const archivo = Archivo({ subsets: ['latin'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    default: "Martin's eksams project",
    template: "%s | Martin's eksams project",
  },
  description: "Det her er Martin K. Nielsen's eksamens project",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${archivo.className} ${lexend.className} scroll-smooth`}>
      <body className='min-h-dvh flex flex-col'>
        <Providers>
          <main className='animate-fade-in'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
