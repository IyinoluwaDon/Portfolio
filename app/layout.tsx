import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/components/arc/foundation.css'
import './globals.css'
import { SiteNav } from './components/site-header'
import { SiteBottom } from './components/site-footer'
import { Providers } from './providers'
import Script from 'next/script'

// Fonts are bundled in app/fonts, so the build never needs to reach Google Fonts.
const geist = localFont({
  src: './fonts/Geist-Variable.woff2',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
})

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Iyinoluwa Don-Taiwo — Machine Learning Engineer and Data Scientist',
    template: '%s | Iyinoluwa Don-Taiwo',
  },
  description: 'Machine learning and data science projects by Iyinoluwa Don-Taiwo, with code, demonstrations and evaluation notes.',
  metadataBase: new URL('https://iyinoluwa-don-taiwo.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Iyinoluwa Don-Taiwo — Machine Learning Engineer and Data Scientist',
    description: 'Machine learning and data science projects, with code, demonstrations and evaluation notes.',
    type: 'website',
    url: 'https://iyinoluwa-don-taiwo.vercel.app/',
    siteName: 'Iyinoluwa Don-Taiwo',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Iyinoluwa Don-Taiwo portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iyinoluwa Don-Taiwo | Machine Learning Engineer & Data Scientist',
    description: 'Machine learning and data science projects, with code, demonstrations and evaluation notes.',
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-accent="violet" className={`${geist.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <a className="skip-link" href="#main">Skip to content</a>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteBottom />
        </Providers>
        <Script src="https://cdn.botpress.cloud/webchat/v5.0/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2026/09/19/18/20260919180504-D8YF0M0G.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
