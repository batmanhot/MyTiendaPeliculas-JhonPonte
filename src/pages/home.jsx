import React from "react";
import Piefooter from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import loguito from '../img/reproductor.png';
// import ControlledCarousel from '../components/Presentacion'

import Carrousel from '../components/Carrousel'
import PresentacionTaquillerosyNuevosIngresos from '../components/PresentacionTaquillerosyNuevosIngresos'
import PresentacionUneteAhora from '../components/PresentacionUneteAhora'


const Home = () => {

    // const IraProductos = useNavigate()

    return ( 
<div>
    <PresentacionTaquillerosyNuevosIngresos/>

    <Carrousel/> 
    <PresentacionUneteAhora/>
    <Piefooter/> 
</div> 

     );
}
 
export default Home;