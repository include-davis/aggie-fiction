import styles from "./Footer.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

export default function Footer() {
    return (
      <div className={styles.footer}>
          <div className={styles.logo}>
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={110}
                    height={70}
                    alt="logo"
                />
            </Link>
            </div>
            <div className={styles.footer_content}>
                <p className={styles.footer_text}>Follow Our Socials</p>
                <div className={styles.icons}>
                    <a href="mailto:aggiefictionucd@gmail.com">
                        <MdEmail className={styles.icon} />
                    </a>
                    <a href="https://discord.gg/bBTTbxcjnk">
                        <FaDiscord className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/aggiefiction">
                        <div className={styles.icon}>
                            <Image
                                src="/lets-icons_insta.svg"
                                fill
                                alt="inst icon"
                            />
                        </div>
                    </a>
                </div>
            </div>
      </div>
    );
}
