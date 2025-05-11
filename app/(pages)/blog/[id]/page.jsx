"use client"
import styles from "./page.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import Button from "../../_components/Button/Button"
import { usePathname } from 'next/navigation'
export default function Page() {
    const pathname = usePathname()
    return <div>Post: {pathname}
        <div className={styles.TopButtons}>
            <button style={{border: "none"}}>
                <Link href="#"><Image
                    src="/top_arrow.svg"
                    width={44}
                    height={52}
                    alt="picture of the arrow"/></Link>
            </button>
            <div className={styles.button}>Main Blog Page</div>
        </div>
        <div className={styles.page}>
            <div className={styles.image}>
                <Image
                    src="/blog image.jpg"
                    alt="image"
                    width={1312}
                    height={400}/>
            </div>
        <div className={styles.header}>
            <h1>Ten Mistakes Amateur Writers Make</h1>
        </div>
        <div className={styles.subheader}
             style={{alignItems:"flex-start"}}>
            <p style={{fontWeight: "bold"}}>subheader:</p>
            <p>content</p>
        </div>
        <div className={styles.blogcontent}>
            <p className={styles.lineseparator}></p>
            <p className={styles.content}>content</p>
            <div className={styles.category}>
                <p>Categories:</p>
                <Button route="/writing style" color="light">
                    Writing Tips
                </Button>
            </div>
            <p className={styles.lineseparator}></p>
        </div>
            <div className={styles.AboutAuthor}>
                <h2>About the Author</h2>
                <div className={styles.AuthorContent}>
                    <Image
                        src="/Author_image.jpg"
                        alt="image of author"
                        width={372}
                        height={372} />
                    <div className={styles.AuthorInfor}>
                    <h2>Author Name</h2>
                    <p>introduction</p>
                        </div>
                </div>
            </div>
            <div className={styles.EndButtons}>
                <div className={styles.button}>
                    Next entry
                </div>
                <button style={{border: "none"}}>
                    <Link href="#"><Image
                        src="/bottom_arrow.svg"
                        width={44}
                        height={52}
                        alt="picture of the arrow"/></Link>
                </button>
            </div>
        </div>
    </div>


}
// 运行时要进入blog page, blog/article