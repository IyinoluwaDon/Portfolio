import Link from 'next/link'
import { links } from '../data/links'
import { navItems } from '../data/nav'
import styles from './site-footer.module.css'

export function SiteBottom() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Link className={styles.name} href="/">Iyinoluwa Don-Taiwo</Link>
          <p>Machine Learning Engineer &amp; Data Scientist</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {navItems.map((item) => <Link key={item.value} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${links.email}`}>Email</a>
        </nav>
        <p className={styles.copyright}>© {new Date().getFullYear()} Iyinoluwa Don-Taiwo</p>
      </div>
    </footer>
  )
}
