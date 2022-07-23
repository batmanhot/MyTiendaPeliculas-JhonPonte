import React, { Fragment } from 'react';

const ItemListContainer =  ({articulo}) => {

    console.log({articulo})
        return (  
            <Fragment>
                <h1>Comentarios</h1>
                <hr />
                <div className="media"> 
                    <img src={articulo.urlImagen} alt='' className='mr-3'/>
                    <div className="media-body">
                        <h5 className="mt-0">{articulo.nombre}</h5> 
                        {articulo.Descripciom}
                    </div>    
                </div>
            </Fragment>
        );
}
 
export default ItemListContainer;

