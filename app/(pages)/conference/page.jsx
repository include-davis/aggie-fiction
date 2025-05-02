import styles from "./page.module.scss";
import Image from "next/image";

const titleImagePath = "/conferencePageImages/titleImage.png";

export default function Conference() 
{
    return (
        <main className = {styles.page}>
            <div className = {styles.upperPage}>
                <div className = {styles.titleBlock}>
                    <div className = {styles.titleLeftBlock}>
                        <h1>San Francisco Writers Conference</h1>
                        <h2>A Gateway to the Literary World</h2>
                    </div>
                    <div className = {styles.titleImageContainer}>
                        <Image
                            src = {titleImagePath}
                            alt = {"Title Image"}
                            fill
                            sizes = "49%"
                            className = {styles.titleImage}
                        />
                    </div>
                </div>
                <div className = {styles.summaryBlock}>
                    
                </div>
            </div>
        </main>
    );
}