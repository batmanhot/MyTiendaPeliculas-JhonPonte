import React, {Component}   from 'react';
import './App.css';
// import Titulo from './components/title';
// import Menu  from './components/navbar';
// import Title from './components/title';
// import Acordion from './components/acordion';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
 
    const articulo = {
        nombre: "Licuadora Phillips",
        urlImagen: "https://via.placeholder.com/64",
        Descripciom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "
    }


    return(  
  
   <div className="App">
        <NavBar/>
        <ItemListContainer persona="Las mejores peliculas en español latino, " />        
        <br/>
    </div>
  );
}

export default App;


