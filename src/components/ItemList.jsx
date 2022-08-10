import React, { Fragment, useEffect, useState } from 'react';
import Item from './Item';


const ItemList = ({ListaProductos}) => {
    return (  
    <Fragment>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap' }}>
                        
            {ListaProductos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    </Fragment>
        
    );
}
 
export default ItemList;
