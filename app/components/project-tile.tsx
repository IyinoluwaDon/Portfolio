import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/arc/badge/badge'
import { projects } from '../data/projects'
import page from '../styles/page.module.css'
import styles from './project-tile.module.css'

type Project = (typeof projects)[number]

export function ProjectTile({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={page.number}>{project.number}</span>
        <span className={styles.projectType}>{project.type}</span>
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardCopy}>{project.description}</p>
      <p className={styles.evidence}><strong>Evidence</strong> {project.evidence}</p>
      <p className={styles.note}>{project.note}</p>
      <div className={styles.cardBottom}>
        <div className={styles.badges}>
          {project.stack.map((item) => <Badge key={item} size="sm">{item}</Badge>)}
        </div>
        <div className={styles.actions}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: view source on GitHub`}>
            GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: open live demo`}>
            Demo <ArrowUpRight size={15} aria-hidden="true" />
          </a>}
        </div>
      </div>
    </article>
  )
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className={`${page.tile} ${styles.row}`}>
      <span className={`${page.number} ${styles.rowNumber}`}>{project.number}</span>
      <div className={styles.rowBody}>
        <div className={styles.rowHead}>
          <h2 className={`${page.tileTitle} ${styles.rowTitle}`}>{project.title}</h2>
          <Badge tone="info" size="sm">{project.result}</Badge>
        </div>
        <p className={styles.projectType}>{project.type}</p>
        <p className={`${page.tileCopy} ${styles.rowCopy}`}>{project.description}</p>
        <p className={styles.rowEvidence}><strong>Evidence</strong> {project.evidence}</p>
        <p className={styles.note}>{project.note}</p>
        <div className={page.badges}>
          {project.stack.map((item) => <Badge key={item} size="sm">{item}</Badge>)}
        </div>
      </div>
      <div className={styles.rowActions}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={page.textLink}>
          Source code <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className={page.textLink}>
          Live demo <ArrowUpRight size={16} aria-hidden="true" />
        </a>}
      </div>
    </article>
  )
}
