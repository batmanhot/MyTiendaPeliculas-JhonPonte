import React from "react";
import { useNavigate } from "react-router-dom";

const CarritodeCompras = () => {

    const IraProductos = useNavigate()

    return ( 
<div>
<div className="container">
		<div className="row mt-6">		

			<div className="col-10 my-5">
				<div className="card border-primary">
      					<div className="card-header">BIENVENIDOS A PELICULAS DIGITALES</div>
                    
					<div className="card-body">                        
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <h4 className="card-title center" >CARRITO DE COMPRAS</h4>      
                                </div>
                            </div>
                        </div>
				
						<p>Aqui se vera el resultado de la compra realizada, mas información detalla pendiente.</p>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
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
