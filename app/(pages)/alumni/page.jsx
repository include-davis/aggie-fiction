"use client"
import styles from "./page.module.scss";
import AlumniPageCard from "../_components/AlumniPageCard/AlumniPageCard.jsx";
import Image from "next/image";
import React, {useState} from "react";
/* eslint-disable react/prop-types */

const alumniList = [
  {
    first_name:"Jack",
    last_name:"Hyslop",
    role1:"Founder, 2020–2022",
    role2:"",
    role3:"",
    description:(
    <>
      Jack started the club with his friends Maeve and Isabella in Winter Quarter 2020.
      He remained as primary leader until his graduation in Spring Quarter 2022.
      <br />
      <br />
      Since graduating, he has stayed creatively engaged.
      Recently, he has become a drummer in a band with his friends.
      He has taken sewing classes at a local city college and joined Radical Sewing Club (@radicalsewingclub) as a volunteer assisting folks
      with using a sewing machine to mend and alter their clothes.
      He rescued a kitten named Boots about two years ago.
      </>
    ),
    imageUrl:"/AlumniPage/jack.png",
    instaHandle:"@radicalsewingclub",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Leila",
    last_name:"Sanchez",
    role1:"President, 2020–2023",
    description:(
    <>
      After graduation in 2023, Leila Sanchez now works at the Social Security Administration 
      while working on her writing career in Urban Fantasy and Horror. 
      She self published the short story, The Challenge at the Carmichael Mansion in late 2023, 
      and is currently on other writing projects, while breaking down tropes and providing her own 
      analysis on shows and movies on her TikTok and Instagram, @Leilasstorycorner.
      </>
    ),
    imageUrl:"/AlumniPage/Leila.jpg",
    instaHandle:"@Leilasstorycorner",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Annie",
    last_name:"Tran",
    role1:"Vice President, 2022–2023",
    role2:"President, 2023-2024",
    role3:"",
    description:(
    <>
    Annie Tran joined the club in fall of 2020—during lockdown—serving as president in her final year at davis. 
    Now having returned home, she is working in quality assurance and, in her leisure time, writing a fantasy novel.
      </>
    ),
    imageUrl:"/AlumniPage/Annie.jpg",
    instaHandle:"@instagram",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Jakob",
    last_name:"Stanton",
    role1:"Vice President, 2023–2024",
    description:(
    <>
      Jakob Stanton was the secondary leader of Aggie Fiction from 2023-2024. 
      He graduated 2024 with a bachelor&apos;s degree in History and a minor in sociology. 
      He researched and wrote an honors thesis about aeronautical culture in Germany from 1872-1929 titled We Dead Fliers. 
      He is currently pursuing a masters in Screenwriting at Chapman University in Orange CA where he is trying to solve the 
      puzzle that is screenwriting with two sweet black cats named Bucket and Boba.
      </>
    ),
    imageUrl:"/AlumniPage/Jakob.png",
    instaHandle:"@instagram",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },
   {
    first_name:"Erika",
    last_name:"DiMaano",
    role1:"Publicity Chair, 2022–2024",
    role2:"",
    role3:"",
    description:(
    <>
      Erika DiMaano is an interaction designer who&apos;s been working on various interactive digital projects and design work. 
      She&apos;s recently been branching out to web development and learning new skills to bring her work further.
      </>
    ),
    imageUrl:"/AlumniPage/Erika.png",
    instaHandle:"@instagram",
    instaLink:"https://www.instagram.com/", /*General link for now*/
    linkedinLink:"https://www.linkedin.com/", /*General link for now*/
    linkedinHandle:"linkedin link",
  },

]

export default function almuni() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlumni = alumniList.filter((alumniMember) =>
    `${alumniMember.first_name} ${alumniMember.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className={styles.pagewrapper}>

   
    <div className={styles.alumniPage}>

      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Meet Our Alumni</h1>
          <div className={styles.searchbar}>
            <div className={styles.mag}>
            <Image
              src="/AlumniPage/mag.svg"
              alt="Magnifying glass icon"
              width={30}
              height={31}
            />

            </div>

            <input
              type="text"
              placeholder="Search for alumni"
              className={styles.searchInput}
              value = {searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
        </div>
        <Image
          src="/AlumniPage/Jackie-4.png"
          alt="Jackie sticker"
          width={369}
          height={207}
          className={styles.jackieSticker}
        />
        </div>

      <div className={styles.cardsContainer}>
        {filteredAlumni.map((alum, index) => (
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