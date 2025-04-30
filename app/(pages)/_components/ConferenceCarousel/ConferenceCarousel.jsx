import styles from "./ConferenceCarousel.module.scss";
import Image from "next/image";

const testImages = [
    "/conferenceTestImages/img1.png",
    "/conferenceTestImages/img2.png",
    "/conferenceTestImages/img3.png",
    "/conferenceTestImages/img4.png",
    "/conferenceTestImages/img5.png",
    "/conferenceTestImages/img6.png",
    "/conferenceTestImages/img7.png"
];

export default function ConferenceCarousel()
{
    const doubleImages = [...testImages, ...testImages];
    const imagesLength = testImages.length;
    
    return (
        <div className = {styles.carousel} style = {{"--num-images": imagesLength}}>
            <div className = {styles.carouselTrack}>
                {doubleImages.map((src, index) => (
                    <div key = {index} className = {styles.imageContainer}>
                        <Image
                            src = {src}
                            alt = {"Conference image"}
                            fill
                            sizes = "263px"
                            className = {styles.carouselImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}