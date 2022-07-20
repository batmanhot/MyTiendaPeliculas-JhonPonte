import React, {Component}   from 'react';
import './App.css';
import Titulo from './components/title';
import Menu  from './components/navbar';
import Title from './components/title';
import NavBar from './components/navbar';
import Acordion from './components/acordion';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return(   
   <div className="App">

        <NavBar/>    
        <ItemListContainer persona="Pronto aqui, peliculas en español latino" />
        <ItemListContainer persona="Estreno, Accion, Ficcion, Marvel, etc " />
       {/* <header className="App-header">            
        </header> */}
    </div>
  );
}

export default App;


