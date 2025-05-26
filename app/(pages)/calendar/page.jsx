"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Calendar from "../_components/Calendar/Calendar";
import CalendarUpcomingEvent from "../_components/CalendarUpcomingEvent/CalendarUpcomingEvent";
import FilterMenu from "../_components/FilterMenu/FilterMenu";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useMemo, useCallback, useRef } from "react";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const [visibleEventsCount, setVisibleEventsCount] = useState(3);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterButtonPosition, setFilterButtonPosition] = useState(null);

  // Filter state
  const [filters, setFilters] = useState({
    all: true,
    generalMeeting: false,
    boardMeetings: false,
    fundraiser: false,
    conference: false,
    specialEvent: false,
  });

  // Function to go to the next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to go to the previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to go to the current month (today)
  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  // Get month name for display
  const getMonthName = (month) => {
    return new Date(0, month).toLocaleString("default", { month: "long" });
  };

  const onEventsFetched = useCallback((fetchedEvents) => {
    setEvents(fetchedEvents || []);
  }, []);

  // Filter events based on selected filters
  const filterEvents = useCallback(
    (eventsToFilter) => {
      if (filters.all) {
        return eventsToFilter;
      }

      return eventsToFilter.filter((event) => {
        const eventType = event.type;

        return (
          (filters.generalMeeting && eventType === "General Meeting") ||
          (filters.boardMeetings && eventType === "Board Meetings") ||
          (filters.fundraiser && eventType === "Fundraiser") ||
          (filters.conference && eventType === "Conference") ||
          (filters.specialEvent && eventType === "Special Event")
        );
      });
    },
    [filters]
  );

  // Apply filters to all events
  const filteredEvents = useMemo(() => {
    return filterEvents(events);
  }, [events, filterEvents]);

  // Filter and sort the upcoming events
  const upcomingEvents = useMemo(() => {
    return filteredEvents
      .filter((event) => {
        if (!event.date) return false;

        const eventDate = new Date(event.date);
        const currentDate = new Date();

        // Only use day to determine if an event is "upcoming", not time
        const eventDateOnly = new Date(
          eventDate.getFullYear(),
          eventDate.getMonth(),
          eventDate.getDate()
        );
        const currentDateOnly = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        );

        const twoWeeksLater = new Date(currentDateOnly);
        twoWeeksLater.setDate(currentDateOnly.getDate() + 14);

        return (
          eventDateOnly >= currentDateOnly && eventDateOnly <= twoWeeksLater
        );
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [filteredEvents]);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setVisibleEventsCount((prev) => Math.min(prev + 3, upcomingEvents.length));
  };

  // Handle filter button click
  const handleFilterClick = (event) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    setFilterButtonPosition({
      top: buttonRect.bottom + window.scrollY,
      centerX: buttonRect.left + buttonRect.width / 2,
    });
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <main>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <div className={styles.nav}>
            <button onClick={goToPreviousMonth}>
              <Image
                src="/Calendar/svg/LeftButton.svg"
                alt="Previous"
                layout="fill"
                objectFit="contain"
              />
            </button>

            <button className={styles.today} onClick={goToToday}>
              <p>Today</p>
            </button>

            <button onClick={goToNextMonth}>
              <Image
                src="/Calendar/svg/RightButton.svg"
                alt="Next"
                layout="fill"
                objectFit="contain"
              />
            </button>
          </div>

          <div className={styles.month}>
            <h1>
              {getMonthName(currentMonth)} {currentYear}
            </h1>
          </div>

          <div className={styles.filter} onClick={handleFilterClick}>
            <p>Filter</p>

            <Image
              src="/Calendar/svg/FilterArrow.svg"
              alt="Dropdown"
              width={11}
              height={6}
            />
          </div>
        </div>

        <div className={styles.calendarContent}>
          <GoogleOAuthProvider clientId="18980159666-893kqnf906hltqei55bd3l5qb718tqhq.apps.googleusercontent.com">
            <Calendar
              currentMonth={currentMonth}
              currentYear={currentYear}
              events={filteredEvents}
              onEventsFetched={onEventsFetched}
            />
          </GoogleOAuthProvider>
        </div>
      </div>

      <div className={styles.upcomingEvents}>
        <h1 className={styles.upcomingEventsTitle}>Upcoming Events</h1>

        <div className={styles.events}>
          {upcomingEvents.slice(0, visibleEventsCount).map((event, index) => (
            <CalendarUpcomingEvent key={index} event={event} />
          ))}
        </div>

        {visibleEventsCount < upcomingEvents.length && (
          <button className={styles.seeMoreButton} onClick={handleSeeMore}>
            See More
          </button>
        )}
      </div>

      {showFilterMenu && filterButtonPosition && (
        <FilterMenu
          filters={filters}
          setFilters={setFilters}
          onClose={() => setShowFilterMenu(false)}
          position={filterButtonPosition}
        />
      )}
    </main>
  );
}
