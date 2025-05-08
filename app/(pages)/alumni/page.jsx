import styles from "./page.module.scss";
import AlumniPageCard from "../_components/AlumniPageCard/AlumniPageCard.jsx";


export default function almuni() {
  return (

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
      imageUrl="/jack.png"

      instaHandle="@radicalsewingclub"
      instaLink="https://www.instagram.com/" /*General link for now*/
      linkedinLink="https://www.linkedin.com/" /*General link for now*/
      linkedinHandle="linkedin link"
    />
  );

}