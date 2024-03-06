import "./globals.css";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next'
import SessionWrapper from './components/session-wrapper'
import Navigation from './components/navigation'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Helper',
  description: 'AI Help for your startup',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="container mx-auto">
            <Navigation />
            {children}
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
