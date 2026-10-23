'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArcProvider } from '@/components/arc/lib/arc-provider'

// Arc components render plain <a> and <img> by default. This makes them use
// Next.js navigation (no full page reloads) and optimized images.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ArcProvider link={Link} image={Image}>
      {children}
    </ArcProvider>
  )
}
