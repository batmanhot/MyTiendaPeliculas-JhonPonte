import React, { Fragment, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { data } from './DatosApi';

const ItemListContainer =  (props) => {

const [ListaProductos, setListaProductos] = useState([]);
const [Loading, setLoading] = useState(true);

useEffect (()=> {
        console.log("Soy UseEfecct");
        data
        .then((res)=>setListaProductos(res))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
    },[])


console.log(ListaProductos);


       return (  
        <Fragment>
                <h2>{props.persona}</h2>
                <div>

                {Loading ? <p>Cargando ....</p> : <ItemList ListaProductos={ListaProductos}/>}

                {/* {ListaProductos.map((productos)=> <p key={productos.id}>{productos.name}</p>)} */}
                
                </div>
        </Fragment>                
        );
}
 
export default ItemListContainer;


// {/* <ItemCount  pedidoinicio = {1} stockdisponible = {15} onAdd={onAdd}/>  */}