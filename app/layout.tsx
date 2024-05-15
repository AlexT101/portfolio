import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://alext.app/'),
  title: {
    template: '%s - Project by AlexT',
    default: 'AlexT Portfolio',
  },
  description: "CS student at Georgia Tech who enjoys design and development.",
  openGraph: {
    title: "AlexT Portfolio",
    description: "CS student at Georgia Tech who enjoys design and development."
  }
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
