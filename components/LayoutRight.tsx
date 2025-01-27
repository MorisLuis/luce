import Image from 'next/image';
import React from 'react';
import { Nav } from './navigation/nav';
import Link from 'next/link';
import style from '../styles/LayoutRight.module.scss';

interface LayoutRightInterface {
    content: () => React.ReactNode;
    sideBar?: () => React.ReactNode;
    bottom?: boolean;
    secondaryDesign?: boolean;
}

export default function LayoutRight({
    content,
    sideBar,
    bottom,
    secondaryDesign
}: LayoutRightInterface) {

    return (
        <div className={style.layoutRight}>
            <div className={style.sidebarMobil}> {secondaryDesign && sideBar?.()} </div> {/* This is how we show sidebar in movil */}

            <div className={style.sidebarlogomobil}>
                <Link href={"/"} className={style.sidebar_image}>
                    <Image
                        src={`/logos/HORIZONTAL_COLOR PRINCIPAL.svg`}
                        alt={'LUCE'}
                        layout="responsive"
                        width={200}
                        height={200}
                        className={style.imageContainerMovil}
                    />
                </Link>
            </div>

            <div className={secondaryDesign ? style.content__secondaryDesign : style.content}>
                {content()}
            </div>

            <div className={style.sidebar}>
                <Link href={"/"} className={style.sidebar_image}>
                    <Image
                        src={`/logos/HORIZONTAL_COLOR PRINCIPAL.svg`}
                        alt={'LUCE'}
                        layout="responsive"
                        width={200}
                        height={100}
                        className={style.imageContainerWeb}
                    />
                </Link>
                <div className={style.sidebar_content}>
                    {sideBar?.()}
                </div>

                {bottom && <div className={style.sidebar_bottom}></div>}
            </div>

            <Nav />
        </div>
    )
}
