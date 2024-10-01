import React from 'react'

interface Subtitle {
    title: string;
}

export const Subtitle = ({
    title
} : Subtitle) => {
    return (
        <h1 className='subtitle'>
            {title}
        </h1>
    )
}
