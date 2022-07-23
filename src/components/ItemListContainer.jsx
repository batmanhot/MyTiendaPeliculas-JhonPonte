import React, { Fragment } from 'react';
import ItemCount from './ItemCount';


const ItemListContainer =  (props) => {

    console.log(props)   
        return (  
            <Fragment>
                <h2>{props.persona}</h2>

                <div>
                <   ItemCount  pedidoinicio = {1} stockdisponible = {15}/>  
                </div>
            </Fragment>
        );
}
 
export default ItemListContainer;