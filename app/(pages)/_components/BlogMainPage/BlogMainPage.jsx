"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BlogMainPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
/* eslint-disable react/prop-types */

const articles = [
  {
    id: 1,
    title: "How to Procrastinate Like a Professional Writer (And Actually Get Stuff Done)",
    category: "writing-tips",
    date: "03/27/2025",
    image: "/blogMainImages/image1.png",
    author: "Claudia Colorado",
    subtitle: "",
  },
  {
    id: 2,
    title: "Ten Mistakes Amateur Writers Make",
    category: "writing-tips",
    date: "03/28/2025",
    image: "/blogMainImages/image2.png",
    author: "Audrey Zhang",
    subtitle: "Writing is intimidating. But it doesn&apos;t have to be.",
  },
]

function ArticleCard({ article }) {
  return (
    <div className={styles.articlecard}>
        <div className={styles.articleCardImageWrapper}>
        <Image
        src={article.image}
        alt={article.title}
        width={446}
        height={172}
      />
        </div>
      

      <div className={styles.cardDescription}>
        <div className={styles.titleDate}>
          <h2>{article.title}</h2>
          <p>{article.date}</p>
        </div>

        <div className={styles.author}>
          <p>By {article.author}</p>
          <p>{article.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function groupArticlesByMonth(articles) {
  const grouped = {};

  articles.forEach((article) => {
    const date = new Date(article.date);
    const key = date.toLocaleString("default", { month: "long", year: "numeric" });

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(article);
  });

  //return grouped;


  // Following lines are to sort articles within a month in *ascending* order,
  // Need to check with designers if this was really the intended behavior...
  const sortedMonthKeys = Object.keys(grouped).sort((a, b) => {
    const aDate = new Date(`${a} 1`);
    const bDate = new Date(`${b} 1`);
    return bDate - aDate; 
  });

  const sortedGrouped = {};
  sortedMonthKeys.forEach((month) => {
    sortedGrouped[month] = grouped[month].sort((a, b) => new Date(a.date) - new Date(b.date)); // ascending within month
  });

  return sortedGrouped;
}

export default function BlogMainPage({ blogPosts }) {
    const router = useRouter();
    const defaultCategory = "Date Added";
    const categories = [
        defaultCategory,
        ...Array.from(
            new Set(
                blogPosts
                .flatMap(post => post.categories?.split(','))
                .map(category => category?.trim())
                .filter(Boolean)
            )
        )
    ];
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        router.push(`/blog?category=${category}`);
    };

    const filteredArticles =
        selectedCategory === defaultCategory
        ? [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
        : articles.filter((article) => article.category === selectedCategory);

    const groupedArticles = selectedCategory === defaultCategory ? groupArticlesByMonth(filteredArticles) : null;

    return (
        <div className={styles.blog}>
        <div className={styles.leftColumn}>
            <h1>Blog</h1>
            <div className={styles.categoriesSection}>
            <Image
                src="/blogMainImages/otter.png"
                alt="Jackie the Otter, the logo for AggieFiction."
                width={252}
                height={265}
            />
            <h2>Categories</h2>
            <hr className={styles.lineseparator} />
            <ul className={styles.categoriesList}>
                {categories.map(( label, idx ) => (
                <li key={idx}>
                    <Button
                    extraStyles={styles.buttonsize2}
                    onClick={() => handleCategoryChange(value)}
                    color={selectedCategory === label ? "gradient" : "light"}
                    >
                    {label}
                    </Button>
                </li>
                ))}
            </ul>
            </div>
        </div>

        <div className={styles.rightColumn}>


    {selectedCategory === defaultCategory ? (
    Object.entries(groupedArticles).map(([monthYear, articlesInGroup]) => (
        <div key={monthYear}>
        <h2 className={styles.monthYearHeading}>{monthYear}</h2>
        <div className={styles.articleGrid}>
            {articlesInGroup.map((article) => (
            <Link href={`/blog/${article.id}`} key={article.id}>
                <ArticleCard article={article} />
            </Link>
            ))}
        </div>
        </div>
    ))
    ) : (
    <div className={styles.articleGrid}>
        {filteredArticles.map((article) => (
        <Link href={`/blog/${article.id}`} key={article.id}>
            <ArticleCard article={article} />
        </Link>
        ))}
        {filteredArticles.length === 0 && (
        <p>No articles found for this category.</p>
        )}
    </div>
    )}

        </div>
        </div>
    );
}