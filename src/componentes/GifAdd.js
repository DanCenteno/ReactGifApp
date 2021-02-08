import React, { Fragment, useState } from 'react'

export const GifAdd = ({setCategories}) => {
    
    
    const [valueinput, setValueInput] = useState('');
    
    const handleAddCategory = (e) => {
        e.preventDefault();
        if(valueinput.trim().length > 2){
        setCategories(cats => [...cats,valueinput]);
        setValueInput('');
        console.log('submit hecho');    
        }
        
    }
    
    const handleChange = (e) => {
        setValueInput(e.target.value);
        
    }
    
    return (
        <Fragment>
            <form onSubmit={handleAddCategory}>
                <input
                type="text"
                value={valueinput}
                onChange={handleChange}
                >
                </input>
            </form>
        </Fragment>
    )
}
