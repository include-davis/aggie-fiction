import styles from "./page.module.scss";
import Image from "next/image";
import HomeCarousel from "../_components/HomeCarousel/HomeCarousel";
import UpcomingEvents from "@/app/(pages)/_components/UpcomingEvents/UpcomingEvents";
import React from "react";

const blogPostsFallbackData = [];

async function getBlogPosts() {
  try {
    const res = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/blog-posts?_published=true`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    const parsedData = data.body.map((card) => {
      return {
        id: card._id,
        imageUrl: card.image[0].src,
        imageAlt: card.image_alt_text,
        title: card.title,
        author: card.author,
        date: card.date,
        description: card.description,
        post_content: card.post_content,
        categories: card.categories.split(',').map(s => s.trim()).filter(Boolean),
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch blog-posts: ${e.message}`);
    return blogPostsFallbackData;
  }
}

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.title}>
              <p className={styles.titleHeader}>
                creative writing club at UC Davis
              </p>

              <h1 className={styles.titleName}>Aggie Fiction</h1>

              <p className={styles.titleDescription}>
                for writers of all levels and experiences
              </p>

              <button className={styles.joinNow}>Join Now</button>
            </div>

            <div className={styles.logo}>
              <Image
                src="/Home/img/Otter.png"
                alt="Jackie the Otter, the logo for AggieFiction."
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className={styles.pageLower}>
          <div className={styles.blog}>
            <h1>Blog</h1>
            <HomeCarousel blogPosts={blogPosts}/>
          </div>
          <UpcomingEvents/>
        </div>
      </div>
    </div>
  );
}
