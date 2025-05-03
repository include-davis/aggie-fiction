import styles from "./Header.module.scss";
import Link from 'next/link'
export default function Header() {
    return (
        <ul className={styles.navbar}>
            <li className={styles.dropdown}>
                <Link href="//events">Events</Link>
                <div className={styles.dropdown_contents}>
                    <Link href="/calendar">Calendar</Link>
                    <Link href="/conference">Conference</Link>
                </div>
            </li>
            <li><Link href="/store">Merch Store</Link></li>
            <li><Link href="/alumni">Alumni Spotlight</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about us">About us</Link></li>
        </ul>
    );
}