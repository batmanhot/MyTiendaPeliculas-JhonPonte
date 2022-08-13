import React from 'react';
import { useCart } from '../Context/CartContext';


const  CartItem= ({articulo}) => {
    const {removeItem} = useCart();
    return (  
        // <div>
        //     {/* <img src={articulo.url} alt = {articulo.name} /> */}
        //     <span>Articulo : {articulo.name}</span>
        //     <br />
        //     <span>Cantidad: {articulo.quantity}</span>
        //     <br />
        //     <span>Precio: {articulo.price}</span>
        //     <br />
        //     <button onClick={()=>removeItem(articulo.id)}>X</button>
        // </div>
        // display:'flex', alignitems: 'center', justifycontent:'center'
        // <div class="row" style={{display:'flex', border: '2px solid', height:'150px' padding:'1rem' , verticalalign: 'middle', alignitems: 'center'}}></div>
        <div>           
         <div class="container" >
            <div class="row" style={{border: '6px double', padding:'1rem'}}>
                <div class="col-2" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center' }}>
                     <img src={articulo.url} alt = {articulo.name} width="90%" height="90%" style={{margin:'auto'}}/>                    
                </div>

                <div class="col-4" style={{margin:'auto', display:'flex' , alignitems: 'flex-start', justifycontent:'left'}}>   
                     <h5>{articulo.name.toUpperCase()}</h5>
                </div>    

                <div class="col-1" style={{margin:'auto', display:'flex' , alignitems: 'flex-end', justifycontent:'flex-end'}}>
                    <h5>{articulo.quantity}</h5>
                </div>

                <div class="col-2" style={{margin:'auto', display:'flex' , alignitems: 'flex-end', justifycontent:'flex-end'}}>
                    <h5>S/. {articulo.price}</h5>
                </div>

                <div class="col-2" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>
                    <h5>S/. {articulo.price * articulo.quantity}</h5>
                </div>
                <div class="col-1" style={{margin:'auto', display:'flex' , alignitems: 'center', justifycontent:'center'}}>
                    <button className="btn btn-danger" onClick={()=>removeItem(articulo.id)}>X Eliminar</button>
                </div>
            </div>
        </div>        
        </div>

    );
}
 
export default CartItem;


