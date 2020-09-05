import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div>

            </div>
    <h4>{subtitle}</h4>
    {children}
        </div>
    )
}
