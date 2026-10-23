import type { Metadata } from 'next'
import localFont from 'next/font/local'
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
    default: 'Iyinoluwa Don-Taiwo | Data Scientist',
    template: '%s | Iyinoluwa Don-Taiwo',
  },
  description: 'Selected work in machine learning, geospatial analysis, and data products by Iyinoluwa Don-Taiwo, a data scientist in Lagos, Nigeria.',
  metadataBase: new URL('https://iyinoluwa-don-taiwo.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Iyinoluwa Don-Taiwo | Data Scientist',
    description: 'Selected work in machine learning, geospatial analysis, and data products.',
    type: 'website',
    url: 'https://iyinoluwa-don-taiwo.vercel.app/',
    siteName: 'Iyinoluwa Don-Taiwo',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Iyinoluwa Don-Taiwo portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iyinoluwa Don-Taiwo | Data Scientist',
    description: 'Selected work in machine learning, geospatial analysis, and data products.',
    images: ['/opengraph-image.png'],
  },
}

// Runs before first paint so the saved theme never flashes. Light is the default.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-accent="green" className={`${geist.variable} ${inter.variable}`} suppressHydrationWarning>
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
      </body>
    </html>
  )
}
