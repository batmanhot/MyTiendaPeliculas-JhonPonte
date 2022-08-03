import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';



const msjevacio = (cadena) => {
    return (
        alert(cadena+' proximamente mas información')
    )
}

const Item = ({producto}) => {
    const navegar = useNavigate();
       
    return (  

        

        <div class="card" style={{width: '18rem', margin: '.5rem'}}> 
            <img src={producto.url} class="card-img-top" alt={producto.name}/>
            <div class="card-body">
                <h5 class="card-title">{producto.name}</h5>
                <p class="card-text">{producto.description}</p>
                <p class="card-text">S/. {producto.price}</p>
                <p class="card-text">Stock: {producto.stock}</p>
         
                <button onClick={()=>navegar(`/detalle/${producto.id}`)} type="button" class="btn btn-primary"> Ver mas detalles </button>
            </div>          

        </div>
        
    );
}
export default Item;



