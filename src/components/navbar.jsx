import React from 'react';
import loguito from '../img/reproductor.png';
import CartWidget from './CartWidget'
import { FaUser, FaPhotoVideo, FaRegHeart  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(                   
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
                    <Link className="nav-link" to='/'>Home <FaUser/></Link>
                  </li>                          
                  
                  <li class="nav-item">
                    <Link className="nav-link" to='/'>Inicio de Sesion <FaUser/></Link>
                  </li>
                  
                  <li class="nav-item">
                    <Link className="nav-link" to="/productos">Productos<FaPhotoVideo/></Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/categoria/Accion">Accion<FaPhotoVideo/></Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/categoria/Terror">Terror<FaPhotoVideo/></Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/categoria/Ciencia Ficcion">Ciencia Ficcion<FaPhotoVideo/></Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/categoria/Drama">Drama<FaPhotoVideo/></Link>
                  </li>
                  
                  <li class="nav-item">
                    <Link className="nav-link" to="/carritodecompras">Carrito Compras <CartWidget/></Link>
                  </li>
              </ul>                
            </div>
             
                  
            </div>
        </nav> 
    
    )
 }

export default NavBar;

