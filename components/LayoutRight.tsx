import Image from 'next/image';
import React from 'react';
import style from '../styles/LayoutRight.module.scss';
import { Nav } from './navigation/nav';

interface LayoutRightInterface {
    content: () => React.ReactNode;
    sideBar?: () => React.ReactNode;
    bottom?: boolean;
}

export default function LayoutRight({ content, sideBar, bottom }: LayoutRightInterface) {
    return (
        <div className={style.layoutRight}>
            <div className={style.content}>
                {content()}
            </div>
            <div className={style.sidebar}>
                <div>
                    <div className={style.imageContainer}>
                        <Image
                            src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            layout="fill"
                            objectFit="container"
                        />
                    </div>
                    <div className={style.sidebarcontent}>
                        {sideBar?.()}
                    </div>
                </div>
            { bottom && <div className={style.bottomSidebar}></div> }
            </div>

            <Nav />

        </div>
    )
}
