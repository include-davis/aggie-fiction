"use client";

import { useState } from "react";
import styles from "./HomeCarousel.module.scss";

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: "/HomeCarousel/img/img1.png",
      title:
        "How to Procrastinate Like a Professional Writer (And Actually Get Stuff Done)",
      date: "03/27/2025",
      author: "By Claudia Colorado",
    },

    {
      image: "/HomeCarousel/img/img2.png",
      title: "Ten Mistakes Amateur Writers Make",
      date: "03/28/2025",
      author: "By Claudia ColoradoBy",
      subtitle: "Writing is intimidating. But it doesn’t have to be.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const current = carouselItems[currentIndex];

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrev}>
        <img src="/HomeCarousel/svg/LeftButton.svg" alt="Previous" />
      </button>

      <div className={styles.carouselContent}>
        <img src={current.image} />

        <div className={styles.carouselDescription}>
          <div className={styles.titleDate}>
            <h2>{current.title}</h2>

            <p>{current.date}</p>
          </div>

          <div className={styles.author}>
            <p>{current.author}</p>
            <p>{current.subtitle}</p>
          </div>
        </div>
      </div>

      <button onClick={handleNext}>
        <img src="/HomeCarousel/svg/RightButton.svg" alt="Next" />
      </button>
    </div>
  );
}
