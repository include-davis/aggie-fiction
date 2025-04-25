import styles from "./StoreListing.module.scss";
import React from 'react';


export default function storelisting() {
    return (
      <main>
        <section className={styles.top}>
          <h1 className={styles.title}>Merch Store</h1>

          <div className={styles.buttons}>
            <button className={styles.btn1}>All</button>            <button className={styles.btn2}>Tote Bags</button>
            <button className={styles.btn2}>Stickers</button>
          </div>
  
        </section>

        <section className={styles.listbox}>
            <h1 className={styles.listingrow1}>
              <div className={styles.card}>
                <div className={styles.container}>
                  {/* <img src={logo} alt="Logo" /> */}
                </div>
                <p>Jackie Tote Bag (2nd Edition; Spring Quarter 2024)</p>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
        
                </div>
                <p>Jackie Tote Bag (2nd Edition; Spring Quarter 2024)</p>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                <p>Jackie Tote Bag (2nd Edition; Spring Quarter 2024)</p>
              </div>
            </h1>

            <h1 className={styles.listingrow2}>
              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                <p>Colonizer Jackie Sticker</p>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                <p>Coquette Jackie Sticker</p>
              </div>

              <div className={styles.card}>
                <div className={styles.container}>
                
                </div>
                <p>Boba Jackie Sticker</p>
              </div>
            </h1>
        </section> 

        <section className={styles.bottom}>
          <p>1 2 3 4 5 6 7</p>
        </section>
      </main>
    );
  }
  