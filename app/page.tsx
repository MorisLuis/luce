"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import React, { useEffect, useState, Suspense } from "react";
import { Preloader } from "./Preloader";
import banner from '../public/test.webp';

const LayoutRight = React.lazy(() => import("@/components/LayoutRight")); // Lazy load del LayoutRight

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
        <div className={styles.HomeBackground}>
          <div className={styles.imageContainer}>
            <Image
              src={banner}
              alt={'Imagen Land Page'}
              priority
              quality={100}
              layout="fill"
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

  return (
    <div className={styles.Home}>
      {loading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<Preloader />}>
          <LayoutRight
            sideBar={renderSideBar}
            content={renderContent}
          />
        </Suspense>
      )}
    </div>
  );
}
