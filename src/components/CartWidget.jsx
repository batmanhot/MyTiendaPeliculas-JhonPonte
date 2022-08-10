import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

// class CartWidget extends React.Component {
  const CartWidget =() => {
    // return(<FaShoppingCart/>)
    // <Link className="nav-link" to="/carritodecompras">Carrito Compras <CartWidget/><FaShoppingCart/></Link>    
    const {cartQuantity} = useCart()

     return(
     <Link className="nav-link" to="/carritodecompras"> 
       <FaShoppingCart/> 
       <span> {cartQuantity() || '' }</span> 
     </Link> 
     )
 }

export default CartWidget;
