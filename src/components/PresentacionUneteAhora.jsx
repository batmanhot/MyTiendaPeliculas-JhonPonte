import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import "../css/PresentacionCuadros.css";

const PresentacionUneteAhora= () => {

    const IraProductos = useNavigate()    

    return ( 
    <div>    
        <div class="row">         
            {/* /// ------------ PROXIMOS ESTRENOS    */}
            <div class="col-sm-6">
                <div class="card">
                        <h5 class="card-header text-center bg-secondary text-white">PROXIMOS ESTRENOS</h5>                        
                    <div class="card-body bg-warning text-white">                            
                        <div class="m-0 row justify-content-between" >
                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-thumbnail img-responsive"  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gE2yLl3uhdSLla9urAR7HoYL3Yo.jpg"  alt="Second slide"></img>                                 
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>MALEFICIO</div> 
                            </div>

                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                <img class="imgCuadrado img-fluid card-img img-thumbnail" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ubOaaQjDQ4lWtw1dkXhqsQWTsEY.jpg"  alt="Second slide"></img>                            
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>THE GOOD DOCTOR</div>                    
                            </div>

                            <div class="col-auto bg-warning text-dark p-2 text-center">
                                {/* src="https://picsum.photos/400/160/?random=3" */}
                                <img class="imgCuadrado img-fluid card-img img-thumbnail" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6hlI9Ea1O4IeJ2cj7OiNinqg8Qd.jpg"  alt="Second slide"></img>                                                                
                                <div class="col-sm-13 border" style={{fontWeight:'bold'}}>UNCHARTED</div>                    
                            </div>                                                    
                        </div>                  
                    </div>
                </div>                             

            </div>

            <br />

            {/* ///----------- separacion ---------------------*/}

            <div class="col-sm-6">
                <div class="card">      					 
                    <h5 class="card-header text-center bg-secondary text-white">UNETE AHORA, UNETE YA !!</h5>
                    
					<div class="card-body bg-warning text-black">                        
                        <div class="container">
                            <div class="row">
                                <div class="col text-center">
                                    <h4 class="card-title center" >LAS MEJORES PELICULAS EN ESPAÑOL LATINO , VEALAS AHORA </h4>      
                                </div>
                            </div>
                        </div>
				
						<h6 class="card-title text-center">Millones de películas, programas de televisión, series y personajes por descubrir. Exploralo ya</h6>
                        <ul>
                            <li>Disfruta de peliculas sin anuncios</li>        
                            <li>Mantén una lista de seguimiento personal</li>
                            <li>Filtra por tus suscripciones a servicios de streaming y encuentra algo que ver</li>
                            <li>Descargue gratis su Pelicula favorita</li>
                            <li>Series, películas, programas de televisión</li>
                            <li>Crea listas personalizadas</li>
                            <li>Comenta y mejora nuestra base de datos</li>                    
                            <li>Visite nuestra zona de chismes detras de camaras y sus anecdotas </li>
                            <li>Visite nuestras redes sociales</li>      
                            <li>Descargue su App en Android y Apple</li>      
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

            {/* ///---FIN DEL ROW */}
         </div>

         {/* ////------------NOTICIAS */}

        <div class="container">
             <div className='col-sm-12'>
                <div class="card-group">                            
                {/* style={{marginRight: '1rem', width:'70%'}} */}
                    <div class="card bg-warning text-black" style={{marginRight: '1rem'}}>
                        <div class="card-header bg-secondary text-white">NOTICIAS</div>   
                        <img src="https://es.web.img2.acsta.net/c_640_360/newsv7/22/08/29/15/24/4572229.jpg" class="card-img-top" alt="..."/>

                        <div class="card-body">
                            <h5 class="card-title"> Amazon Prime Video te lo pone fácil con 'El Señor de los Anillos: Los anillos de poder': un mes de prueba gratuito, nueva interfaz y estreno gratis en algunas salas de cine</h5>
                            <p class="card-text">A apenas unos días del debut de El Señor de los Anillos: Los Anillos de Poder en Prime Video, es imposible que no hayas escuchado hablar de la serie del año. Puede que nunca hayas leído la obra más famosa de Tolkien o que la trilogía cinematográfica de Peter Jackson no te cambiase la vida, pero estamos ante el estreno seriéfilo más importante del año -con permiso de La Casa del Dragón- y la expectación ante la mayor superproducción televisiva de todos los tiempos. Las primeras reacciones a los primeros episodios de la serie que reconstruye la Segunda Edad del universo desarrollado por Tolkien hablan por sí mismas. Tendremos que esperar para ver cómo se desarrolla la historia, pero ...</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <a href="https://www.sensacine.com/noticias/series/noticia-18594743/" class="btn btn-primary">Ir al Enlace</a>                                    
                        </div>
                    </div> 

                    <div class="card bg-warning text-black" style={{marginRight: '1rem'}} >
                        <div class="card-header bg-secondary text-white">ANUNCIO</div>   
                        <img src="https://purovinotinto.com/wp-content/uploads/2022/08/La-Casa-del-Dragon-I.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">El capítulo 2 de 'La Casa del Dragón' revela uno de sus secretos mejor guardados, pero la fiesta solo acaba de empezar</h5>
                            <p class="card-text">El 'spin-off' de Juego de Tronos, La Casa del Dragón, acaba de estrenar su segundo episodio en HBO Max: 'El Príncipe Canalla' (1x02), un capítulo que demuestra que la nueva serie ambientada en el universo de George R.R. Martin planea giros y vueltas de tuerca constantes y sorprender a los espectadores casi en cada episodio.</p>
                            <p class="card-text"><small class="text-muted">Last updated 1 day ago</small></p>
                            <a href="https://www.sensacine.com/noticias/series/noticia-18594734/" class="btn btn-primary">Ir al Enlace</a> 
                        </div>
                    </div> 

                    <div class="card bg-warning text-black" style={{marginRight: '1rem'}}>
                        <div class="card-header bg-secondary text-white">NOTICIAS</div>   
                        <img src="https://th.bing.com/th?id=OIF.TgSAQKd94aN5lZt%2f%2bjuIXQ&pid=ImgDet&rs=1" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">La primera serie de Natalie Portman, amenazada por narcotraficantes: una peligrosa extorsión obliga a paralizar la producción</h5>
                        <p class="card-text">Hace apenas un par de meses que la veíamos volviendo como Jane Foster en Thor: Love and Thunder y, aunque su futuro en el Universo Cinematográfico de Marvel es incierto, Natalie Portman tiene varios interesantes proyectos en el horizonte. El primero de ellos una serie de televisión, producida por la plataforma de 'streaming' Apple TV+, que supone el primer papel protagonista de la actriz ganadora del Oscar en la pequeña pantalla.</p>
                        <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>                    
                        <a href="https://www.sensacine.com/noticias/series/noticia-18594741/" class="btn btn-primary">Ir al Enlace</a>                                    
                        </div>
                    </div>
                    <div class="card bg-warning text-black" style={{marginRight: '1rem'}}>
                        <div class="card-header bg-secondary text-white">NOTICIAS</div>   
                        <img src="https://i.ytimg.com/vi/Y0V0S5GbIFc/maxresdefault.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Top Gun': ¿Maverick muere al comienzo de la película? El director responde a la teoría de los fans sobre el personaje de Tom Cruise</h5>
                        <p class="card-text"> La secuela está consiguiendo crear hordas de fans que están comentando intensamente todos los detalles de la misma, y hasta está desarrollando teorías alrededor de ella. Una de las más extendidas es una muy oscura en torno al personaje de Maverick, y hasta el director ha tenido que comentarla dada la repercusión que esta obteniendo. </p>
                        <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>                    
                        <a href="https://www.sensacine.com/noticias/cine/noticia-18594766/" class="btn btn-primary">Ir al Enlace</a>                                    
                        </div>
                    </div>
                    <div class="card bg-warning text-black" style={{marginRight: '1rem'}}>
                        <div class="card-header bg-secondary text-white">PUBLICIDAD</div>   
                        <img src="https://es.web.img3.acsta.net/r_654_368/newsv7/22/08/31/14/14/2431289.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">En Amazon tienes esta barra de sonido Sony a precio mínimo histórico: un chollazo que viene con Dolby Atmos</h5>
                        <p class="card-text">Durante los últimos años, las Smart TVs han ido apostando por un mejor diseño frente a un buen apartado de audio, por lo que una barra de sonido es un dispositivo esencial si estamos buscando la mejor calidad. Si es tu caso, y quieres algo bueno, bonito y barato, Amazon tiene el mejor chollo en la barra de sonido Sony HT-G700, con un buen descuento que lo deja a precio mínimo histórico</p>
                        <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>                    
                        <a href="https://www.sensacine.com/noticias/cine/noticia-18594774/" class="btn btn-primary">Ir al Enlace</a>
                        </div>
                    </div>                                        
                </div> 
            </div>
        </div>
    </div>         
</div>
        
     );
}
 
export default PresentacionUneteAhora;
