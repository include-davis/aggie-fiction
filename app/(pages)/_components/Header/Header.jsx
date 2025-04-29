import styles from "./Header.module.scss";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.dropdown}>
                <button className={styles.button}>
                    Events
                    <div className={styles.arrow}>^</div>  {/* 添加符号 */}
                </button>
                <div className={styles.dropdown_contents}>
                    <a href="#">Calendar</a>
                    <a href="#">Conference</a>
                </div>
            </div>
            <p>Merch Store</p>
            <p>Alumni Spotlight</p>
            <p>Blog</p>
            <p>About Us</p>
        </div>
    );
}