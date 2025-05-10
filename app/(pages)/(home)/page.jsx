import styles from "./page.module.scss";
import HomeCarousel from "../_components/HomeCarousel/HomeCarousel";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>header 1</h1>
      <p>body</p>
      <HomeCarousel />
    </main>
  );
}
