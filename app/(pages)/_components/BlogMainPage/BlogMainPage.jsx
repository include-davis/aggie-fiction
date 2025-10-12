/* eslint-disable react/prop-types */

"use client";

import React, { useState } from "react";
import styles from "./BlogMainPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

function ArticleCard({ article }) {
  return (
    <div className={styles.articlecard}>
        <div className={styles.articleCardImageWrapper}>
        <Image
        src={article.imageUrl}
        alt={article.title}
        width={446}
        height={172}
        style={{ objectFit: "cover" }}
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
    const defaultCategory = "Date Added";
    const categories = [
        defaultCategory,
        ...Array.from(
            new Set(
                blogPosts
                .flatMap(post => post.categories)
                .map(category => category?.trim())
                .filter(Boolean)
            )
        )
    ];
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredArticles =
        selectedCategory === defaultCategory
        ? [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
        : blogPosts.filter((article) => article.categories.includes(selectedCategory));

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
                    onClick={() => handleCategoryChange(label)}
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