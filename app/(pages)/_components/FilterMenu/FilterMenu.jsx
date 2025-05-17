"use client";
import styles from "./FilterMenu.module.scss";
import {useState} from "react";

export default function FilterMenu()
{
    const [isVisible, setIsVisible] = useState(true);

    const [filters, setFilters] = useState({
        all: true,
        generalMeeting: false,
        boardMeetings: false,
        fundraiser: false,
        conference: false,
        specialEvent: false,
    });

    const handleCheck = event => {
        const {name, checked} = event.target;

        // If "All" was checked, uncheck everything else
        if (name == "all" && checked)
        {
            setFilters(() => ({
                all: true,
                generalMeeting: false,
                boardMeetings: false,
                fundraiser: false,
                conference: false,
                specialEvent: false,
            }));
        }
        // If anything else is checked, and "All" is also checked, uncheck "All"
        else if (name != "all" && filters.all)
        {
            setFilters((prevFilters) => ({
                ...prevFilters,
                all: false,
                [name]: checked,
            }));
        }
        else
        {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: checked,
            }));
        }
    };

    if (!isVisible)
        return null;
    
    const eventTypes = [
        "All", "General Meeting", "Board Meetings", "Fundraiser", "Conference", "Special Event"
    ];
    const eventColors = [
        "#FAFAFA", "#FADC90", "#FFBAAF", "#A4DAEB", "#6681DB", "#9CE1C2"
    ];
    const filterTypes = [
        "all", "generalMeeting", "boardMeetings", "fundraiser", "conference", "specialEvent"
    ];

    /* For testing purposes
    const findBool = b => {
        if (b)
            return "True";
        else
            return "False"
    }; */

    return (
        <div className = {styles.filterOverlay} onClick = {() => setIsVisible(false)}>
            <div className = {styles.menu} onClick = {e => e.stopPropagation()}>
                {eventTypes.map((type, index) => (
                    <div key = {index} className = {styles.filterType}>
                        <span className = {styles.eventTypeIndicator} style = {{backgroundColor: eventColors[index]}}></span>
                        <p className = {styles.eventType}>{type}</p>
                        <input
                            type = "checkbox"
                            className = {styles.checkBox}
                            name = {filterTypes[index]}
                            checked = {filters[filterTypes[index]]}
                            onChange = {handleCheck}
                        />
                    </div>
                ))}

                {/* For testing purposes
                <p>All: {findBool(filters.all)}</p>
                <p>General Meeting: {findBool(filters.generalMeeting)}</p>
                <p>Board Meetings: {findBool(filters.boardMeetings)}</p>
                <p>Fundraiser: {findBool(filters.fundraiser)}</p>
                <p>Conference: {findBool(filters.conference)}</p>
                <p>Special Event: {findBool(filters.specialEvent)}</p>
                */}
            </div>
        </div>
    );
}