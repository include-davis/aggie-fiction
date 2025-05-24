import styles from "./ExpandedAlumniCard.module.scss";
import Image from "next/image";

export default function ExpandedAlumniCard({
    first_name,
    last_name,
    role1,
    role2,
    role3,
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
                <div className={styles.close}>
                    <Image
                        src="/AlumniPage/close.svg"
                        alt="Close icon"
                        fill

                    />
                </div>
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
                
                    <div className={styles.nameRole}>
                        <h1 className={styles.name}>{first_name} {last_name}</h1>

                        <div className={styles.roleContainer}>
                            <h2 className={styles.role1}>{role1}</h2>
                            <h2 className={styles.role2}>{role2}</h2>
                            <h2 className={styles.role3}>{role3}</h2>
                        </div>
                    </div>
                    <div className={styles.mobileIcons}>
                        <a href={instaLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/AlumniPage/insta-icon.svg"
                                alt="Instagram icon"
                                width={27}
                                height={27}
                            />
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/AlumniPage/linkedin-icon.svg"
                                alt="LinkedIn icon"
                                width={27}
                                height={27}
                            />
                        </a>
                    </div>




                


                <p className={styles.longDescription}>{description}</p>


                <div className={styles.icons}>

                    <h2 className={styles.socialTitle}>Connect with {first_name}</h2>
                    <div className={styles.socialContainer}>
                        <Image
                            src="/AlumniPage/insta-icon.svg"
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
                            src="/AlumniPage/linkedin-icon.svg"
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
