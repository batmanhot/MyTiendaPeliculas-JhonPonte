import React, { Fragment, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { data } from './DatosApi';
import { useParams } from 'react-router-dom';


const ItemListContainer =  (props) => {

const [ListaProductos, setListaProductos] = useState([]);
const [Loading, setLoading] = useState(true);
const {idCategoria} = useParams();

console.log('ItemListaContainer')
console.log(idCategoria)

useEffect (()=> {
        console.log("Soy UseEfecct");
        data
        .then((res)=> 
         {
                 if(!idCategoria){
                         setListaProductos(res)
                 }else{
                         setListaProductos(res.filter((prod) => prod.category === idCategoria))
                 }
         })    
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
     },[idCategoria])
//},[])


console.log(ListaProductos);


       return (  
        <Fragment>
                <center><h2>{props.persona}</h2> </center>
                <div>

                {Loading ? <p>Cargando ....</p> : <ItemList ListaProductos={ListaProductos}/>}

                {/* {ListaProductos.map((productos)=> <p key={productos.id}>{productos.name}</p>)} */}
                
                </div>
        </Fragment>                
        );
}
 
export default ItemListContainer;


// {/* <ItemCount  pedidoinicio = {1} stockdisponible = {15} onAdd={onAdd}/>  */}