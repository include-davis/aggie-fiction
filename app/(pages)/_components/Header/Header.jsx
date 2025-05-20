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
            <div className={styles.logo}><a href="#"> <Image
                src="/logo.png"
                width={110}
                height={70}
                alt="Aggie fiction logo"
            /></a></div>
            <div className={styles.navContents}>
                <div className={styles.dropdown}>
                    <a href="//events" >Events</a> <button className={styles.arrow} onClick={toggleDropdown} ><Image
                    src="/weui_arrow-outlined.svg"
                    width={12}
                    height={24}
                    alt="Picture of the arrow"
                />
                </button>
                </div>
                {dropdownOpen &&(
                    <div className={styles.dropdown_contents}>
                        <a href="/calendar">Calendar</a>
                        <a href="/conference">Conference</a>
                    </div>)}
                <a href="/store">Merch Store</a>
                <a href="/alumni">Alumni Spotlight</a>
                <a href="/blog">Blog</a>
                <a href="/about us">About us</a>
            </div>
        </div>
            );
}