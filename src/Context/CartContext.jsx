import { createContext, useState, useContext } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    const [cart, setcart] = useState([])

     const AgregaItemCart = (item) =>{

        const itemInCart = cart.find((prod)=> prod.id === item.id)
        if(itemInCart){
          const actualizaCart = cart.map((prod)=> {
                if(prod.id === item.id){
                    return{...prod, quantity:prod.quantity + item.quantity}                    
                }else{
                    return prod
                }              
            })
            setcart(actualizaCart)
        }else{
            setcart([...cart, item])
        }
     }

     const isIncart =(id)=>{
        return cart.some((prod)=> prod.id === id)
     }
     const emptyCart =() =>{
        setcart([])
     }

     const removeItem = (id) =>{
        setcart(cart.filter((prod) => prod.id !== id)) 
     }

     const cartQuantity = () =>{
        return cart.reduce((acumula, prod) => acumula += prod.quantity, 0)

     }

     const cartTotal = () => {
        return cart.reduce((acumula, prod) => acumula += prod.price * prod.quantity,0)
     }


     console.log(cart)
     
    return(
       <CartContext.Provider value={{cart, AgregaItemCart, isIncart, emptyCart, removeItem, cartQuantity, cartTotal}}>
         {children}
       </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)