import React from "react";
import BlogMainPage from "../_components/BlogMainPage/BlogMainPage";

export const dynamic = "force-dynamic";

const blogPostsFallbackData = [];

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
        imageUrl: card.image[0].src,
        imageAlt: card.image_alt_text,
        title: card.title,
        author: card.author,
        description: card.description,
        post_content: card.post_content,
        categories: card.categories,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch blog-posts: ${e.message}`);
    return blogPostsFallbackData;
  }
}

export default async function Page() {
  const blogPosts = await getBlogPosts();
  console.log(blogPosts);
  return <BlogMainPage blogPosts={blogPosts}/>
}
