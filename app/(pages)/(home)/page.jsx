import styles from "./page.module.scss";
import HomeCarousel from "../_components/HomeCarousel/HomeCarousel";
import { ImageResponse } from "next/server";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Blog</h1>
      className={styles.categories}>
      <Image
        src='/blogMainImages/otter.png'
        alt='Otter Dialogue'
        width={252}
        height={265}
      />
      <h2>Categories</h2>
      <Image
        src='/blogMainImages/line.png'
        alt='Line'
        width={180}
        height={0}
      />
      <HomeCarousel
      //use button component

      <HomeCarousel />
    </main>
  );
}
