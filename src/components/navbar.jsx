import React from 'react';
import loguito from '../img/reproductor.png';

// class NavBar extends React.Component{
const NavBar = () => {
    return(

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
         
         <img src={loguito} class="img-fluid" alt="logo" width="50" height="50" /> 
         
         <a class="navbar-brand" href="#">PELICULAS DIGITALES REACT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">            
            <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">

                <form class="d-flex center-block w-auto ms-lg-3 my-3 my-lg-0 col-sm-6 offset-sm-3">      
                <input class="form-control me-2" type="search" placeholder="Buscar Pelicula" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Inicio de Sesion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Mis Peliculas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Lista de Deseos</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Carrito de Compras</a>
              </li>        
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default NavBar;