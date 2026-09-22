import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://victordebelu.com'),
  title: {
    default: 'Victor Chukwudebelu — Senior AI/ML Engineer',
    template: '%s · Victor Chukwudebelu',
  },
  description:
    'Senior AI/ML Engineer, Software Engineer, and Computer Scientist. 10+ years building production systems across ML, full-stack, cybersecurity, and Web3.',
  keywords: [
    'Victor Chukwudebelu',
    'AI/ML Engineer',
    'Software Engineer',
    'Computer Scientist',
    'Cybersecurity',
    'Web3',
    'DeFi',
    'LLM',
    'RLHF',
    'Portfolio',
  ],
  authors: [{ name: 'Victor Chukwudebelu' }],
  creator: 'Victor Chukwudebelu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Victor Chukwudebelu — Senior AI/ML Engineer',
    description:
      'Senior AI/ML Engineer & Computer Scientist. Production systems across ML, cybersecurity, and Web3.',
    siteName: 'Victor Chukwudebelu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Chukwudebelu — Senior AI/ML Engineer',
    description:
      'Senior AI/ML Engineer & Computer Scientist. Production systems across ML, cybersecurity, and Web3.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <Nav />
        <main id="content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
