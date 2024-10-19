"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Hamburguer } from './hamburguer';
import Image from 'next/image';
import styles from "../../styles/Navigation.module.scss";

const categories = [
    { id: 1, value: "Todos" },
    { id: 2, value: "Schwung Design" },
    { id: 3, value: "Colección Globe" },
    { id: 4, value: "Candiles" },
    { id: 5, value: "Lámparas arbotante" },
];

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const handleNavigate = () => {
        setShowMenu(false);
        setShowDropDown(false);
    };

    return (
        <div className={styles.menu}>
            <Hamburguer
                onClick={() => setShowMenu(!showMenu)}
                active={showMenu}
            />

            {/* Menu */}
            <div className={`${styles.menuBackground} ${showMenu ? styles.active : ''}`}>
                <div className={styles.menuContainer}>
                    <div className={styles.luce}>
                        <Image
                            src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            width={100}
                            height={100}
                        />
                    </div>

                    <div className={`${styles.sectionsContainer}`}>
                        <li className={`${styles.section} ${showMenu ? styles.active : ''}`}>
                            <Link href={'/'} onClick={handleNavigate}>Inicio</Link>
                        </li>
                        <li className={`${styles.section} ${showMenu ? styles.active : ''}`}>
                            <Link href={'/contact'} onClick={handleNavigate}>Contacto</Link>
                        </li>

                        <li
                            className={`${styles.section} ${showMenu ? styles.active : ''}`}
                            onMouseEnter={() => setShowDropDown(true)}
                            onMouseLeave={() => setShowDropDown(false)}
                        >
                            <p>Categorías</p>
                            <ul className={`${styles.dropdown} ${showDropDown ? styles.active : ""}`}>
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            href={category.value === "Todos" ? '/categories' : `/categories/${category.value}`}
                                            onClick={handleNavigate}
                                        >
                                            {category.value}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};
