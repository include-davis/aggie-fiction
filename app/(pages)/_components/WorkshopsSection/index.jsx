// app/(pages)/Workshops/index.jsx
'use client'

import Image from 'next/image'
import styles from './WorkshopsSection.module.scss'

const submissions = [
  'Short Story',
  'Novel Excerpt',
  'Poem (Poetics)',
  'Poetry Collection',
  'Screenplay/Script Excerpt',
  'Personal Essay',
  'Comic/Graphic Novel',
  'Multimedia Fiction',
]

export default function WorkshopsSection() {
  return (
    <section className={styles.wrapper}>

      {/* ===== TOP ROW: Title + Intro + Photo ===== */}
      <div className={styles.top}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Workshops</h2>
          <p className={styles.bodyText}>
            Workshops are a central activity within Aggie Fiction, perhaps a bit
            obvious considering the full title of our club. Each meeting,
            members open a half-hour space where their works can be read,
            reviewed, and given feedback. Following our tenets of creativity,
            community, and authenticity, all of our members can submit up to 10
            pages of their work, from short stories to novel excerpts. Everyone
            participating in workshops is encouraged to offer constructive
            criticism without giving our submitters the stress they would feel
            in an ENL 5 course or professionally-run workshop.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/Rectangle 413.png"
            alt="Students in a writing workshop"
            width={694}
            height={381}
          />
        </div>
      </div>

      {/* ===== MIDDLE ROW: “Why are workshops useful?” ===== */}
      <div className={styles.whyContainer}>
        <h3 className={styles.subheading}>Why are workshops useful?</h3>
        <p className={styles.whyBody}>
        A workshop under Aggie Fiction is meant to be a laid-back experience where writers have their ideas, styles, and voices uplifted rather than diminished. As someone who submitted more than a couple of works, I have never felt harshly judged for the quality of my writing. Each critique is met with a compliment, where conversations are more fun than cold. When being a reader, asking questions, giving flowers, and suggesting areas to grow is key to making sure the writer does not stress over their small mistakes and instead focuses them on their work’s potential. Each writer’s story and voice has value, and it is the goal of Aggie Fiction members to have that value shine brighter.
        </p>
      </div>

      {/* ===== BOTTOM ROW: Gradient + Speaker + Submission List ===== */}
      <div className={styles.bottom}>
        <div className={styles.bottomImage}>
          <Image
            src="/Rectangle 414.png"
            alt="Guest speaker presenting"
            width={646}
            height={381}
          />
        </div>
        <div className={styles.listBlock}>
          <h4 className={styles.listHeading}>
            Types of Workshop Submissions
          </h4>
          <ul className={styles.list}>
            {submissions.map(item => (
              <li key={item} className={styles.listItem}>
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 23"
                  fill="none"
                >
                  <g clipPath="url(#clip0_799_1610)">
                    <path
                      d="M15.1051 9.86222L4.50009 1.74513C4.27327 1.57778 4.01612 1.48923 3.7542 1.48829C3.49229 1.48735 3.23474 1.57406 3.0072 1.73979C2.77965 1.90552 2.59003 2.14449 2.4572 2.43294C2.32437 2.72138 2.25297 3.04923 2.25009 3.38388L2.25009 19.6181C2.25297 19.9527 2.32437 20.2806 2.4572 20.569C2.59003 20.8574 2.77965 21.0964 3.0072 21.2621C3.23474 21.4279 3.49229 21.5146 3.7542 21.5136C4.01612 21.5127 4.27327 21.4242 4.50009 21.2568L15.1051 13.1397C15.3255 12.9689 15.5078 12.7283 15.6342 12.4413C15.7607 12.1542 15.8271 11.8304 15.8271 11.501C15.8271 11.1716 15.7607 10.8477 15.6342 10.5607C15.5078 10.2736 15.3255 10.0331 15.1051 9.86222Z"
                      stroke="#E4A135"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_799_1610">
                      <rect width="23" height="18" fill="white" transform="translate(18) rotate(90)" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
