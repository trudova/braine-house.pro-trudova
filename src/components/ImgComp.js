import React from 'react'

export default function ImgComp({src}) {
    let imgStyles={
        width: 100 +"%",
        height:"auto"
    }
    return (
       <img src={src} alt="slide-letter" style={imgStyles}></img>
    )
}
