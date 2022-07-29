import React,{ useEffect, useState } from "react";
import { data } from "./DatosApi";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        data
        .then((res) => setproducto(res.find((item) => item.id === "6")))
        .catch((error) => console.log(error))
        .finally( ()=> setloading(false))
    },[])

    console.log(producto);

    return(    
        <div>
         {loading ? <p> Loading </p>  : <ItemDetail producto={producto}/>}         
        </div> 
    );
}
 
export default ItemDetailContainer;