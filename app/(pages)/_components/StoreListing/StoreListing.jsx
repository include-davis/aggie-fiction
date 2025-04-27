import styles from "./StoreListing.module.scss";
import React from 'react';
import Image from 'next/image'


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
            <button className={styles.btn4}>Cart</button>
          </div>


        <section className={styles.listbox}>
            <h1 className={styles.listingrow1}>
              <div className={styles.card}>
                <div className={styles.container}>
                  {/* <Image
                  src="/example.png"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /> */}
                </div>

                <div className={styles.productdetail}>
                  <p className={styles.productname}>Jackie Tote Bag (2nd Edition; Spring Quarter 2024)</p>
                  <p className={styles.cost}> $16.00</p>
                </div>

              </div>

              <div className={styles.card}>
                <div className={styles.container}>
        
                </div>

                <div className={styles.productdetail}>
                  <p className={styles.productname}>Jackie Tote Bag (2nd Edition; Spring Quarter 2024)</p>
                  <p className={styles.cost}> $16.00</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                
                <div className={styles.productdetail}>
                  <p className={styles.productname}>Jackie Tote Bag (2nd Edition; Spring Quarter 2024)</p>
                  <p className={styles.cost}> $16.00</p>
                </div>

              </div>
            </h1>

            <h1 className={styles.listingrow2}>
              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>

                <div className={styles.productdetail}>
                  <p className={styles.productname}> Colonizer Jackie Sticker</p>
                  <p className={styles.cost}> $16.00</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                
                <div className={styles.productdetail}>
                  <p className={styles.productname}> Coquette Jackie Sticker</p>
                  <p className={styles.cost}> $16.00</p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                
                <div className={styles.productdetail}>
                  <p className={styles.productname}>Boba Jackie Sticker</p>
                  <p className={styles.cost}> $16.00</p>
                </div>
              </div>
            </h1>
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
  