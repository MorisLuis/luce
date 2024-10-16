import React from 'react';
import { IconProp, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
config.autoAddCss = false;

interface ButtonInterface {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    title: string;
    icon?: IconProp;
    iconStyles?: React.CSSProperties;
}

export const Button = ({
    onClick,
    title,
    icon,
    iconStyles
}: ButtonInterface) => {
    return (
        <button
            onClick={onClick}
            className='button'
        >
            <p>{title}</p>
            {
                icon &&
                <FontAwesomeIcon icon={icon} style={iconStyles}/>
            }
        </button>
    )
}
