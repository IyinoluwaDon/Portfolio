import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { SignalVisual } from './components/signal-visual'
import { WorkDeck } from './components/work-deck'
import { links } from './data/links'
import page from './styles/page.module.css'
import styles from './home.module.css'

const comparisons = [
  { label: 'Image + text', title: 'A fair comparison beats a lone score.', detail: 'Product matching · 20,000 Rakuten France listings', result: '0.63 F1', href: '/work', tone: 'coral' },
  { label: 'Seasonal features', title: 'An extra signal changed the forecast error.', detail: 'Omo Forest · LSTM against an NDVI-only baseline', result: '0.066 MAE', href: '/work', tone: 'mint' },
  { label: 'Model adaptation', title: 'A smaller language model, tuned for a narrow task.', detail: 'Team Ethopie · Gemma 2 2B · synthetic story benchmark', result: '171.17', href: '/work', tone: 'lilac' },
]

export default function Home() {
  return (
    <>
      <section className={`${page.container} ${styles.hero}`} aria-labelledby="intro-title">
        <div className={styles.heroCopy}>
          <div className={styles.heroMeta}><span>PORTFOLIO / 2026</span><span>DATA SCIENCE × MACHINE LEARNING</span></div>
          <p className={styles.role}>Data scientist <i>/</i> Machine learning engineer</p>
          <h1 id="intro-title" className={styles.title}>Iyinoluwa<br />Don-Taiwo<span>.</span></h1>
          <p className={styles.lede}>
            Recent work includes checking 4,000+ street records, comparing image and text models on 20,000 product listings, and testing seasonal NDVI forecasts for Omo Forest.
          </p>
          <p className={styles.heroDetails}>
            Each case shows what went into the analysis, how I measured it and what still needs verification.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} href="#selected-work">Explore the work <ArrowDownRight size={17} aria-hidden="true" /></Link>
            <a className={styles.resumeLink} href={links.resume} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className={styles.heroFoot}>
            <span>MODEL / DATA / INTERFACE / EVALUATION</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
        <SignalVisual />
        <div className={styles.heroIndex} aria-hidden="true"><span>01</span><i /></div>
      </section>

      <div className={styles.ticker} aria-label="Data preparation, model comparison, evaluation and usable demos">
        <div className={styles.tickerTrack} aria-hidden="true">
          {Array.from({ length: 2 }, (_, i) => <span key={i}>DATA PREPARATION <b>✳</b> BASELINES <b>✳</b> MODEL COMPARISON <b>✳</b> EVALUATION <b>✳</b> WORKING DEMOS <b>✳</b></span>)}
        </div>
      </div>

      <section className={styles.numberRail} aria-label="Selected project and experience metrics">
        <div className={styles.numberIntro}><span className={styles.eyebrow}>A FEW USEFUL NUMBERS</span><p>Scale and results from projects and applied work.</p></div>
        <article><strong>4,000<span>+</span></strong><p>street names checked with Python and GIS tools</p><small>INTERSPATIAL / STREET QA</small></article>
        <article><strong>20<span>k</span></strong><p>real product listings used in a multimodal experiment</p><small>IMAGE + TEXT CONSISTENCY</small></article>
        <article><strong>20<span>+</span></strong><p>Python and AI workshops run through PyClub</p><small>COMMUNITY / TEACHING</small></article>
      </section>

      <section className={styles.workSection} id="selected-work" aria-labelledby="work-title">
        <div className={styles.workInner}>
          <div className={styles.sectionHead}>
            <div><p className={styles.sectionLabel}>Selected work <span>01—08</span></p><h2 id="work-title" className={styles.sectionTitle}>Follow the evidence.</h2></div>
            <p className={styles.sectionIntro}>Eight projects, grouped by what they do. Open a slide for the dataset, method, result and evaluation boundary.</p>
          </div>
          <WorkDeck />
        </div>
      </section>

      <section className={`${page.container} ${styles.comparisonSection}`} aria-labelledby="comparison-title">
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionLabel}>Three comparisons</p><h2 id="comparison-title" className={styles.sectionTitle}>The result needs a reference point.</h2></div>
          <p className={styles.sectionIntro}>A model number is more useful when the baseline, sample and metric are visible beside it.</p>
        </div>
        <div className={styles.comparisonGrid}>
          {comparisons.map((item, index) => (
            <Link key={item.label} href={item.href} className={`${styles.comparison} ${styles[item.tone]}`}>
              <span className={styles.comparisonIndex}>0{index + 1} / {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className={styles.comparisonResult}><strong>{item.result}</strong><span>READ CASE <ArrowUpRight size={15} aria-hidden="true" /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.processBand} aria-labelledby="process-title">
        <div className={styles.processInner}>
          <div className={styles.processIntro}><p className={styles.sectionLabel}>How the work is built</p><h2 id="process-title">A model is one part of the system.</h2><p>The project pages include the surrounding work too: input checks, reproducible comparisons, app behavior and what the evaluation cannot establish.</p></div>
          <ol className={styles.processList}>
            <li><span>01</span><div><h3>Prepare the data</h3><p>Check shape, labels, dates and missing values before training or analysis.</p></div></li>
            <li><span>02</span><div><h3>Set a baseline</h3><p>Compare a new model with a simpler approach on the same task.</p></div></li>
            <li><span>03</span><div><h3>Expose the result</h3><p>Make the inputs, output and limitations legible in a notebook or app.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={`${page.container} ${styles.community}`} aria-labelledby="community-title">
        <div className={styles.communityStamp}><span>PY</span><b>CLUB</b><i>McPherson</i></div>
        <div className={styles.communityContent}>
          <p className={styles.sectionLabel}>Building with people</p>
          <h2 id="community-title">Python became more useful when we learned it together.</h2>
          <p>PyClub McPherson is a 100+ member Python and AI community. I founded it, run workshops and mentor beginners as they move from their first notebook to working projects.</p>
          <div className={styles.communityFacts}><span><b>100+</b> members</span><span><b>20+</b> workshops</span><span><b>30+</b> learners mentored</span></div>
          <Link href="/experience">See community and technical work <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={`${page.container} ${styles.contact}`} aria-labelledby="contact-title">
        <div><p className={styles.sectionLabel}>Contact</p><h2 id="contact-title">Have a problem worth measuring?</h2><p>For technical roles, research, collaboration or questions about a project, email is the quickest route.</p></div>
        <a className={styles.email} href={`mailto:${links.email}`}>{links.email} <ExternalLink size={17} aria-hidden="true" /></a>
      </section>
    </>
  )
}
