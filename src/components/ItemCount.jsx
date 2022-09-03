import React, { Fragment } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md"
import { FaShoppingCart } from 'react-icons/fa'

// const ItemCount =  ({ stockdisponible, cuenta, setcuenta, onAdd }) => {
    const ItemCount =  ({ stockdisponible, onAdd }) => {

    const [contador, setcontador] = useState(1);
    const navegar = useNavigate()

    const resta = () => {
        if (contador > 0 ){
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
                    <button onClick={resta} type="button" className="btn btn-danger">-</button>
                     <span className="fw-bold"> Cantidad {contador} </span>                     
                    <button onClick={suma} type="button" className="btn btn-success">+</button>
                    <br />                    
                    <br />                  
                    <div className="m-0 justify-content-center">
                        <button onClick = {()=>onAdd(contador)} type="button" className="btn btn-primary p-2" style={{margin:'0px 10px 0px -6px'}}><FaShoppingCart size={'2rem'}/> Carrito de Compras </button>                        
                        <button onClick={()=>{navegar('/productos')}} className='btn btn-success p-2' style={{margin:'0px 10px 0px 6px'}}> <MdProductionQuantityLimits size={'2rem'}/> Retornar a Productos</button>
                    </div>    
                </div>
            </Fragment>
        );
}
 
export default ItemCount;






