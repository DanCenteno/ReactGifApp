import React from 'react'

export const GifItem = ({title,url}) => {
    return (
        <div className="animate__animated animate__bounce ">
            
                <li>{title}</li>
                <img src={url}/>
            
        </div>
    )
}
