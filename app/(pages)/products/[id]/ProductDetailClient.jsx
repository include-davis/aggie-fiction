/* eslint-disable react/prop-types */
"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import ProductDetailContent from '@/app/(pages)/_components/ProductDetailContent/ProductDetailContent';

export default function ProductDetailClient({ products }) {
  const params = useParams();
  const id = params.id;
  return <ProductDetailContent products={products} id={id} />;
} 