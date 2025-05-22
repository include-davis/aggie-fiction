"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Calendar from "../_components/Calendar/Calendar";
import CalendarUpcomingEvent from "../_components/CalendarUpcomingEvent/CalendarUpcomingEvent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useMemo, useCallback } from "react";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const [visibleEventsCount, setVisibleEventsCount] = useState(3);

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
  
  // Filter and sort the upcoming events
  const upcomingEvents = useMemo(() => {
    return (events || []).filter((event) => {
      if (!event.date)
        return false;
    
      const eventDate = new Date(event.date);
      const currentDate = new Date(); 

      // Only use day to determine if an event is "upcoming", not time
      const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
      const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

      const twoWeeksLater = new Date(currentDateOnly);
      twoWeeksLater.setDate(currentDateOnly.getDate() + 14);

      return eventDateOnly >= currentDateOnly && eventDateOnly <= twoWeeksLater;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [events]);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setVisibleEventsCount((prev) => Math.min(prev + 3, upcomingEvents.length));
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
                width={44}
                height={52}
              />
            </button>

            <button className={styles.today} onClick={goToToday}>
              <p>Today</p>
            </button>

            <button onClick={goToNextMonth}>
              <Image
                src="/Calendar/svg/RightButton.svg"
                alt="Next"
                width={44}
                height={52}
              />
            </button>
          </div>

          <div className={styles.month}>
            <h1>
              {getMonthName(currentMonth)} {currentYear}
            </h1>
          </div>

          <div className={styles.filter}>
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
              onEventsFetched = {onEventsFetched}
            />
          </GoogleOAuthProvider>
        </div>
      </div>

      <div className = {styles.upcomingEvents}>
        <h1 className = {styles.upcomingEventsTitle}>Upcoming Events</h1>

        <div className = {styles.events}>
          {upcomingEvents.slice(0, visibleEventsCount).map((event, index) => (
            <CalendarUpcomingEvent key = {index} event = {event} />
          ))}
        </div>

        {visibleEventsCount < upcomingEvents.length && (
          <button className = {styles.seeMoreButton} onClick = {handleSeeMore}>
            See More
          </button>
        )}
      </div>
    </main>
  );
}
