import React, {Component}   from 'react';
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CarritodeCompras from './components/CarritodeCompras';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';

function App() {    
    return(  
    //  <div className="App">
    // </div> 
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/productos' element={<ItemListContainer persona="Las mejores peliculas en español latino, vealas ahora" />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer persona="Categoria ..."/>}/> 
          <Route path='/carritodecompras' element={<CarritodeCompras/>}/> 
        </Routes>  
 
        {/* <ItemListContainer persona="Las mejores peliculas en español latino, " /> 
        <ItemDetailContainer/> */}
        <br/>
    </BrowserRouter>

  );
}

export default App;


