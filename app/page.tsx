import { Title } from "@/components/Title";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Title title="LUCE" />

      <div className={styles.imageContainer}>
        <Image
          src={`/images/armstrong-linear/Candil_schwung_armstronglinear_estudio.jpg`}
          alt={'Imagen Land Page'}
          layout="fill" // Esto permite que la imagen ocupe todo el contenedor
          objectFit="cover" // Esto mantendrá la proporción de la imagen
        />
      </div>
    </div>
  );
}
