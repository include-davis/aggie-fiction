import React from 'react';
import { storeProductsFallbackData } from '@/app/_data/store-products.json';
import ProductDetailClient from './ProductDetailClient';

async function getProducts() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/store-products?_published=true`,
        { next: { tag: "cms" } }
      );
      const data = await res.json();
      if (!data.ok || !data.body || data.body.length === 0) {
        throw new Error(data.error);
      }
      const parsedData = data.body.map((card) => {
      const similar_item_ids = card.similar_item_ids.split(',').map(s => s.trim()).filter(Boolean);
        return {
          id: card._id,
          imageUrl: card.image[0].src,
          imageAlt: card.image_alt_text,
          name: card.name,
          price: card.price,
          description: card.description,
          similar_item_ids,
          categories: card.categories,
        };
      });
      return parsedData;
    } catch (e) {
      console.error(`Failed to fetch store-products: ${e.message}`);
      return storeProductsFallbackData;
    }
}

export default async function ProductDetail() {
  const products = await getProducts();
  return <ProductDetailClient products={products} />;
}
  
