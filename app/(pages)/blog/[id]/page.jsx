import React from 'react'
import BlogArticleClient from './BlogArticleClient';

export const dynamic = "force-dynamic";

const blogPostsFallbackData = [];
const blogAuthorsFallbackData = [];

export const metadata = {
  title: 'Blog',
};

async function getBlogPosts() {
  try {
    const res = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/blog-posts?_published=true`,
      { next: { tag: "cms" } }
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

async function getBlogAuthors() {
  try {
    const res = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/blog-authors?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    const parsedData = data.body.map((card) => {
      return {
        imageUrl: card.image[0].src,
        imageAlt: card.image_alt_text,
        name: card.name,
        description: card.description,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch blog-authors: ${e.message}`);
    return blogAuthorsFallbackData;
  }
}

export default async function Page() {
    const blogPosts = await getBlogPosts();
    const blogAuthors = await getBlogAuthors();

    return(
        <BlogArticleClient articles={blogPosts} authors={blogAuthors} />
    );
}
