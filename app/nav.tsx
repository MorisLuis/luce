"use client"; // Asegúrate de agregar esta línea al inicio del archivo

import Link from 'next/link';
import React, { useState } from 'react';
import styles from "../styles/Navigation.module.scss";

const categories = [
    { id: 1, value: "Todos" },
    { id: 2, value: "Schwung Design" },
    { id: 3, value: "Colección Globe" },
    { id: 4, value: "Candiles" },
    { id: 5, value: "Lámparas arbotante" },
];

export const Nav = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <nav className={styles.topNavigation}>
            <ul className={styles.container}>
                <li><Link href={'/'}>LUCE</Link></li>
                <li><Link href={'/'}>Inicio</Link></li>
                <li 
                    onMouseEnter={() => setShowDropDown(true)} 
                    onMouseLeave={() => setShowDropDown(false)}
                >
                    <span>Categorías</span>
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
                </li>
                <li><Link href={'/contact'}>Contacto</Link></li>
            </ul>
        </nav>
    );
}
