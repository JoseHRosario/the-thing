import "./globals.css";
import Navigation from "./components/navigation";
import type { Metadata } from 'next'
 
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
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
