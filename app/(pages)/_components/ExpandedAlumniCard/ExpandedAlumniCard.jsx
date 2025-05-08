import styles from "./ExpandedAlumniCard.module.scss";
import Image from "next/image";

export default function ExpandedAlumniCard({
    first_name,
    last_name,
    role,
    years,
    description,
    imageUrl,
    instaHandle,
    linkedinHandle,
    instaLink,
    linkedinLink,
    onCollapse,
}) {
    return (
        <div className={styles.expandedCard}>
            
            <button className={styles.closeButton} onClick={onCollapse}>
                <Image
                    src="/close.svg"
                    alt="Close icon"
                    width={49}
                    height={50}
                    />
            </button>

            
            <div className={styles.imageContainer}>
                <Image
                    src={imageUrl}
                    alt={`${first_name} photo`}
                    className={styles.image}
                    width={1309}
                    height={886}
                    objectFit="cover"
                />
            </div>

           
            <div className={styles.textContainer}>
                <h1 className={styles.name}>{first_name} {last_name}</h1>
                <h2 className={styles.role}>
                    {role}, {years}
                </h2>

                <p className={styles.longDescription}>{description}</p>

                
                <div className={styles.icons}>
                    
                        <h2 className={styles.socialTitle}>Connect with {first_name}</h2>
                        <div className={styles.socialContainer}>
                        <Image
                            src="/insta-icon.svg"
                            alt="Instagram icon"
                            width={33}
                            height={33}
                        />
                        <a 
                            href={instaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialHandle}
                        >
                            {instaHandle}
                        </a>
                    </div>
                    <div className={styles.socialContainer}>
                        <Image
                            src="/linkedin-icon.svg"
                            alt="LinkedIn icon"
                            width={33}
                            height={33}
                        />
                        <a
                            href={linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialHandle}
                        >
                            {linkedinHandle}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
