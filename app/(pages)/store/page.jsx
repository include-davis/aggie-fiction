/* eslint-disable no-undef */
export const dynamic = "force-dynamic"; // use fresh data for every request
import React from 'react';
import { StoreListingContent } from '../_components/StoreListingContent/StoreListingContent'
import storeProductsFallbackData from '@/app/_data/store-products.json';

async function getProducts() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/store-products?_published=true`,
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
        return {
          id: card._id,
          imageUrl: card.image[0].src,
          imageAlt: card.image_alt_text,
          name: card.name,
          price: card.price,
          description: card.description,
          similar_item_ids: card.similar_item_ids,
          categories: card.categories,
        };
      });
      return parsedData;
    } catch (e) {
      console.error(`Failed to fetch store-products: ${e.message}`);
      return storeProductsFallbackData;
    }
}

export default async function StoreListing() {
  const products = await getProducts();

  return (
    <StoreListingContent 
      products={products} 
    />
  );
}