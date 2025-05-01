'use client';
import styles from "./test.module.scss";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'


const products = [
    {
      id: 1,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/AgFiTote.png",
      category: "tote"
    },
    {
      id:2,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieOnMoonTote.jpg",
      category: "tote"
    },
    {
      id:3,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieTote.png",
      category: "tote"
    },
    {
      id: 4,
      name: "Colonizer Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie1.jpg",
      category: "sticker"
      },
      {
      id: 5,
      name: "Coquette Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie2.jpg",
      category: "sticker"
      },
      {
      id:6, 
      name: "Boba Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieBoba.png",
      category: "sticker"
      },
      {
      id:7, 
      name: "Eepy Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/EepyJackie.jpg",
      category: "sticker"
      },
      {
      id: 8, 
      name: "Santa Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/SantaJackie.jpg",
      category: "sticker"
      },
      {
      id:9, 
      name: "Jackie Maud'dib Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieMaud'dib.jpg",
      category: "sticker"
      },
  ];

export default function storelisting() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts = products.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );
    return (
      <main>

        <section className={styles.top}>
          <h1 className={styles.title}>Merch Store</h1>
          
          <div className={styles.buttons}>
          <button onClick={() => setSelectedCategory("all")} className={selectedCategory === "all" ? styles.activeBtn1 : styles.btn1}> All</button>
          <button onClick={() => setSelectedCategory("tote")} className={selectedCategory === "tote" ? styles.activeBtn2 : styles.btn2}> Tote Bags</button>
          <button onClick={() => setSelectedCategory("sticker")} className={selectedCategory === "stickers" ? styles.activeBtn2 : styles.btn2}> Stickers</button>
          </div>

        </section>

        <div className={styles.cart}>
            <button className={styles.btn4}>
            <Image
                  src="/TestImages/Cart.png"
                  alt="Cart"
                  width={23}
                  height={23}
                  />
            </button>
        </div>

        <section className={styles.listbox}>
            {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className={styles.product}>
                <Image
                className={styles.container}
                src={product.image}
                alt={product.name}
                width={424}
                height={424}
                />
                <div className={styles.productdetail}>
                <p className={styles.productname}>{product.name}</p>
                <p className={styles.cost}>{product.cost}</p>
                </div>
            </Link>
            ))}
        </section>

        <section className={styles.bottom}>
            <div className={styles.pagination}>
            <a href="#" data-page="2">&lt;&lt;</a>
            <a href="#" data-page="2">&lt;</a>
                <a href="#" data-page="1">1</a>
                <a href="#" data-page="2">2</a>
                <a href="#" data-page="3">3</a>
                <a href="#" data-page="4">4</a>
                <a href="#" data-page="5">5</a>
            <a href="#" data-page="2">&gt;</a>
            <a href="#" data-page="2">&gt;&gt;</a>
            </div>
            </section>
      </main>
    );
  }
  
