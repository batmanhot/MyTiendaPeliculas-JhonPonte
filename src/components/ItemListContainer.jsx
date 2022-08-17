import React, { Fragment, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { data } from './DatosApi';
import { useParams } from 'react-router-dom';

import { db } from "./dbFirestore"
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer =  (props) => {

const [ListaProductos, setListaProductos] = useState([]);
const [Loading, setLoading] = useState(true);
const {idCategoria} = useParams();

console.log('ItemListaContainer')
console.log(idCategoria)

// useEffect (()=> {
//         console.log("Soy UseEfecct");
//         data
//         .then((res)=> 
//          {
//                  if(!idCategoria){
//                          setListaProductos(res)
//                  }else{
//                          setListaProductos(res.filter((prod) => prod.category === idCategoria))
//                  }
//          })    
//         .catch((error)=> console.log(error))
//         .finally(()=>setLoading(false))
//      },[idCategoria])


useEffect(()=>{

        //Evaluo si existe la categoria o no 
        const q = idCategoria
        ? query(collection(db, "items-ecommerce"), where("category", "==", idCategoria)) 
        : collection(db, "items-ecommerce")

        //Hago el pedido a firebase
        getDocs(q)
        .then((result)=>{
          const lista = result.docs.map((product)=> {
            return{
              id: product.id,
              ...product.data()
            }
          })
          setListaProductos(lista)
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
       }, [idCategoria])

       return (  
        <Fragment>
                <center><h2>{props.persona}</h2> </center>
                <div>

                {Loading ? <p>Cargando ....</p> : <ItemList ListaProductos={ListaProductos}/>}
                
                </div>
        </Fragment>                
        );
}
 
export default ItemListContainer;