/* eslint-disable react/prop-types */
"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import BlogArticle from '../../_components/BlogArticle/BlogArticle';

export default function BlogArticleClient({ articles, authors }) {
  const params = useParams();
  const id = params.id;

  return <BlogArticle articles={articles} authors={authors} id={id}/>;
} 