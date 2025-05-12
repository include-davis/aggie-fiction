import styles from "./page.module.scss";
import AlumniPageCard from "../_components/AlumniPageCard/AlumniPageCard.jsx";
import Image from "next/image";


export default function almuni() {
  return (
    <div className={styles.alumniPage}>

      
        <div className={styles.header}>
          <h1 className={styles.title}>Meet our Alumni</h1>
          <div className={styles.searchbar}>
            <Image
              src="/AlumniPage/mag.svg"
              alt="Magnifying glass icon"
              width={30}
              height={31}

            />

            <input
              type="text"
              placeholder="Search for an alumni..."
              className={styles.searchInput}
            />

          </div>
        </div>
        <Image
          src="/AlumniPage/OG Jackie Stickers - NO BORDER 2.png"
          alt="Jackie sticker"
          width={341}
          height={233}
          className={styles.jackieSticker}
        />

      <div className={styles.cardsContainer}>
        <AlumniPageCard
          first_name="Jack"
          last_name="Hyslop"
          role="Founder and Leader"
          years="2020–2022"
          description={
            <>
              Jack started the club with his friends Maeve and Isabella in Winter Quarter 2020.
              He remained as primary leader until his graduation in Spring Quarter 2022.
              <br />
              <br />
              Since graduating, he has stayed creatively engaged.
              Recently, he has become a drummer in a band with his friends.
              He has taken sewing classes at a local city college and joined Radical Sewing Club (@radicalsewingclub) as a volunteer assisting folks
              with using a sewing machine to mend and alter their clothes.
              He rescued a kitten named Boots about two years ago.
            </>
          }
          imageUrl="/AlumniPage/jack.png"
          instaHandle="@radicalsewingclub"
          instaLink="https://www.instagram.com/" /*General link for now*/
          linkedinLink="https://www.linkedin.com/" /*General link for now*/
          linkedinHandle="linkedin link"
        />

        <AlumniPageCard
          first_name="Gurt"
          role="Member"
          years="2020–2022"
          description={
            <>
            yogurt
            <br />
            <br />
            gurt: yo
            <br />
            This is a temporary card 
    
            </>
          }
          imageUrl="/AlumniPage/yogurt.png"
          />
           <AlumniPageCard
          first_name="Gurt"
          role="Member"
          years="2020–2022"
          description={
            <>
            yogurt
            <br />
            <br />
            gurt: yo
            <br />
            This is a temporary card 
    
            </>
          }
          imageUrl="/AlumniPage/yogurt.png"
          />
          <AlumniPageCard
          first_name="Gurt"
          role="Member"
          years="2020–2022"
          description={
            <>
            yogurt
            <br />
            <br />
            gurt: yo
            <br />
            This is a temporary card 
    
            </>
          }
          imageUrl="/AlumniPage/yogurt.png"
          />
           <AlumniPageCard
          first_name="Gurt"
          role="Member"
          years="2020–2022"
          description={
            <>
            yogurt
            <br />
            <br />
            gurt: yo
            <br />
            This is a temporary card 
    
            </>
          }
          imageUrl="/AlumniPage/yogurt.png"
          />
      </div>
    </div>
  );

}