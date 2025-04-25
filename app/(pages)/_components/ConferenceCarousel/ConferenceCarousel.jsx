"use client";
import styles from "./ConferenceCarousel.module.scss";
import {useEffect, useRef} from "react";

const testImages = [
    "@/public/conferenceTestImages/img1.png",
    "@/public/conferenceTestImages/img2.png",
    "@/public/conferenceTestImages/img3.png",
    "@/public/conferenceTestImages/img4.png",
    "@/public/conferenceTestImages/img5.png",
    "@/public/conferenceTestImages/img6.png",
    "@/public/conferenceTestImages/img7.png"
];

export default function ConferenceCarousel()
{
    const carouselRef = useRef(null);

    useEffect(() => {
        // Animation setup
        const setupAnimation = () => {
            const track = carouselRef.current;
            if (!track)
                return;
            
            // Duplicate images for infinite scrolling

        };
    }, []);
    
    return (
        <div className = {styles.carousel}>
            
        </div>
    );
}