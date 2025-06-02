import UpcomingEvents from "@/app/(pages)/_components/UpcomingEvents/UpcomingEvents"
import Image from "next/image"
import styles from "./page.module.scss"

const workshopTypes = [
  "Short story",
  "Novel excerpt",
  "Poem (poetics)",
  "Poetry Collection",
  "Screenplay/script excerpt",
  "Personal Essay",
  "Comic/Graphic Novel",
  "Multimedia Fiction"
]

export default function Events() {
  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <div className={styles.workshopsSection}>
          <div className={styles.workshopsInfo}>
            <div className={styles.workshopsOverview}>
              <div className={styles.textHalf}>
                <h1>Workshops</h1>
                <p>
                  Workshops are a central activity within Aggie Fiction, perhaps a bit obvious
                  considering the full title of our club. Every meeting, members are given a
                  half-hour space where their works can be read, reviewed, and given feedback
                  on. Following our tenets of creativity, community, and authenticity, all of
                  our members can submit up to 10 pages of their work, from short stories to
                  novel excerpts to poetry to script pages. Everyone participating in workshops
                  should aim to provide constructive criticism without giving our submitters
                  the stress they would feel in an ENL 5 course or professionally-run workshop.
                </p>
              </div>
              <div className={styles.image1Container}>
                <Image
                  src="/eventsImages/workshopsImage.png"
                  alt="Students in a writing workshop"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.workshopsWhy}>
              <h2>Why are workshops useful?</h2>
              <p>
                A workshop under Aggie Fiction is meant to be a laid-back experience where 
                writers have their ideas, styles, and voices uplifted rather than diminished. As 
                someone who submitted more than a couple of works, I have never felt harshly judged 
                for the quality of my writing. Each critique is met with a compliment, where 
                conversations are more fun than cold. When being a reader, asking questions, giving 
                flowers, and suggesting areas to grow is key to making sure the writer does not 
                stress over their small mistakes and instead focuses them on their work’s potential. 
                Each writer’s story and voice has value, and it is the goal of Aggie Fiction members 
                to have that value shine brighter.
              </p>
            </div>
          </div>
          <div className={styles.workshopsTypes}>
            <div className={styles.workshopsTypesImageContainer}>
              <Image
                src="/eventsImages/workshopTypesImage.png"
                alt="Guest speaker presenting"
                fill
                objectFit="cover"
              />
            </div>
            <div className={styles.workshopsTypesText}>
              <h2>Types of Workshop Submissions</h2>
              <ul>
                {workshopTypes.map((type, idx) => 
                  <li key={idx}>
                    <div className={styles.listImageContainer}>
                      <Image
                        src="/eventsImages/workshopListIcon.svg"
                        alt="-"
                        fill
                      />
                    </div>
                    <p>{type}</p>
                  </li> 
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.midSection}>
          <div className={styles.guestSpeakers}>
            <div className={styles.guestSpeakersText}>
              <h1>Guest Speakers</h1>
              <div className={styles.guestSpeakersImageContainerMobile}>
                <Image
                  src="/eventsImages/guestSpeakerImage.png"
                  alt="Guest speaker presenting"
                  fill
                  objectFit="cover"
                />
              </div>
              <p>
                In addition to our usual schedule, guest speaker events are special occasions where
                Aggie Fiction invites a published writer, alumni, professor, or anyone with
                professional experience in the writing field to present in our general meeting. From
                building believable sci-fi settings to serializing fiction, each presentation has its
                own unique topic, addressing various concerns members may have while also providing
                chances for anyone to directly engage with speakers in subsequent Q&A sessions.
              </p>
              <p>
                For those seeking future careers in writing and publishing, guest speaker events act
                as an early opportunity for members to gain key insight into the writing process and
                the industry as a whole. Q&A sessions are also a staple, allowing members to voice their
                questions, concerns or comments as well as bounce off one another’s ideas and queries
                in a lively and informal setting.
              </p>
            </div>
            <div className={styles.guestSpeakersImageContainerDesktop}>
              <Image
                src="/eventsImages/guestSpeakerImage.png"
                alt="Guest speaker presenting"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className={styles.writersConference}>
            <div className={styles.writersConferenceImageContainer}>
              <Image
                src="/eventsImages/sfImage.png"
                alt="San Francisco skyline"
                fill
                objectFit="cover"
              />
            </div>
            <div className={styles.writersConferenceContent}>
              <div className={styles.writersConferenceText}>
                <h1>San Francisco Writers Conference</h1>
                <h2>A Gateway to the Literary World</h2>
              </div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.upcomingEventsContainer}>
        <UpcomingEvents/>
      </div>
    </div>
  )
}
