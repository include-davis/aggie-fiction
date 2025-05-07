'use client';
import styles from "./test.module.scss";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function storelisting() {

    return (
      <main>

      <section className={styles.product}>
      <Image
      className={styles.productimage}
      src="/TestImages/AgFiTote.png"
      alt="AgFiTote"
      width={424}
      height={424}
      />

      <div className={styles.productinfo}>
        <h1 className={styles.title}> Jackie Tote Bag (1st Edition; Winter Quarter 2024)</h1>
        <p className={styles.cost}>$18.00</p>
        <p className={styles.detail}>The first edition of the Jackie Tote Bag, featuring one of the original designs of our beloved mascot Jackie. Designed by Annie Tran and Erika Dimaano.</p>
      </div>

      </section>

      <section className={styles.moreitems}>
        <h1 className={styles.similaritems}> Similar Items </h1>
        <div className={styles.images}>
          
          <div className={styles.extra}>
            <Image
            className={styles.productimage}
            src="/TestImages/JackieOnMoonTote.jpg"
            alt="AgFiTote"
            width={424}
            height={191}
            />
            <div className={styles.productdetail}>
              <p className={styles.productname}>Jackie Tote Bag</p>
              <p className={styles.productcost}>$16.00</p>
            </div>
          </div>

          <div className={styles.extra}>
            <Image
            className={styles.productimage}
            src="/TestImages/JackieTote.png"
            alt="AgFiTote"
            width={424}
            height={191}
            />
            <div className={styles.productdetail}>
              <p className={styles.productname}>Jackie Tote Bag</p>
              <p className={styles.productcost}>$16.00</p>
            </div>
          </div>

          <div className={styles.extra}>
            <Image
            className={styles.productimage}
            src="/TestImages/JackieBoba.png"
            alt="AgFiTote"
            width={424}
            height={191}
            />
            <div className={styles.productdetail}>
              <p className={styles.productname}>Jackie Tote Bag</p>
              <p className={styles.productcost}>$16.00</p>
            </div>
          </div>

          </div>
      </section>
       
      </main>
    );
  }
  
