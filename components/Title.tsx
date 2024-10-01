import React from 'react'

interface Title {
    title: string;
}

export const Title = ({
    title
} : Title) => {
    return (
        <h1 className='title'>
            {title}
        </h1>
    )
}
