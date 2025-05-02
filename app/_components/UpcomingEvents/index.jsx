"use client";
import styles from "./UpcomingEvents.module.scss";
const events = [
    {
      date: { month: "Apr", day: "21" },
      type: "Fundraiser",
      title: "Raising Cane’s Fundraiser",
      time: "6 PM – 7 PM",
      location: "Alumni Center",
      description: "Help us raise money for the campus food pantry."
    },
    {
      date: { month: "Apr", day: "21" },
      type: "Board Meeting",
      title: "Open Board Meeting",
      time: "5 PM – 7 PM",
      location: "Shields Library (Room 121)",
      description: "All members are welcome to sit in."
    },
    {
      date: { month: "Apr", day: "21" },
      type: "General Meeting",
      title: "General Meeting",
      time: "6 PM – 7 PM",
      location: "Olsen 167",
      description: "Come hear our plans for next quarter!"
    },
  ];
  
// app/_components/UpcomingEvents/index.jsx
export default function UpcomingEvents() {
    return (
        <section className={styles.wrapper}>
          <h2 className={styles.heading}>Upcoming Events</h2>
          <ul className={styles.list}>
            {events.map((e, i) => (
              <li key={i} className={styles.item}>
                <div className={styles.dateBlock}>
                  <span className={styles.month}>{e.date.month}</span>
                  <span className={styles.day}>{e.date.day}</span>
                </div>
                <div className={styles.details}>
                  <span className={styles.type}>{e.type}</span>
                  <h3 className={styles.title}>{e.title}</h3>
                  <div className={styles.meta}>
                    <span>🕒 {e.time}</span>
                    <span>📍 {e.location}</span>
                  </div>
                  <p className={styles.description}>{e.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.button}>View Full Calendar</button>
        </section>
      );
    }