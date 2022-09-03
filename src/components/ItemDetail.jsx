import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import ItemCount from "./ItemCount";
import { MdProductionQuantityLimits } from "react-icons/md"
import { FaShoppingCart } from 'react-icons/fa'

const ItemDetail = ({producto}) => {

    // const [cuenta, setcuenta] = useState(1)
    const [compra, setcompra] = useState(false)
    const navegar = useNavigate()

    const {id, name, url, description, stock, price} = producto

    const {AgregaItemCart}  = useCart()
    
    const onAdd = (contador) => {
        let ItemSeleccionado = {
            id, name, url, description, stock, price, quantity: contador
          }
        setcompra(true) 

        AgregaItemCart(ItemSeleccionado)
      }

    return ( 
     <div>

                <div className="m-3 row justify-content-center ">
                        <div className="card border-primary shadow-sm" style={{width:'35rem'}}>                                
                            <div className="card-body">                                                    
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col text-center">
                                            <h3 className="card-title center" >{producto.name.toUpperCase()}</h3>
                                        </div>                                    
                                    </div>                                    
                                    <img style={{width:'50%'}} src={producto.url} className="card-img-top" alt={producto.name} /> 
                                    <hr />
                                    <p className="card-text">{producto.description}</p>
                                    <hr />
                                    <p className="card-title center" >PRECIO: S/. {producto.price}  STOCK: {producto.stock}  CATEGORIA: {producto.category.toUpperCase()}</p>
                                </div> 
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-center">                                                                       
                                        {compra ? <div>
                                                    <hr />
                                                        {/*   */}
                                                        <button onClick={()=>{navegar('/productos')}} style={{margin:'0px 10px 0px -6px'}} className='btn btn-info p-2'><MdProductionQuantityLimits size={'2rem'}/> Seguir Comprando </button>
                                                        {/*  */}
                                                        <button onClick={()=>{navegar('/carritodecompras')}} style={{margin:'0px 10px 0px 6px'}} className='btn btn-success p-2'><FaShoppingCart size={'2rem'}/> Ir Carrito Compras</button>
                                                </div>                                                
                                                :<ItemCount stockdisponible={producto.stock} onAdd={onAdd}/>}                                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div> 
    </div> 
    );
}
 
export default ItemDetail;