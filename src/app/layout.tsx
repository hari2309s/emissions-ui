import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import emissions from '../../public/emissions.png';
import AppProvider from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UI for Emissions API',
  description: 'Built using Next.js, TypeScript and React',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '15px' }}>
          <Image
            src={emissions}
            width={150}
            height={150}
            alt="Emissions"
            style={{ justifyContent: 'center', marginBottom: '5px' }}
          />
          <h2>Emissions UI</h2>
          <h3>Easy access to satellite-based emission data for everyone</h3>
        </div>
        <AppProvider>{children}</AppProvider>
        <footer>Made in Germany 🥨</footer>
      </body>
    </html>
  );
}
