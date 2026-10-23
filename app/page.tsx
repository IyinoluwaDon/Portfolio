import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { LinkButton } from './components/link-button'
import { WorkDeck } from './components/work-deck'
import { links } from './data/links'
import page from './styles/page.module.css'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <section className={`${page.container} ${styles.hero}`} aria-labelledby="intro-title">
        <div className={styles.heroCopy}>
          <p className={styles.role}>Machine learning engineer &amp; data scientist</p>
          <h1 id="intro-title" className={styles.title}>Iyinoluwa<br />Don-Taiwo<span>.</span></h1>
          <p className={styles.lede}>
            I build machine learning systems, test what holds up, and turn the useful parts into tools people can try.
          </p>
          <div className={styles.heroActions}>
            <LinkButton href="#selected-work">Explore my work <ArrowDown size={15} aria-hidden="true" /></LinkButton>
            <a className={styles.resumeLink} href={links.resume} target="_blank" rel="noopener noreferrer">
              Resume <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.heroFoot}>
            <span>Selected work, with the evidence and the limits.</span>
            <span>01 — 06</span>
          </div>
        </div>
        <div className={styles.portraitWrap}>
          <div className={styles.portraitShape} aria-hidden="true" />
          <Image
            src={links.photo}
            alt="Iyinoluwa Don-Taiwo"
            width={720}
            height={900}
            sizes="(max-width: 760px) 82vw, 38vw"
            priority
            className={styles.portrait}
          />
          <p className={styles.portraitCaption}><span>Machine learning</span><span>Data science</span></p>
        </div>
        <a className={styles.scrollCue} href="#selected-work" aria-label="Scroll to selected work"><span />Scroll to work</a>
      </section>

      <section className={styles.workSection} id="selected-work" aria-labelledby="work-title">
        <div className={styles.workInner}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.sectionLabel}>Selected work</p>
              <h2 id="work-title" className={styles.sectionTitle}>A closer look.</h2>
            </div>
            <p className={styles.sectionIntro}>Browse by category. Each project shows what I built, the result I measured and where that result stops.</p>
          </div>
          <WorkDeck />
        </div>
      </section>

      <section className={`${page.container} ${styles.community}`} aria-labelledby="community-title">
        <p className={styles.sectionLabel}>Away from the model</p>
        <div className={styles.communityContent}>
          <h2 id="community-title">I started a place for people to learn Python together.</h2>
          <div>
            <p>PyClub McPherson has grown into a 100+ member Python and AI community. I have run more than 20 workshops and mentored beginners working on their first projects.</p>
            <Link href="/experience">More about my work and community roles <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className={`${page.container} ${styles.contact}`} aria-labelledby="contact-title">
        <div>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 id="contact-title">Let&apos;s talk about the work.</h2>
        </div>
        <a className={styles.email} href={`mailto:${links.email}`}>{links.email} <ArrowUpRight size={18} aria-hidden="true" /></a>
      </section>
    </>
  )
}
