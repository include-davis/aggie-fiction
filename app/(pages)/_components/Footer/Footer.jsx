import styles from "./Footer.module.scss";
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
    return (
      <div className={styles.Footer}>
         <Link href="/about"> <Image
      src="/logo.png"
      width={110}
      height={70}
      alt="logo"
         /></Link>
          <div className={styles.Footer_icons}>
       <p className={styles.Footer_text}>Follow Our Socials</p>
      </div>



      </div>
    );
}