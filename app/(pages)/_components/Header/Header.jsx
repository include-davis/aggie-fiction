'use client'
import styles from "./Header.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
};
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}><Link href=""> <Image
                src="/logo.png"
                width={110}
                height={70}
                alt="Aggie fiction logo"
            /></Link></div>
            <div className={styles.navContents}>
                <div className={styles.dropdown}>
                    <Link href="//events" >Events</Link> <button className={styles.arrow} onClick={toggleDropdown} ><Image
                    src="/weui_arrow-outlined.svg"
                    width={12}
                    height={24}
                    alt="Picture of the arrow"
                />
                </button>
                </div>
                {dropdownOpen &&(
                <div className={styles.dropdown_contents}>
                    <Link href="/calendar">Calendar</Link>
                    <Link href="/conference">Conference</Link>
                </div>)}
                <Link href="/store">Merch Store</Link>
                <Link href="/alumni">Alumni Spotlight</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about us">About us</Link>
            </div>
        </div>
            );
}