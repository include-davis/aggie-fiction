
import styles from "./AlumniPageCard.module.scss";
import Image from "next/image";

export default function AlumniPageCard(info) {
    const {
        name,
        role,
        years,
        description,
        imageUrl,
        instagramIconUrl,
        linkedinIconUrl,
    } = info;

    return (
        <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <Image 
                    src={imageUrl} 
                    alt={`${name} photo`} 
                    className={styles.image}
                    width= {200}
                    height={300} 
                    objectFit="cover"
                    
                />
                <div className={styles.icons}>
                    <Image 
                    src="/insta-icon.svg"
                    alt="Instagram icon"
                    className={styles.icon}
                    width={30}
                    height={30}
                    />
                    <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn icon"
                    className={styles.icon}
                    width={30}
                    height={30}
                    />
            
                </div>
            </div>

            <div className={styles.textcontainer}>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.role}>
                    {role}, {years}
                </h3>


                <p className={styles.description}>{description}</p>
                <button className={styles.button}>Read More</button>
            </div>


        </div>
    );
}