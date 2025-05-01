
import styles from "./AlumniPageCard.module.scss";
import Image from "next/image";

export default function AlumniPageCard(info) {
    const {
        name,
        role,
        years,
        description,
        imageUrl,

    } = info;

    return (
        <div className={styles.card}>
            <div className={styles.imagecontainer}>
                <Image
                    src={imageUrl} 
                    alt={`${name} photo`} 
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
                <h1 className={styles.name}>{name}</h1>
                <h2 className={styles.role}>
                    {role}, {years}
                </h2>


                <p className={styles.description}>{description}</p>
                <button className={styles.button}>Read More</button>
            </div>


        </div>
    );
}