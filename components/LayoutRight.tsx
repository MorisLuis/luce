import Image from 'next/image';
import React from 'react';
import style from '../styles/LayoutRight.module.scss';

interface LayoutRightInterface {
    content: () => React.ReactNode;  // Función que retorna un ReactNode
    sideBar: () => React.ReactNode;  // Función que retorna un ReactNode
}

export default function LayoutRight({ content, sideBar }: LayoutRightInterface) {
    return (
        <div className={style.layoutRight}>

            <div className={style.content}>{content()}</div>

            <div className={style.sidebar}>
                <div className={style.imageContainer}>
                    <Image
                        src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                        alt={'LUCE'}
                        layout="fill"
                        objectFit="container"
                    />
                </div>
                <div className={style.sidebarcontent}>
                    {sideBar()}
                </div>
            </div>
        </div>
    )
}
