import React, { Fragment } from 'react';
import { useState } from 'react';


const ItemCount =  ({ pedidoinicio, stockdisponible }) => {

    const [contador, setcontador] = useState(pedidoinicio);

    const resta = () => {
        if (contador > pedidoinicio ){
            setcontador(contador-1);
        }
    }

    const suma = () => {
        if (contador < stockdisponible) {
            setcontador(contador+1)
        }
    }

    const onAdd = (contador) => {
        console.log(`Agregaste ${contador} items al Carrito de Compras`)    
      }

       return (  
            <Fragment>                
                <hr />
                <div> 
                    <p class="fw-normal">Mi pedido</p>

                    <button onClick={resta} type="button" class="btn btn-danger">-</button>
                     <span class="fw-bold"> Cantidad {contador} </span>                     
                    <button onClick={suma} type="button" class="btn btn-primary">+</button>
                    <br />
                    <br />
                    <button onClick={()=>onAdd(contador)} type="button" class="btn btn-primary"> Agregar al Carrito </button>
                </div>
            </Fragment>
        );
}
 
export default ItemCount;






