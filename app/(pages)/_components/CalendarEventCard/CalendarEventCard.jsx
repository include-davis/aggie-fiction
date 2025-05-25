"use client";
import styles from "./CalendarEventCard.module.scss";
import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";

export default function CalendarEventCard({ event, onClose, cellPosition }) {
  const [isVisible, setIsVisible] = useState(true);
  const cardRef = useRef(null);

  // Map the different event types to their corresponding colors
  const getEventColor = (type) => {
    const colorMap = {
      "General Meeting": "#FADC90",
      "Board Meetings": "#FFBAAF",
      Fundraiser: "#A4DAEB",
      Conference: "#6681DB",
      "Special Event": "#9CE1C2",
    };
    return colorMap[type] || "#D3D3D3";
  };

  // Calculate event card position based on click location
  const cardStyle = useMemo(() => {
    if (!cellPosition) return {};

    const cardWidth = 362;
    const cardMinHeight = 223;

    // Get scroll position to adjust coordinates
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Get viewport dimensions for later calculations
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Determine if card should be positioned to the left or right of the cell
    const isLeftSide = cellPosition.left < viewportWidth / 2;

    let left;
    let top = cellPosition.top - 145;

    if (isLeftSide) left = cellPosition.right + 8;
    else left = cellPosition.left - cardWidth - 6;

    if (left < scrollX) left = scrollX + 10;
    if (left + cardWidth > scrollX + viewportWidth)
      left = scrollX + viewportWidth - cardWidth - 10;

    if (top + cardMinHeight > scrollY + viewportHeight)
      top = Math.max(scrollY + 10, cellPosition.bottom - cardMinHeight);

    return {
      position: "absolute",
      left: `${left}px`,
      top: `${top}px`,
    };
  }, [cellPosition]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (cardRef.current && !cardRef.current.contains(e.target)) handleClose();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.eventCard} style={cardStyle} ref={cardRef}>
      <div className={styles.eventType}>
        <span
          className={styles.eventTypeIndicator}
          style={{ backgroundColor: getEventColor(event.type) }}
        ></span>
        <span>{event.type}</span>
      </div>

      <h2 className={styles.eventTitle}>{event.title}</h2>

      <div className={styles.eventDetails}>
        <div className={styles.eventDetail}>
          <span className={styles.detailImg}>
            <Image
              src="/Calendar/svg/WhiteClockIcon.svg"
              alt="Clock icon"
              width={16.35}
              height={16.35}
            />
          </span>
          <p>
            {event.date}, {event.startTime} to {event.endTime}
          </p>
        </div>
        <div className={styles.eventDetail}>
          <span className={styles.detailImg}>
            <Image
              src="/Calendar/svg/WhiteLocationIcon.svg"
              alt="Location icon"
              width={16}
              height={17.93}
            />
          </span>
          <p>{event.location}</p>
        </div>
      </div>

      <div>
        <p>{event.desc}</p>
      </div>
    </div>
  );
}
