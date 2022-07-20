import React, { Fragment } from 'react';


const ItemListContainer =  (props) => {

    console.log(props)   
        return (  
            <Fragment>
                <h2>{props.persona}</h2>
            </Fragment>
        );
}
 
export default ItemListContainer;

