import styles from "./Footer.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
export default function Footer() {
    return (
      <div className={styles.Footer}>
         <Link href=""> <Image
      src="/logo.png"
      width={110}
      height={70}
      alt="logo"
         /></Link>
          <div className={styles.Footer_icons}>
       <p className={styles.Footer_text}>Follow Our Socials</p>
              <div className={styles.icons}>
                  <MdEmail className={styles.icon} />
                  <FaDiscord className={styles.icon} />
                  <CiInstagram className={styles.icon} /></div>
      </div>


      </div>
    );
}