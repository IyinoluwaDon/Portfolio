import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import styles from './project-tile.module.css'

type Project = (typeof projects)[number]

function ProjectLinks({ project, className }: { project: Project; className: string }) {
  return (
    <div className={className}>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        Source code <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">
        Live demo <ArrowUpRight size={15} aria-hidden="true" />
      </a>}
    </div>
  )
}

export function ProjectTile({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span>{project.number}</span>
        <span className={styles.projectType}>{project.type}</span>
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardCopy}>{project.description}</p>
      <p className={styles.result}>{project.evidence}</p>
      <p className={styles.stack}>{project.stack.join(' · ')}</p>
      <ProjectLinks project={project} className={styles.actions} />
    </article>
  )
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className={styles.row}>
      <span className={styles.rowNumber}>{project.number}</span>
      <div className={styles.rowBody}>
        <p className={styles.projectType}>{project.type}</p>
        <h2 className={styles.rowTitle}>{project.title}</h2>
        <p className={styles.rowCopy}>{project.description}</p>
        <p className={styles.result}>{project.evidence}</p>
        <p className={styles.note}>{project.note}</p>
        <p className={styles.stack}>{project.stack.join(' · ')}</p>
      </div>
      <ProjectLinks project={project} className={styles.rowActions} />
    </article>
  )
}
