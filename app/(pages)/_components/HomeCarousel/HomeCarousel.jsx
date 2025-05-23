"use client";

import { useState } from "react";
import Image from "next/image";
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
      author: "By Audrey Zhang",
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
        <Image
          src="/HomeCarousel/svg/LeftButton.svg"
          alt="Previous"
          width={44}
          height={52}
        />
      </button>

      <div className={styles.carouselContent}>
        <Image
          src={current.image}
          alt="Carousel Image"
          width={308}
          height={172}
        />

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
        <Image
          src="/HomeCarousel/svg/RightButton.svg"
          alt="Next"
          width={44}
          height={52}
        />
      </button>
    </div>
  );
}
