import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({producto}) => {

    const volver = useNavigate()

    const onAdd = () => {
         console.log(`Agregaste al Carrito de Compras el producto ${producto.name}`)       
      }


    return ( 
     <div>
        <h2>DETALLE DEL PRODUCTO</h2>
        <br />
        <h2>{producto.name}</h2>
        <img src = {producto.url} alt = {producto.name} />
        <p>{producto.description} </p>
        <p>Stock: {producto.stock} </p>
        
        <ItemCount pedidoinicio={1} stockdisponible={producto.stock} onAdd={onAdd}/>

        <button onClick={ () => volver('/productos')} className="btn btn-info"> Volver a Productos</button>
    </div> );
}
 
export default ItemDetail;