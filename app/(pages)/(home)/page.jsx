import styles from "./page.module.scss";
import Image from "next/image";
import HomeCarousel from "../_components/HomeCarousel/HomeCarousel";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.title}>
              <p className={styles.titleHeader}>
                creative writing club at UC Davis
              </p>

              <h1>Aggie Fiction</h1>

              <p className={styles.titleDescription}>
                for writers of all levels and experiences
              </p>

              <button>Join Now</button>
            </div>

            <div className={styles.logo}>
              <Image
                src="/Home/img/Jackie.png"
                alt="Jackie"
                width={518}
                height={501}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
