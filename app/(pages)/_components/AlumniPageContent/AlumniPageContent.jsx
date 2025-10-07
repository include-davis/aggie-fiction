/* eslint-disable react/prop-types */
"use client"
import styles from "./AlumniPageContent.module.scss";
import AlumniPageCard from "../AlumniPageCard/AlumniPageCard.jsx";
import Image from "next/image";
import React, {useState} from "react";

export default function AlumniPageContent({cards}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.pagewrapper}>

   
    <div className={styles.alumniPage}>

      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Meet our Alumni</h1>
          <div className={styles.searchbar}>
            <Image
              src="/AlumniPage/mag.svg"
              alt="Magnifying glass icon"
              width={30}
              height={31}
            />

            <input
              type="text"
              placeholder="Search for alumni"
              className={styles.searchInput}
              value = {searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
        </div>
        <div className={styles.jackieStickerContainer}>
          <Image
            src="/AlumniPage/Jackie-4.png"
            alt="Jackie sticker"
            fill
            className={styles.jackieSticker}
          />
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((alum, index) => (
          <AlumniPageCard
            key={index}
            first_name={alum.first_name}
            last_name={alum.last_name}
            role1={alum.role1}
            role2={alum.role2}
            role3={alum.role3}
            years={alum.years}
            description={alum.description}
            imageUrl={alum.imageUrl}
            instaHandle={alum.instaHandle}
            instaLink={alum.instaLink}
            linkedinLink={alum.linkedinLink}
            linkedinHandle={alum.linkedinHandle}
          />
        ))}
      </div>
    </div>
     </div>
  );

}