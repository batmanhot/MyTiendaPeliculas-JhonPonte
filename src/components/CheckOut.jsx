import React, { useState } from 'react'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { db } from './dbFirestore'
import { useCart } from "../Context/CartContext"
// import CartItem from "./CartItem";
import { useNavigate, Navigate } from 'react-router-dom'


const Checkout = () => {
    const navegar = useNavigate()
    
    const[comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const {cart, cartTotal, emptyCart}= useCart()

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
       if(Object.values(comprador).length !== 3 ){
            alert('todos los campos son obligatorios')
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
        <div class="container">
            <div class="row mt-3">
                <div class="col-10">
                    <div class="card">
                        <div class="card-body text-center">
                            <h2>CHECKOUT - FINALIZACION DE COMPRA</h2>
                        </div>
                    </div>
                </div>			
            </div>
            <div class="row mt-9">
                <div class="col-10">
                    <div class="card">
                        <img class="card-img-top" src="img/bg.jpg" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Finalizacion de Compra</h5>
                            <h6 class="card-subtitle text-muted mb-2">La informacion proporcionada nos sirve para identificar la compra, esta no sera compartida con nadie</h6> 
                            <br />
                            <form onSubmit={finalizarCompra}>
                                <div class="form-group">
                                    <label for="Nombres">Nombres y Apellidos</label>
                                    <input type="text" class="form-control" id="Nombres" aria-describedby="NombresHelp" placeholder="Nombres y Apellidos Completo" name='name'onChange={datosComprador} />
                                    {/* <small id="NombresHelp" class="form-text text-muted">Nunca compartiremos sus datos con nadie más</small> */}
                                </div>

                                <div class="form-group">
                                    <label for="Email">Correo Electronico</label>
                                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="correo@mail.com" name='email' onChange={datosComprador}/>
                                    {/* <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu correo electrónico con nadie más</small> */}
                                </div>           
                                <div class="form-group">
                                    <label for="Telefono">Telefono</label>
                                    <input type="number" class="form-control" id="Telefono" aria-describedby="TelefonoHelp" placeholder="Telefono ó Celular" name='telefone'onChange={datosComprador}/>
                                    {/* <small id="TelefonoHelp" class="form-text text-muted">Nunca compartiremos tu telefono con nadie más.</small> */}
                                </div>
                                <br />

                                <div class="form-group">                                    
                                    <h5 class="card-title text-center">Total a Pagar S/. {cartTotal()}</h5>
                                </div>                                
                                <div class="card-footer text-center">
                                    <button type="submit" class="btn btn-primary">Finalizar Compra</button>
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

        <div class="container">
            <div class="row my-4  justify-content-center align-items-center">            
                <div class="col-6">
                    <div class="card text-center"> 
                        <div class="card-footer text-center">
                            <h5 class="card-title">PELICULAS DIGITALES - COMPRA REALIZADA</h5>       
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Muchas gracias por su confianza !!</h5>
                        </div>

                        <div class="card-body p-3 mb-2 bg-success bg-gradient text-white">                        
                            <h6 class="card-title">El codigo de su Orden de compra es: {orderId} </h6>
                        </div> 

                        <div class="card-footer text-center">
                            <button onClick={()=>navegar('/productos')} class="btn btn-primary">Volver a la Home</button>
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
