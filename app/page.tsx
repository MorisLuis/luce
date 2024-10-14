import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/armstrong-linear/Candil_schwung_armstronglinear_estudio.jpg`}
          alt={'Imagen Land Page'}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
