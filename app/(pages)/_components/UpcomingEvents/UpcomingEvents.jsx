"use client";

import Image from "next/image";
import styles from "./UpcomingEvents.module.scss";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Button from "@/app/(pages)/_components/Button/Button";
import { normalizeEventDates } from "@/app/_services/events";

const eventStatic = [
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

export default function UpcomingEvents({expandable=false}) {
  const [visibleEventsCount, setVisibleEventsCount] = useState(3);
  const [events, setEvents] = useState([]);
  const [eventsList, setEventsList] = useState([]);

  const getEventColor = type => {
    const colorMap = {
        "General Meeting": "#FADC90",
        "Board Meetings": "#FFBAAF",
        "Fundraiser": "#A4DAEB",
        "Conference": "#6681DB",
        "Special Event": "#9CE1C2"
    };
    return colorMap[type] || "#D3D3D3";
  };

  const getEventMonth = dateString => {
    const monthMap = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec"
    };
    return monthMap[dateString.slice(5, 7)];
  }

  const getEventDay = dateString => {
    return dateString.slice(8, 10);
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Create start and end ISO strings from now for the next year
        const start = new Date();
        const end = new Date();
        end.setFullYear(end.getFullYear() + 1);
        end.setHours(23, 59, 59, 999); // End of day

        const startISO = start.toISOString();
        const endISO = end.toISOString();

        const res = await fetch(`/api/events?start=${startISO}&end=${endISO}`);
        const data = await res.json();
        const normalizedEvents = normalizeEventDates(data.events || []);
        setEvents(normalizedEvents || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const newEventsList = [...eventsList];
    for (let i = eventsList.length; i < Math.min(visibleEventsCount, events.length); i ++) {
      const currEvent = events[i];
      newEventsList.push({
        color: getEventColor(currEvent.type),
        date: {month: getEventMonth(currEvent.date), day: getEventDay(currEvent.date)},
        description: currEvent.desc,
        location: currEvent.location,
        time: currEvent.time,
        title: currEvent.summary,
        type: currEvent.type,
      });
    }
    setEventsList(newEventsList);
  }, [events, visibleEventsCount]);

  return (
    <section className={styles.wrapper}>
      {/* now an h1 so global h1 styles apply */}
      <h1 className={styles.heading}>Upcoming Events</h1>

      <div className={styles.list}>
        {eventsList.map((e, i) => (
          <div key={i} className={styles.item}>
              
            {/* COLUMN 1: Date */}
            <div className={styles.dateBlock}>
              <span className={styles.month}>{e.date.month}</span>
              <span className={styles.day}>{e.date.day}</span>
            </div>

            <div className={styles.textContent}>
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
                  <p className={styles.type}>{e.type == "Unset Event" ? "Event" : e.type}</p>
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
                    <p className={styles.metaText}>{e.time || "All-Day"}</p>
                  </span>
                  {e.location != "No location provided" && 
                    <span className={styles.metaItem}>
                      {/* Pin icon */}
                      <Image
                        src="/lo.svg"
                        alt="Location icon"
                        width={20}
                        height={20}
                        className={styles.icon}
                      />
                      <p className={styles.metaText}>{e.location}</p>
                    </span>
                  }
                </div>
              </div>
              {/* COLUMN 3: Notes */}
              {e.description && (
                <p className={styles.notes}>{e.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {
        expandable?
          <div>
            {eventsList.length >= visibleEventsCount && <Button
              color="light"
              extraStyles={styles.extraButtonStyles}
              onClick={(e) => {
                e.preventDefault();
                setVisibleEventsCount(visibleEventsCount + 3);
              }}
            >See More</Button>}
          </div>
        :
          <Link href="/calendar">
            <button className={styles.button}>View Full Calendar</button>
          </Link>
      }

      
    </section>
  );
}
