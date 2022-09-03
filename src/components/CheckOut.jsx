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
        <div class="container" style={{width:'50%'}}>

            <div class="row mt-5">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header text-center text-muted"><h2><IoBagCheckOutline size={'2rem'}/>CHECKOUT - FINALIZACION DE COMPRA</h2></div>

                        <img class="card-img-top" src="img/bg.jpg" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Finalizacion de Compra</h5>
                            <h6 class="card-subtitle text-muted">La informacion proporcionada nos sirve para identificar la compra, esta no sera compartida con nadie</h6> 
                            <br />                

                            <form onSubmit= {finalizarCompra} >
                             
                                <div class="form-group">
                                    <label for="Nombres" class="text-muted"><h6>Nombres y Apellidos</h6></label>
                                    <input type="text" class="form-control" id="Nombres" required aria-describedby="NombresHelp" placeholder="Nombres y Apellidos Completo" 
                                     name='name' onChange={datosComprador}  />                                               
                                    {/* <small id="NombresHelp" class="form-text text-muted">Nunca compartiremos sus datos con nadie más</small> */}
                                    <div class='valid-feedback'>
                                        todo bien
                                    </div>
                                    <div class='invalid-feedback'>
                                        no ha salido bien
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="Email" class="text-muted"><h6>Correo Electronico</h6></label>
                                    <input type="email" class="form-control" id="Email" required aria-describedby="emailHelp" placeholder="correo@mail.com" name='email' 
                                    onChange={datosComprador}/>

                                    <div class='valid-feedback'>
                                        todo bien
                                    </div>
                                    <div class='invalid-feedback'>
                                        no ha salido bien
                                    </div>
                                </div>           
                                <div class="form-group">
                                    <label for="Telefono" class="text-muted"><h6>Telefono</h6></label>
                                    <input type="number" class="form-control" id="Telefono" required aria-describedby="TelefonoHelp" placeholder="Telefono ó Celular" name='telefono'onChange={datosComprador}/>
                                    
                                    <div class='valid-feedback'>
                                        todo bien
                                    </div>
                                    <div class='invalid-feedback'>
                                        no ha salido bien
                                    </div>
                                </div>
                                <br />

                                <div class="bg-secondary text-white mb-3"> 
                                    <h4 class="card-title text-center p-2">Total a Pagar S/. {cartTotal()}</h4>
                                </div>          
                                <br />
                                <div class="text-center">                                        
                                    <button type="submit" class="btn btn-primary"> <FaShoppingCart size={'2rem'}/> Finalizar Compra</button>
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
                            <button onClick={()=>navegar('/')} class="btn btn-primary"><AiFillHome size={'2rem'}/> Volver a la Home</button>
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
