import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Min portfolie',
  description: "Her er Martin K. Nielsen's portfolie",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='min-h-dvh scroll-smooth'>
      <body className={inter.className + ' ' + 'min-h-dvh flex flex-col bg-[url("/assets/img/")]'}>
        <Header />
        <main className='flex-grow container px-4 max-w-7xl mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
