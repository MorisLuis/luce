import React from 'react';

interface HamburguerInterface {
    onClick: () => void;
}

export const Hamburguer = ({
    onClick
}: HamburguerInterface) => {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    right: "5%",
                    bottom: "5%",
                    zIndex: 9999,
                    cursor: "pointer"
                }}
                onClick={onClick}
            >
                <div
                    style={{
                        width: 50,
                        height: 2,
                        borderRadius: 5,
                        backgroundColor: "black",
                        marginBottom: 5
                    }}
                ></div>
                <div
                    style={{
                        width: 50,
                        height: 2,
                        borderRadius: 5,
                        backgroundColor: "black",
                        marginBottom: 5
                    }}
                ></div>
                <div
                    style={{
                        width: 50,
                        height: 2,
                        borderRadius: 5,
                        backgroundColor: "black"
                    }}
                ></div>
            </div>
        </>
    )
}
