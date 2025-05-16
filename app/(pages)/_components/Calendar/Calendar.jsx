"use client";
import styles from "./Calendar.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

function generateCalendarDays(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)

  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const totalDaysInPrevMonth = new Date(year, month, 0).getDate();

  const days = [];

  // Fill in previous month's trailing days
  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, totalDaysInPrevMonth - i);
    days.push(date);
  }

  // Fill in current month's days
  for (let i = 1; i <= totalDaysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  // Fill in next month's leading days to make 42 total
  const totalCells = 42;
  const nextMonthDayCount = totalCells - days.length;
  for (let i = 1; i <= nextMonthDayCount; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
}

function normalizeEventDates(events) {
  if (!events || events.length === 0) return [];

  return events.map((event) => {
    if (!event.start) return { date: "", summary: event.summary || "Untitled" };

    const date = new Date(event.start.dateTime || event.start.date);
    const isoDate = date.toISOString().split("T")[0]; // '2025-05-12'
    return {
      date: isoDate,
      summary: event.summary || "Untitled",
      time: event.start.dateTime
        ? date.toLocaleTimeString([], {
            hour: "numeric",
            hour12: true,
          })
        : null,
    };
  });
}

export default function Calendar({ currentMonth, currentYear, events = [] }) {
  const [days, setDays] = useState([]);
  const [fetchedEvents, setFetchedEvents] = useState([]);

  // Generate days when month/year changes
  useEffect(() => {
    const generatedDays = generateCalendarDays(currentYear, currentMonth);
    setDays(generatedDays);
  }, [currentMonth, currentYear]);

  // Map events to dates
  const eventMap = useMemo(() => {
    const combinedEvents = events.length > 0 ? events : fetchedEvents;
    if (combinedEvents.length === 0) return {};

    const normalized = normalizeEventDates(combinedEvents);
    const map = {};

    normalized.forEach((ev) => {
      if (!ev.date) return;
      if (!map[ev.date]) map[ev.date] = [];
      map[ev.date].push({ summary: ev.summary, time: ev.time });
    });

    console.log("Event map:", map);
    return map;
  }, [events, fetchedEvents]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setFetchedEvents(data.events || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, [currentMonth, currentYear]);

  return (
    <div>
      {/* <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {Object.keys(eventMap).length > 0 && (
          <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
            Events found for dates: {Object.keys(eventMap).join(", ")}
          </div>
        )}
      </div> */}

      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <h2 key={day}>{day}</h2>
          ))}
        </div>

        <div className={styles.calendarCellsContainer}>
          {days.map((dateObj, idx) => {
            const dateStr = dateObj
              ? dateObj.toISOString().split("T")[0]
              : null;
            const day = dateObj?.getDate();
            const isCurrentMonth = dateObj.getMonth() === currentMonth;
            const dailyEvents = isCurrentMonth ? eventMap[dateStr] || [] : [];

            return (
              <div
                key={idx}
                className={`${styles.calendarCell} ${isCurrentMonth ? styles.currentMonth : styles.otherMonth}`}
              >
                {day && <div className={styles.dateNum}>{day}</div>}
                {dailyEvents.length > 0 && (
                  <div className={styles.eventItems}>
                    {dailyEvents.map((event, i) => (
                      <div key={i} className={styles.eventItem}>
                        <p>{event.summary}</p>
                        <p>{event.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* {days.map((dateObj, idx) => {
            const dateStr = dateObj
              ? dateObj.toISOString().split("T")[0]
              : null;
            const day = dateObj?.getDate();
            const dailyEvents = dateStr ? eventMap[dateStr] || [] : [];

            return (
              <div key={idx} className={styles.item}>
                {day ? (
                  <>
                    <h3>{day}</h3>
                    {dailyEvents.length > 0 && (
                      <div>
                        {dailyEvents.map((summary, i) => (
                          <div key={i} className={styles.eventItem}>
                            {summary}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ visibility: "hidden" }}>0</div> // force box rendering
                )}
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
