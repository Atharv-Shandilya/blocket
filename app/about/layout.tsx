import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blocket',
  description:
    'Discover a new era of event ticketing with our decentralized booking system. Powered by blockchain technology, we offer transparent, secure, and user-centric ticketing experiences. Book with confidence and enjoy the freedom of direct interactions. Welcome to the future of event booking!',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
