"use client"
import Link from "next/link";
import Image from "next/image";
import LayoutRight from "@/components/LayoutRight";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import { Preloader } from "./Preloader";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  const renderContent = () => {
    return (
      <>
        <div className={styles.HomeHeader}>
          <h1>La luz que define el arte de vivir.</h1>
        </div>
        <div className={styles.HomeBackground} >
          <div className={styles.imageContainer}>
            <Image
              src={`/images/armstrong-linear/Candil_schwung_armstronglinear_estudio.jpg`}
              alt={'Imagen Land Page'}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </>
    )
  };

  const renderSideBar = () => {
    return (
      <div className={styles.HomeMenu}>
        <li className={styles.section}>
          <Link href={'/'}>Inicio</Link>
        </li>
        <li className={styles.section}>
          <Link href={'/contact'}>Contacto</Link>
        </li>
        <li className={styles.section}>
          <Link href={'/categories'}>Categorias</Link>
        </li>
        <li className={styles.section}>
          <Link href={'/brands'}>Marcas</Link>
        </li>
      </div>
    )
  };

  if (loading) return <Preloader />

  return (
    <div className={styles.Home}>
      <LayoutRight
        sideBar={renderSideBar}
        content={renderContent}
      />
    </div>
  );
}
