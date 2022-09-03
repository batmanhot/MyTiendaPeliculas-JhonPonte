import React, { useState } from 'react'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { db } from './dbFirestore'
import { useCart } from "../Context/CartContext"
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { IoBagCheckOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai"

const Checkout = () => {
    const navegar = useNavigate()
    
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')    
    const {cart, cartTotal, emptyCart}= useCart()
    // let faltaInformacion = false


    // const [nombre, setNombre] = useState('')
    // const [email, setEmail] = useState('')
    // const [telefonop, setTelefonop] = useState('')
    
    const datosComprador = (e) => {
        // let faltaInformacion = false
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })      
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
       if(Object.values(comprador).length !== 3 ){
            alert('todos los campos son obligatorios'); 
       }else{
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            comprador,
            items: cart,
            total:cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            emptyCart()
        })
        .catch((error)=> console.log(error))
       }
    }

  return (
   <>    
    {!orderId 
    ?<div>
        <div className="container" style={{width:'50%'}}>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header text-center text-muted"><h2><IoBagCheckOutline size={'2rem'}/>CHECKOUT - FINALIZACION DE COMPRA</h2></div>

                        <img className="card-img-top" src="img/bg.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Finalizacion de Compra</h5>
                            <h6 className="card-subtitle text-muted">La informacion proporcionada nos sirve para identificar la compra, esta no sera compartida con nadie</h6> 
                            <br />                

                            <form onSubmit= {finalizarCompra} >
                             
                                <div className="form-group">
                                    <label for="Nombres" className="text-muted"><h6>Nombres y Apellidos</h6></label>
                                    <input type="text" className="form-control" id="Nombres" required aria-describedby="NombresHelp" placeholder="Nombres y Apellidos Completo" 
                                     name='name' onChange={datosComprador}  />                                               
                                    {/* <small id="NombresHelp" className="form-text text-muted">Nunca compartiremos sus datos con nadie más</small> */}
                                    <div className='valid-feedback'>
                                        todo bien
                                    </div>
                                    <div className='invalid-feedback'>
                                        no ha salido bien
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="Email" className="text-muted"><h6>Correo Electronico</h6></label>
                                    <input type="email" className="form-control" id="Email" required aria-describedby="emailHelp" placeholder="correo@mail.com" name='email' 
                                    onChange={datosComprador}/>

                                    <div className='valid-feedback'>
                                        todo bien
                                    </div>
                                    <div className='invalid-feedback'>
                                        no ha salido bien
                                    </div>
                                </div>           
                                <div className="form-group">
                                    <label for="Telefono" className="text-muted"><h6>Telefono</h6></label>
                                    <input type="number" className="form-control" id="Telefono" required aria-describedby="TelefonoHelp" placeholder="Telefono ó Celular" name='telefono'onChange={datosComprador}/>
                                    
                                    <div className='valid-feedback'>
                                        todo bien
                                    </div>
                                    <div className='invalid-feedback'>
                                        no ha salido bien
                                    </div>
                                </div>
                                <br />

                                <div className="bg-secondary text-white mb-3"> 
                                    <h4 className="card-title text-center p-2">Total a Pagar S/. {cartTotal()}</h4>
                                </div>          
                                <br />
                                <div className="text-center">                                        
                                    <button type="submit" className="btn btn-primary"> <FaShoppingCart size={'2rem'}/> Finalizar Compra</button>
                                </div>
                                                        
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    
     </div>         
        
    :<div>
        {/* <h2>Muchas gracias por su compra!</h2>
        <h3>Su orden es: {orderId}</h3>
        <button onClick={()=>navegar('/productos')}>Volver a la Home</button>         */}

        <div className="container">
            <div className="row my-4  justify-content-center align-items-center">            
                <div className="col-6">
                    <div className="card text-center"> 
                        <div className="card-footer text-center">
                            <h5 className="card-title">PELICULAS DIGITALES - COMPRA REALIZADA</h5>       
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Muchas gracias por su confianza !!</h5>
                        </div>

                        <div className="card-body p-3 mb-2 bg-success bg-gradient text-white">                        
                            <h6 className="card-title">El codigo de su Orden de compra es: {orderId} </h6>
                        </div> 

                        <div className="card-footer text-center">
                            <button onClick={()=>navegar('/')} className="btn btn-primary"><AiFillHome size={'2rem'}/> Volver a la Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>}
   </>
  )
}

export default Checkout
