import Image from 'next/image';
import React from 'react';
import { Nav } from './navigation/nav';
import style from '../styles/LayoutRight.module.scss';

interface LayoutRightInterface {
    content: () => React.ReactNode;
    sideBar?: () => React.ReactNode;
    bottom?: boolean;

    secondaryDesign?: boolean;
}

export default function LayoutRight({ content, sideBar, bottom, secondaryDesign }: LayoutRightInterface) {
    return (
        <div className={style.layoutRight}>
            <div className={style.sidebarMobil}> {secondaryDesign && sideBar?.()} </div> {/* This is how we show sidebar in movil */}

            <div className={secondaryDesign ? style.content__secondaryDesign : style.content}>
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
                            className={style.imageContainerWeb}
                        />
                        <Image
                            src={`/logos/HORIZONTAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            layout="fill"
                            objectFit="container"
                            className={style.imageContainerMovil}
                        />
                    </div>
                    <div className={style.sidebarcontent}>
                        {sideBar?.()}
                    </div>
                </div>
                {bottom && <div className={style.bottomSidebar}></div>}
            </div>
            <Nav />
        </div>
    )
}
