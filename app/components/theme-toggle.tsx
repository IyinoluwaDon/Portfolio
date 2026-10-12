'use client'

import { useEffect, useState } from 'react'
import { ThemeSwitch } from '@/components/arc/theme-switch/theme-switch'
import type { Theme } from '@/components/arc/theme-switch/theme-switch'
import styles from './theme-toggle.module.css'

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  // The inline script in layout.tsx has already set the saved theme on <html>.
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  }, [])

  function apply(next: Theme) {
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Private mode or blocked storage: the theme still changes for this visit.
    }
  }

  return (
    <div className={styles.dock}>
      <ThemeSwitch
        theme={theme}
        variant="rise"
        iconOnly
        onThemeChange={(next) => {
          const doc = document as ViewTransitionDocument
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (reduceMotion || !doc.startViewTransition) {
            apply(next)
            return
          }
          doc.startViewTransition(() => apply(next))
        }}
      />
    </div>
  )
}
