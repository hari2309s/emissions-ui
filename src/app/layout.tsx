import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import emissions from "../../public/emissions.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI for Emissions API",
  description: "Built using Next.js, TypeScript and React",
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
          <Image src={emissions} width={50} height={50} alt="Emissions" style={{ justifyContent: 'center' }} />
        </div>
        {children}
        <footer>Made in Germany 🥨</footer>
      </body>
    </html>
  );
}
