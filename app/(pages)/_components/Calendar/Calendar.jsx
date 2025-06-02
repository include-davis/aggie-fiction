"use client";
/* eslint-disable react/prop-types */
import styles from "./Calendar.module.scss";
import React, { useState, useEffect, useMemo } from "react";
import CalendarEventCard from "../CalendarEventCard/CalendarEventCard";
import { normalizeEventDates } from "@/app/_services/events";

const eventColors = {
  "General Meeting": "#FADC90",
  "Board Meetings": "#FFBAAF",
  "Fundraiser": "#A4DAEB",
  "Conference": "#6681DB",
  "Special Event": "#9CE1C2",
  "default": "#FFBAAA",
};

function generateCalendarDays(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();

  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const totalDaysInPrevMonth = new Date(year, month, 0).getDate();

  const days = [];

  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, totalDaysInPrevMonth - i);
    days.push(date);
  }

  for (let i = 1; i <= totalDaysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  const totalCells = 42;
  const nextMonthDayCount = totalCells - days.length;
  for (let i = 1; i <= nextMonthDayCount; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
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
  const [expandedCellDates, setExpandedCellDates] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const generatedDays = generateCalendarDays(currentYear, currentMonth);
    setDays(generatedDays);
  }, [currentMonth, currentYear]);

  const eventMap = useMemo(() => {
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

    return map;
  }, [events, fetchedEvents]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Create start and end ISO strings for the current month
        const start = new Date(currentYear, currentMonth, 1);
        const end = new Date(currentYear, currentMonth + 1, 0);
        end.setHours(23, 59, 59, 999); // End of day

        const startISO = start.toISOString();
        const endISO = end.toISOString();

        const res = await fetch(`/api/events?start=${startISO}&end=${endISO}`);
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
    if (isMobile) return;

    e.stopPropagation();

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

  const handleMoreEventsClick = (dateStr, e) => {
    e.stopPropagation();
    // Add the date to expanded set (persistent until refresh)
    setExpandedCellDates((prev) => new Set([...prev, dateStr]));
  };

  const handleCellClick = (dateStr) => {
    if (isMobile) {
      const dailyEvents = eventMap[dateStr] || [];

      if (dailyEvents.length > 0) {
        setSelectedEvent({
          type: "multi",
          date: dateStr,
          events: dailyEvents,
        });

        setCellPosition(null);
      }
    }
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
            const todayStr = new Intl.DateTimeFormat("en-CA", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(new Date());
            const isToday = dateStr === todayStr;
            const isCurrentMonth = dateObj.getMonth() === currentMonth;
            const dailyEvents = isCurrentMonth ? eventMap[dateStr] || [] : [];
            const isExpanded = expandedCellDates.has(dateStr);
            const shouldShowMoreEvents = dailyEvents.length >= 4 && !isExpanded;
            const eventsToShow = isExpanded
              ? dailyEvents
              : dailyEvents.slice(0, 2);
            const hiddenEventsCount = dailyEvents.length - 2;

            return (
              <div
                key={idx}
                className={`${styles.calendarCell} ${isCurrentMonth ? styles.currentMonth : styles.otherMonth}`}
                onClick={() => handleCellClick(dateStr)}
              >
                {day && (
                  <div
                    className={`${isToday ? styles.todayDateNum : styles.dateNum}`}
                  >
                    <p>{day}</p>
                  </div>
                )}

                {(eventsToShow.length > 0 || shouldShowMoreEvents) && (
                  <div className={styles.eventItems}>
                    {eventsToShow.map((event, i) => (
                      <div
                        key={i}
                        className={styles.eventItem}
                        onMouseDown={(e) => handleEventClick(event, e)}
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

                    {shouldShowMoreEvents && (
                      <div
                        className={`${styles.eventItem} ${styles.moreEventsItem}`}
                        onClick={(e) => handleMoreEventsClick(dateStr, e)}
                      >
                        <span className={styles.hiddenDesktop}>
                          +{hiddenEventsCount} more events
                        </span>

                        <span className={styles.hiddenMobile}>
                          +{hiddenEventsCount}
                        </span>
                      </div>
                    )}
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
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
