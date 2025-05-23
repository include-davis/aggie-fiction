"use client";
import styles from "./Calendar.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import CalendarEventCard from "../CalendarEventCard/CalendarEventCard";

const eventColors = {
  "General Meeting": "#FADC90",
  "Board Meetings": "#FFBAAF",
  Fundraiser: "#A4DAEB",
  Conference: "#6681DB",
  "Special Event": "#9CE1C2",
  // fallback default color for unknown types
  default: "#FFBAAA",
};

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

  // Function to determine event type based on description content
  function getEventType(event) {
    const description = (event.description || "").toLowerCase();
    const summary = (event.summary || "").toLowerCase();

    // Check for keywords in both description and summary
    const content = `${description} ${summary}`;

    // Define your categorization rules here
    if (
      content.includes('"general meeting"') ||
      content.includes("general meeting")
    ) {
      return "General Meeting";
    }
    if (
      content.includes('"board meeting"') ||
      content.includes("board meeting")
    ) {
      return "Board Meetings";
    }
    if (
      content.includes('"fundraiser"') ||
      content.includes("fundraiser") ||
      content.includes("fundraising")
    ) {
      return "Fundraiser";
    }
    if (
      content.includes('"conference"') ||
      content.includes("conference") ||
      content.includes("summit")
    ) {
      return "Conference";
    }
    if (
      content.includes('"special event"') ||
      content.includes("special event") ||
      content.includes("celebration")
    ) {
      return "Special Event";
    }

    console.log(`Event: ${event.summary}, Content: ${content}`);

    // Default type if no keywords match
    return "Unset Event";
  }

  return events.map((event) => {
    if (!event.start) return { date: "", summary: event.summary || "Untitled" };

    const startDate = new Date(event.start.dateTime || event.start.date);
    const endDate =
      event.end?.dateTime || event.end?.date
        ? new Date(event.end.dateTime || event.end.date)
        : null;

    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, "0");
    const day = String(startDate.getDate()).padStart(2, "0");
    const isoDate = `${year}-${month}-${day}`;

    // Format date as either "MMM DD" or "MMM DD-DD"
    const startMonth = startDate.toLocaleDateString("en-US", {
      month: "short",
    });
    const startDay = startDate.getDate();
    let formattedDate;

    // Check to see if end date is different than start date, and handle all possible cases
    if (
      endDate &&
      (endDate.getFullYear() !== startDate.getFullYear() ||
        endDate.getMonth() !== startDate.getMonth() ||
        endDate.getDate() !== startDate.getDate())
    ) {
      const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
      const endDay = endDate.getDate();

      if (startMonth === endMonth) {
        // Same month: Mar 25-27
        formattedDate = `${startMonth} ${startDay}-${endDay}`;
      } else {
        // Different months: Mar 25-Apr 2
        formattedDate = `${startMonth} ${startDay}-${endMonth} ${endDay}`;
      }
    }
    // Otherwise, just a single day event
    else {
      formattedDate = `${startMonth} ${startDay}`;
    }

    const shortenedSummary =
      event.summary.length > 14
        ? event.summary.substring(0, 11) + "..."
        : event.summary;

    // Determine event type based on description/summary content
    const eventType = getEventType(event);

    return {
      date: isoDate,
      formattedDate,
      summary: event.summary || "Untitled",
      shortenedSummary: shortenedSummary,
      time: event.start.dateTime
        ? startDate.toLocaleTimeString([], {
            hour: "numeric",
            hour12: true,
          })
        : null,
      startTime: event.start.dateTime
        ? startDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : null,
      endTime: endDate
        ? endDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : null,
      location: event.location || "No location provided",
      desc: event.description || "No description provided",
      type: eventType, // Use the determined event type instead of hardcoded "General Meeting"
    };
  });
}

export default function Calendar({
  currentMonth,
  currentYear,
  events = [],
  onEventsFetched,
}) {
  const [days, setDays] = useState([]);
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cellPosition, setCellPosition] = useState(null);

  // Generate days when month/year changes
  useEffect(() => {
    const generatedDays = generateCalendarDays(currentYear, currentMonth);
    setDays(generatedDays);
  }, [currentMonth, currentYear]);

  // Map events to dates
  const eventMap = useMemo(() => {
    // Use the filtered events passed from parent, fallback to fetched events if none provided
    const eventsToUse = events.length > 0 ? events : fetchedEvents;
    if (eventsToUse.length === 0) return {};

    const normalized =
      events.length > 0 ? eventsToUse : normalizeEventDates(eventsToUse);
    const map = {};

    normalized.forEach((ev) => {
      if (!ev.date) return;
      if (!map[ev.date]) map[ev.date] = [];
      map[ev.date].push(ev);
    });

    console.log("Event map:", map);
    return map;
  }, [events, fetchedEvents]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        const normalizedEvents = normalizeEventDates(data.events || []);
        setFetchedEvents(data.events || []);

        if (onEventsFetched) onEventsFetched(normalizedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, [currentMonth, currentYear, onEventsFetched]);

  const handleEventClick = (event, e) => {
    // Get the event item's position
    const eventItemRect = e.currentTarget.getBoundingClientRect();

    setCellPosition({
      left: eventItemRect.left,
      right: eventItemRect.right,
      top: eventItemRect.top + window.scrollY,
      bottom: eventItemRect.bottom + window.scrollY,
    });

    setSelectedEvent({
      type: event.type,
      title: event.summary,
      date: event.formattedDate,
      startTime: event.startTime,
      endTime: event.endTime,
      location: event.location,
      desc: event.desc,
    });
  };

  return (
    <div>
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
                      <div
                        key={i}
                        className={styles.eventItem}
                        onClick={(e) => handleEventClick(event, e)}
                        style={{
                          backgroundColor:
                            event.type && eventColors[event.type]
                              ? eventColors[event.type]
                              : "#D3D3D3",
                        }}
                      >
                        <p>{event.shortenedSummary}</p>
                        <p>{event.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <CalendarEventCard
          event={selectedEvent}
          onClose={() => {
            setSelectedEvent(null);
            setCellPosition(null);
          }}
          cellPosition={cellPosition}
        />
      )}
    </div>
  );
}
