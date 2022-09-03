import React from 'react';
import { AiFillDelete } from "react-icons/ai"
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
                <div class="card text-center bg-secondary text-white" >
                    <div class="row" >                        
                        <div class="col-2" style={{}}>
                            <img src={articulo.url} alt = {articulo.name} width="50%" style={{margin:'0.5rem auto'}}/>                    
                        </div>
                        <div class="col-4" style={{margin:'auto'}}>   
                            <h5 style={{margin:'0 auto'}}>{articulo.name.toUpperCase()}</h5>
                        </div>    

                        <div class="col-1" style={{margin:'auto'}}>
                            <h5 style={{}}>{articulo.quantity}</h5>
                        </div>

                        <div class="col-2" style={{margin:'auto'}}>
                            <h5>S/. {articulo.price}</h5>
                        </div>

                        <div class="col-2" style={{margin:'auto'}}>
                            <h5>S/. {articulo.price * articulo.quantity}</h5>
                        </div>
                        <div class="col-1" style={{margin:'auto'}}>
                            <button style={{margin:'0 auto'}} className="btn btn-danger" onClick={()=>removeItem(articulo.id)}><AiFillDelete/></button>
                        </div>
                    </div>                        
                </div>
            </div>        
        </div>

    );
}
 
export default CartItem;


