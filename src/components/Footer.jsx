import React from 'react';
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsGoogle, BsYoutube } from 'react-icons/bs';



const PieFooter= () => {
    return (
        
    <footer className="page-footer p-3 mb-2 bg-dark text-white">
    
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-12 mt-md-0 mt-1">
                    <h5 className="text-uppercase">PELICULAS DIGITALES</h5>
                    <p>Visite nuestras redes sociales y comparta nuestras publicaciones </p>
                </div>         

                <div className="m-0 row align-items-center justify-content-center">
                    <div className="col-auto bg-dander p-3">
                        <BsFacebook size={'3rem'}/>     
                    </div>
                    <div className="col-auto bg-dander p-3">
                        <BsInstagram size={'3rem'}/>
                    </div>                        
                    <div className="col-auto bg-dander p-3">
                        <BsGoogle size={'3rem'}/>
                    </div>                        
                    <div className="col-auto bg-dander p-3">
                        <BsYoutube size={'3rem'}/>
                    </div>  
                </div>
            </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2022 Copyright - PELICULAS DIGITALES</div>
        </footer>
    )
}
 
export default PieFooter;


