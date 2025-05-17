import styles from "./page.module.scss";
import HomeCarousel from "../_components/HomeCarousel/HomeCarousel";
import FilterMenu from "../_components/FilterMenu/FilterMenu";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>header 1</h1>
      <p>body</p>
      <HomeCarousel />
      <FilterMenu />
    </main>
  );
}
