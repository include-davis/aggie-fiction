"use client";
import styles from "./Calendar.module.scss";
import { useState, useEffect, useMemo, useRef } from "react";
import CalendarEventCard from "../CalendarEventCard/CalendarEventCard";

const eventColors = {
  "General Meeting": "#FADC90",
  "Board Meetings": "#FFBAAF",
  Fundraiser: "#A4DAEB",
  Conference: "#6681DB",
  "Special Event": "#9CE1C2",
  default: "#FFBAAA",
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

function normalizeEventDates(events) {
  if (!events || events.length === 0) return [];

  function getEventTypeAndCleanDesc(event) {
    const description = (event.description || "").toLowerCase();
    const summary = (event.summary || "").toLowerCase();
    let eventType = "Unset Event";
    let cleanDesc = event.description || "";

    const content = `${description} ${summary}`;

    const rules = [
      { keyword: "general meeting", type: "General Meeting" },
      { keyword: "board meeting", type: "Board Meetings" },
      { keyword: "fundraiser", type: "Fundraiser" },
      { keyword: "fundraising", type: "Fundraiser" },
      { keyword: "conference", type: "Conference" },
      { keyword: "summit", type: "Conference" },
      { keyword: "special event", type: "Special Event" },
      { keyword: "celebration", type: "Special Event" },
    ];

    for (const rule of rules) {
      if (content.includes(rule.keyword)) {
        eventType = rule.type;

        // Remove the matched keyword from the description (case-insensitive)
        const regex = new RegExp(rule.keyword, "i");
        cleanDesc = cleanDesc.replace(regex, "").trim();

        break;
      }
    }

    return { eventType, cleanDesc: cleanDesc };
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

    const startMonth = startDate.toLocaleDateString("en-US", {
      month: "short",
    });
    const startDay = startDate.getDate();
    let formattedDate;

    if (
      endDate &&
      (endDate.getFullYear() !== startDate.getFullYear() ||
        endDate.getMonth() !== startDate.getMonth() ||
        endDate.getDate() !== startDate.getDate())
    ) {
      const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
      const endDay = endDate.getDate();

      if (startMonth === endMonth) {
        formattedDate = `${startMonth} ${startDay}-${endDay}`;
      } else {
        formattedDate = `${startMonth} ${startDay}-${endMonth} ${endDay}`;
      }
    } else {
      formattedDate = `${startMonth} ${startDay}`;
    }

    const shortenedSummary =
      event.summary.length > 14
        ? event.summary.substring(0, 7) + "..."
        : event.summary;

    const { eventType, cleanDesc } = getEventTypeAndCleanDesc(event);

    return {
      date: isoDate,
      formattedDate,
      summary: event.summary || "Untitled",
      shortenedSummary: shortenedSummary,
      time: event.start.dateTime
        ? startDate.toLocaleTimeString([], { hour: "numeric", hour12: true })
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
      desc: cleanDesc,
      type: eventType,
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
