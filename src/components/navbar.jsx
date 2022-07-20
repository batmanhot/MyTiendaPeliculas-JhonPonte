import React from 'react';
import loguito from '../img/reproductor.png';
import CartWidget from './CartWidget'
import { FaUser, FaPhotoVideo, FaRegHeart  } from 'react-icons/fa';

const NavBar = () => {
    return(      
         
      //    <img src={loguito} class="img-fluid" alt="logo" width="50" height="50" />               

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	          
            <div class="container-fluid">            
            <img src={loguito} class="img-fluid" alt="logo" width="50" height="50" />  
      
            <a class="navbar-brand">PELICULAS DIGITALES</a>
            
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
             </button>			
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        
              <li class="nav-item">
                <a class="nav-link" href="#">Inicio de Sesion <FaUser/></a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">Mis Peliculas <FaPhotoVideo/></a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">Lista de Deseos <FaRegHeart/></a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">Carrito Compras <CartWidget/></a>
              </li>
              
              </ul>
              
              <form class="d-flex center-block w-auto ms-lg-3 my-3 my-lg-0 col-sm-6 offset-sm-3">  
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/> 
                <button class="btn btn-primary" type="submit">Buscar</button>
              </form>
            </div>
            </div>
        </nav> 
    )
 }

export default NavBar;

{/* <img src={CardWidget} width="30" height="30" class="d-inline-block left" alt=""></img> */}

