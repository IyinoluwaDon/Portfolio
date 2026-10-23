'use client'

import { usePathname } from 'next/navigation'
import { SiteHeader } from '@/components/arc/blocks/site-header/site-header'
import { navItems } from '../data/nav'
import { links } from '../data/links'
import styles from './site-header.module.css'

function currentValue(pathname: string) {
  if (pathname === '/') return 'home'
  const first = pathname.split('/').filter(Boolean)[0]
  return navItems.some((item) => item.value === first) ? first : undefined
}

export function SiteNav() {
  const pathname = usePathname()

  return (
    <SiteHeader
      variant="centered"
      label="Primary navigation"
      brand={{
        name: 'Iyinoluwa Don-Taiwo',
        href: '/',
        mark: <span className={styles.mark} aria-hidden="true">ID</span>,
      }}
      items={navItems}
      current={currentValue(pathname)}
      secondaryAction={null}
      primaryAction={{
        label: 'View resume',
        // The resume lives on Google Drive, so open it in a new tab.
        onClick: () => window.open(links.resume, '_blank', 'noopener,noreferrer'),
      }}
    />
  )
}
