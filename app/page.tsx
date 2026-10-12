import Link from 'next/link'
import { HeroSection } from '@/components/arc/blocks/hero-section/hero-section'
import { StatsBand } from '@/components/arc/blocks/stats-band/stats-band'
import { InViewTitle } from '@/components/arc/in-view-title/in-view-title'
import { ArrowUpRight } from 'lucide-react'
import { projects } from './data/projects'
import { focusAreas } from './data/profile'
import { links } from './data/links'
import { Reveal } from './components/reveal'
import { Portrait } from './components/portrait'
import { ProjectTile } from './components/project-tile'
import { LinkButton } from './components/link-button'
import page from './styles/page.module.css'
import styles from './home.module.css'

// Every number below already appears on the site: the ACL project, PyClub, and the DSN ambassador role.
const stats = [
  { value: 0.9719, decimals: 4, label: 'AUC-ROC on ACL tear detection', detail: 'ResNet18 on 1,370 Stanford MRNet exams' },
  { value: 100, suffix: '+', label: 'PyClub McPherson members', detail: 'A Python and AI community I founded' },
  { value: 20, suffix: '+', label: 'Workshops facilitated', detail: 'Mentoring 30+ beginners along the way' },
  { value: 500, suffix: '+', label: 'Students reached through Data Science Nigeria', detail: 'As campus ambassador at McPherson University' },
]

export default function Home() {
  return (
    <>
      <HeroSection
        variant="split"
        className={styles.hero}
        title="Making data do useful work."
        description="I develop machine-learning systems that move from rigorous experimentation to practical, inspectable tools - across computer vision, language models, multimodal AI, and data products."
        primaryAction={{ label: 'Explore selected work', href: '/work' }}
        secondaryAction={{ label: 'View resume', href: links.resume, external: true }}
        meta={['Machine learning engineer', 'Data scientist', 'AI researcher']}
        media={<Portrait />}
      />

      <section className={`${page.container} ${styles.statsWrap}`} aria-label="Key numbers">
        <StatsBand layout="divided" stats={stats} />
      </section>

      <section className={`${page.container} ${page.section}`} aria-labelledby="how-i-work">
        <div className={styles.how}>
          <div className={styles.howHead}>
            <InViewTitle id="how-i-work" as="h2" text="Research-minded. Delivery-aware." className={`${page.display} ${page.h2}`} />
          </div>
          <div>
            <Reveal>
              <p className={page.lede}>
                The throughline in my work is clarity: frame the problem, make the data trustworthy, evaluate the model honestly, and present the result in a form that people can understand and use.
              </p>
            </Reveal>
            <ol className={styles.focusList}>
              {focusAreas.map(([title, copy], index) => (
                <li key={title}>
                  <Reveal delay={index * 70}>
                    <div className={styles.focusRow}>
                      <span className={page.number}>0{index + 1}</span>
                      <div>
                        <h3 className={styles.focusTitle}>{title}</h3>
                        <p className={styles.focusCopy}>{copy}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Link href="/about" className={page.textLink}>
              More about my approach <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${page.band} ${page.section}`} aria-labelledby="selected-work">
        <div className={page.container}>
          <div className={page.sectionHead}>
            <InViewTitle id="selected-work" as="h2" text="Work with evidence." className={`${page.display} ${page.h2}`} />
            <Link href="/work" className={page.textLink}>
              See all projects <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 80} className={styles.tileCell}>
                <ProjectTile project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${page.container} ${page.section}`} aria-labelledby="connect">
        <Reveal>
          <div className={styles.cta}>
            <h2 id="connect" className={`${page.display} ${styles.ctaTitle}`}>Have a problem worth exploring?</h2>
            <p className={styles.ctaCopy}>I&apos;m open to ML engineering, data science, AI research, and collaborative opportunities.</p>
            <div className={styles.ctaActions}>
              <LinkButton href="/contact" variant="inverse">Start a conversation</LinkButton>
              <LinkButton href={links.github} variant="inverseOutline" external>GitHub</LinkButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
