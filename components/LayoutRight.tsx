import Image from 'next/image';
import React from 'react';
import { Nav } from './navigation/nav';
import style from '../styles/LayoutRight.module.scss';
import Link from 'next/link';

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

            <div className={style.sidebarlogomobil}>
                <div className={style.sidebar_image}>
                    <Link href={"/"}>
                        <Image
                            src={`/logos/HORIZONTAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            fill
                            className={style.imageContainerMovil}
                        />
                    </Link>
                </div>
            </div>

            <div className={secondaryDesign ? style.content__secondaryDesign : style.content}>
                {content()}
            </div>

            <div className={style.sidebar}>
                <div className={style.sidebar_image}>
                    <Link href={"/"}>
                        <Image
                            src={`/logos/HORIZONTAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            fill
                            className={style.imageContainerWeb}
                        />
                    </Link>
                </div>
                <div className={style.sidebar_content}>
                    {sideBar?.()}
                </div>
                {bottom && <div className={style.sidebar_bottom}></div>}
            </div>
            <Nav />
        </div>
    )
}
