import styles from "./page.module.scss";
import ConferenceCarousel from "../_components/ConferenceCarousel/ConferenceCarousel";

export default function Home() {
  return (
    <>
    <main className={styles.page}>
      <h1>header 1</h1>
      <p>body</p>
    </main>
    <ConferenceCarousel></ConferenceCarousel>
    </>
  );
}
