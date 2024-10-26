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
    extraStyles?: React.CSSProperties;

    secondaryDesign?: boolean;
}

export const Button = ({
    onClick,
    title,
    icon,
    iconStyles,
    extraStyles,
    secondaryDesign
}: ButtonInterface) => {

    return (
        <button
            onClick={onClick}
            className={secondaryDesign ? 'button_secondary' : 'button'}
            style={extraStyles}
        >
            <p>{title}</p>
            {
                icon &&
                <FontAwesomeIcon icon={icon} style={iconStyles}/>
            }
        </button>
    )
}
