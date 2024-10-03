import Link from 'next/link'
import React from 'react'
import styles from "../styles/Navigation.module.scss";

export const Footer = () => {
    return (
        <nav className={styles.bottomNavigation}>
            <ul className={styles.container}>
                <div>
                    <li><Link href={'/'}>LUCE</Link></li>
                </div>

                <div className={styles.column}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/contact'}>Contacto</Link></li>
                </div>
            </ul>
        </nav>
    )
}
