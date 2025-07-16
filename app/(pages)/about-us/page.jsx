import styles from "./page.module.scss";
import Image from "next/image";
import React from "react";

export default function Home() {
  const board = [
    { 
      name: "Claudia Colorado",
      role: "President",
      img: "/aboutUsImages/president.png",
      major: "Managerial Economics & English",
      year: "Junior",
    },
    {
      name: "Yuri Nishii",
      role: "Vice-President",
      img: "/aboutUsImages/vp.png",
      major: "Communications & English",
      minor: "Technology Management",
      year: "Senior",
    },
    {
      name: "Chris Calub",
      role: "Treasurer",
      img: "/aboutUsImages/treasurer.png",
      major: "English & Communications",
      year: "Junior",
    },
    {
      name: "Audrey Zhang",
      role: "Outreach Chair",
      img: "/aboutUsImages/outreach.png",
      major: "Economics & English",
      year: "Junior",
    },
    {
      name: "Nea Le",
      role: "Publicity Chair",
      img: "/aboutUsImages/publicity.png",
      major: "Comparative Literature",
      minor: "Japanese",
      year: "Sophomore",
    },
    {
      name: "Ri Herrera",
      role: "Design Lead",
      img: "/aboutUsImages/design.png",
      major: "Sociology & English",
      minor: "History",
      year: "Sophomore",
    }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={styles.textImageSection}>
          <h1>About us</h1>
          <div className={styles.textImageContent}>
            <p>We’re UC Davis’s creative writing club, dedicated to fostering creativity and building connections within the campus writing community. Whether you’re passionate about fiction, poetry, or just exploring storytelling, we’re here to support and inspire your writing journey.<br/><br/>
              We offer free writing workshops, creative exercises, and host faculty guest speakers. Our presentations cover a range of topics, including world-building, themes, and characterization—with plenty of room for new ideas.<br/><br/>
              Every Winter Quarter, we take a field trip to the San Francisco Writers Conference, where you’ll have the opportunity to network with professional writers, editors, and publishers. It’s a great way to gain insight into the publishing world while connecting with fellow members. Whether you’re looking to hone your craft or simply share your love for writing, Aggie Fiction welcomes you!
            </p>
            <div className={`${styles.topImageContainer} ${styles.otter1}`}>
              <Image
                src="/aboutUsImages/otter1.png"
                fill
                objectFit="contain"
                alt="Otter Mascot"
              />
            </div>
          </div>
        </div>
        <div className={styles.textImageSection}>
          <h1>Our mascot</h1>
          <div className={styles.textImageContent}>
            <p>Jackie, Aggie Fiction’s beloved otter-from-otter-space mascot, symbolizes the club’s boundless creativity and adventurous spirit. Named in honor of the club’s founder, Jack, Jackie embodies the curiosity and imagination that sparked the creation of Aggie Fiction.<br/><br/>
              The club was founded to fill a creative gap at UC Davis—a place where writers could come together to express themselves, share their stories, and grow as artists. Since its inception, Aggie Fiction has become a thriving community for self-expression through writing. From workshopping members’ pieces to hosting lively discussions and presentations on the craft, the club offers a platform for both emerging and seasoned writers.<br/><br/>
              Jackie, with his cosmic origins, reminds us that there are no limits to creativity. Whether we’re exploring distant galaxies in our fiction or diving deep into the human experience, Aggie Fiction is a place where imagination knows no bounds.
            </p>
            <div className={`${styles.topImageContainer} ${styles.otter2}`}>
              <Image
                src="/aboutUsImages/otter2.png"
                fill
                objectFit="contain"
                alt="Otter Mascot"
              />
            </div>
          </div>
        </div>
      </div>
  
      <div className={styles.bottom}>
        <div className={styles.values}>
          <h1>Our values</h1>
          <div className={styles.valuesContent}>
            <div className={styles.valueGroup}>
              <div className={styles.iconCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src="/aboutUsImages/creativity.png"
                    fill
                    objectFit="contain"
                    alt="Creativity Icon"
                  />
                </div>
                <h2>Creativity</h2>
              </div>
              <p>Aggie Fiction fosters a space where students can freely explore their imaginations through writing. Whether crafting original stories, experimenting with new genres, or participating in workshops, members are encouraged to take creative risks and refine their unique voices.
              </p>
            </div>
            <div className={styles.valueGroup}>
              <div className={styles.iconCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src="/aboutUsImages/community.png"
                    fill
                    objectFit="contain"
                    alt="Community Icon"
                  />
                </div>
                <h2>Community</h2>
              </div>
              <p>The club thrives on collaboration and support, creating a welcoming environment where writers of all skill levels can share their work and receive constructive feedback. Through events like writing workshops, group discussions, and field trips (e.g., the San Francisco Writers Conference), Aggie Fiction strengthens connections among students who share a passion for storytelling.
              </p>
            </div>
            <div className={styles.valueGroup}>
              <div className={styles.iconCard}>
                <div className={styles.iconContainer}>
                  <Image
                    src="/aboutUsImages/authenticity.png"
                    fill
                    objectFit="contain"
                    alt="Authenticity Icon"
                  />
                </div>
                <h2>Authenticity</h2>
              </div>
              <p>Aggie Fiction values genuine self-expression, encouraging members to write from their experiences and perspectives. The club promotes honest storytelling, creating a safe space for students to explore personal themes and experiment with their craft without judgment.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.board}>
          <h1>Our board</h1>
          <div className={styles.boardContent}>
            <div className={styles.boardGrid}>
              {board.map((member, i) => (
                <div className={styles.member} key={i}>
                  <div className={styles.memberImageContainer}>
                    <Image
                      src={member.img}
                      fill
                      alt={member.role}
                    />
                  </div>
                  <div className={styles.memberText}>
                    <h2>{member.name}</h2>
                    <p className={styles.position}>{member.role}</p>
                    <p>{member.major.includes("&")? "Majors: " + member.major : "Major: " + member.major}</p>
                    {member.minor && <p>{member.minor.includes("&")? "Minors: " : "Minor: " + member.minor}</p>}
                    <p>{member.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}