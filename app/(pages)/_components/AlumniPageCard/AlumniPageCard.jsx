"use client";
import styles from "./AlumniPageCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import ExpandedAlumniCard from "../ExpandedAlumniCard/ExpandedAlumniCard";


export default function AlumniPageCard(info) {
    const {
        first_name,
        last_name,
        role,
        years,
        description,
        longDescription,
        imageUrl,
        instaHandle,
        linkedinHandle,

    } = info;

    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => setExpanded(true);
    const handleCollapse = () => setExpanded(false);

    if (expanded) {
        return (
            <ExpandedAlumniCard
                first_name={first_name}
                last_name={last_name}
                role={role}
                years={years}
                longDescription={longDescription}
                imageUrl={imageUrl}
                instaHandle={instaHandle}
                linkedinHandle={linkedinHandle}
                onCollapse={handleCollapse}
            />
        );
    }
    return (
        <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <Image
                    src={imageUrl} 
                    alt={`${first_name} photo`} 
                    className={styles.image}
                    width= {512}
                    height={512} 
                    objectFit="cover"
                    
                />
                <div className={styles.icons}>
                    <Image 
                    src="/insta-icon.svg"
                    alt="Instagram icon"
                    className={styles.instagram}
                    width={30}
                    height={30}
                    />
                    <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn icon"
                    className={styles.linkedin}
                    width={30}
                    height={30}
                    />
            
                </div>
            </div>

            <div className={styles.textcontainer}>
                <h1 className={styles.name}>{first_name}{last_name}</h1>
                <h2 className={styles.role}>
                    {role}, {years}
                </h2>


                <p className={styles.description}>{description}</p>
                <button className={styles.button} onClick={handleExpand}>Read More</button>
            </div>
        </div>
    );
}