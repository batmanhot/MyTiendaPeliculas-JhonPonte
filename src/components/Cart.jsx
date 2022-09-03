import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"
import CartItem from "./CartItem";
import { AiFillDelete } from "react-icons/ai"
import {GiFinishLine, GiEmptyWoodBucketHandle} from "react-icons/gi";
import { BiDetail } from "react-icons/bi"

const  Cart = () => {
    const navegar = useNavigate()
    const {cart,emptyCart, cartTotal} = useCart()
    return (
        <div>
            {!cart.length ?
            <>
            {/* // --- Cuando el Carrito esta vacio */}
                <div className="card text-center" style={{width: '30rem', margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', padding:'1rem', marginTop:'6rem' }}> 
                    <img src='https://www.bancodebogota.com/wps/themes/html/banco-de-bogota/landings/pospago/images/temporada.jpg' className="card-img-top" alt="hola" />

                    <div className="card-body">
                        <h5 className="card-title">Tu Carrito de Compras esta vacio</h5>
                        <hr />
                        <p className="card-text">Te invitamos a recorrer nuestros articulos disponibles y aproveche nuestra ofertas de temporada, no lo piense mas y compre ahora antes que se acaben !!</p>                    
                        <div className="col text-center">                                       
                            <button className="btn btn-primary" onClick={()=> navegar('/productos')}> <BiDetail size={'2rem'}/> Vea nuestros Catalogos de Productos</button> 
                        </div>                                        
                    </div>                     
                </div>

            </>
            :            
            <>            
            {/* // --- Cuando el Carrito esta lleno */}            
            <div className="container">
                <div className="card text-center">
                    <div className="card-header text-muted">
                        <h6 style={{margin:'auto'}}>TU CARRITO DE COMPRAS</h6>
                    </div>
                    <div className="row card-header text-muted">        
                        <div className="col-2" style={{display:'flex' }}>
                            <h6 style={{margin:'auto'}}>IMAGEN</h6>
                        </div>
                        <div className="col-4" style={{display:'flex'}}>                        
                            <h6 style={{margin:'auto'}}>NOMBRE DE PRODUCTO</h6>
                        </div>
                        <div className="col-1" style={{display:'flex'}}>
                            <h6 style={{margin:'auto'}}>CANTIDAD</h6>
                        </div>
                        <div className="col-2" style={{display:'flex'}}>
                            <h6 style={{margin:'auto'}}>PRECIO</h6>
                        </div>
                        <div className="col-2" style={{display:'flex'}}>
                            <h6 style={{margin:'auto'}}>SUB TOTAL</h6>
                        </div>
                        <div className="col-1" style={{display:'flex'}}>
                            <h6 style={{margin:'auto'}}>ELIMINAR ITEM <AiFillDelete/> </h6>
                        </div>
                    </div> 
                </div>
            </div>

            {cart.map((articulo)=><CartItem key={articulo.id}  articulo={articulo}/>)}

            <div className="container">
                <div className="card text-center">
                    <div className="card-header text-muted">
                        <h6 style={{margin:'auto'}} > TOTAL A PAGAR S/. {cartTotal()} </h6>
                    </div>
                    <div className="row">        
                        {/* <div className="col-12" style={{display:'flex'}} >
                            <h5 style={{margin:'auto'}} > TOTAL A PAGAR S/. {cartTotal()} </h5>
                        </div> */}                        
                        <div className="card-footer mt-1 mb-2">
                            <div className="col-12" style={{display:'flex'}}>
                                <button style={{margin: 'auto'}} className="btn btn-success p-3" onClick={()=>navegar('/checkout')}><GiFinishLine size={'2rem'}/> Terminar Compra de productos </button>
                                <button style={{margin: 'auto'}} className="btn btn-danger p-3" onClick={emptyCart}>  <GiEmptyWoodBucketHandle size={'2rem'}/> Vaciar Carrito de Compras </button>
                            </div>                                                                        
                        </div>
                    </div>
                </div>    
            </div> 
            </>
            }
        </div>
      );
}
 
export default Cart;