import React from "react";
import { useNavigate } from "react-router-dom";

const CarritodeCompras = () => {

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
                                    <h4 class="card-title center" >CARRITO DE COMPRAS</h4>      
                                </div>
                            </div>
                        </div>
				
						<p>Aqui se vera el resultado de la compra realizada, mas información detalla pendiente.</p>
                        
                        <div class="container">
                            <div class="row">
                                <div class="col text-center">
                                <button onClick={ () => IraProductos('/')} type="button" className="btn btn-primary">Vamos al Inicio</button>                               
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
 
export default CarritodeCompras;
