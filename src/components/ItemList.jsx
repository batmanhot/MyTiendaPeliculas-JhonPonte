import React, { Fragment, useEffect, useState } from 'react';
import Item from './Item';


const ItemList = ({ListaProductos}) => {
    return (  
    <Fragment>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap' }}>
                        
            {ListaProductos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
            {/* {ListaProductos.map((producto)=> <p key={producto.id}>  {producto.name}</p>)} */}          
        </div>
    </Fragment>
        
    );
}
 
export default ItemList;
