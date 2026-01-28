import React from "react";
import AlumniPageContent from "../_components/AlumniPageContent/AlumniPageContent.jsx"
import AlumniFallbackData from "../../_data/alumni-cards.json"

export const dynamic = "force-dynamic";
export const metadata = {
  title: 'Alumni',
};

async function getCards() {
  try {
    const res = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/alumni-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((card) => {
      const splitName = card.name.split(" ");
      return {
        imageUrl: card.image[0].src,
        imageAlt: card.image_alt_text,
        first_name: splitName[0],
        last_name: splitName[1],
        role1: card.position_1,
        role2: card.position_2 ? card.position_2 : null,
        role3: card.position_3 ? card.position_3 : null,
        description: card.description,
        instaHandle: card.instagram_username,
        instaLink: `https://www.instagram.com/${card.instagram_username}`,
        linkedinHandle: card.linkedin_username,
        linkedinLink: card.linkedin_url,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch alumni-cards: ${e.message}`);
    return AlumniFallbackData;
  }
}

export default async function Alumni() {
  const cards = await getCards();

  return <AlumniPageContent cards={cards}/>
}