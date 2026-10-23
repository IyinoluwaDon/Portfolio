'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '../data/links'
import { navItems } from '../data/nav'
import styles from './site-header.module.css'

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">Iyinoluwa Don-Taiwo</Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.value}
              className={styles.navLink}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <a className={styles.resume} href={links.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <Link className={styles.contact} href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  )
}
