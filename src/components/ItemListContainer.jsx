import React, { Fragment, useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { data } from './DatosApi';

// https://www.themoviedb.org/ : Web de Peliculas

// const productos = [
//     {
//       id: '1',
//       name: 'Lucifer',      
//       url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wQh2ytX0f8IfC3b2mKpDGOpGTXS.jpg',
//       price: 75,
//       stock: 3,
//       description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//     },
//      {
//         id: '2',
//         name: 'Peaky Blinders (2013)',
//         url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yjX3ocrYTBUj3v5crEQgm03F4Zu.jpg',
//         price: 31,
//         stock: 5,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '3',
//         name: "Malnazidos",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4z9fsQTypbwzaWa4kLERtJjjM83.jpg",
//         price: 26,
//         stock: 1,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"        
//       },
//       {
//         id: '4',
//         name: "Cabeza de Araña",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5eNrWoqKwpvrH8N4gajZsw0yUee.jpg",
//         price: 67,
//         stock: 6,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '5',
//         name: "Juego de tronos",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
//         price: 11,
//         stock: 3,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '6',
//         name: "Asesino sin Memoria",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zfC8bfoMZhaCxswi41CjesysfhZ.jpg",
//         price: 88,
//         stock: 9,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '7',
//         name: "Maleficio",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gE2yLl3uhdSLla9urAR7HoYL3Yo.jpg",        
//         price: 74,
//         stock: 3,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '8',
//         name: "The Walking Dead",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg",
//         price: 70,
//         stock: 8,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '9',
//         name: "Halo",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lfTm372lHNjQnnUwpdumVfUB0rh.jpg",
//         price: 63,
//         stock: 4,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       },
//       {
//         id: '10',
//         name: "The Good Doctor",
//         url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ubOaaQjDQ4lWtw1dkXhqsQWTsEY.jpg",
//         price: 18,
//         stock: 6,
//         description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, modi cupiditate. Eos culpa maxime molestiae incidunt facilis ex sint dignissimos. Est nihil eius necessitatibus impedit, beatae mollitia unde dolorum quos!"
//       }
// ]


// const data = new Promise((resolve, reject) => {
//   var condicion=true
//   setTimeout(() => {
//       if(condicion){
//           resolve(productos)
//       }else{
//           reject("Algo Salio Mal no cargo la lista de productos")
//       }
//   } ,3000)           
// })


// const onAdd = (contador) => {
//         console.log(`Agregaste ${contador} items al Carrito de Compras`)    
//       }


const ItemListContainer =  (props) => {

const [ListaProductos, setListaProductos] = useState([]);
const [Loading, setLoading] = useState(true);

useEffect (()=> {
        console.log("Soy UseEfecct");
        data
        .then((res)=>setListaProductos(res))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
    },[])


console.log(ListaProductos);


       return (  
        <Fragment>
                <h2>{props.persona}</h2>
                <div>

                {Loading ? <p>Cargando ....</p> : <ItemList ListaProductos={ListaProductos}/>}

                {/* {ListaProductos.map((productos)=> <p key={productos.id}>{productos.name}</p>)} */}
                
                </div>
        </Fragment>                
        );
}
 
export default ItemListContainer;


// {/* <ItemCount  pedidoinicio = {1} stockdisponible = {15} onAdd={onAdd}/>  */}