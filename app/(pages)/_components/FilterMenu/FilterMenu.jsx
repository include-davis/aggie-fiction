"use client";
import styles from "./FilterMenu.module.scss";
import React from "react";
/* eslint-disable react/prop-types */

export default function FilterMenu({ filters, setFilters, onClose, position }) {
  const handleCheck = (event) => {
    const { name, checked } = event.target;

    // If "All" was checked, uncheck everything else
    if (name === "all" && checked) {
      setFilters({
        all: true,
        generalMeeting: false,
        boardMeetings: false,
        fundraiser: false,
        conference: false,
        specialEvent: false,
      });
    }
    // If anything else is checked, and "All" is also checked, uncheck "All"
    else if (name !== "all" && filters.all) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        all: false,
        [name]: checked,
      }));
    }
    // If unchecking the last filter, automatically check "All"
    else if (name !== "all" && !checked) {
      const otherFilters = Object.keys(filters).filter(
        (key) => key !== "all" && key !== name
      );
      const hasOtherFiltersSelected = otherFilters.some((key) => filters[key]);

      if (!hasOtherFiltersSelected) {
        setFilters({
          all: true,
          generalMeeting: false,
          boardMeetings: false,
          fundraiser: false,
          conference: false,
          specialEvent: false,
        });
      } else {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: checked,
        }));
      }
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked,
      }));
    }
  };

  const eventTypes = [
    "All",
    "General Meeting",
    "Board Meetings",
    "Fundraiser",
    "Conference",
    "Special Event",
  ];
  const eventColors = [
    "#FAFAFA",
    "#FADC90",
    "#FFBAAF",
    "#A4DAEB",
    "#6681DB",
    "#9CE1C2",
    "#D3D3D3",
  ];
  const filterTypes = [
    "all",
    "generalMeeting",
    "boardMeetings",
    "fundraiser",
    "conference",
    "specialEvent",
  ];

  return (
    <div className={styles.filterOverlay} onClick={onClose}>
      <div
        className={styles.menu}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: position.top,
          left: position.centerX - 125, // 125 = 250px width / 2
        }}
      >
        {eventTypes.map((type, index) => (
          <div key={index} className={styles.filterType}>
            <span
              className={styles.eventTypeIndicator}
              style={{ backgroundColor: eventColors[index] }}
            ></span>
            <p className={styles.eventType}>{type}</p>
            <input
              type="checkbox"
              className={styles.checkBox}
              name={filterTypes[index]}
              checked={filters[filterTypes[index]]}
              onChange={handleCheck}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
