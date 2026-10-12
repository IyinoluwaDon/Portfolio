import Image from 'next/image'
import { links } from '../data/links'
import styles from './portrait.module.css'

export function Portrait() {
  return (
    <figure className={styles.frame}>
      <Image
        className={styles.photo}
        src={links.photo}
        alt="Iyinoluwa Don-Taiwo"
        width={720}
        height={900}
        sizes="(max-width: 900px) 80vw, 420px"
        priority
      />
      <figcaption className={styles.chip}>
        <span className={styles.name}>Iyinoluwa Don-Taiwo</span>
        <span className={styles.place}>Lagos, Nigeria</span>
      </figcaption>
    </figure>
  )
}
