import React from 'react'
import NavSkeleton from './NavSkeleton';
import style from '../../styles/Skeletons.module.scss';

interface LayoutRightInterface {
    contentSkeleton?: () => React.ReactNode;
    sideBarSkeleton?: () => React.ReactNode;
    secondaryDesign?: boolean;
}

export default function LayoutRightSkeleton({ contentSkeleton, sideBarSkeleton, secondaryDesign }: LayoutRightInterface) {
    return (
        <div className={style.layoutRightSkeleton}>
            <div className={style.sidebarMobil}> {secondaryDesign && sideBarSkeleton?.()} </div> {/* This is how we show sidebar in movil */}

            <div className={style.sidebarlogomobil}>
                <div className={style.sidebar_image}>
                    <div className={style.imageContainerMovil}></div>
                </div>
            </div>

            <div className={secondaryDesign ? style.content__secondaryDesign : style.content}>
                {contentSkeleton?.()}
            </div>

            <div className={style.sidebar}>
                <div className={style.sidebar_image}>
                    <div className={style.imageContainerWeb}></div>
                </div>
                <div className={style.sidebar_content}>
                    {sideBarSkeleton?.()}
                </div>
            </div>

            <NavSkeleton />
        </div>
    )
}
