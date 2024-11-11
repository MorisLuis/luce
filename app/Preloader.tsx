import React, { useEffect, useRef } from 'react';
import styles from '../styles/Preloader.module.scss';

interface PreloaderInterface {
    onEnded: () => void
}

export const Preloader = ({
    onEnded
}: PreloaderInterface) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            // Asegúrate de que el video puede reproducirse automáticamente
            videoRef.current.play().catch((error) => {
                console.error('Error playing video:', error);
            });
            videoRef.current.playbackRate = 2;
        }
    }, []);

    return (
        <div className={styles.preloader}>
            <div className={styles.videoContainer}>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onEnded={onEnded}
                >
                    <source src="/LUCE_VIDEO.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};
