'use client';
import styles from "./test.module.scss";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

import { useRouter } from 'next/navigation';

import { useParams } from 'next/navigation';

const products = [
    {
      id: 1,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/AgFiTote.png",
      description: "[Input Description]",
      similar: [1, 2, 5]
      
    },
    {
      id: 2,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieOnMoonTote.jpg",
      description: "[Input Description]",
      similar: [1, 2, 3]
    },
    {
      id: 3,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieTote.png",
      description: "[Input Description]",
      similar: [4, 5, 6]
    },
    {
      id: 4,
      name: "Colonizer Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie1.jpg",
      description: "[Input Description]",
      similar: [7, 8, 9]
      },

      {
      id: 5,
      name: "Coquette Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie2.jpg",
      description: "[Input Description]",
      similar: [1, 2, 6]
      },

      {
      id: 6, 
      name: "Boba Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieBoba.png",
      description: "[Input Description]",
      similar: [1, 2, 6]
      },

      {
      id: 7, 
      name: "Eepy Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/EepyJackie.jpg",
      description: "[Input Description]",
      similar: [1, 2, 6]
      },

      {
      id: 8, 
      name: "Santa Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/SantaJackie.jpg",
      description: "[Input Description]",
      similar: [1, 2, 6]
      },

      {
      id: 9, 
      name: "Jackie Maud'dib Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieMaud'dib.jpg",
      description: "[Input Description]",
      similar: [1, 2, 6]
      },
  ];


export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const product = products.find(p => p.id === Number(id));
  const similarItems = product?.similar?.map(id => products.find(p => p.id === id)).filter(Boolean);

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
          src={product.image}
          alt={product.name}
          width={424}
          height={424}
        />

        <div className={styles.productinfo}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.cost}>{product.cost}</p>
          <p className={styles.detail}>{product.description || "No description available."}</p>
        </div>
      </section>

      <section className={styles.moreitems}>

        <h1 className={styles.similaritems}> Similar Items </h1>

        <div className={styles.images}>
          {similarItems?.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id} className={styles.extra}>
            <Image
              className={styles.productimage}
              src={item.image}
              alt={item.name}
              width={424}
              height={191}
            />
                
            <div className={styles.productdetail}>
              <p className={styles.productname}>{item.name}</p>
              <p className={styles.productcost}>{item.cost}</p>
            </div>
          </Link>
          ))} 
        </div>
      </section>
       
    </main>
    );
  }
  
