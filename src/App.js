import React, {Component}   from 'react';
import { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CarritodeCompras from './components/Cart';
import {CartProvider} from './Context/CartContext';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';

import { db } from './components/dbFirestore'
import {collection, addDoc} from 'firebase/firestore'
import Checkout from './components/CheckOut'

function App() {    

  //UNA SOLA VEZ SE HACE DESPUES SE BORRA O SE COMENTA
  //Agrega items del array productos de DatosAPI

  //  useEffect(()=>{
  //     const productsCollection = collection(db, "items-ecommerce")
  //     productos.map((item)=> addDoc(productsCollection, item))
  //     console.log(productos)
  //  },[])

  
    return(  
    //  <div className="App">
    // </div> 

   <CartProvider> 
    <BrowserRouter>        
        <NavBar/>                        
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/productos' element={<ItemListContainer persona="LAS MEJORES PELICULAS EN ESPAÑOL LATINO, VEALAS AHORA" />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer persona="CATEGORIA"/>}/>
          <Route path='/carritodecompras' element={<CarritodeCompras/>}/> 
          <Route path='/CheckOut' element={<Checkout/>}/>         
        </Routes>   
        <br/>
    </BrowserRouter>
   </CartProvider> 

  );
}

export default App;


