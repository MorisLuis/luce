import React from 'react';
import { IconProp, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
config.autoAddCss = false;

interface ButtonInterface {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    title: string;
    titleLoading?: string;
    icon?: IconProp;
    iconStyles?: React.CSSProperties;
    extraStyles?: React.CSSProperties;
    secondary?: boolean;
    disabled?: boolean
    loading?: boolean
}

export const Button = ({
    onClick,
    title,
    titleLoading,
    icon,
    iconStyles,
    extraStyles,
    secondary,
    disabled,
    loading
}: ButtonInterface) => {

    return (
        <button
            onClick={onClick}
            className={`button ${disabled ? 'disabled' : ''} ${secondary ? 'secondary' : ''}`.trim()}
            style={extraStyles}
            disabled={disabled}
        >
            {
                loading ? <p>{titleLoading}</p> : <p>{title}</p>
            }
            {
                icon &&
                <FontAwesomeIcon icon={icon} style={iconStyles} />
            }
        </button>
    )
}
