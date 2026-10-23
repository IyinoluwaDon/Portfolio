import { SiteFooter } from '@/components/arc/blocks/site-footer/site-footer'
import { navItems } from '../data/nav'
import { links } from '../data/links'
import styles from './site-header.module.css'
import footer from './site-footer.module.css'

export function SiteBottom() {
  return (
    <SiteFooter
      variant="columns"
      className={footer.wide}
      brand={{ name: 'Iyinoluwa Don-Taiwo', href: '/', mark: <span className={styles.mark} aria-hidden="true">ID</span> }}
      tagline="Data science · Lagos, Nigeria"
      columns={[
        {
          title: 'Explore',
          links: [
            ...navItems.map((item) => ({ label: item.label, href: item.href })),
            { label: 'Contact', href: '/contact' },
            { label: 'Skills', href: '/skills' },
            { label: 'Credentials', href: '/credentials' },
          ],
        },
        {
          title: 'Elsewhere',
          links: [
            { label: 'GitHub', href: links.github, external: true },
            { label: 'LinkedIn', href: links.linkedin, external: true },
            { label: 'X', href: links.x, external: true },
            { label: 'Email', href: `mailto:${links.email}` },
            { label: 'Resume', href: links.resume, external: true },
          ],
        },
      ]}
      // Arc's sample Privacy, Terms and social links are replaced with nothing: this site has no such pages.
      legal={[]}
      socials={[]}
      newsletter={null}
      status={null}
      year={new Date().getFullYear()}
    />
  )
}
