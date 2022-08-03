import React from "react";
import { useNavigate } from "react-router-dom";
import loguito from '../img/reproductor.png';



const Home = () => {

    const IraProductos = useNavigate()

    return ( 
<div>
<div class="container">
		<div class="row mt-6">		

			<div class="col-10 my-5">
				<div class="card border-primary">
      					<div class="card-header">BIENVENIDOS A PELICULAS DIGITALES</div>
                    
					<div class="card-body">                        
                        <div class="container">
                            <div class="row">
                                <div class="col text-center">
                                    <h4 class="card-title center" >LAS MEJORES PELICULAS EN ESPAÑOL LATINO , VEALAS AHORA </h4>      
                                </div>
                            </div>
                        </div>
				
						<p>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</p>
                        <ul>
                            <li>Disfruta de peliculas sin anuncios</li>        
                            <li>Mantén una lista de seguimiento personal</li>
                            <li>Filtra por tus suscripciones a servicios de streaming y encuentra algo que ver</li>
                            <li>Descargue gratis su Pelicula favorita</li>
                            <li>Registra las películas y programas de televisión que has visto</li>
                            <li>Crea listas personalizadas</li>
                            <li>Aporta y mejora nuestra base de datos</li>                    
                            <li>Unete ahora !!</li>                    
                        </ul>                        
                        <div class="container">
                            <div class="row">
                                <div class="col text-center">
                                <button onClick={ () => IraProductos('/productos')} type="button" className="btn btn-primary">Ir a ver todos los Productos</button>                                
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>		
		</div>
	</div>
</div>

     );
}
 
export default Home;


{/* <button onClick={ () => IraProductos('/productos')} className="btn btn-info"> Volver a Productos</button> */}