"use client"
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Preloader } from './Preloader';
import LayoutRight from '@/components/LayoutRight';
import banner from '../public/test.webp';

export default function Home() {
  const [loading, setLoading] = useState(true);

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
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Preloader onEnded={() => setLoading(false)}/>
        </motion.div>
      ) : (
        <Suspense fallback={<Preloader onEnded={() => setLoading(false)}/>}>
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LayoutRight
              sideBar={renderSideBar}
              content={renderContent}
            />
          </motion.div>
        </Suspense>
      )}
    </AnimatePresence>
  </div>
);
}