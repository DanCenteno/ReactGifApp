import React, { Fragment, useState } from 'react'
import { GifAdd } from './componentes/GifAdd';
import { GifImage } from './componentes/GifImage';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Aries','Tauro','Geminis','Cancer']);
    
     
    const cat = 'Leo';
     
    const handleAdd= () => {
        
        setCategories([...categories,'cat']);
        
    }
     
    return (
        
        <Fragment>
            <h2>GifExpert</h2>
            <hr/>
           <GifAdd setCategories={setCategories}/>
           
            {
            categories.map(category => {
                return <GifImage key={category} category={category}/>
                //return <li key={category}>{category}</li>
            })
            
            }
        </Fragment>
    )
}
