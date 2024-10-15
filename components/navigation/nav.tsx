"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import styles from "../../styles/Navigation.module.scss";
import { Hamburguer } from './hamburguer';
import Image from 'next/image';

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
        <div className={styles.menu}>
            <Hamburguer
                onClick={() => setShowMenu(!showMenu)}
                active={showMenu}
            />

            {/* Menu */}
            {showMenu && (
                <div className={styles.menuBackground}>
                    <div className={styles.menuContainer}>
                        <div className={styles.luce}>
                            <Image
                                src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                                alt={'LUCE'}
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className={styles.sectionsContainer}>
                            <li className={styles.section}>
                                <Link href={'/'}>Inicio</Link>
                            </li>
                            <li className={styles.section}>
                                <Link href={'/contact'}>Contacto</Link>
                            </li>

                            <li
                                className={styles.section}
                                onMouseEnter={() => setShowDropDown(true)}
                                onMouseLeave={() => setShowDropDown(false)}
                            >
                                <p>Categorías</p>
                                <ul className={`${styles.dropdown} ${showDropDown ? styles.active : ""}`}>
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link href={`/categories?category=${category.value}`}>
                                                {category.value}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};