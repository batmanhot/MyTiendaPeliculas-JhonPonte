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
        return (  
            <Fragment>                
                <hr />
                <div> 
                    <p class="fw-normal">Mi pedido</p>

                    <button onClick={resta} type="button" class="btn btn-danger">-</button>
                     <span class="fw-bold"> Cantidad {contador} </span>                     
                    <button onClick={suma}type="button" class="btn btn-primary">+</button>

                    {/* <button onClick={resta}>-</button><span> Cantidad {contador} </span><button onClick={suma}>+</button>  */}
                    {/* <button onClick={resta}>-</button><input type="text" name="cantidad" value={contador}/><button onClick={suma}>+</button> */}
                    
                </div>
            </Fragment>
        );
}
 
export default ItemCount;






