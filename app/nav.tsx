import Link from 'next/link'
import React from 'react'
import styles from "../styles/Navigation.module.scss";

export const Nav = () => {
    return (
        <nav className={styles.topNavigation}>
            <ul className={styles.container}>
                <li><Link href={'/'}>LUCE</Link></li>
                <li><Link href={'/'}>Inicio</Link></li>
                <li><Link href={'/categories'}>Categorias</Link></li>
                <li><Link href={'/contact'}>Contacto</Link></li>
            </ul>
        </nav>
    )
}
