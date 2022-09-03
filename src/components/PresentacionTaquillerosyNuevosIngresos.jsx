import React from 'react';
import "../css/PresentacionCuadros.css";

const  PresentacionTaquillerosyNuevosIngresos= () => {
    return ( 
    <div>    
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                  <h5 class="card-header text-center bg-secondary text-white">LAS MAS TAQUILLERAS DEL MES</h5>                        
                    <div class="card-body  bg-warning text-white">                            
                        <div class="m-0 row justify-content-between" >
                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                {/* src="https://picsum.photos/400/160/?random=1"  */}
                                <img class="imgCuadrado img-thumbnail img-responsive" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg"  alt="Second slide"></img> 
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>TOP GUN 2 - MAVERICK</div> 
                            </div>

                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-fluid card-img img-thumbnail" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/engWUYSxDogn8csr3wJOq4cOzna.jpg"  alt="Second slide"></img>                            
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>EL AGENTE INVISIBLE</div>                    
                            </div>

                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-fluid card-img img-thumbnail" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t2Bw6Yl4aiflTUXKW3CZ6xtjciy.jpg"  alt="Second slide"></img>                                
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>COLISION</div>                    
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                  <h5 class="card-header text-center bg-secondary text-white">NUEVOS INGRESOS EN EL MES</h5>
                    <div class="card-body  bg-warning text-white">                            
                        <div class="m-0 row justify-content-between" >
                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-thumbnail img-responsive" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wQh2ytX0f8IfC3b2mKpDGOpGTXS.jpg"  alt="Second slide"></img>                                 
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>LUCIFER</div> 
                            </div>

                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-fluid card-img img-thumbnail" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg"  alt="Second slide"></img>                            
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>SAND MAN</div>                    
                            </div>

                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-fluid card-img img-thumbnail" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg"  alt="Second slide"></img>                                
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>THE WALKING DEAD</div>                    
                            </div>
                        </div>
                        {/* <h5 class="card-footer text-center bg-secondary text-white">...</h5> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default PresentacionTaquillerosyNuevosIngresos;