import styles from "./FilterMenu.module.scss";
// import {useState} from "react";

export default function FilterMenu()
{
    /*
    const [filters, setFilters] = useState({
        all: false,
        generalMeeting: false,
        boardMeetings: false,
        fundraiser: false,
        conference: false,
        specialEvent: false
    });

    const handleCheck = event => {
        const {name, checked} = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };
    */
    
    const eventTypes = [
        "All", "General Meeting", "Board Meetings", "Fundraiser", "Conference", "Special Event"
    ];
    const eventColors = [
        "#FAFAFA", "#FADC90", "#FFBAAF", "#A4DAEB", "#6681DB", "#9CE1C2"
    ];
    const filterTypes = [
        "all", "generalMeeting", "boardMeetings", "fundraiser", "conference", "specialEvent"
    ]

    return (
        <div className = {styles.menu}>
            {eventTypes.map((type, index) => (
                <div key = {index} className = {styles.filterType}>
                    <span className = {styles.eventTypeIndicator} style = {{backgroundColor: eventColors[index]}}></span>
                    <p className = {styles.eventType}>{type}</p>
                    <input
                        type = "checkbox"
                        className = {styles.checkBox}
                        /*
                        name = {filterTypes[index]}
                        checked = {filters[filterTypes[index]]}
                        onChange = {handleChecked}
                        */
                    />
                </div>
            ))}
        </div>
    );
}