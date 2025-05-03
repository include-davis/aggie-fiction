import styles from "./page.module.scss";

export default function Page() {
  return (
    <div>
      <main className={styles.page}>
        <h1>About us</h1>
        <p>We’re UC Davis’s creative writing club, dedicated to fostering creativity and building connections within the campus writing community. Whether you’re passionate about fiction, poetry, or just exploring storytelling, we’re here to support and inspire your writing journey.</p>
        <p>We offer free writing workshops, creative exercises, and host faculty guest speakers. Our presentations cover a range of topics, including world-building, themes, and characterization—with plenty of room for new ideas.</p>
        <p>Every Winter Quarter, we take a field trip to the San Francisco Writers Conference, where you’ll have the opportunity to network with professional writers, editors, and publishers. It’s a great way to gain insight into the publishing world while connecting with fellow members. Whether you’re looking to hone your craft or simply share your love for writing, Aggie Fiction welcomes you!</p>
        <div className={styles.otter1}>
          <img src="/images/otter1.png" alt="otter1"/>
        </div>

        <h1>Our mascot</h1>
        <p>Jackie, Aggie Fiction’s beloved otter-from-otter-space mascot, symbolizes the club’s boundless creativity and adventurous spirit. Named in honor of the club’s founder, Jack, Jackie embodies the curiosity and imagination that sparked the creation of Aggie Fiction</p>
        <p>The club was founded to fill a creative gap at UC Davis—a place where writers could come together to express themselves, share their stories, and grow as artists. Since its inception, Aggie Fiction has become a thriving community for self-expression through writing. From workshopping members’ pieces to hosting lively discussions and presentations on the craft, the club offers a platform for both emerging and seasoned writers.</p>
        <p>Jackie, with his cosmic origins, reminds us that there are no limits to creativity. Whether we’re exploring distant galaxies in our fiction or diving deep into the human experience, Aggie Fiction is a place where imagination knows no bounds.</p>
        <div className={styles.otter2}>
          <img src="/images/otter2.png" alt="otter2"/>
        </div>

        <h1>Our values</h1>
        <div className={styles.paint}>
          <img src="/images/icon1.png" alt="icon1"/>
        </div>
        <h2>Creativity</h2>
        <p>Aggie Fiction fosters a space where students can freely explore their imaginations through writing. Whether crafting original stories, experimenting with new genres, or participating in workshops, members are encouraged to take creative risks and refine their unique voices.</p>    
        <div className={styles.people}>
          <img src="/images/icon2" alt="icon2"/>
        </div>
        <h2>Community</h2>
        <p>The club thrives on collaboration and support, creating a welcoming environment where writers of all skill levels can share their work and receive constructive feedback. Through events like writing workshops, group discussions, and field trips (e.g., the San Francisco Writers Conference), Aggie Fiction strengthens connections among students who share a passion for storytelling.</p>
        <div className={styles.square}>
          <img src="/images/icon3" alt="icon3"/>
        </div>
        <h2>Authenticity</h2>
        <p>Aggie Fiction values genuine self-expression, encouraging members to write from their experiences and perspectives. The club promotes honest storytelling, creating a safe space for students to explore personal themes and experiment with their craft without judgment.</p>
      </main>

      <main className={styles.board}>
        <h1>Our board</h1>
        <div className={styles.boardGrid}>
          <div className={styles.member}>
            <img src="/images/president.png" alt="president"/>
            <h3>Claudia Colorado</h3>
            <p>President</p>
            <p>Majors: Managerial</p>
            <p>Economics & English</p>
            <p>Year: Junior</p>
          </div>
          <div className={styles.member}>
            <img src="/images/vp.png" alt="vp"/>
            <h3>Yuri Nishii</h3>
            <p>Vice-President</p>
            <p>Majors: Communications & English</p>
            <p>Minor: Technology Management</p>
            <p>Year: Senior</p>
          </div>
          <div className={styles.member}>
            <img src="/images/treasurer.png" alt="treasurer"/>
            <h3>Chris Calub</h3>
            <p>Treasurer</p>
            <p>Majors: English &</p>
            <p>Communications</p>
            <p>Year: Junior</p>
          </div>
          <div className={styles.member}>
            <img src="/images/outreach.png" alt="outreach"/>
            <h3>Audrey Zhang</h3>
            <p>Outreach Chair</p>
            <p>Majors: Economics & English</p>
            <p>Year: Junior</p>
          </div>
          <div className={styles.member}>
            <img src="/images/publicity.png" alt="publicity"/>
            <h3>Nea Le</h3>
            <p>Publicity Chair</p>
            <p>Major: Comparative Literature</p>
            <p>Minor:Japanese</p>
            <p>Year: Sophomore</p>
          </div>
          <div className={styles.member}>
            <img src="/images/design.png" alt="design"/>
            <h3>Ri Herrera</h3>
            <p>Design Lead</p>
            <p>Majors: Sociology & English</p>
            <p>Minor: History</p>
            <p>Year: Sophomore</p>
          </div>
        </div>
      </main>
    </div>
  );
}