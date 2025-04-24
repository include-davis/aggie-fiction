"use client";
import styles from "./ConferenceCarousel.module.scss";
import {useEffect, useRef} from "react";

const testImages = [
    "./testImages/img1.png",
    "./testImages/img2.png",
    "./testImages/img3.png",
    "./testImages/img4.png",
    "./testImages/img5.png",
    "./testImages/img6.png",
    "./testImages/img7.png"
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