import Image from "next/image";
import styles from "./page.module.scss";
import Calendar from "../_components/Calendar/Calendar";

export default function CalendarPage() {
  return (
    <main>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <div className={styles.nav}>
            <button>
              <Image
                src="/Calendar/svg/LeftButton.svg"
                alt="Previous"
                width={44}
                height={52}
              />
            </button>

            <button className={styles.today}>
              <p>Today</p>
            </button>

            <button>
              <Image
                src="/Calendar/svg/RightButton.svg"
                alt="Next"
                width={44}
                height={52}
              />
            </button>
          </div>

          <div className={styles.month}>
            <h1>April 2025</h1>
          </div>

          <div className={styles.filter}>
            <p>Filter</p>

            <Image
              src="/Calendar/svg/FilterArrow.svg"
              alt="Dropdown"
              width={11}
              height={6}
            />
          </div>
        </div>

        <div className={styles.calendarContent}>
          <Calendar />
        </div>
      </div>
    </main>
  );
}
