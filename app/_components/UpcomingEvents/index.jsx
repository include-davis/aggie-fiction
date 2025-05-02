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
  {/* Clock icon + time */}
  <span className={styles.metaItem}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      className={styles.icon}
    >
      <path
        d="M10.5 0.5C16.2991 0.5 21 4.75315 21 10C21 15.2469 16.2991 19.5 10.5 19.5C4.70085 19.5 0 15.2469 0 10C0 4.75315 4.70085 0.5 10.5 0.5ZM10.5 2.4C8.27218 2.4 6.13561 3.20071 4.5603 4.62599C2.985 6.05126 2.1 7.98435 2.1 10C2.1 12.0156 2.985 13.9487 4.5603 15.374C6.13561 16.7993 8.27218 17.6 10.5 17.6C12.7278 17.6 14.8644 16.7993 16.4397 15.374C18.015 13.9487 18.9 12.0156 18.9 10C18.9 7.98435 18.015 6.05126 16.4397 4.62599C14.8644 3.20071 12.7278 2.4 10.5 2.4ZM10.5 4.3C10.7572 4.30003 11.0054 4.38546 11.1976 4.54008C11.3898 4.6947 11.5126 4.90776 11.5426 5.13885L11.55 5.25V9.6067L14.3923 12.1784C14.5807 12.3493 14.69 12.5787 14.6981 12.82C14.7063 13.0612 14.6126 13.2962 14.4362 13.4773C14.2598 13.6583 14.0138 13.7718 13.7482 13.7947C13.4826 13.8176 13.2174 13.7481 13.0063 13.6005L12.9076 13.5216L9.75765 10.6716C9.59446 10.5239 9.48965 10.3316 9.45945 10.1244L9.45 10V5.25C9.45 4.99804 9.56062 4.75641 9.75754 4.57825C9.95445 4.40009 10.2215 4.3 10.5 4.3Z"
        fill="#222222"
      />
    </svg>
    <span>{e.time}</span>
  </span>

  {/* (You can similarly replace the pin emoji below later) */}
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