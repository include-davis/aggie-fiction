"use client";
import styles from "./CalendarEventCard.module.scss";
import {useState, useMemo, useEffect, useRef} from "react";
import Image from "next/image";

export default function CalendarEventCard({event, onClose, clickX, clickY})
{
    const [isVisible, setIsVisible] = useState(true);
    const cardRef = useRef(null);
    
    // Map the different event types to their corresponding colors
    const getEventColor = type => {
        const colorMap = {
            "General Meeting": "#FADC90",
            "Board Meetings": "#FFBAAF",
            "Fundraiser": "#A4DAEB",
            "Conference": "#6681DB",
            "Special Event": "#9CE1C2"
        };
        return colorMap[type] || "#EEC358";
    };

    // Calculate event card position based on click location
    const cardStyle = useMemo(() => {
        if (!clickX || !clickY)
            return {};
        
        const cardWidth = 362;
        const cardMinHeight = 223;

        // Get scroll position to adjust coordinates
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // Convert viewport coordinates to page coordinates
        const pageX = clickX + scrollX;
        const pageY = clickY + scrollY;

        // Get viewport dimensions for later calculations
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Center the top edge horizontally, with clickX being the middle of the top side
        let left = pageX - cardWidth / 2;
        let top = pageY;

        if (left < scrollX)
            left = scrollX + 10;
        if (left + cardWidth > scrollX + viewportWidth)
            left = scrollX + viewportWidth - cardWidth - 10;
        
        if (top + cardMinHeight > scrollY + viewportHeight)
        {
            top = pageY - cardMinHeight;
            if (top < scrollY)
                top = scrollY + 10;
        }

        return {
            position: "absolute",
            left: `${left}px`,
            top: `${top}px`
        }
    }, [clickX, clickY]);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose)
            onClose();
    };

    useEffect(() => {
        function handleClickOutside(e)
        {
            if (cardRef.current && !cardRef.current.contains(e.target))
                handleClose();
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isVisible)
        return null;
    
    return (
        <div className = {styles.eventCard} style = {cardStyle} ref = {cardRef} /*onClick = {e => e.stopPropagation()}*/>
            <div className = {styles.eventType}>
                <span className = {styles.eventTypeIndicator} style = {{backgroundColor: getEventColor(event.type)}}></span>
                <span>{event.type}</span>
            </div>

            <h2 className = {styles.eventTitle}>{event.title}</h2>

            <div className = {styles.eventDetails}>
                <div className = {styles.eventDetail}>
                    <span className = {styles.detailImg}>
                        <Image 
                            src = "/Calendar/svg/WhiteClockIcon.svg"
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
                            src = "/Calendar/svg/WhiteLocationIcon.svg"
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
    );
}