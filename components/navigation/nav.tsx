"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Hamburguer } from './hamburguer';
import Image from 'next/image';
import { brandsData } from '@/data/brands';
import { categoriesData } from '@/data/categories';
import styles from "../../styles/Navigation.module.scss";


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

            {showMenu && <div className={styles.menuBackground} onClick={() => setShowMenu(!showMenu)}></div>}

            {/* Menu */}
            <div className={`${styles.menuContent} ${showMenu ? styles.active : ''}`}>

                <div className={styles.menuContainer}>
                    <div className={styles.luce}>
                        <Link href={"/"} className={styles.luce__image}>
                            <Image
                                src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                                alt={'LUCE'}
                                layout="responsive"
                                width={200}
                                height={100}
                            />
                        </Link>
                    </div>

                    <div className={`${styles.sectionsContainer}`}>
                        <li className={`${styles.section} ${showMenu ? styles.active : ''}`}>
                            <Link href={'/'} onClick={handleNavigate}>Inicio</Link>
                        </li>

                        <li
                            className={`${styles.section} ${showMenu ? styles.active : ''}`}
                            onMouseEnter={() => setShowDropDownCategories(true)}
                            onMouseLeave={() => setShowDropDownCategories(false)}
                        >
                            <Link href={"/categories"}>Categorías</Link>
                            <ul className={`${styles.dropdown} ${showDropDownCategories ? styles.active : ""}`}>
                                {categoriesData.slice(1).map((category) => (
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
                            <Link href={"/brands"}>Marcas</Link>
                            <ul className={`${styles.dropdown} ${showDropDownBrands ? styles.active : ""}`}>
                                {brandsData.slice(1).map((brand) => (
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

                        <li className={`${styles.section} ${showMenu ? styles.active : ''}`}>
                            <Link href={'/contact'} onClick={handleNavigate}>Contacto</Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};
