"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./HomeCarousel.module.scss";
import Link from "next/link";

export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: "/HomeCarousel/img/img1.png",
      title:
        "How to Procrastinate Like a Professional Writer (And Actually Get Stuff Done)",
      date: "03/27/2025",
      author: "By Claudia Colorado",
      articleNum: 2,
    },

    {
      image: "/HomeCarousel/img/img2.png",
      title: "Ten Mistakes Amateur Writers Make",
      date: "03/28/2025",
      author: "By Audrey Zhang",
      subtitle: "Writing is intimidating. But it doesn&apos;t have to be.",
      articleNum: 1,
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
        <div className={styles.turnButton}>
          <Image
            src="/HomeCarousel/svg/LeftButton.svg"
            alt="Previous"
            fill
            objectFit="contain"
          />
        </div>
      </button>

      <div className={styles.carouselContent}>
        <div className={styles.carouselImg}>
          <Image
            src={current.image}
            alt="Carousel Image"
            fill
            objectFit="cover"
          />
        </div>

        <div className={styles.carouselDescription}>
          <div className={styles.titleDate}>
            <Link href={`/blog/${current.articleNum}`}>
              <h2>{current.title}</h2>
            </Link>

            <p>{current.date}</p>
          </div>

          <div className={styles.author}>
            <p>{current.author}</p>
            <p>{current.subtitle}</p>
          </div>
        </div>
      </div>

      <button onClick={handleNext}>
        <div className={styles.turnButton}>
          <Image
            src="/HomeCarousel/svg/RightButton.svg"
            alt="Next"
            fill
            objectFit="contain"
          />
        </div>
      </button>
    </div>
  );
}
