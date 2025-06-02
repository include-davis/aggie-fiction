"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Calendar from "../_components/Calendar/Calendar";
import FilterMenu from "../_components/FilterMenu/FilterMenu";
import { useState, useMemo, useCallback } from "react";
import UpcomingEvents from "@/app/(pages)/_components/UpcomingEvents/UpcomingEvents";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
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
    <main className={styles.page}>
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
          <Calendar
            currentMonth={currentMonth}
            currentYear={currentYear}
            events={filteredEvents}
            onEventsFetched={onEventsFetched}
          />
        </div>
      </div>

      <div className={styles.upcomingEventsContainer}>
        <UpcomingEvents expandable/>
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
