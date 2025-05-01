import styles from "./page.module.scss";
import AlumniPageCard from "../_components/AlumniPageCard/AlumniPageCard.jsx";


export default function almuni() {
    return(

<AlumniPageCard
  name="Jack Hyslop"
  role="Founder and Leader"
  years="2020–2022"
  description={
    <>
      Jack started the club with his friends Maeve and Isabella in Winter Quarter 2020. He remained as primary leader until his graduation in Spring Quarter 2022.
      <br />
      <br />
      Since graduating, he has stayed creatively engaged. Recently, he has become a drummer in a band with his friends...
    </>
  }
  imageUrl="/jack.png"
/>
    );
        
}