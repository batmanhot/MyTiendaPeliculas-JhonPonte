import React, {Component}   from 'react';
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 
    const articulo = {
        nombre: "Licuadora Phillips",
        urlImagen: "https://via.placeholder.com/64",
        Descripciom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "
    }


    return(  
  
   <div className="App">
        <NavBar/>
        {/* <ItemListContainer persona="Las mejores peliculas en español latino, " />  */}
        <ItemDetailContainer/>
        <br/>
    </div>
  );
}

export default App;


