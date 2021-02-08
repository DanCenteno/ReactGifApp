import { useEffect, useState } from "react"
import { getGif } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
      //cuando el componente es renderizado por primera vez  
    
    useEffect(()=>{
        getGif(category).then(imgs => 
            setTimeout(() => {
                console.log(imgs);
                setState({
                    data:imgs,
                    loading:false
                })
            }, 3000));
    },[category])
        
    return state;//{data:[], loading: true};
}
