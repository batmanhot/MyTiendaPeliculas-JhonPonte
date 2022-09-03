import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { data } from "./DatosApi";
import ItemDetail from "./ItemDetail";

import { db } from "./dbFirestore"
import { getDoc, collection, doc, } from "firebase/firestore";
import LoadingSpinner from "./LoadingSpinner";



const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const [loading, setloading] = useState(true)
    const { id } = useParams()

    console.log('Item '+id)

    // useEffect(()=>{
    //     data
    //     .then((res) => setproducto(res.find((item) => item.id === id)))
    //     .catch((error) => console.log(error))
    //     .finally( ()=> setloading(false))
    // },[])

    useEffect(()=>{

        //Le decimos nuestra base de datos y en que coleccion esta
        const coleccionProductos = collection(db, "items-ecommerce")

        //La referencia de que tiene q traer (id)
        const referenciaDoc = doc(coleccionProductos, id)
        //traemos un solo documento
        getDoc(referenciaDoc)        
        .then((result)=>{      

               setproducto({
                id:result.id,
               ...result.data()             
          })
        })    
        .catch((error)=> console.log(error))
        .finally(()=> setloading(false))
     },[id])


    console.log(producto);

    return(    
        <div>
         {loading ? <LoadingSpinner />  : <ItemDetail producto={producto}/>}
        </div> 
    );
}
 
export default ItemDetailContainer;