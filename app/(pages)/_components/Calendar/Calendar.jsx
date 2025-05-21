"use client";
import styles from "./Calendar.module.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import CalendarEventCard from "../CalendarEventCard/CalendarEventCard";

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

    // const date = new Date(event.start.dateTime || event.start.date);
    const startDate = new Date(event.start.dateTime || event.start.date);
    const endDate = event.end?.dateTime || event.end?.date ? new Date(event.end.dateTime || event.end.date) : null;
    const isoDate = startDate.toISOString().split("T")[0]; // '2025-05-12'

    // Format date as either "MMM DD" or "MMM DD-DD"
    const startMonth = startDate.toLocaleDateString("en-US", {month: "short"});
    const startDay = startDate.getDate();
    let formattedDate;

    // Check to see if end date is different than start date, and handle all possible cases
    if (endDate && (endDate.getFullYear() !== startDate.getFullYear() || endDate.getMonth() !== startDate.getMonth() || endDate.getDate() !== startDate.getDate()))
    {
      const endMonth = endDate.toLocaleDateString("en-US", {month: "short"});
      const endDay = endDate.getDate();

      if (startMonth === endMonth)
      {
        // Same month: Mar 25-27
        formattedDate = `${startMonth} ${startDay}-${endDay}`;
      }
      else
      {
        // Different months: Mar 25-Apr 2
        formattedDate = `${startMonth} ${startDay}-${endMonth} ${endDay}`;
      }
    }
    // Otherwise, just a single day event
    else
    {
      formattedDate = `${startMonth} ${startDay}`;
    }

    const shortenedSummary = event.summary.length > 14 ? event.summary.substring(0, 11) + "..." : event.summary;
    
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
          ? startDate.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true}) : null,
      endTime: endDate
          ? endDate.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true}) : null,
      location: event.location || "No location provided",
      desc: event.description || "No description provided",
      type: "General Meeting"
    };
  });
}

export default function Calendar({ currentMonth, currentYear, events = [] }) {
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
    const combinedEvents = events.length > 0 ? events : fetchedEvents;
    if (combinedEvents.length === 0) return {};

    const normalized = normalizeEventDates(combinedEvents);
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
        setFetchedEvents(data.events || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, [currentMonth, currentYear]);

  const handleEventClick = (event, e) => {
    // Get the event item's position
    const eventItemRect = e.currentTarget.getBoundingClientRect();
    
    setCellPosition({
      left: eventItemRect.left,
      right: eventItemRect.right,
      top: eventItemRect.top + window.scrollY,
      bottom: eventItemRect.bottom + window.scrollY
    });
    
    setSelectedEvent({
      type: event.type,
      title: event.summary,
      date: event.formattedDate,
      startTime: event.startTime,
      endTime: event.endTime,
      location: event.location,
      desc: event.desc
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
                        onClick = {(e) => handleEventClick(event, e)}
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
          event = {selectedEvent} 
          onClose = {() => {
            setSelectedEvent(null);
            setCellPosition(null);
          }}
          cellPosition = {cellPosition}
        />
      )}
    </div>
  );
}
