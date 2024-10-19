"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Hamburguer } from './hamburguer';
import Image from 'next/image';
import styles from "../../styles/Navigation.module.scss";
import { brandsData } from '@/data/brands';
import { categoriesData } from '@/data/categories';


export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropDownCategories, setShowDropDownCategories] = useState(false);
    const [showDropDownBrands, setShowDropDownBrands] = useState(false);

    const handleNavigate = () => {
        setShowMenu(false);
        setShowDropDownCategories(false);
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
                            onMouseEnter={() => setShowDropDownCategories(true)}
                            onMouseLeave={() => setShowDropDownCategories(false)}
                        >
                            <p>Categorías</p>
                            <ul className={`${styles.dropdown} ${showDropDownCategories ? styles.active : ""}`}>
                                {categoriesData.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            href={category.name === "Todos" ? '/categories' : `/categories/${category.name}`}
                                            onClick={handleNavigate}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li
                            className={`${styles.section} ${showMenu ? styles.active : ''}`}
                            onMouseEnter={() => setShowDropDownBrands(true)}
                            onMouseLeave={() => setShowDropDownBrands(false)}
                        >
                            <p>Marcas</p>
                            <ul className={`${styles.dropdown} ${showDropDownBrands ? styles.active : ""}`}>
                                {brandsData.map((brand) => (
                                    <li key={brand.id}>
                                        <Link
                                            href={brand.name === "Todos" ? '/brands' : `/brands/${brand.name}`}
                                            onClick={handleNavigate}
                                        >
                                            {brand.name}
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
