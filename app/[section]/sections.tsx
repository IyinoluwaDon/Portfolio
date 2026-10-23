import { ArrowUpRight, Mail } from 'lucide-react'
import { Badge } from '@/components/arc/badge/badge'
import { CopyButton } from '@/components/arc/copy-button/copy-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/arc/tabs/tabs'
import { certificates } from '../data/certificates'
import { experience, focusAreas, skills } from '../data/profile'
import { links } from '../data/links'
import { Reveal } from '../components/reveal'
import { WorkDeck } from '../components/work-deck'
import { LinkButton } from '../components/link-button'
import page from '../styles/page.module.css'
import styles from './sections.module.css'

const wrap = `${page.container} ${page.sectionFlush}`

export function AboutPage() {
  return (
    <div className={wrap}>
      <div className={styles.aboutGrid}>
        <section className={styles.statement}>
          <h2 className={`${page.display} ${styles.statementTitle}`}>I build and evaluate machine learning systems.</h2>
          <p className={styles.statementCopy}>
            My work includes knee MRI classification, product-image matching, forest NDVI forecasting, satellite water mapping, language-model tuning and analysis of bank and HR data. I also founded PyClub McPherson, now a 100+ member Python and AI community.
          </p>
        </section>
        <section className={styles.principles}>
          <h2 className={styles.subhead}>Project areas</h2>
          <ul className={styles.principleList}>
            {focusAreas.map(([title, copy]) => (
              <li key={title} className={styles.principle}>
                <div>
                  <h3 className={styles.principleTitle}>{title}</h3>
                  <p className={styles.principleCopy}>{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className={styles.aboutDetails}>
        <div className={styles.aboutDetailIntro}><span className={page.number}>01 / APPROACH</span><h2>Start with the data. Make the result inspectable.</h2></div>
        <div className={styles.aboutDetailCopy}>
          <p>My work usually begins with a concrete question: whether an MRI volume contains an ACL tear, whether a product image matches its listing, or whether seasonal inputs improve an NDVI forecast. I document the data and the comparison so a score has context.</p>
          <p>That means building around the model as well as training it: input validation, baselines, evaluation scripts, readable exports and small demos. The project notes call out where evidence is incomplete, such as a generated preview, a small holdout or an experiment that has not been independently reproduced.</p>
        </div>
      </section>
      <section className={styles.aboutNumbers} aria-label="Work and community figures">
        <div><strong>4,000+</strong><span>street records checked with Python and GIS during internship work</span></div>
        <div><strong>100+</strong><span>members in the PyClub McPherson community</span></div>
        <div><strong>30+</strong><span>beginners mentored through workshops and project work</span></div>
      </section>
      <section className={styles.education}>
        <span className={page.number}>02 / EDUCATION</span>
        <div><h2>Computer Science</h2><p>McPherson University · B.Sc. · First Class Honours · CGPA 4.56 / 5.00</p></div>
        <p>The degree provides the foundations behind the applied work shown here: programming, databases, algorithms and software systems.</p>
      </section>
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
              <p className={styles.skillItems}>{items.join(' · ')}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <section className={styles.skillContext}>
        <h2>Where the tools appear</h2>
        <div><p><b>Computer vision</b><span>ACL MRI classification · product image and text matching</span></p><p><b>Geospatial</b><span>Omo Forest NDVI forecasting · Sentinel-2 water mapping · street-name QA</span></p><p><b>Analysis</b><span>Bank churn workbook · read-only HR SQL analysis</span></p><p><b>Language models</b><span>Gemma 2 2B LoRA folktale challenge</span></p></div>
      </section>
    </div>
  )
}

export function WorkPage() {
  return (
    <div className={wrap}>
      <WorkDeck />
    </div>
  )
}

export function ExperiencePage() {
  return (
    <div className={wrap}>
      <p className={styles.experienceLead}>Applied data work, research and technical community leadership. Each entry describes a role and the work completed within it.</p>
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
      <div className={styles.credentialsLead}><span className={page.number}>{certificates.length} LISTED CREDENTIALS</span><p>Training across machine learning, data science, cloud and software development. Open a credential to check its issuer and verification record.</p></div>
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
    { label: 'X', value: '@Iyinoluwa_Don', href: links.x, external: true },
    { label: 'Resume', value: 'View resume', href: links.resume, external: true },
  ]

  return (
    <div className={wrap}>
      <div className={styles.contactGrid}>
        <Reveal>
          <div className={styles.contactPanel}>
            <h2 className={`${page.display} ${styles.contactTitle}`}>Email me.</h2>
            <p className={styles.contactCopy}>
              For a question about a project, a technical role or a research collaboration, send me a note. I also keep a Botpress assistant on the site for quick questions about the work.
            </p>
            <div className={styles.contactActions}>
              <LinkButton href={`mailto:${links.email}`}>Email me</LinkButton>
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
