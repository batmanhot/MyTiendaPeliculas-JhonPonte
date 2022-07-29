import React, { Fragment, useEffect, useState } from 'react';
import ItemCount from './ItemCount';


const msjevacio = (cadena) => {
    return (
        alert(cadena+' proximamente mas información')
    )
}
// const onAdd = (contador) => {
//     console.log(`Agregaste ${contador} items al Carrito de Compras`)    
//   }

const Item = ({producto}) => {
    return (  

        <div class="card" style={{width: '18rem', margin: '.5rem'}}> 
            <img src={producto.url} class="card-img-top" alt={producto.name}/>
            <div class="card-body">
                <h5 class="card-title">{producto.name}</h5>
                <p class="card-text">{producto.description}</p>
                <p class="card-text">S/. {producto.price}</p>
                <p class="card-text">Stock: {producto.stock}</p>
         
                <button onClick={()=>msjevacio(producto.name)} type="button" class="btn btn-primary"> Ver mas detalles </button>                

                {/* <ItemCount  pedidoinicio = {1} stockdisponible = {15} onAdd={onAdd}/> */}
            </div>            
        </div>
        
    );
}
export default Item;