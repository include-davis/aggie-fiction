"use client";
import styles from "./CalendarEventCard.module.scss";
import {useState} from "react";
import Image from "next/image";

export default function CalendarEventCard({event})
{
    const [isVisible, setIsVisible] = useState(true);
    
    // Map the different event types to their corresponding colors
    const getEventColor = type => {
        const colorMap = {
            "General Meeting": "#EEC358",
            "Conference": "#F4A1A2",
            "Fundraiser": "#198A9E",
            "Guest Speaker": "#6681DB",
            "Special Event": "#EE4D4D"
        };
        return colorMap[type] || "#EEC358";
    };

    if (!isVisible)
        return null;
    
    return (
        <div className = {styles.eventCardOverlay} /*onClick = {setIsVisible(false)}*/>
            <div className = {styles.eventCard} /*onClick = {e => e.stopPropagation()}*/>
                <div className = {styles.eventType}>
                    <span className = {styles.eventTypeIndicator} style = {{backgroundColor: getEventColor(event.type)}}></span>
                    <span>{event.type}</span>
                </div>

                <h2 className = {styles.eventTitle}>{event.title}</h2>

                <div className = {styles.eventDetails}>
                    <div className = {styles.eventDetail}>
                        <span className = {styles.detailImg}>
                            <Image 
                                src = "/Calendar/svg/ClockIcon.svg"
                                alt = "Clock icon"
                                width = {16.35}
                                height = {16.35}
                            />
                        </span>
                        <p>{event.date}, {event.startTime} to {event.endTime}</p>
                    </div>
                    <div className = {styles.eventDetail}>
                        <span className = {styles.detailImg}>
                            <Image
                                src = "/Calendar/svg/LocationIcon.svg"
                                alt = "Location icon"
                                width = {16}
                                height = {17.93}
                            />
                        </span>
                        <p>{event.location}</p>
                    </div>
                </div>

                <div>
                    <p>{event.desc}</p>
                </div>
            </div>
        </div>
    );
}