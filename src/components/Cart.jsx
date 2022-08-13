import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"
import CartItem from "./CartItem";

const  Cart = () => {
    const navegar = useNavigate()
    const {cart,emptyCart, cartTotal} = useCart()
    return (
        <div>
            {!cart.length ?
            <>
            <div class="card text-center" style={{width: '30rem', margin: '1rem', margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', padding:'1rem', marginTop:'6rem' }}> 
                <img src='https://www.bancodebogota.com/wps/themes/html/banco-de-bogota/landings/pospago/images/temporada.jpg' class="card-img-top" alt="hola" />

                <div class="card-body">
                    <h5 class="card-title">Tu Carrito de Compras esta vacio</h5>
                    <hr />
                    <p class="card-text">Te invitamos a recorrer nuestros articulos disponibles y aproveche nuestra ofertas de temporada, no lo piense mas y compre ahora antes que se acaben !!</p>                    
                    <div class="col text-center">                                       
                        <button class="btn btn-primary" onClick={()=> navegar('/productos')}>Vea nuestros Catalogos de Productos</button> 
                    </div>                                        
                </div>                     
            </div>

            </>
            :
            <>            
            <div class="container" style={{padding:'1rem', margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>  
                <h3 style={{padding:'1rem', margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>TU CARRITO DE COMPRAS</h3>
            </div>
            <div class="container" style={{border: '6px double', padding:'1rem'}}>  
                <div class="row"  >
                    
                    <div class="col-2"  style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', width:"150px" }}>
                        <h5>IMAGEN</h5>
                    </div>

                    <div class="col-4" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>                        
                        <h5>NOMBRE DE PRODUCTO</h5>
                    </div>
                    <div class="col-1" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>
                        <h5>CANTIDAD</h5>
                    </div>
                    <div class="col-2" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>
                        <h5>PRECIO</h5>
                    </div>
                    <div class="col-2" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center' }}>
                        <h5>SUB TOTAL</h5>
                    </div>
                    <div class="col-1" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center' }}>
                        <h5>ELIMINAR ITEM</h5>
                    </div>
                </div>
            </div>

            {cart.map((articulo)=><CartItem key={articulo.id}  articulo={articulo}/>)}

            <div class="container" style={{border: '6px double', padding:'1rem'}}>
                <div class="row"  >
                    <div class="col-11" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', textAlign:'center'}} >                                          
                        <h5 style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', textAlign:'center'}} > TOTAL A PAGAR S/. {cartTotal()} </h5>
                    </div>                    
                </div>
            </div>
            <div class="container" style={{border: '6px double', padding:'1rem'}}>
                <div class="row"  >
                    <div class="col-11" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', textAlign:'center'}}>                  
                        <button style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', width: '12rem', textAlign:'center'}} className="btn btn-success">Terminar Compra de productos</button>
                        <button style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center', width: '12rem', textAlign:'center'}} className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito de Compras</button>
                    </div>                    
                </div>
            </div>

            </>
            }
        </div>
      );
}
 
export default Cart;