import Image from 'next/image'
import styles from './GuestSpeakersSection.module.scss'

export default function GuestSpeakersSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Text block */}
        <div className={styles.text}>
          <h2 className={styles.title}>Guest Speakers</h2>
          <p>
            In addition to our usual schedule, guest speaker events are special occasions
            where Aggie Fiction invites a published writer, alumnus, professor, or anyone
            with professional experience in the writing field to present in our general meeting.
            From building believable sci-fi settings to serializing fiction, each presentation
            has its own unique topic while also providing the chance to engage directly in
            follow-up Q&amp;A sessions.
          </p>
          <p>
            For those seeking future careers in writing and publishing, guest speaker
            events act as an early opportunity to gain key insight into the creative
            process and the industry as a whole. Q&amp;A sessions allow members to voice
            their questions, concerns, and ideas in a lively, informal setting.
          </p>
        </div>

        {/* Image block */}
        <div className={styles.bottom}>
          <div className={styles.bottomImage}>
            <Image
              src="/Rectangle 400.png"
              alt="Guest speaker presenting"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
