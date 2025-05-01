import styles from "./StoreListing.module.scss";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const products1 = [
    {
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/AgFiTote.png"
    },
    {
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieOnMoonTote.jpg"
    },
    {
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieTote.png"
    },
  ];

  const products2 = [
    {
      name: "Colonizer Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie1.jpg"
    },
    {
      name: "Coquette Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie2.jpg"
    },
    {
      name: "Boba Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieBoba.png"
    },
  ];

export default function storelisting() {
    return (
      <main>

        <section className={styles.top}>
          <h1 className={styles.title}>Merch Store</h1>

          
          <div className={styles.buttons}>
            <button className={styles.btn1}>All</button>            
            <button className={styles.btn2}>Tote Bags</button>
            <button className={styles.btn2}>Stickers</button>
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
        <div className={styles.listingrow1}>
          {products1.map((product, idx) => (
            <Link href={`/products1/${product.id}`} key={idx} className={styles.productinfo}>
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
        </div>

        <div className={styles.listingrow2}>
          {products2.map((product, idx) => (
            <Link href={`/products2/${product.id}`} key={idx} className={styles.productinfo}>
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
        </div>

      </section>

      <section className={styles.bottom}>
         <div className={styles.pagination}>
           <a href="#" class="page-link" data-page="2">&lt;&lt;</a>
           <a href="#" class="page-link" data-page="2">&lt;</a>
             <a href="#" class="page-link" data-page="1">1</a>
             <a href="#" class="page-link" data-page="2">2</a>
             <a href="#" class="page-link" data-page="3">3</a>
             <a href="#" class="page-link" data-page="4">4</a>
             <a href="#" class="page-link" data-page="5">5</a>
           <a href="#" class="page-link" data-page="2">&gt;</a>
           <a href="#" class="page-link" data-page="2">&gt;&gt;</a>
         </div>
         </section>

      </main>
    );
  }
  