import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const [cuenta, setcuenta] = useState(0)
    const [compra, setcompra] = useState(false)
    const navegar = useNavigate()

    const onAdd = () => {
        setcompra(true)
         console.log(`Agregaste al Carrito de Compras el producto ${producto.name}`) 
      }

    return ( 
     <div>
        {/* <div className="card" style="width: 18rem;">
            <h2>DETALLE DEL PRODUCTO</h2>
            <br/>
            <img className="card-img-top" src={producto.url} alt={producto.url}/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> */}


            <div className="container">
                <div className="row mt-6">
                    <div className="col-8 center my-5">
                        <div className="card border-primary">
                                <div className="card-header">BIENVENIDOS A PELICULAS DIGITALES</div>                            
                            <div className="card-body">                                                    
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col text-center">
                                            <h3 className="card-title center" >{producto.name.toUpperCase()}</h3>
                                        </div>                                    
                                    </div>                                    
                                    <img style={{width:'60%', height:'60%'}} src={producto.url} className="card-img-top" alt={producto.name} /> 
                                    <br /><br /><br />                                    
                                    <p className="card-text">{producto.description}</p>
                                    <hr />
                                    <h6 className="card-title center" >PRECIO: S/. {producto.price}  STOCK: {producto.stock}  CATEGORIA: {producto.category.toUpperCase()}</h6>
                                </div> 
                                
                                <div class="container">
                                    <div class="row">
                                        <div class="col text-center">                                                                       
                                        {compra ? <div>
                                                        <hr />
                                                        <button onClick={()=>{navegar('/productos')}} className='btn btn-info' >Seguir Comprando </button>
                                                        <br />                                                        
                                                        <br />
                                                        <button onClick={()=>{navegar('/carritodecompras')}} className='btn btn-success'>Ir al Carrito Compras</button>
                                                </div>
                                                :<ItemCount stockdisponible={producto.stock} cuenta={cuenta} setcuenta={setcuenta} onAdd={onAdd}/>}        
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
 
export default ItemDetail;



{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


  {/* <h2>DETALLE DEL PRODUCTO</h2>
        <br/>
        <h2>{producto.name}</h2>
        <img src = {producto.url} alt = {producto.name} />
        <p>{producto.description} </p>
        <p>Stock: {producto.stock} </p>         */}



// {/* {compra ? <button onClick={()=>{Navigate('/CarritodeCompras')}} className="btn btn-success">Ir al Carrito</button>
//         :<ItemCount stockdisponible={producto.stock} cuenta={cuenta} setcuenta={setcuenta} onAdd={onAdd}/>} 

//         <ItemCount pedidoinicio={1} stockdisponible={producto.stock} onAdd={onAdd}/>  */}

// {/* <button onClick={ () => volver('/productos')} className="btn btn-info"> Volver a Productos</button> */}


// {/* {compra ? <div>
//                         <button onClick={()=>{navegar('/')}} className='btn btn-info' >Seguir Comprando </button>
//                         <button onClick={()=>{navegar('/carritodecompras')}} className='btn btn-success'>Ir al Carrito</button>
//                   </div>
//                   :<ItemCount stockdisponible={producto.stock} cuenta={cuenta} setcuenta={setcuenta} onAdd={onAdd}/>}         */}