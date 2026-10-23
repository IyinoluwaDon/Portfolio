'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { projects } from '../data/projects'
import styles from './work-deck.module.css'

type Project = (typeof projects)[number]

const allCategories = ['All work', ...new Set(projects.map((project) => project.category))]

export function WorkDeck() {
  const [category, setCategory] = useState('All work')
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const visibleProjects = useMemo(
    () => category === 'All work' ? projects : projects.filter((project) => project.category === category),
    [category],
  )
  const project = visibleProjects[Math.min(active, visibleProjects.length - 1)]

  function selectCategory(nextCategory: string) {
    setCategory(nextCategory)
    setActive(0)
  }

  function move(direction: -1 | 1) {
    setActive((index) => (index + direction + visibleProjects.length) % visibleProjects.length)
  }

  function onDeckKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      move(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      move(-1)
    }
  }

  const transition = reduceMotion ? { duration: 0 } : { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <div className={styles.deck}>
      <div className={styles.deckHead}>
        <div className={styles.categoryList} role="group" aria-label="Filter projects by category">
          {allCategories.map((item) => {
            const count = item === 'All work' ? projects.length : projects.filter((entry) => entry.category === item).length
            return (
              <button
                className={styles.category}
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => selectCategory(item)}
              >
                {item}<span>{String(count).padStart(2, '0')}</span>
              </button>
            )
          })}
        </div>
        <div className={styles.downloads} aria-label="Download the project deck">
          <span>Project deck</span>
          <a href="/decks/iyinoluwa-don-taiwo-projects.pdf" download>
            PDF <Download size={14} aria-hidden="true" />
          </a>
          <a href="/decks/iyinoluwa-don-taiwo-projects.pptx" download>
            PowerPoint <Download size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        className={styles.slideViewport}
        role="region"
        aria-label="Project slides. Use the arrow keys to browse."
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={onDeckKeyDown}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            className={styles.slide}
            key={`${category}-${project.number}`}
            aria-label={`${active + 1} of ${visibleProjects.length}: ${project.title}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.995 }}
            transition={transition}
          >
            <div className={styles.slideCopy}>
              <div className={styles.slideMeta}>
                <span>{String(active + 1).padStart(2, '0')} / {String(visibleProjects.length).padStart(2, '0')}</span>
                <span>{project.category}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.measure}>
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </div>
              <p className={styles.evidence}>{project.evidence}</p>
              <details className={styles.scope}>
                <summary>What this result means</summary>
                <p>{project.note}</p>
              </details>

              <div className={styles.stack} aria-label="Tools used">
                {project.stack.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Repository <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Try the demo <ArrowUpRight size={15} aria-hidden="true" />
                </a>}
              </div>
            </div>
            <ProjectArtwork project={project} />
          </motion.article>
        </AnimatePresence>
      </div>

      <div className={styles.deckControls}>
        <p className={styles.keyboardHint}>Use ← → to browse</p>
        <div className={styles.progress} aria-label={`Slide ${active + 1} of ${visibleProjects.length}`}>
          {visibleProjects.map((item, index) => (
            <button
              key={item.number}
              type="button"
              className={index === active ? styles.progressActive : styles.progressTrack}
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              aria-current={index === active ? 'step' : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <span>{String(active + 1).padStart(2, '0')} <i>/</i> {String(visibleProjects.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft size={18} /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next project"><ArrowRight size={18} /></button>
        </div>
      </div>
    </div>
  )
}

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div className={`${styles.artwork} ${styles[project.visual]}`} aria-label={`${project.category} illustration`}>
      {project.visual === 'mri' && <>
        <div className={styles.artLabel}>Schematic MRI volume <span>01</span></div>
        <div className={styles.scanStage}>
          {[0, 1, 2].map((slice) => (
            <div className={`${styles.scanSlice} ${styles[`slice${slice + 1}`]}`} key={slice}>
              <svg viewBox="0 0 180 220" role="img" aria-label="Schematic MRI slice">
                <defs><radialGradient id={`tissue-${slice}`}><stop offset="0" stopColor="#d8d1c3" /><stop offset=".42" stopColor="#8f8d87" /><stop offset=".77" stopColor="#37393b" /><stop offset="1" stopColor="#171a20" /></radialGradient></defs>
                <rect width="180" height="220" fill="#151820" />
                <ellipse cx="88" cy="111" rx="61" ry="82" fill={`url(#tissue-${slice})`} />
                <path d="M48 82c20-29 50-32 70-8 13 16 12 41 4 54-9 15-1 33-17 46-16 14-42 5-54-11-15-20-22-59-3-81Z" fill="#bbb6aa" opacity=".62" />
                <path d="M61 105c14-22 42-19 52 1 5 12 1 25-10 32-11 7-26 5-33 18" fill="none" stroke="#e1dbc9" strokeWidth="4" opacity=".7" />
                <path d="M72 104c13 2 20 7 25 17" fill="none" stroke="#201f24" strokeWidth="3" />
                <path d="M25 44h130M25 176h130" stroke="#d3d0c7" strokeOpacity=".11" />
              </svg>
            </div>
          ))}
          <span className={styles.scanMark} aria-hidden="true" />
        </div>
        <div className={styles.artFooter}><span>SAGITTAL SLICES</span><span>RESNET18</span><span>MRNet</span></div>
      </>}

      {project.visual === 'listing' && <>
        <div className={styles.artLabel}>Illustrative listing pair <span>02</span></div>
        <div className={styles.listingCompare}>
          <div className={styles.productPicture} aria-hidden="true">
            <div className={styles.productSun} /><div className={styles.productBag} />
            <small>LISTING PHOTO</small>
          </div>
          <div className={styles.listingText}>
            <small>PRODUCT TITLE</small>
            <strong>Canvas shoulder bag</strong>
            <span className={styles.copyLine} /><span className={styles.copyLineShort} />
            <span className={styles.matchTag}>Pair score <b>0.82</b></span>
          </div>
        </div>
        <div className={styles.modelCompare}>
          <span>Text model <b>0.30</b></span><span>Image model <b>0.25</b></span><span>Fused <b>0.63</b></span>
        </div>
        <div className={styles.artFooter}><span>RAKUTEN FRANCE</span><span>20K LISTINGS</span><span>25% SWAPPED</span></div>
      </>}

      {project.visual === 'forest' && <>
        <div className={styles.artLabel}>Reported holdout errors <span>03</span></div>
        <div className={styles.forestMetrics}>
          <div className={styles.forestMetric}>
            <strong>MAE</strong>
            <div><span>NDVI only</span><i><b style={{ width: '73%' }} /></i><small>0.073</small></div>
            <div><span>Seasonal</span><i><b style={{ width: '66%' }} /></i><small>0.066</small></div>
          </div>
          <div className={styles.forestMetric}>
            <strong>RMSE</strong>
            <div><span>NDVI only</span><i><b style={{ width: '77%' }} /></i><small>0.092</small></div>
            <div><span>Seasonal</span><i><b style={{ width: '67%' }} /></i><small>0.080</small></div>
          </div>
          <p>Lower is better. Notebook results, not live dashboard values.</p>
        </div>
        <div className={styles.artFooter}><span>OMO FOREST RESERVE</span><span>SENTINEL-2</span><span>MODEL NOTEBOOK</span></div>
      </>}

      {project.visual === 'folktale' && <>
        <div className={styles.artLabel}>Challenge benchmark <span>04</span></div>
        <div className={styles.storyPaper}>
          <span className={styles.storyEyebrow}>TEAM ETHOPIE / COHORT 10</span>
          <div className={styles.storyCounts}><strong>24</strong><span>synthetic folktales</span></div>
          <div className={styles.storyCounts}><strong>38</strong><span>prompt-story pairs</span></div>
          <small>Benchmark training material</small>
        </div>
        <div className={styles.distanceChart}>
          <div><span>Baseline</span><i><b style={{ width: '100%' }} /></i><strong>211.00</strong></div>
          <div><span>Fine-tuned</span><i><b style={{ width: '81%' }} /></i><strong>171.17</strong></div>
          <small>Mean Levenshtein distance · lower is better</small>
        </div>
        <div className={styles.artFooter}><span>GEMMA 2 2B</span><span>LORA</span><span>3RD PLACE</span></div>
      </>}

      {project.visual === 'water' && <>
        <div className={styles.artLabel}>Illustrated feature path <span>05</span></div>
        <div className={styles.waterFlow}>
          <div className={styles.satelliteGrid} aria-hidden="true">{Array.from({ length: 25 }, (_, i) => <i key={i} />)}</div>
          <div className={styles.indexEquations}>
            <span><b>NDWI</b><i>(Green − NIR)</i><small>Green + NIR</small></span>
            <span><b>MNDWI</b><i>(Green − SWIR)</i><small>Green + SWIR</small></span>
          </div>
        </div>
        <div className={styles.waterMap} aria-hidden="true"><svg viewBox="0 0 500 100"><path d="M0 56c29-20 57-18 82-6s42 38 78 28 51-38 90-30 38 29 69 26 54-31 83-24 48 12 98-4v54H0Z" fill="#9ed1d1" /><path d="M9 54c35-23 58-19 87-3m65 28c43 1 58-40 97-31m58 30c39-2 61-35 88-25m47-6c22 3 34 4 49-2" fill="none" stroke="#20264b" strokeWidth="2" strokeDasharray="5 5" /></svg></div>
        <div className={styles.artFooter}><span>LAGOS LAGOON</span><span>DECISION TREE</span><span>SYNTHETIC PREVIEW</span></div>
      </>}

      {project.visual === 'ems' && <>
        <div className={styles.artLabel}>Interface schematic <span>06</span></div>
        <div className={styles.emsWindow}>
          <div className={styles.emsBar}><i /><i /><i /><span>PEOPLE / OVERVIEW</span></div>
          <div className={styles.emsBody}>
            <div className={styles.emsSide}><b>HOME</b><i /><i /><i /><i /></div>
            <div className={styles.emsMain}>
              <b>People</b><div className={styles.emsPeople}><span /><span /><span /></div>
              <div className={styles.emsRows}><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <div className={styles.roleList}><span>Admin</span><span>Manager</span><span>Employee</span></div>
        <div className={styles.artFooter}><span>PHP</span><span>MYSQL</span><span>ROLE-BASED ACCESS</span></div>
      </>}
    </div>
  )
}
