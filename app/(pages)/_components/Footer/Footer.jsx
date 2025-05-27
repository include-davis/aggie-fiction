import styles from "./Footer.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
    return (
      <div className={styles.Footer}>
          <div className={styles.logo}>
         <Link href="/"> <Image
      src="/logo.png"
      width={110}
      height={70}
      alt="logo"
         /></Link>
              </div>
          <div className={styles.Footer_icons}>
       <p className={styles.Footer_text}>Follow Our Socials</p>
              <div className={styles.icons}>
                  <a href="#"><MdEmail className={styles.icon} /></a>
                  <a href="#"><FaDiscord className={styles.icon} /></a>
                  <a href="#">
                      <Image
                          src="/lets-icons_insta.svg"
                          width={39}
                          height={39}
                          alt="inst icon"/>
                  </a>
                  </div>
      </div>


      </div>
    );
}