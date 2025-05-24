import Image from 'next/image'
import Link from 'next/link'
import styles from './WritersConferenceSection.module.scss'

export default function WritersConferenceSection() {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {/* — Image Column — */}
        <div className={styles.picture} />

        {/* — Text Column — */}
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>
            San Francisco Writers Conference
          </h2>
          <p className={styles.subtitle}>
            A Gateway to the Literary World
          </p>
          <Link href="/conference" className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
