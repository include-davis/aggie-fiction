"use client";

import Image from "next/image";
import styles from "./UpcomingEvents.module.scss";
import Link from "next/link";

const events = [
  {
    date: { month: "Apr", day: "21" },
    color: "#A4DAEB",
    type: "Fundraiser",
    title: "Raising Cane’s Fundraiser",
    time: "6 PM – 7 PM",
    location: "Alumni Center",
    description: "Walk with us after our meeting (7:00 pm onwards)",
  },
  {
    date: { month: "Apr", day: "21" },
    color: "#FF9F9F",
    type: "Board Meeting",
    title: "Open Board Meeting",
    time: "5 PM – 7 PM",
    location: "Shields Library (Room 121)",
    // no description here, so Notes column won’t show
  },
  {
    date: { month: "Apr", day: "21" },
    color: "#F4D06F",
    type: "General Meeting",
    title: "General Meeting",
    time: "6 PM – 7 PM",
    location: "Olsen 167",
    // no description here, so Notes column won’t show
  },
];

export default function UpcomingEvents() {
  return (
    <section className={styles.wrapper}>
      {/* now an h1 so global h1 styles apply */}
      <h1 className={styles.heading}>Upcoming Events</h1>

      <div className={styles.list}>
        {events.map((e, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.mainColumns}>
              
              {/* COLUMN 1: Date */}
              <div className={styles.dateBlock}>
                <span className={styles.month}>{e.date.month}</span>
                <span className={styles.day}>{e.date.day}</span>
              </div>
              {/* COLUMN 2: Details */}
              <div className={styles.details}>
                {/* Type row with colored dot */}
                <div className={styles.typeRow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    className={styles.dot}
                  >
                    <circle cx="11.5" cy="11.5" r="11.5" fill={e.color} />
                  </svg>
                  <span className={styles.type}>{e.type}</span>
                </div>
                <h3 className={styles.title}>{e.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    {/* Clock icon */}
                    <Image
                      src="/clock.svg"
                      alt="Clock icon"
                      width={21}
                      height={19}
                      className={styles.icon}
                    />
                    <span className={styles.metaText}>{e.time || "All-Day"}</span>
                  </span>
                  <span className={styles.metaItem}>
                    {/* Pin icon */}
                    <Image
                      src="/lo.svg"
                      alt="Location icon"
                      width={20}
                      height={20}
                      className={styles.icon}
                    />
                    <span className={styles.metaText}>{e.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 3: Notes */}
            {e.description && (
              <div className={styles.notes}>{e.description}</div>
            )}
          </div>
        ))}
      </div>

      <Link href="/calendar"><button className={styles.button}>View Full Calendar</button></Link>
    </section>
  );
}
