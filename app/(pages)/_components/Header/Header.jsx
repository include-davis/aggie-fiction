'use client'
import styles from "./Header.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
};

    const handleClick = () => {
        if (dropdownOpen) {
            toggleDropdown();
        }
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}><Link href="/"> <Image
                src="/logo.png"
                width={110}
                height={70}
                alt="Aggie fiction logo"
            /></Link></div>
            <div className={styles.navContents}>
                <div className={styles.dropdown}>
                    <a onClick={toggleDropdown}>Events</a>
                    <button className={styles.arrow} onClick={toggleDropdown} ><Image
                    src="/weui_arrow-outlined.svg"
                    width={24}
                    height={24}
                    alt="Picture of the arrow"
                    className={dropdownOpen ? styles.arrowFlipped : ''}
                />
                </button>
                </div>
                {dropdownOpen &&(
                    <div className={styles.dropdown_contents}>
                        <Link href="/events" onClick={handleClick}>All Events</Link>
                        <Link href="/calendar" onClick={handleClick}>Calendar</Link>
                        <Link href="/conference" onClick={handleClick}>Conference</Link>
                    </div>)}
                <Link href="/store" onClick={handleClick}>Merch Store</Link>
                <Link href="/alumni" onClick={handleClick}>Alumni Spotlight</Link>
                <Link href="/blog" onClick={handleClick}>Blog</Link>
                <Link href="/about-us" onClick={handleClick}>About us</Link>
            </div>
        </div>
            );
}