
import styles from "./AlumniPageCard.module.scss";

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
            <img src={imageUrl} alt={`${name} photo`} className={styles.image} />

            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.role}>
                {role}, {years}
            </h3>

            <p className={styles.description}>{description}</p>

            <div className={styles.icons}>
                {instagramIconUrl && (
                    <img src={instagramIconUrl} alt="Instagram Icon" className={styles.icon} />
                )}
                {linkedinIconUrl && (
                    <img src={linkedinIconUrl} alt="LinkedIn Icon" className={styles.icon} />
                )}
            </div>

            <button className={styles.button}>Read More</button>
        </div>
    );
}