"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LayoutRight from '@/components/LayoutRight';
import styles from '../styles/Home.module.scss';
import banner from '../public/images/landpage/LANDPAGE1.webp';
import banner2 from '../public/images/landpage/LANDPAGE2.webp';

export default function Home() {
  const banners = [banner, banner2]; // Lista de imágenes
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0); // Estado para la imagen actual

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [banners.length]);

  const renderContent = () => {
    return (
      <div className={styles.Home}>
        <div className={styles.HomeHeader}>
          <h1>La luz que define el arte de vivir.</h1>
        </div>

        <div className={styles.HomeBackground}>
          <div className={styles.imageContainer}>
            <Image
              src={banners[currentBannerIndex]} // Cambia dinámicamente la imagen
              alt={`Imagen Land Page ${currentBannerIndex + 1}`}
              quality={100}
              placeholder='blur'
            />
          </div>
        </div>
      </div>
    );
  };

  const renderSideBar = () => {
    return (
      <div className={styles.Home}>
        <div className={styles.HomeMenu}>
          <ul>
            <li className={styles.section}>
              <Link href={'/'}>Inicio</Link>
            </li>
            <li className={styles.section}>
              <Link href={'/contact'}>Contacto</Link>
            </li>
            <li className={styles.section}>
              <Link href={'/categories'}>Categorías</Link>
            </li>
            <li className={styles.section}>
              <Link href={'/brands'}>Marcas</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <LayoutRight
      sideBar={renderSideBar}
      content={renderContent}
    />
  );
}
