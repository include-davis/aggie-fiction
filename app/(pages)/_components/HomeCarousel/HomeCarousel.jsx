"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./HomeCarousel.module.scss";
import Link from "next/link";

function sortArticles(articles) {
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date)); // descending order
}

export default function HomeCarousel({ blogPosts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = sortArticles(blogPosts)
    .slice(0, Math.min(blogPosts.length, 3))
    .map((item, idx) => ({
      ...item,
      articleNum: idx,
    }));
  
  console.log('sorted', sortArticles(blogPosts));
  console.log('carouselItems', carouselItems);

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
            src={current.imageUrl}
            alt={current.imageAlt}
            fill
            objectFit="cover"
          />
        </div>

        <div className={styles.carouselDescription}>
          <div className={styles.titleDate}>
            <Link href={`/blog/${current.id}`}>
              <h2>{current.title}</h2>
            </Link>

            <p>{current.date}</p>
          </div>

          <div className={styles.author}>
            <p>{current.author}</p>
            <p>{current.description}</p>
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
