import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'azure',
                width: '100%',
                padding:"60px 60px",
                marginTop: 100
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
                <div >
                    <li><Link href={'/'}>LUCE</Link></li>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/contact'}>Contacto</Link></li>
                </div>
            </ul>
        </nav>
    )
}
