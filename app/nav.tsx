import Link from 'next/link'
import React from 'react'

export const Nav = () => {
    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'azure',
                width: '100%',
                padding: 20
            }}
        >
            <ul
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                    listStyle: 'none'
                }}
            >
                <li><Link href={'/'}>LUCE</Link></li>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/contact'}>Contacto</Link></li>
            </ul>
        </nav>
    )
}
