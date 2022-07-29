import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({producto}) => {

     const onAdd = () => {
         console.log(`Agregaste al Carrito de Compras el producto ${producto.name}`)       
      }

    return ( 
     <div>
        <h2>{producto.name}</h2>
        <img src = {producto.url} alt = {producto.name} />
        <p>{producto.description} </p>
        <p>Stock: {producto.stock} </p>

        <ItemCount pedidoinicio={1} stockdisponible={producto.stock} onAdd={onAdd}/>

    </div> );
}
 
export default ItemDetail;