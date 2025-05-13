"use client";
import styles from "./Calendar.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

function generateCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay(); // day of week
  const totalDays = new Date(year, month + 1, 0).getDate(); // last day of month

  const days = [];

  // Fill in blanks before the 1st of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Fill in days of the current month
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(year, month, i);
    days.push(date); // store full date objects!
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
    };
  });
}

export default function Calendar({ currentMonth, currentYear, events = [] }) {
  const [days, setDays] = useState([]);
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debugMode, setDebugMode] = useState(true);

  // Generate days when month/year changes
  useEffect(() => {
    const generatedDays = generateCalendarDays(currentYear, currentMonth);
    setDays(generatedDays);

    // Add test events for debugging
    if (debugMode) {
      const testDate1 = new Date(currentYear, currentMonth, 15);
      const testDate2 = new Date(currentYear, currentMonth, 20);

      const testEvents = [
        {
          id: "test1",
          summary: "Test Event 1",
          start: { date: testDate1.toISOString().split("T")[0] },
        },
        {
          id: "test2",
          summary: "Test Event 2",
          start: { date: testDate2.toISOString().split("T")[0] },
        },
      ];

      console.log("Added test events:", testEvents);
      setFetchedEvents(testEvents);
    }
  }, [currentMonth, currentYear, debugMode]);

  // Map events to dates
  const eventMap = useMemo(() => {
    const combinedEvents = events.length > 0 ? events : fetchedEvents;
    if (combinedEvents.length === 0) return {};

    const normalized = normalizeEventDates(combinedEvents);
    const map = {};

    normalized.forEach((ev) => {
      if (!ev.date) return;
      if (!map[ev.date]) map[ev.date] = [];
      map[ev.date].push(ev.summary);
    });

    console.log("Event map:", map);
    return map;
  }, [events, fetchedEvents]);

  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/calendar.readonly",
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      setDebugMode(false); // Turn off debug mode when real events are fetched

      try {
        const res = await axios.get(
          "https://www.googleapis.com/calendar/v3/calendars/primary/events",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        console.log("Fetched events:", res.data.items);
        setFetchedEvents(res.data.items || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => {
      console.error("Login Failed");
    },
  });

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <button
          onClick={() => login()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6b46c1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign in with Google"}
        </button>

        {debugMode && (
          <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
            Debug mode: ON - Test events should appear on the 15th and 20th
          </div>
        )}

        {Object.keys(eventMap).length > 0 && (
          <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
            Events found for dates: {Object.keys(eventMap).join(", ")}
          </div>
        )}
      </div>

      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <h2 key={day}>{day}</h2>
          ))}
        </div>

        <div className={styles.calendarItems}>
          {days.map((dateObj, idx) => {
            const dateStr = dateObj
              ? dateObj.toISOString().split("T")[0]
              : null;
            const day = dateObj?.getDate();
            const dailyEvents = dateStr ? eventMap[dateStr] || [] : [];

            return (
              <div key={idx} className={styles.item}>
                {day && <h3>{day}</h3>}
                {dailyEvents.length > 0 && (
                  <div>
                    {dailyEvents.map((summary, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: "#ebf8ff",
                          borderLeft: "3px solid #90cdf4",
                          padding: "4px 6px",
                          margin: "3px 0",
                          borderRadius: "3px",
                          fontSize: "0.8rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {summary}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add inline styles for event items */}
      <style jsx global>{`
        .${styles.eventItem} {
          background-color: #ebf8ff !important;
          border-left: 3px solid #90cdf4 !important;
          padding: 4px 6px !important;
          margin: 3px 0 !important;
          border-radius: 3px !important;
          font-size: 0.8rem !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
      `}</style>
    </div>
  );
}
