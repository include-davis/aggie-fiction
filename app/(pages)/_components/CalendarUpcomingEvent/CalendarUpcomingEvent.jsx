import styles from "./CalendarUpcomingEvent.module.scss";
import Image from "next/image";

export default function CalendarUpcomingEvent({event}) 
{
    const [month, days] = event.date.split(" ");

    // Map the different event types to their corresponding colors
    const getEventColor = type => {
        const colorMap = {
            "General Meeting": "#FADC90",
            "Board Meetings": "#FFBAAF",
            "Fundraiser": "#A4DAEB",
            "Guest Speaker": "#6681DB",
            "Special Event": "#9CE1C2"
        };
        return colorMap[type] || "#EEC358";
    };
    
    return (
        <div className = {styles.outerBox}>
            <div className = {styles.event}>
                <div className = {styles.eventDate}>
                    <h2>{month}</h2>
                    <h1>{days}</h1>
                </div>

                <div className = {styles.eventInfo}>
                    <div className = {styles.eventType}>
                        <span className = {styles.eventTypeIndicator} style = {{backgroundColor: getEventColor(event.type)}}></span>
                        <p>{event.type}</p>
                    </div>

                    <h2>{event.title}</h2>

                    <div className = {styles.eventDetails}>
                        <div className = {styles.eventDetail}>
                            <span className = {styles.detailImg}>
                                <Image 
                                    src = "/Calendar/svg/BlackClockIcon.svg"
                                    alt = "Clock icon"
                                    width = {16.35}
                                    height = {16.35}
                                />
                            </span>
                            <p>{event.startTime} to {event.endTime}</p>
                        </div>
                        <div className = {styles.eventDetail}>
                            <span className = {styles.detailImg}>
                                <Image
                                    src = "/Calendar/svg/BlackLocationIcon.svg"
                                    alt = "Location icon"
                                    width = {16}
                                    height = {17.93}
                                />
                            </span>
                            <p>{event.location}</p>
                        </div>
                    </div>
                </div>

                <div className = {styles.eventDesc}>
                    <p>{event.desc}</p>
                </div>
            </div>
        </div>
    );
}