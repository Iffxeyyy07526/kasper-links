import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Kasper Capital Markets | Links',
  description: 'Official links and resources for Kasper Capital Markets Ltd. Forex & CFD trading on MT5. Transparency and education first.',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Kasper Capital Markets | Links',
    description: 'Forex & CFD trading on MT5. Transparency and education first.',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kasper Capital Markets | Links',
    description: 'Forex & CFD trading on MT5. Transparency and education first.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="bg-[#0a0f1a] text-white min-h-screen antialiased selection:bg-[#2ee86b]/20 selection:text-[#2ee86b]">
        {children}
      </body>
    </html>
  );
}
