import styles from "./page.module.scss";
import Image from 'next/image';

export default function About() {
    return (
      <main>
        <Image
        src= "public/HomeCarousel/img/img2.png"
        width={1312}
        height={400}
        alt= "notebook"
        />
        <h1>Title</h1>
        <p1>Description</p1> 
      </main>
    );
  }