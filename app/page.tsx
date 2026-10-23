import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { LinkButton } from './components/link-button'
import { ProjectTile } from './components/project-tile'
import { links } from './data/links'
import { projects } from './data/projects'
import page from './styles/page.module.css'
import styles from './home.module.css'

const featuredProjects = [...projects.slice(0, 2), projects[4], projects[3]].map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, '0'),
}))

export default function Home() {
  return (
    <>
      <section className={`${page.container} ${styles.hero}`} aria-labelledby="intro-title">
        <div className={styles.heroCopy}>
          <p className={styles.role}>Machine Learning Engineer | Data Scientist</p>
          <h1 id="intro-title" className={`${page.display} ${styles.title}`}>Iyinoluwa Don-Taiwo</h1>
          <p className={styles.lede}>
            My projects include MRI classification, product image–text matching, folktale generation, satellite-data analysis, and a PHP employee-management app.
          </p>
          <div className={styles.heroActions}>
            <LinkButton href="/work">View selected work</LinkButton>
            <a className={styles.resumeLink} href={links.resume} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className={styles.socials} aria-label="Contact and profiles">
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${links.email}`}>Email</a>
          </div>
        </div>
        <Image
          src={links.photo}
          alt="Iyinoluwa Don-Taiwo"
          width={720}
          height={900}
          sizes="(max-width: 760px) 72vw, 360px"
          priority
          className={styles.portrait}
        />
      </section>

      <section className={`${page.band} ${page.section}`} aria-labelledby="selected-work">
        <div className={page.container}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.sectionLabel}>Selected projects</p>
              <h2 id="selected-work" className={`${page.display} ${page.h2}`}>Work</h2>
            </div>
            <Link href="/work" className={page.textLink}>All projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => <ProjectTile key={project.number} project={project} />)}
          </div>
        </div>
      </section>

      <section className={`${page.container} ${page.section} ${styles.contact}`} aria-labelledby="contact-title">
        <div>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 id="contact-title" className={`${page.display} ${page.h2}`}>Get in touch</h2>
        </div>
        <a className={styles.email} href={`mailto:${links.email}`}>{links.email} <ArrowUpRight size={18} aria-hidden="true" /></a>
      </section>
    </>
  )
}
