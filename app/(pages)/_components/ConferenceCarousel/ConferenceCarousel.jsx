import styles from "./ConferenceCarousel.module.scss";
import Image from "next/image";

const imagesLength = 19;
const testImages = Array.from(
    {length: imagesLength},
    (_, index) => `/conferenceCarouselImages/img${index + 1}.png`
);

export default function ConferenceCarousel()
{
    const doubleImages = [...testImages, ...testImages];
    
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