import React from 'react';

interface ButtonInterface {
    onClick: (() => void) | ((e: any) => Promise<void>)
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
