import React, { Fragment } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

// const ItemCount =  ({ pedidoinicio, stockdisponible, onAdd }) => {
const ItemCount =  ({ stockdisponible, cuenta, setcuenta, onAdd }) => {

    const [contador, setcontador] = useState(1);
    const navegar = useNavigate()

    const resta = () => {
        if (contador > cuenta ){
            setcontador(contador-1);
        }
    }

    const suma = () => {
        if (contador < stockdisponible) {
            setcontador(contador+1)
        }
    }

       return (  
            <Fragment>                
                <hr />
                <div>              
                    <button onClick={resta} type="button" class="btn btn-danger">-</button>
                     <span class="fw-bold"> Cantidad {contador} </span>                     
                    <button onClick={suma} type="button" class="btn btn-success">+</button>
                    <br />                    
                    <br />                      
                    <button onClick = {onAdd} type="button" class="btn btn-primary"> Agregar al Carrito de Compras </button>
                    <br />                      
                    <br />                      
                    <button onClick={()=>{navegar('/productos')}} className='btn btn-success'>Retornar a Catalogo Productos</button>
                </div>
            </Fragment>
        );
}
 
export default ItemCount;






