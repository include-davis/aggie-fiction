import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  const board = [
    { 
      name: "Claudia Colorado",
      role: "President",
      img: "/aboutUsImages/president.png",
      desc: ["Majors: Managerial", "Economics & English", "Year: Junior"]
    },
    {
      name: "Yuri Nishii",
      role: "Vice-President",
      img: "/aboutUsImages/vp.png",
      desc: ["Majors: Communications & English", "Minor: Technology Management", "Year: Senior"]
    },
    {
      name: "Chris Calub",
      role: "Treasurer",
      img: "/aboutUsImages/treasurer.png",
      desc: ["Majors: English &", "Communications", "Year: Junior"]
    },
    {
      name: "Audrey Zhang",
      role: "Outreach Chair",
      img: "/aboutUsImages/outreach.png",
      desc: ["Majors: Economics & English", "Year: Junior"]
    },
    {
      name: "Nea Le",
      role: "Publicity Chair",
      img: "/aboutUsImages/publicity.png",
      desc: ["Major: Comparative Literature", "Minor: Japanese", "Year: Sophomore"]
    },
    {
      name: "Ri Herrera",
      role: "Design Lead",
      img: "/aboutUsImages/design.png",
      desc: ["Majors: Sociology & English", "Minor: History", "Year: Sophomore"]
    }
  ];

  return (
    <main>
      <h2 className={styles.aboutUsHeader}>About us</h2>
      <div className={styles.aboutUs}>
        <p>We’re UC Davis’s creative writing club, dedicated to fostering creativity and building connections within the campus writing community. Whether you’re passionate about fiction, poetry, or just exploring storytelling, we’re here to support and inspire your writing journey.<br/><br/>
          We offer free writing workshops, creative exercises, and host faculty guest speakers. Our presentations cover a range of topics, including world-building, themes, and characterization—with plenty of room for new ideas.<br/><br/>
          Every Winter Quarter, we take a field trip to the San Francisco Writers Conference, where you’ll have the opportunity to network with professional writers, editors, and publishers. It’s a great way to gain insight into the publishing world while connecting with fellow members. Whether you’re looking to hone your craft or simply share your love for writing, Aggie Fiction welcomes you!
        </p>
        <Image 
          src="/aboutUsImages/otter1.png" 
          width={431} 
          height={458} 
          alt="Otter Mascot"
          style={{display: "block", marginLeft: 0}}
        />
      </div>
  
      <h2 className={styles.mascotHeader}>Our mascot</h2>
      <div className={styles.mascot}>
        <p>Jackie, Aggie Fiction’s beloved otter-from-otter-space mascot, symbolizes the club’s boundless creativity and adventurous spirit. Named in honor of the club’s founder, Jack, Jackie embodies the curiosity and imagination that sparked the creation of Aggie Fiction.<br/><br/>
          The club was founded to fill a creative gap at UC Davis—a place where writers could come together to express themselves, share their stories, and grow as artists. Since its inception, Aggie Fiction has become a thriving community for self-expression through writing. From workshopping members’ pieces to hosting lively discussions and presentations on the craft, the club offers a platform for both emerging and seasoned writers.<br/><br/>
          Jackie, with his cosmic origins, reminds us that there are no limits to creativity. Whether we’re exploring distant galaxies in our fiction or diving deep into the human experience, Aggie Fiction is a place where imagination knows no bounds.
        </p>
        <Image 
          src="/aboutUsImages/otter2.png" 
          width={352} 
          height={363} 
          alt="Otter Mascot"
          style={{display: "block", marginLeft: 0}}
        />
      </div>
  
      <h2 className={styles.valuesHeader}>Our values</h2>
      <div className={styles.values}>
        <div className={styles.creativity}>
          <div className={styles.icon}>
            <Image 
              src="/aboutUsImages/creativity.png" 
              width={225} 
              height={225} 
              alt="Creativity Icon"
            />
            <h3>Creativity</h3>
          </div>
          <p>Aggie Fiction fosters a space where students can freely explore their imaginations through writing. Whether crafting original stories, experimenting with new genres, or participating in workshops, members are encouraged to take creative risks and refine their unique voices.
          </p>
        </div>
        <div className={styles.community}>
          <div className={styles.icon}>
            <Image 
              src="/aboutUsImages/community.png" 
              width={225} 
              height={225} 
              alt="Community Icon"
            />
            <h3>Community</h3>
          </div>
          <p>The club thrives on collaboration and support, creating a welcoming environment where writers of all skill levels can share their work and receive constructive feedback. Through events like writing workshops, group discussions, and field trips (e.g., the San Francisco Writers Conference), Aggie Fiction strengthens connections among students who share a passion for storytelling.
          </p>
        </div>
        <div className={styles.authenticity}>
          <div className={styles.icon}>
            <Image 
              src="/aboutUsImages/authenticity.png" 
              width={225} 
              height={225} 
              alt="Authenticity Icon"
            />
            <h3>Authenticity</h3>
          </div>
          <p>Aggie Fiction values genuine self-expression, encouraging members to write from their experiences and perspectives. The club promotes honest storytelling, creating a safe space for students to explore personal themes and experiment with their craft without judgment.
          </p>
        </div>
      </div>

      <h2 className={styles.boardHeader}>Our board</h2>
      <div className={styles.board}>
        <div className={styles.boardGrid}>
          {board.map((member, i) => (
            <div className={styles.member} key={i}>
              <Image 
                src={member.img} 
                width={225} 
                height={225} 
                alt={member.role}
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              {member.desc.map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
