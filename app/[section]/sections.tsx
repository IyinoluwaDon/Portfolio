import { ArrowUpRight, Mail } from 'lucide-react'
import { Badge } from '@/components/arc/badge/badge'
import { CopyButton } from '@/components/arc/copy-button/copy-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/arc/tabs/tabs'
import { certificates } from '../data/certificates'
import { projects } from '../data/projects'
import { experience, principles, skills, workPoints } from '../data/profile'
import { links } from '../data/links'
import { Reveal } from '../components/reveal'
import { ProjectRow } from '../components/project-tile'
import { LinkButton } from '../components/link-button'
import page from '../styles/page.module.css'
import styles from './sections.module.css'

const wrap = `${page.container} ${page.sectionFlush}`

export function AboutPage() {
  return (
    <div className={wrap}>
      <div className={styles.aboutGrid}>
        <Reveal>
          <div className={styles.statement}>
            <h2 className={`${page.display} ${styles.statementTitle}`}>The point is not just a model. It is a result people can rely on.</h2>
            <p className={styles.statementCopy}>
              I work from problem framing and data exploration through modelling, evaluation, and delivery. Whether the material is medical imagery, geospatial data, or language, I aim for outcomes that are technically sound and practical.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className={styles.principles}>
            <h2 className={styles.subhead}>Working principles</h2>
            <ol className={styles.principleList}>
              {principles.map(([title, copy], index) => (
                <li key={title} className={styles.principle}>
                  <span className={page.number}>0{index + 1}</span>
                  <div>
                    <h3 className={styles.principleTitle}>{title}</h3>
                    <p className={styles.principleCopy}>{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export function SkillsPage() {
  return (
    <div className={wrap}>
      <div className={page.grid2}>
        {skills.map(({ title, copy, items }, index) => (
          <Reveal key={title} delay={(index % 2) * 80} className={styles.cell}>
            <article className={`${page.tile} ${styles.skill}`}>
              <span className={page.number}>0{index + 1}</span>
              <h2 className={`${page.tileTitle} ${styles.skillTitle}`}>{title}</h2>
              <p className={page.tileCopy}>{copy}</p>
              <div className={page.badges}>
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function WorkPage() {
  return (
    <div className={wrap}>
      <div className={styles.points}>
        {workPoints.map(([title, copy], index) => (
          <Reveal key={title} delay={index * 70}>
            <div className={styles.point}>
              <span className={page.number}>0{index + 1}</span>
              <h2 className={styles.pointTitle}>{title}</h2>
              <p className={styles.pointCopy}>{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className={page.stack}>
        {projects.map((project) => (
          <Reveal key={project.number}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export function ExperiencePage() {
  return (
    <div className={wrap}>
      <ol className={styles.timeline}>
        {experience.map((item) => (
          <li key={`${item.role}-${item.organisation}`} className={styles.entry}>
            <p className={styles.period}>{item.period}</p>
            <span className={styles.marker} aria-hidden="true" />
            <Reveal className={styles.entryBody}>
              <h2 className={`${page.display} ${styles.role}`}>{item.role}</h2>
              <p className={styles.org}>{item.organisation}</p>
              <p className={styles.where}>{item.location}</p>
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function CredentialsPage() {
  const categories = [...new Set(certificates.map((certificate) => certificate.category))]

  const grid = (items: typeof certificates) => (
    <div className={`${page.grid3} ${styles.certGrid}`}>
      {items.map((certificate) => (
        <article key={certificate.name} className={`${page.tile} ${styles.cert}`}>
          <Badge size="sm">{certificate.issuer}</Badge>
          <h3 className={`${page.tileTitle} ${styles.certTitle}`}>{certificate.name}</h3>
          {certificate.date && <p className={styles.certDate}>{certificate.date}</p>}
          <div className={page.pushDown}>
            {certificate.url ? (
              <a href={certificate.url} target="_blank" rel="noopener noreferrer" className={page.textLink}>
                View credential <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ) : (
              <p className={styles.certDate}>Verification link coming soon</p>
            )}
          </div>
        </article>
      ))}
    </div>
  )

  return (
    <div className={wrap}>
      <Tabs defaultValue="all">
        <TabsList aria-label="Credential categories">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">{grid(certificates)}</TabsContent>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            {grid(certificates.filter((certificate) => certificate.category === category))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export function ContactPage() {
  const rows: { label: string; value: string; href: string; external: boolean }[] = [
    { label: 'GitHub', value: 'IyinoluwaDon', href: links.github, external: true },
    { label: 'LinkedIn', value: 'Iyinoluwa Don-Taiwo', href: links.linkedin, external: true },
    { label: 'X', value: '@IyinoluwaDon', href: links.x, external: true },
    { label: 'Resume', value: 'View resume', href: links.resume, external: true },
  ]

  return (
    <div className={wrap}>
      <div className={styles.contactGrid}>
        <Reveal>
          <div className={styles.contactPanel}>
            <h2 className={`${page.display} ${styles.contactTitle}`}>Have a problem worth exploring?</h2>
            <p className={styles.contactCopy}>
              I&apos;m open to machine learning engineering, data science, AI research, and collaboration opportunities.
            </p>
            <div className={styles.contactActions}>
              <LinkButton href={`mailto:${links.email}`} variant="inverse">Email me</LinkButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ul className={styles.rows}>
            <li className={styles.row}>
              <a className={styles.rowLink} href={`mailto:${links.email}`}>
                <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                <span className={styles.rowLabel}>Email</span>
                <span className={styles.rowValue}>{links.email}</span>
              </a>
              <CopyButton value={links.email} label="Copy email address" iconOnly variant="plain" />
            </li>
            {rows.map((row) => (
              <li key={row.label} className={styles.row}>
                <a
                  className={styles.rowLink}
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
                  <span className={styles.rowLabel}>{row.label}</span>
                  <span className={styles.rowValue}>{row.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}
