/* eslint-disable react/prop-types */
'use client';
import styles from "./ProductDetailContent.module.scss";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function ProductDetailContent({ products, id }) {
    const product = products.find(p => p.id == id);
    const similarItems = product?.similar_item_ids?.map(id => products.find(p => p.id == id)).filter(Boolean);
    const description = product?.description || "No description available.";
  
    if (!product) return <p>Product not found.</p>;
    return (
      <main>
        <section className={styles.top}>
          <Link href="..\store" className={styles.backbtn}> &lt; </Link>
          <p className={styles.merch}>Merch Store</p>
        </section>
  
        <section className={styles.product}>
          <Image
            className={styles.productimage}
            src={product.imageUrl}
            alt={product.imageAlt}
            width={424}
            height={424}
          />
  
          <div className={styles.productinfo}>
            <h2 className={styles.title}>{product.name}</h2>
            <div className={styles.costdesc}>
              <p className={styles.cost}>{product.price}</p>
              <p className={styles.detail}
                dangerouslySetInnerHTML={{ __html: description }}
              >
              </p>
            </div>
          </div>
        </section>
  
        <section className={styles.moreitems}>
  
          <h1 className={styles.similaritems}> Similar Items </h1>
  
          <div className={styles.moreproduct}>
            {similarItems?.map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className={styles.extra}>
              <div className={styles.fixedImage}>
                <Image
                  className={styles.fillImage}
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </div>
                  
              <div className={styles.productdetail}>
                <p className={styles.productname}>{item.name}</p>
                <p className={styles.productcost}>{item.price}</p>
              </div>
            </Link>
            ))} 
          </div>
        </section>
         
      </main>
      );
    }
    
  