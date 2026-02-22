import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Chess Trainer - Master Your Chess Openings',
    template: '%s | Chess Trainer',
  },
  description:
    'Import PGN chess studies and practice your moves with an interactive chess trainer',
  keywords: ['chess', 'training', 'pgn', 'chess openings', 'chess study'],
  authors: [{ name: 'Chess Trainer' }],
  creator: 'Chess Trainer',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-small.svg', sizes: '64x64', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.svg', type: 'image/svg+xml' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo-icon.svg',
        color: '#0E8388',
      },
    ],
  },
  openGraph: {
    title: 'Chess Trainer - Master Your Chess Openings',
    description:
      'Import PGN chess studies and practice your moves with an interactive chess trainer',
    url: 'https://chess-trainer.app',
    siteName: 'Chess Trainer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chess Trainer - Master Your Chess Openings',
    description:
      'Import PGN chess studies and practice your moves with an interactive chess trainer',
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#2C3333',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
