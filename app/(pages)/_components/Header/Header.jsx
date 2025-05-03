import styles from "./Header.module.scss";
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
    return (
        <ul className={styles.navbar}>
            <li><Image
      src="/logo.png"
      width={110}
      height={70}
      alt="Aggie fiction logo"
    /></li>
            <li><Link href="/about us">About us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/alumni">Alumni Spotlight</Link></li>
            <li><Link href="/store">Merch Store</Link></li>
            <li className={styles.dropdown}>
                <Link href="//events"><i className={styles.arrowdown}> </i> </Link>
                <div className={styles.dropdown_contents}>
                    <Link href="/calendar">Calendar</Link>
                    <Link href="/conference">Conference</Link>
                </div>
            </li>

        </ul>
    );
}