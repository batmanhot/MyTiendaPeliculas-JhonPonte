import React from 'react';
import loguito from '../img/reproductor.png';
import CartWidget from './CartWidget'
import { FaUser, FaPhotoVideo } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai"
import { Link } from 'react-router-dom';
import Categorias from './Categorias'

const NavBar = () => {

    return(                                 
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">	          
            <div className="container-fluid">            
              <img src={loguito} className="img-fluid" alt="logo" width="60rem" />           
              <h2 className="navbar-brand">PELICULAS DIGITALES</h2>
              

                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                 </button>			
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">                                                                     
                 

                 {/* ///// ORIENTACION DEL MENU \\\\\\\\
                 mx-auto : Alinea Menu al centro
                 ms-auto : Alinea Menu al Derecha
                 me-auto : Alinea Menu al Izquierda */}
                 {/* d-flex flex-row mt-3 mt-lg-0 */}

                 <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item p-2">                  
                      <Categorias/>
                   </li>       
                  </ul>

                  <ul class="navbar-nav me-auto mb-0 mb-lg-0 m-0">

                      <li class="nav-item p-2">
                        <Link className="nav-link" to='/'><AiFillHome size={'2rem'}/> HOME </Link>
                      </li>                          
                      
                      <li class="nav-item p-2" >
                        <Link className="nav-link" to='/'><FaUser size={'2rem'}/> INICIO DE SESION  </Link>
                      </li>
                      
                      <li class="nav-item p-2">
                        <Link className="nav-link" to="/productos"><FaPhotoVideo size={'2rem'}/> PRODUCTOS </Link>
                      </li>

                          {/* <li class="nav-item">
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
                            <Link className="nav-link" to="/categoria/Suspenso">Suspenso<FaPhotoVideo/></Link>
                          </li> */}
                                            
                        {/* <li class="nav-item p-2" style={{border:'solid', color:'white'}}>
                              <Categorias/>
                       </li> */}                       
                  </ul>         

                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li class="nav-item p-2" style={{border:'solid', color:'white'}}>
                        {/* <Link className="nav-link" to="/carritodecompras">Carrito Compras <CartWidget/></Link> */}
                          <CartWidget/>      
                      </li>       
                  </ul>

                


                       {/* <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">                
                            <li className="nav-item">
                              <Link className="nav-link" to='/'><AiFillHome size={'8%'}/> HOME </Link>                  
                            </li>                          
                            
                            <li className="nav-item">
                              <Link className="nav-link" to='/'><FaUser size={'5%'}/> INICIO DE SESION</Link>
                            </li>
                            
                            <li className="nav-item">
                              <Link className="nav-link" to="/productos"><FaPhotoVideo size={'5%'}/> PRODUCTOS </Link>
                            </li>
                            <li class="nav-item">
                              <CartWidget size={'6%'}/>
                            </li>                  
                            <li className="nav-item">
                              <Link className="nav-link" to="/carritodecompras"><CartWidget size={'5%'}/>CARRITO </Link>                     
                            </li>
                            <li class="nav-item">
                              <Categorias/>
                            </li>
                        </ul>                */}
                </div>
              {/* </div> */}
            </div>
        </nav> 
    
    )
 }

export default NavBar;