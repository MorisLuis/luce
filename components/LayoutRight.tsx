import Image from 'next/image';
import React from 'react';
import { Nav } from './navigation/nav';
import Link from 'next/link';
import style from '../styles/LayoutRight.module.scss';

interface LayoutRightInterface {
    content: () => React.ReactNode;
    sideBar?: () => React.ReactNode;
    contentVisible?: boolean;
}

export default function LayoutRight({
    content,
    sideBar,
    contentVisible
}: LayoutRightInterface) {

    return (
        <div className={style.layoutRight}>

            <div className={style.sidebarlogomobil}>
                <Link href={"/"} className={style.sidebar_image}>
                    <Image
                        src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                        alt={'LUCE'}
                        layout="responsive"
                        width={200}
                        height={200}
                        className={style.imageContainerMovil}
                    />
                </Link>
            </div>

            <div className={style.content}>
                {content()}
            </div>

            <div className={style.sidebar}>

                <div className={style.sidebar_image}>
                    <Link href={"/"}>
                        <Image
                            src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            layout="responsive"
                            width={200}
                            height={100}
                            className={style.imageDesktop}
                        />
                        <Image
                            src={`/logos/HORIZONTAL_COLOR PRINCIPAL.svg`}
                            alt={'LUCE'}
                            layout="responsive"
                            width={200}
                            height={100}
                            className={style.imageMobile}
                        />
                    </Link>
                </div>

                <div className={contentVisible ? style.sidebar_content : `${style.sidebar_content} ${style.sidebar_hidden}`}>
                    {sideBar?.()}
                </div>
                <div className={style.sidebar_bottom}>
                </div>
            </div>

            <Nav />
        </div>
    )
}
