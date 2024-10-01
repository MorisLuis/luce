import React from 'react';

interface ButtonInterface {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    title: string;
}

export const Button = ({
    onClick,
    title
}: ButtonInterface) => {
    return (
        <button
            onClick={onClick}
            className='button'
        >
            {title}
        </button>
    )
}
