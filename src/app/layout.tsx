import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/header/header';
import AppProvider from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emissions UI',
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
        <Header />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
