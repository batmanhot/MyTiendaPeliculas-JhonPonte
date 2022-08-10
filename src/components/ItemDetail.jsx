import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import ItemCount from "./ItemCount";

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
            <div className="container">
                <div className="row mt-6">
                    <div className="col-8 center my-5">
                        <div className="card border-primary">
                                <div className="card-header">BIENVENIDOS A PELICULAS DIGITALES</div>                            
                            <div className="card-body">                                                    
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col text-center">
                                            <h3 className="card-title center" >{producto.name.toUpperCase()}</h3>
                                        </div>                                    
                                    </div>                                    
                                    <img style={{width:'60%', height:'60%'}} src={producto.url} className="card-img-top" alt={producto.name} /> 
                                    <br /><br /><br />                                    
                                    <p className="card-text">{producto.description}</p>
                                    <hr />
                                    <h6 className="card-title center" >PRECIO: S/. {producto.price}  STOCK: {producto.stock}  CATEGORIA: {producto.category.toUpperCase()}</h6>
                                </div> 
                                
                                <div class="container">
                                    <div class="row">
                                        <div class="col text-center">                                                                       
                                        {compra ? <div>
                                                        <hr />
                                                        <button onClick={()=>{navegar('/productos')}} className='btn btn-info' >Seguir Comprando </button>
                                                        <br />                                                        
                                                        <br />
                                                        <button onClick={()=>{navegar('/carritodecompras')}} className='btn btn-success'>Ir al Carrito Compras</button>
                                                </div>                                                
                                                :<ItemCount stockdisponible={producto.stock} onAdd={onAdd}/>}                                               
                                        </div>
                                    </div>
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