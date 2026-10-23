import Image from 'next/image'
import { links } from '../data/links'
import styles from './signal-visual.module.css'

const points = [
  [10, 18], [23, 73], [34, 31], [45, 84], [52, 14], [61, 59], [72, 26], [81, 68], [92, 41],
  [16, 48], [29, 91], [40, 57], [57, 36], [68, 88], [77, 49], [89, 83], [96, 15],
]

export function SignalVisual() {
  return (
    <div className={styles.field} aria-label="Portrait with a diagram of data moving through model evaluation">
      <div className={styles.rings} aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className={styles.portraitFrame}>
        <Image src={links.photo} alt="Iyinoluwa Don-Taiwo" fill priority sizes="(max-width: 760px) 86vw, 42vw" className={styles.portrait} />
        <span className={styles.frameMark} aria-hidden="true">FIG 01</span>
      </div>
      <svg className={styles.plot} viewBox="0 0 100 100" aria-hidden="true">
        <path className={styles.path} d="M3 76 C18 56 22 40 39 54 S58 76 67 44 S80 24 97 31" />
        <path className={styles.pathMuted} d="M2 25 C17 42 25 19 38 34 S52 60 63 22 S84 64 99 78" />
        {points.map(([cx, cy], index) => <circle key={`${cx}-${cy}`} className={styles.point} style={{ '--delay': `${index * 130}ms` } as React.CSSProperties} cx={cx} cy={cy} r={index % 4 === 0 ? 1.15 : .72} />)}
      </svg>
      <div className={`${styles.readout} ${styles.readoutTop}`}>
        <span className={styles.readoutCode}>01 — MRI</span>
        <strong>120</strong>
        <span>validation exams</span>
      </div>
      <div className={`${styles.readout} ${styles.readoutBottom}`}>
        <span className={styles.readoutCode}>02 — MULTIMODAL</span>
        <strong>20,000</strong>
        <span>product listings</span>
      </div>
      <span className={styles.crosshair} aria-hidden="true" />
      <span className={styles.visualCaption}>DATA IN / RESULTS OUT <i>FIELD NOTES 2026</i></span>
    </div>
  )
}
