import React from 'react'
import style from '../../styles/Skeletons.module.scss';
import NavSkeleton from './NavSkeleton';

interface LayoutRightInterface {
    contentSkeleton: () => React.ReactNode;
    sideBarSkeleton?: () => React.ReactNode;
}

export default function LayoutRightSkeleton({ contentSkeleton, sideBarSkeleton }: LayoutRightInterface) {
    return (
        <div className={style.layoutRightSkeleton}>

            <div className={style.sidebarlogomobil}>
                <div className={style.sidebar_image}>
                    <div className={style.imageContainerMovil}></div>
                </div>
            </div>

            <div className={style.content}>
                {contentSkeleton()}
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
