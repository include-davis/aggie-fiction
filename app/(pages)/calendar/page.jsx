"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Calendar from "../_components/Calendar/Calendar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Function to go to the next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to go to the previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to go to the current month (today)
  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  // Get month name for display
  const getMonthName = (month) => {
    return new Date(0, month).toLocaleString("default", { month: "long" });
  };

  return (
    <main>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <div className={styles.nav}>
            <button onClick={goToPreviousMonth}>
              <Image
                src="/Calendar/svg/LeftButton.svg"
                alt="Previous"
                width={44}
                height={52}
              />
            </button>

            <button className={styles.today} onClick={goToToday}>
              <p>Today</p>
            </button>

            <button onClick={goToNextMonth}>
              <Image
                src="/Calendar/svg/RightButton.svg"
                alt="Next"
                width={44}
                height={52}
              />
            </button>
          </div>

          <div className={styles.month}>
            <h1>
              {getMonthName(currentMonth)} {currentYear}
            </h1>
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
          <GoogleOAuthProvider clientId="18980159666-893kqnf906hltqei55bd3l5qb718tqhq.apps.googleusercontent.com">
            <Calendar currentMonth={currentMonth} currentYear={currentYear} />
          </GoogleOAuthProvider>
        </div>
      </div>

      <div className = {styles.upcomingEvents}>
        
      </div>
    </main>
  );
}
