import React from 'react'

interface Title {
    title: string;
    styles?: React.CSSProperties
}

export const Title = ({
    title,
    styles
} : Title) => {
    return (
        <h1 className='title' style={{ ...styles}}>
            {title}
        </h1>
    )
}
