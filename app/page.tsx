"use client"
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LayoutRight from '@/components/LayoutRight';
import banner from '../public/test.webp';

export default function Home() {

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
              fill
            />
          </div>
        </div>
      </>
    );
  };

  const renderSideBar = () => {
    return (
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
    );
  };


  return (
    <div className={styles.Home}>
      <LayoutRight
        sideBar={renderSideBar}
        content={renderContent}
      />
    </div>
  );
}