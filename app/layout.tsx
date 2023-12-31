import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { TransitionProvider } from '@/context/TransitionContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blocket',
  description:
    'Discover a new era of event ticketing with our decentralized booking system. Powered by blockchain technology, we offer transparent, secure, and user-centric ticketing experiences. Book with confidence and enjoy the freedom of direct interactions. Welcome to the future of event booking!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
