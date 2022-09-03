import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiDetail } from "react-icons/bi"

// Tarjetas

const msjevacio = (cadena) => {
    return (
        alert(cadena+' proximamente mas información')
    )
}

const Item = ({producto}) => {
    const navegar = useNavigate();
       
    return (  
        
        <div className="card" style={{width: '22rem', margin: '.5rem'}}> 
            <img src={producto.url} className="card-img-top" alt={producto.name} height='500rem'/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description.substring(0,220)}</p>               
                <p className="card-text">S/. {producto.price}</p>
                <p className="card-text">Stock: {producto.stock}</p>

                <div className="col text-center">                    
                    <button onClick={()=>navegar(`/detalle/${producto.id}`)} type="button" className="btn btn-primary"> <BiDetail size={'2rem'}/> Ver mas detalles </button>
                </div>                                        
            </div>
        </div>        
    );
}
export default Item;