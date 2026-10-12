import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/arc/badge/badge'
import { projects } from '../data/projects'
import page from '../styles/page.module.css'
import styles from './project-tile.module.css'

type Project = (typeof projects)[number]

/** Compact tile for the home page. It links to the full list on the work page. */
export function ProjectTile({ project }: { project: Project }) {
  return (
    <article className={page.tile}>
      <div className={styles.top}>
        <span className={page.number}>{project.number}</span>
        {project.result && <Badge tone="info" size="sm">{project.result}</Badge>}
      </div>
      <h3 className={`${page.tileTitle} ${styles.title}`}>{project.title}</h3>
      <p className={styles.type}>{project.type}</p>
      <p className={page.tileCopy}>{project.description}</p>
      <div className={page.pushDown}>
        <Link href="/work" className={page.textLink}>
          Inspect project <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

/** Full row for the work page, with the stack and both outside links. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className={`${page.tile} ${styles.row}`}>
      <span className={`${page.number} ${styles.rowNumber}`}>{project.number}</span>
      <div className={styles.rowBody}>
        <div className={styles.rowHead}>
          <h2 className={`${page.tileTitle} ${styles.rowTitle}`}>{project.title}</h2>
          {project.result && <Badge tone="info" size="sm">{project.result}</Badge>}
        </div>
        <p className={styles.type}>{project.type}</p>
        <p className={`${page.tileCopy} ${styles.rowCopy}`}>{project.description}</p>
        <div className={page.badges}>
          {project.stack.map((item) => (
            <Badge key={item} size="sm">{item}</Badge>
          ))}
        </div>
      </div>
      <div className={styles.rowActions}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={page.textLink}>
          View code <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={page.textLink}>
            Try the demo <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
