import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import styles from './link-button.module.css'

type LinkButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'inverse' | 'inverseOutline'
  size?: 'sm' | 'md'
  /** Opens in a new tab with an outward arrow. */
  external?: boolean
  className?: string
}

/** A real link that looks like an Arc button. Arc's Button renders a <button>, so links use this. */
export function LinkButton({ href, children, variant = 'primary', size = 'md', external, className }: LinkButtonProps) {
  const cls = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')
  const isMail = href.startsWith('mailto:')
  const icon = external ? <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" /> : variant === 'primary' || variant === 'inverse' ? <ArrowRight className={styles.arrow} size={16} strokeWidth={1.75} aria-hidden="true" /> : null

  if (external || isMail) {
    return (
      <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
        {icon}
      </a>
    )
  }
  return (
    <Link className={cls} href={href}>
      {children}
      {icon}
    </Link>
  )
}
