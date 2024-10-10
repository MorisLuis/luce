"use client"; // Asegúrate de agregar esta línea al inicio del archivo

import Link from 'next/link';
import React, { useState } from 'react';
import styles from "../../styles/Navigation.module.scss";
import { Hamburguer } from './hamburguer';

const categories = [
    { id: 1, value: "Todos" },
    { id: 2, value: "Schwung Design" },
    { id: 3, value: "Colección Globe" },
    { id: 4, value: "Candiles" },
    { id: 5, value: "Lámparas arbotante" },
];

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div className={styles.topNavigation}>
            <Hamburguer
                onClick={() => setShowMenu(!showMenu)}
            />

            {/* menu */}
            {
                showMenu &&
                <div className={styles.container}>
                    <div className={styles.luce}><Link href={'/'}>LUCE</Link></div>
                    <li className={styles.section}><Link href={'/'}>Inicio</Link></li>
                    <li className={styles.section}><Link href={'/contact'}>Contacto</Link></li>

                    <li
                        className={styles.section}
                        onMouseEnter={() => setShowDropDown(true)}
                        onMouseLeave={() => setShowDropDown(false)}
                    >
                        Categorías
                        <div style={{ position: 'relative' }}>
                            {showDropDown && (
                                <ul className={styles.dropdown}>
                                    {categories.map(category => (
                                        <li key={category.id}>
                                            <Link href={`/categories?category=${category.value}`}>
                                                {category.value}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>

                </div>
            }
        </div>
    );
};