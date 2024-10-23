"use client"
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Preloader } from './Preloader';
import LayoutRight from '@/components/LayoutRight';
import banner from '../public/test.webp';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

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
    );
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
          <Link href={'/categories'}>Categorías</Link>
        </li>
        <li className={styles.section}>
          <Link href={'/brands'}>Marcas</Link>
        </li>
      </div>
    );
  };

  return (
    <div className={styles.Home}>
      <AnimatePresence>
        {loading ? (
          // Anima la salida del Preloader
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Preloader />
          </motion.div>
        ) : (
          // Anima la entrada del contenido de la página
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<Preloader />}>
              <LayoutRight sideBar={renderSideBar} content={renderContent} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
