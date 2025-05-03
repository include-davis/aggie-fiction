"use client";

import styles from "./UpcomingEvents.module.scss";

const events = [
  {
    date: { month: "Apr", day: "21" },
    color: "#A4DAEB",
    type: "Fundraiser",
    title: "Raising Cane’s Fundraiser",
    time: "6 PM – 7 PM",
    location: "Alumni Center",
    description: "Help us raise money for the campus food pantry.",
  },
  {
    date: { month: "Apr", day: "21" },
    color: "#FF9F9F",
    type: "Board Meeting",
    title: "Open Board Meeting",
    time: "5 PM – 7 PM",
    location: "Shields Library (Room 121)",
    description: "All members are welcome to sit in.",
  },
  {
    date: { month: "Apr", day: "21" },
    color: "#F4D06F",
    type: "General Meeting",
    title: "General Meeting",
    time: "6 PM – 7 PM",
    location: "Olsen 167",
    description: "Come hear our plans for next quarter!",
  },
];

export default function UpcomingEvents() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Upcoming Events</h2>
      <ul className={styles.list}>
        {events.map((e, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.content}>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      className={styles.icon}
                    >
                      <path
                        d="M10.5 0.5C16.2991 0.5 21 4.75315 21 10C21 15.2469 16.2991 19.5 10.5 19.5C4.70085 19.5 0 15.2469 0 10C0 4.75315 4.70085 0.5 10.5 0.5ZM10.5 2.4C8.27218 2.4 6.13561 3.20071 4.5603 4.62599C2.985 6.05126 2.1 7.98435 2.1 10C2.1 12.0156 2.985 13.9487 4.5603 15.374C6.13561 16.7993 8.27218 17.6 10.5 17.6C12.7278 17.6 14.8644 16.7993 16.4397 15.374C18.015 13.9487 18.9 12.0156 18.9 10C18.9 7.98435 18.015 6.05126 16.4397 4.62599C14.8644 3.20071 12.7278 2.4 10.5 2.4ZM10.5 4.3C10.7572 4.30003 11.0054 4.38546 11.1976 4.54008C11.3898 4.6947 11.5126 4.90776 11.5426 5.13885L11.55 5.25V9.6067L14.3923 12.1784C14.5807 12.3493 14.69 12.5787 14.6981 12.82C14.7063 13.0612 14.6126 13.2962 14.4362 13.4773C14.2598 13.6583 14.0138 13.7718 13.7482 13.7947C13.4826 13.8176 13.2174 13.7481 13.0063 13.6005L12.9076 13.5216L9.75765 10.6716C9.59446 10.5239 9.48965 10.3316 9.45945 10.1244L9.45 10V5.25C9.45 4.99804 9.56062 4.75641 9.75754 4.57825C9.95445 4.40009 10.2215 4.3 10.5 4.3Z"
                        fill="#222222"
                      />
                    </svg>
                    <span className={styles.metaText}>{e.time}</span>
                  </span>

                  <span className={styles.metaItem}>
                    {/* Pin icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C12.6522 0 15.1957 0.940362 17.0711 2.61422C18.9464 4.28807 20 6.55831 20 8.9255C20 11.9741 18.1378 14.4692 16.1756 16.2593C15.1952 17.144 14.1255 17.946 12.98 18.6553L12.5067 18.9429L12.2844 19.0748L11.8656 19.3128L11.4922 19.5161L11.03 19.7561C10.7163 19.9159 10.3613 20 10 20C9.63875 20 9.28374 19.9159 8.97 19.7561L8.50778 19.5161L7.93 19.1987L7.71667 19.0748L7.26111 18.804C6.02537 18.0578 4.87434 17.2055 3.82444 16.2593C1.86222 14.4682 0 11.9741 0 8.9255C0 6.55831 1.05357 4.28807 2.92893 2.61422C4.8043 0.940362 7.34784 0 10 0ZM10 1.98344C7.93721 1.98344 5.9589 2.71484 4.50028 4.01672C3.04166 5.31861 2.22222 7.08435 2.22222 8.9255C2.22222 11.2283 3.63556 13.2494 5.41222 14.8719C6.17615 15.5621 7.00184 16.1956 7.88111 16.7661L8.39 17.0894C8.55444 17.1918 8.71259 17.287 8.86444 17.375L9.29778 17.6229L9.67889 17.8302L10 17.9978L10.5056 17.731L10.9133 17.5029C11.1304 17.3799 11.3626 17.2421 11.61 17.0894L12.1189 16.7661C12.9982 16.1956 13.8239 15.5621 14.5878 14.8719C16.3644 13.2504 17.7778 11.2283 17.7778 8.9255C17.7778 7.08435 16.9583 5.31861 15.4997 4.01672C14.0411 2.71484 12.0628 1.98344 10 1.98344ZM10 4.95861C11.1787 4.95861 12.3092 5.37655 13.1427 6.12048C13.9762 6.86442 14.4444 7.87341 14.4444 8.9255C14.4444 9.97758 13.9762 10.9866 13.1427 11.7305C12.3092 12.4744 11.1787 12.8924 10 12.8924C8.82126 12.8924 7.6908 12.4744 6.8573 11.7305C6.02381 10.9866 5.55556 9.97758 5.55556 8.9255C5.55556 7.87341 6.02381 6.86442 6.8573 6.12048C7.6908 5.37655 8.82126 4.95861 10 4.95861ZM10 6.94205C9.41063 6.94205 8.8454 7.15102 8.42865 7.52299C8.0119 7.89496 7.77778 8.39946 7.77778 8.9255C7.77778 9.45154 8.0119 9.95604 8.42865 10.328C8.8454 10.7 9.41063 10.9089 10 10.9089C10.5894 10.9089 11.1546 10.7 11.5713 10.328C11.9881 9.95604 12.2222 9.45154 12.2222 8.9255C12.2222 8.39946 11.9881 7.89496 11.5713 7.52299C11.1546 7.15102 10.5894 6.94205 10 6.94205Z" fill="#666666"/>
</svg>

                    <span className={styles.metaText}>{e.location}</span>
                  </span>
                </div>

                {/* Description */}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className={styles.button}>View Full Calendar</button>
    </section>
  );
}
