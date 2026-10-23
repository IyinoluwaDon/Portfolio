import page from '../styles/page.module.css'

export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className={`${page.container} ${page.intro}`}>
      <h1 className={`${page.display} ${page.h1}`}>{title}</h1>
      <p className={page.lede}>{description}</p>
    </section>
  )
}
