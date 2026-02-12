import styles from "./Footer.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

async function getJoinLink() {
  try {
    const res = await fetch(
      // eslint-disable-next-line no-undef
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/general-info?_published=true`,
      { cache: "no-store" }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    const parsedData = data.body[0].join_link;
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch join link: ${e.message}`);
    return "/";
  }
}

export default async function Footer() {
    const joinLink = await getJoinLink();
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
                    <a href={joinLink}>
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