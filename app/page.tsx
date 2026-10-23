import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CodeXml, Mail } from 'lucide-react'
import { Badge } from '@/components/arc/badge/badge'
import { ProjectTile } from './components/project-tile'
import { LinkButton } from './components/link-button'
import { links } from './data/links'
import { projects } from './data/projects'
import page from './styles/page.module.css'
import styles from './home.module.css'

const featuredProjects = projects.slice(0, 6)

export default function Home() {
  return (
    <>
      <section className={`${page.container} ${styles.hero}`} aria-labelledby="intro-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Data science · Machine learning · Geospatial</p>
          <h1 id="intro-title" className={`${page.display} ${styles.title}`}>
            Iyinoluwa Don-Taiwo
          </h1>
          <p className={styles.lede}>
            I work across machine learning, geospatial data, and software, from experiments to tools people can try.
          </p>
          <p className={styles.location}>Based in Lagos, Nigeria <span aria-hidden="true">·</span> Open to research and product work</p>
          <div className={styles.heroActions}>
            <LinkButton href="/work">Explore selected work</LinkButton>
            <LinkButton href={links.resume} external variant="secondary">Resume</LinkButton>
          </div>
          <div className={styles.socials} aria-label="Contact and profiles">
            <a href={links.github} target="_blank" rel="noopener noreferrer"><CodeXml size={17} aria-hidden="true" /> GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={17} aria-hidden="true" /> LinkedIn</a>
            <a href={`mailto:${links.email}`}><Mail size={17} aria-hidden="true" /> Email</a>
          </div>
        </div>
        <figure className={styles.portraitFrame}>
          <Image
            src={links.photo}
            alt="Iyinoluwa Don-Taiwo"
            width={720}
            height={900}
            sizes="(max-width: 760px) 72vw, 360px"
            priority
            className={styles.portrait}
          />
          <figcaption><span className={styles.statusDot} /> Currently at Interspatial Technologies</figcaption>
        </figure>
        <a href="#selected-work" className={styles.scrollCue}>
          <span>Scroll to selected work</span><ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </section>

      <section className={`${page.band} ${page.section}`} aria-labelledby="selected-work">
        <div className={page.container}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>A selection of work</p>
              <h2 id="selected-work" className={`${page.display} ${page.h2}`}>Selected projects</h2>
            </div>
            <Link href="/work" className={page.textLink}>All selected projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => <ProjectTile key={project.number} project={project} />)}
          </div>
        </div>
      </section>

      <section className={`${page.container} ${page.section}`} aria-labelledby="current-work">
        <div className={styles.currentGrid}>
          <div>
            <p className={styles.eyebrow}>What I&apos;m working on</p>
              <h2 id="current-work" className={`${page.display} ${page.h2}`}>Current work</h2>
          </div>
          <div className={styles.currentContent}>
            <p>
              At Interspatial Technologies, I work with geospatial data, quality checks, and vegetation time series. At TRI AI Saturdays, I led a team project on language-model adaptation for folktale generation.
            </p>
            <div className={styles.focusTags} aria-label="Areas of work">
              {['Computer vision', 'Applied NLP', 'Geospatial analysis', 'Data products'].map((tag) => <Badge key={tag} size="sm">{tag}</Badge>)}
            </div>
            <div className={styles.inlineLinks}>
              <Link href="/experience" className={page.textLink}>Experience <ArrowUpRight size={16} aria-hidden="true" /></Link>
              <Link href="/about" className={page.textLink}>About my work <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${page.container} ${page.sectionFlush}`} aria-labelledby="contact-title">
        <div className={styles.contactPanel}>
          <div>
            <p className={styles.eyebrow}>Get in touch</p>
            <h2 id="contact-title" className={`${page.display} ${styles.contactTitle}`}>Get in touch about a project or role.</h2>
          </div>
          <LinkButton href={`mailto:${links.email}`}>Write to me</LinkButton>
        </div>
      </section>
    </>
  )
}
