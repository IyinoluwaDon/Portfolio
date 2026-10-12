import { InViewTitle } from '@/components/arc/in-view-title/in-view-title'
import page from '../styles/page.module.css'

export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className={`${page.container} ${page.intro}`}>
      <InViewTitle as="h1" variant="blur" text={title} className={`${page.display} ${page.h1}`} />
      <p className={page.lede}>{description}</p>
    </section>
  )
}
