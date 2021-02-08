import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';
//import { getGif, GetGifs } from '../helpers/GetGifs';

export const GifImage = ({category}) => {
    
   // const [images, setImages] = useState([]);
   const {data,loading} = useFetchGifs(category);
    console.log(loading);
 
    
    
    
    
   // getGif();
    
    return (
        <div>
           
           {
              <li>{category}</li>
              
           }      
           
           {loading ? 'Cargando...' : 'Data cargada'}
           
           {
               data.map((img) => {
                  return <GifItem key={img.id} {...img}/>
              })
            }      
            
        </div>
    )
}
