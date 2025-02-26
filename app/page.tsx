"use client";

import Link from 'next/link';
import LayoutRight from '@/components/LayoutRight';
import Carousel from '@/components/carrusel';
import styles from '../styles/Home.module.scss';

export default function Home() {

  const renderContent = () => {
    return (
      <div className={styles.Home}>
        <Carousel
          images={[
            'images/landpage/LANDPAGE1.webp',
            'images/landpage/LANDPAGE3.webp',
            'images/landpage/LANDPAGE4.webp',
            'images/landpage/LANDPAGE2.webp',
          ]}
        />
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
              <Link href={'/categories'}>Categorías</Link>
            </li>
            <li className={styles.section}>
              <Link href={'/brands'}>Marcas</Link>
            </li>
            <li className={styles.section}>
              <Link href={'/contact'}>Contacto</Link>
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
