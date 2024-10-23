import React, { useEffect, useRef } from 'react';
import styles from '../styles/Preloader.module.scss';

export const Preloader = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            // Asegúrate de que el video puede reproducirse automáticamente
            videoRef.current.play().catch((error) => {
                console.error('Error playing video:', error);
            });
            videoRef.current.playbackRate = 2.0;
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
                >
                    <source src="/LUCE_1920X1080.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};
