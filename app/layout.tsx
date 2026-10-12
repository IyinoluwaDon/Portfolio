import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import '@/components/arc/foundation.css'
import './globals.css'
import { SiteNav } from './components/site-header'
import { SiteBottom } from './components/site-footer'
import { ThemeToggle } from './components/theme-toggle'
import { Providers } from './providers'

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
    default: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
    template: '%s | Iyinoluwa Don-Taiwo',
  },
  description: 'Portfolio of Iyinoluwa Don-Taiwo, a Machine Learning Engineer, Data Scientist, and AI Researcher building intelligent systems and data-driven products.',
  metadataBase: new URL('https://iyinoluwa-don-taiwo.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
    description: 'Machine learning systems, data products, and cloud-native APIs.',
    type: 'website',
    url: 'https://iyinoluwa-don-taiwo.vercel.app/',
    siteName: 'Iyinoluwa Don-Taiwo',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Iyinoluwa Don-Taiwo portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iyinoluwa Don-Taiwo | ML Engineer & Data Scientist',
    description: 'Machine learning systems, data products, and cloud-native APIs.',
    images: ['/opengraph-image.png'],
  },
}

// Runs before first paint so the saved theme never flashes. Light is the default.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-accent="violet" className={`${geist.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Providers>
          <a className="skip-link" href="#main">Skip to content</a>
          <SiteNav />
          <main id="main">{children}</main>
          <SiteBottom />
          <ThemeToggle />
        </Providers>
        <Script
          src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2026/09/19/18/20260919180504-D8YF0M0G.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
