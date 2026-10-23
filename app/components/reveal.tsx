'use client'

import { useEffect, useRef } from 'react'
import styles from './reveal.module.css'

type RevealProps = {
  children: React.ReactNode
  /** Extra delay in milliseconds, for staggering siblings. */
  delay?: number
  className?: string
}

/**
 * Fades and lifts its children once when they scroll into view.
 * Content stays visible without JavaScript and for visitors who prefer reduced motion.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (element.getBoundingClientRect().top < window.innerHeight) return undefined

    element.dataset.state = 'hidden'
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.dataset.state = 'shown'
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[styles.reveal, className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
